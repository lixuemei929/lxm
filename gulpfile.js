var gulp=require('gulp'),
    uglify=require('gulp-uglify'),
    sass=require('gulp-sass'),
    server=require('gulp-webserver');

//解析sass
gulp.task('sass',function(){
    gulp.src('./css/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

//启动服务
gulp.task('server',function(){
    gulp.src('./')
        .pipe(server({
            //自动打开页面
            open:true,
            //是否刷新
            livereload:true,
            //列表
            directoryListing:true
        }))
});


