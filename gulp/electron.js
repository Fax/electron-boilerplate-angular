"use strict";

import gulp from "gulp";
import electronConnect from 'electron-connect';

var electronServer = electronConnect.server.create({
        path:'.tmp',
        useGlobalElectron: true
        //,verbose: true
    });

gulp.task('electron:start',['build'],()=>{
    console.log("************************************ Starting The Server!");
  electronServer.start();
  console.log("************************************** the server has been launched!");
});

gulp.task('electron:restart',()=>{
    if(!!electronServer) electronServer.restart();
})

gulp.task('electron:reload',['scripts','html','copy'],()=>{
    if(!!electronServer) electronServer.reload();
})