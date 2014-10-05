function getNews() {
    return $.get("/app/api/news", {}, "json");
}

function signup() {
    return $.post("/app/api/signup", {}, "json");
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
    this.$button = this.$form.find('.app-button');

    this.$form.submit(function(e) {
        e.preventDefault();
        this.$button.addClass('loading');
        signup.then(function() {}).always(function() {
            this.$button.removeClass('loading');
        }.bind(this));
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

$(function() {
    App.load('news');

    $(".wheel-button").wheelmenu({
        trigger: "click",
        animation: "fly",
        animationSpeed: "fast",
        angle: "NE",
    });
});
