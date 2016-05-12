"use strict";

import gulp from "gulp";
import electronConnect from 'electron-connect';


gulp.task('watch:scripts',[
    'html:watch',
    'scripts:watch',
    'scripts:electron:watch'
    ,'electron:start'
    ]);

gulp.task('watch:styles',[
    'copy:watch',
    //'eslint:watch',
    'styles:watch',
    'electron:start']);

gulp.task('watch', [
    "watch:scripts",
    "watch:styles",
    'electron:start'
]);



gulp.task("serve",['electron:start']);

gulp.task('default',['serve','watch']);