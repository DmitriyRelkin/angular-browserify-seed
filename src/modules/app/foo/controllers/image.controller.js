'use strict';

/**
* @ngdoc controller
* @name imageCtrl
* @description
* This the imageCtrl controller.
*
**/
module.exports =

function imageCtrl ($scope, $routeParams, loadImage) {
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
  * An array that stores the image data that has been selected.
  **/
  vm.image = [];
  /**
  * @ngdoc function
  * @name vm.imageLoader
  * @description
  * This function send request, and receive data with image, that has been selected.
  **/
  vm.imageLoader = function() {
    var id = $routeParams.imageId;
    vm.promise = loadImage.current(id).then(function (response) {
      vm.image = response.data;
      return vm.image;
    }).catch(function () {
      console.error('Error load images!!!');
    });
  };

};
