"use strict";

import gulp from "gulp";
import runSequence from "run-sequence";

gulp.task("build", callback => {
    console.log("************************************ BUILD STARTED!");
    return runSequence.use(gulp)(
        "clean",
        [
            "html"
        ],
        [
            'scripts:electron',
            "scripts",
            "styles",
            "copy"
        ],
        callback
    );
});
