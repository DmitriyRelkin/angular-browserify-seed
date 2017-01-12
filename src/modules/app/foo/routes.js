'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/foo/templates/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/image/:imageId', {
                templateUrl: 'app/foo/templates/image.html',
                controller: 'imageCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
