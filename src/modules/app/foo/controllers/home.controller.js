'use strict';

/**
* @ngdoc controller
* @name homeCtrl
* @description
* This the homeCtrl controller.
*
**/
module.exports =
function homeCtrl ($scope, $http, $rootScope) {
  /**
	 * @ngdoc property
	 * @name vm
	 *
	 * @description
	 * vm is an instance of the current controller.
	 */
  var vm = this;
  /**
  /**
  * @ngdoc property
  * @name vm.images
  * @description
  * An array that keeps images data.
  **/
  vm.images = [];
  /**
  * @ngdoc function
  * @name vm.imageLoader
  * @description
  * This function send request, and receive data with images
  **/
  vm.imageLoader = function() {
    var promise = $http.get("http://jsonplaceholder.typicode.com/photos/");
    promise.then(function (response) {
      vm.images = response.data;
    },function () {
      console.error('Error load images!!!');
    });
  };
};
