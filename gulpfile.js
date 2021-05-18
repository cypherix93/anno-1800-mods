const gulp = require('gulp')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')

function compile() {
    return gulp.src('./src/*/index.ejs')
        .pipe(ejs())
        .pipe(rename('[Gameplay] All Production Buildings Unlocked in Old World/data/config/export/main/asset/assets.xml'))
        .pipe(gulp.dest('./dist'))
}

exports.default = compile