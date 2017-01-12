'use strict';

/**
* @ngdoc controller
* @name imageCtrl
* @description
* This the imageCtrl controller.
*
**/
module.exports =

function imageCtrl ($scope, $routeParams, $http) {

  var vm = this;

  vm.image = [];

  vm.imageLoader = function() {
    var id = $routeParams.imageId;
    var promise = $http.get("http://jsonplaceholder.typicode.com/photos/" + id);
    promise.then(function (response) {
      vm.image = response.data;
    },function () {
      console.error('Error load image!!!');
    });
  };
};
