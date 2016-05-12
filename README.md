# Electron AngularJs Boilerplate

This small project contains everything is needed to bootstrap the development
of a small application on top of Electron(atom shell) AngularJs Babel
Gulp. 

Karma is still missing but it will be added to test the code.

## Build

```terminal
npm install
gulp
```

## Main Process (Electron)

`/src/main.js`
This is setting up the process, launching the first browser window and loading
the index.html file into it.
It is managing the behaviour of the app when opened and closed. 

## Renderer Process

`/src/index.html`
`/src/scripts/main.js` -> app.min.js
This is the web application. Works like a webapp.


## Issues and Info

- Babel-register sometimes is installed and breaks the compilation of 
`gulpfile.babel.js`.
- The build process is divided in many small files in the `/gulp` folder.
- The folder with the artifact is `.tmp`
- The template for the first directive is in the directive itself
- The live reload doesn't really work every time. Sometimes the full application
is reloaded instead of just injecting the new css.
- I have avoided links to external libraries, but it could be done.
- I haven't tried yet to access the filesystem, but it should work
