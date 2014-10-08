function getNews() {
    return $.get("/app/api/news", {}, "json");
}

function signup(name, message) {
    return $.post("/app/api/signup", {
        name: name,
        message: message
    }, "json");
}

function info() {
    return $.get('/app/api/info', {}, 'json');
}

function signupActivity(newsId, name, message) {
    return $.post("/app/api/signupActivity", {
        id: newsId,
        name: name,
        message: message
    }, "json");
}

function feedback(message) {
    return $.post('/app/api/feedback', {
        message: message
    }, "json");
}

var $wheelButton;

function HomeController(page) {
    this.page = page;
    this.$page = $(page);
    this.$news = this.$page.find('.news');


    this.news = [];
    this.tpl = _.template(multiline(function() {
        /*@preserve
        <li class='article' data-id='<%= id %>'>
            <div class="title">
                <span class="title-inner"><%= title %></span>
            </div>
            <div class="detail">
                <span class="date"><%= date %></span>
                <% if (tags) { %>
                    <% _.each(tags, function(tag) { %>
                        <span class="tag"><%= tag %></span>
                    <% }); %>
                <% } %>
            </div>
            <div class="cover">
                <img src='<%- cover %>'>
            </div>
            <div class="desc">
                <%= desc %>
            </div>
         </li>
         */
        console.log
    }));
}

HomeController.prototype.onReady = function() {

    getNews().then(function(data) {
        if (data.ret_code !== 0) {
            return;
        }

        this.news = data.news;
        this.news.forEach(function(item) {
            var $item = $(this.tpl(item)).appendTo(this.$news);
            if (item.headline) {
                $item.addClass('headline');
            }
        }.bind(this));
    }.bind(this));


    var self = this;
    this.$news.on('click', 'li', function() {
        var $this = $(this);
        var id = $this.data('id');
        var detail;
        for (var i = 0; i < self.news.length; i++) {
            var item = self.news[i];
            if (item.id == id) {
                detail = item;
                break;
            }
        }

        if (!detail) {
            return;
        }

        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSpeed: 'fast',
            angle: "NE"
        });
        App.load('news-detail', detail);
    });
}

App.controller('news', HomeController);

function NewsDetailController(page, detail) {

    this.detail = detail;
    this.page = page;
    this.$page = $(page);
    this.$detail = this.$page.find('.article');

    this.$form = this.$page.find('form');
    this.form = this.$form[0];
    this.$button = this.$form.find('.app-button');

    this.$form.submit(function(e) {
        e.preventDefault();
        this.$button.addClass('loading');
        signupActivity(this.detail.id, this.form.name.value, this.form.desc.value).then(function(data) {
            if (data.ret_code !== 0) {
                if (data.ret_code === 1001) {
                    return App.load('login');
                }
                return swal({
                    title: '网络异常',
                    type: 'error',
                    confirmButtonText: '确认'
                });
            }

            swal({
                title: '发送成功',
                type: 'success',
                confirmButtonText: '确认'
            });
        }, function() {
            swal({
                title: '网络异常',
                type: 'error',
                confirmButtonText: '确认'
            });
        });
    }.bind(this));

    this.tpl = _.template(multiline(function() {
        /*@preserve
            <div class="title">
                <span class="title-inner"><%= title %></span>
            </div>
            <div class="detail">
                <span class="date"><%= date %></span>
                <% if (tags) { %>
                    <% _.each(tags, function(tag) { %>
                        <span class="tag"><%= tag %></span>
                    <% }); %>
                <% } %>
            </div>
            <div class="cover">
                <img src='<%- cover %>'>
            </div>
            <div class="desc">
                <%= desc %>
            </div>
         */
        console.log
    }));
}

NewsDetailController.onReady = function() {
    this.detail.desc = this.detail.content;
    $(this.tpl(this.detail)).appendTo(this.$detail);

    if (this.detail.headline) {
        this.$detail.addClass("headline");
    }

    this.$page.find('.app-title').html(this.detail.title);
};


App.controller('news-detail', NewsDetailController);

App.controller('feedback', function(page) {
    var $form = $(page).find('form');
    var form = $form[0];

    $form.submit(function(e) {
        e.preventDefault();
        feedback(form.feedback.value).then(function(data) {
            if (data.ret_code !== 0) {
                return swal({
                    title: '网络异常',
                    type: 'error',
                    confirmButtonText: '确认'
                });
            }

            swal({
                title: '发送成功',
                type: 'success',
                confirmButtonText: '确认'
            });
        }, function() {
            swal({
                title: '网络异常',
                type: 'error',
                confirmButtonText: '确认'
            });
        });
    })
});

App.controller('resume', function(page) {
    var $form = $(page).find('form');
    var form = $form[0];

    $form.submit(function(e) {
        e.preventDefault();
        signup(form.name.value, form.desc.value).then(function(data) {
            if (data.ret_code !== 0) {
                if (data.ret_code === 1001) {
                    return App.load('login');
                }

                return swal({
                    title: '网络异常',
                    type: 'error',
                    confirmButtonText: '确认'
                });
            }

            swal({
                title: '发送成功',
                type: 'success',
                confirmButtonText: '确认'
            });
        }, function() {
            swal({
                title: '网络异常',
                type: 'error',
                confirmButtonText: '确认'
            });
        });
    });
});

App.controller('login', function(page) {
    var $page = $(page);
    var $head = $page.find('.head');
    var $logout = $page.find('.logout');

    info().then(function(data) {
        if (data.ret_code === 1001) {
            return $page.find('.baidu').show();
        }

        $page.find('.header').remove();
        $('<img class="avatar" src="' + data.avatar + '">').appendTo($head);
        $('<br><span>' + data.username + '</span>').appendTo($head);

        $logout.show();
    });

    var loginBaiduButton = $page.find('.baidu button');
    loginBaiduButton.click(function() {
        window.location = '/app/auth';
    });

    var logoutButton = $logout.find('button');
    logoutButton.click(function() {
        window.location = '/app/logout'
    });
});

$(function() {
    try {
        App.restore({
            maxAge: 5 * 60 * 1000
        });
    } catch (err) {
        App.load('news');
    }

    $wheelButton = $(".wheel-button");
    var $menuItems = $('ul.wheel');
    $wheelButton.wheelmenu({
        trigger: "click",
        animation: "fly",
        animationSpeed: "fast",
        angle: "NE",
    });

    $('.wheel .aboutme a').on('tap', function(e) {
        e.preventDefault();
        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSpeed: 'fast',
            angle: "NE"
        });
        App.load('aboutme');
    });

    $('.wheel .feedback a').on('tap', function(e) {
        e.preventDefault();
        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSpeed: 'fast',
            angle: "NE"
        });

        App.load('feedback');
    });

    $('.wheel .resume a').on('tap', function(e) {
        e.preventDefault();
        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSpeed: 'fast',
            angle: "NE"
        });

        App.load('resume');
    });

    $('.wheel .personality a').on('tap', function(e) {
        e.preventDefault();
        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSeed: 'fast',
            angle: "NE"
        });

        App.load('login');
    });
});