"use strict";

import gulp from "gulp";
import inject from "gulp-inject";
import rename from "gulp-rename";

var markups = [
    'src/**/*.html'
];



gulp.task("html", () => {
    return gulp.src(markups)
        .pipe(
            inject(
                gulp.src([
                    "src/styles/**/*.scss",
                "!src/styles/vendor.scss"
                ], {read: false})
                .pipe(
                    rename({extname: ".css"})
                ),
                {relative: true}
            )
        )
        .pipe(gulp.dest(".tmp"));
});

gulp.task("html:watch",() => {
    return gulp.watch(markups,['html','electron:reload']);
});