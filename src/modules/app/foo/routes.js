'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl: 'app/foo/templates/pages/home.html',
          controller: 'homeCtrl',
          controllerAs: 'vm'
        })
        .when('/image/:imageId', {
            templateUrl: 'app/foo/templates/pages/image.html',
            controller: 'imageCtrl',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
    };
