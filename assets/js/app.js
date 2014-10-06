function getNews() {
    return $.get("/app/api/news", {}, "json");
}

function signup(name, desc) {
    return $.post("/app/api/signup", {
        name: name,
        desc: desc
    }, "json");
}

function signupActivity(newsId, name, desc) {
    return $.post("/app/api/signupActivity", {
        id: newsId,
        name: name,
        desc: desc
    }, "json");
}

function feedback(message) {
    return $.post('/app/api/feedback', {
        message: message
    }, "json");
}

function HomeController(page) {
    this.page = page;
    this.$page = $(page);
    this.$news = this.$page.find('.news');

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
        App.load('news-detail', detail || {});
    });

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
    }));
}

HomeController.prototype.onReady = function() {
    $('.wheel-button').removeClass("weak");

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
}

App.controller('news', HomeController);

function NewsDetailController(page, detail) {
    $('.wheel-button').addClass("weak");

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
    }));
}

NewsDetailController.onReady = function() {
    this.detail.desc = this.detail.content;
    $(this.tpl(this.detail)).appendTo(this.$detail);

    if (this.detail.headline) {
        this.$detail.addClass("headline");
    }
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

var AppRouter = Backbone.Router.extend({
    routes: {
        'aboutme': 'aboutme',
        'resume': 'resume',
        'feedback': 'feedback',
        'news': 'news'
    },

    aboutme: function() {

    },

    resume: function() {

    },

    news: function() {
        App.load('news');
    },

    feedback: function() {
        App.load('news', function() {
            App.load('feedback');
        });
    }
});

$(function() {
    var router = new AppRouter();
    if (!Backbone.history.start({
        hashChange: true
    })) {
        Backbone.history.navigate('news', {
            replace: true,
            trigger: true
        });
    }

    $(".wheel-button").wheelmenu({
        trigger: "click",
        animation: "fly",
        animationSpeed: "fast",
        angle: "NE",
    });

    $('.wheel .aboutme a').on('tap', function(e) {
        e.preventDefault();
        App.load('aboutme');
    });

    $('.wheel .feedback a').on('tap', function(e) {
        e.preventDefault();
        App.load('feedback');
    });

    $('.wheel .resume a').on('tap', function(e) {
        e.preventDefault();
        App.load('resume');
    });
});