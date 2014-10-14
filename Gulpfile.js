var gulp = require('gulp');
var sass = require('gulp-sass');
var base64 = require('gulp-base64');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var match = require('gulp-match');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var tinypng = require('gulp-tinypng');

var develop = process.env.NODE_ENV === 'development';

gulp.task('sass', function() {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(base64({
            baseDir: 'assets/scss',
            maxImageSize: 48 * 1024 // 48k 
        }))
        .pipe(gulp.dest("assets/css"));
});

gulp.task("watch-sass", function() {
    gulp.watch(['assets/scss/*.scss', 'assets/images/*'], ['sass']);
});

gulp.task('scripts', function() {
    return gulp.src([
            'assets/components/jquery/dist/jquery.js',
            'assets/components/jquery.tap/jquery.tap.js',
            'assets/components/sweetalert/lib/sweet-alert.js',
            'assets/components/underscore/underscore.js',
            'assets/components/backbone/backbone.js',
            'assets/components/velocity/velocity.js',
            'assets/components/multiline/browser.js',
            'assets/components/jquery.wheelmenu/jquery.wheelmenu.js',
            'assets/components/appjs/dist/app.js',
            'assets/js/app.js'
        ]).pipe(concat('app.bundle.js'))
        //.pipe(gulpif(!develop, uglify({
        //    preserveComments: 'some'
        //})))
        .pipe(gulp.dest('assets/js/'))

});

gulp.task('watch-scrpts', function() {
    gulp.watch('assets/js/app.js', ['scripts'])
});

gulp.task('images', function() {
    return gulp.src("assets/res/*")
        .pipe(changed('assets/images'))
        .pipe(gulpif(/.*png/, tinypng('9kl3nT2f8qC-AaApBVXDeQt-37ArLMNs')), imagemin())
        .pipe(gulp.dest('assets/images/'));
});

gulp.task('watch-images', function() {
    gulp.watch('assets/res/*', ['images']);
});

gulp.task('watch', ['watch-scrpts', 'watch-sass', 'watch-images']);
