"use strict";

import gulp from "gulp";
import sass from "gulp-sass";
import path from "path";
import sourcemaps from "gulp-sourcemaps";
import notify from "gulp-notify";
//import livereload from 'gulp-livereload';

const sources = ["src/styles/main.scss","src/styles/vendor.scss"];

gulp.task("styles", () => {
    return gulp.src(sources)
        .pipe(sass())
        .pipe(sourcemaps.init())
        .on("error", notify.onError({title: "styles"}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(".tmp/styles"))
    //    .pipe(livereload());
    ;
});

gulp.task("styles:watch", () => {
    //livereload.listen();
    return gulp.watch(sources, ["styles"/*,'electron:reload'*/]);
});