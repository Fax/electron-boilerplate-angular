'use strict';

//defines the variable MyFirstDirective and loads the function from the file.
import MyFirstDirective from './MyFirstDirective/my-first-directive';



angular
  .module('myFirstApp', [])
  .directive('myFirstDirective', MyFirstDirective)

  ;