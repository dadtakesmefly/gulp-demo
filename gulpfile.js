var gulp = require("gulp");
var seajsCombo = require("gulp-seajs-combo");
var useref=require("gulp-useref")

gulp.task('seajscombo', function() {
    gulp.src('./src/js/01calc.js')
        .pipe(seajsCombo())
        .pipe(gulp.dest('./dist/js'));
})

gulp.task('move', function() {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
})
gulp.task("useref",function(){
    gulp.src("./src/index.html")
    .pipe(useref())
    .pipe(gulp.dest('./dist'))
    })

gulp.task('combo', ['seajscombo', 'move']);

