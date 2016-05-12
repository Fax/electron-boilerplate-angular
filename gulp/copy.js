"use strict";

import gulp from "gulp";
import merge from "merge-stream";

const sources = ["package.json", "src/index.html"];



gulp.task("copy",['copy:fonts'], () => {
    return merge(
        gulp.src(sources)
        ,gulp.src(["src/vendor"])
        )
        .pipe(gulp.dest(".tmp"));
});



gulp.task('copy:fonts', () => {
    return gulp
    .src('src/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('.tmp/fonts'))
});

gulp.task("copy:watch", () => {
    return gulp.watch(sources, ["copy"],()=>{electronServer.reload();});
});
