"use strict";

import gulp from "gulp";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";
import notify from "gulp-notify";
import ngAnnotate from 'gulp-ng-annotate';
import minify from 'gulp-minify';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import rollup from 'gulp-rollup';




const sources = [
    "src/scripts/**/*.js"
];

// just copy everything
const vendorSources = [
    "src/vendor/**/*.*"
];




gulp.task("vendor", () => {
    return gulp.src(vendorSources)
        .pipe(gulp.dest(".tmp/vendor"));
});



gulp.task("scripts", ["vendor"],() => {
    return gulp.src(sources,{read:false})
        .pipe(rollup())
        .on("error", notify.onError({title: "rollupping"}))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on("error", notify.onError({title: "scripts"}))
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(".tmp/scripts"));
});

gulp.task('scripts:electron', ()=>{
   return gulp
        .src(['src/main.js','src/nodeapp/**/*.js'])
        .pipe(babel())
        .on("error", notify.onError({title: "scripts"}))
        .pipe(gulp.dest(".tmp"));
});

gulp.task('scripts:watch', () => {
    return gulp.watch(sources, ['scripts','electron:reload']);
});


gulp.task("scripts:electron:watch", () => {
    return gulp.watch(['src/main.js','src/nodeapp/**/*.js'], ['scripts:electron','electron:restart']);
});

