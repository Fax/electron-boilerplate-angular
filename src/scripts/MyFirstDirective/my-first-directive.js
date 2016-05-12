'use strict';

export /* @ngInject */ default function () {
  return {
    template: `
      <div>
              <h1>Hello {{myVariable}}!</h1>
<h2>Test it yourself!</h2>

      </div>

      
      <label>Type your name!
        <input type="text" ng-model="myVariable"></input>
      </label>
    `, //using the backtick here.
    scope: {
      
    },
    link: function (scope, a, b, ctrl) {
      scope.myVariable = 'World';
    },
    controller: ['$scope', function ($scope) {
      // the array: every string is understood as dependency
      // parameters: dependencies will be injected as arguments in the 
      // order they appear in the array
      
    }]
  }
}