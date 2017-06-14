'use strict';

/**
* @ngdoc controller
* @name homeCtrl
* @description
* This the homeCtrl controller.
*/
module.exports =
function homeCtrl (imageService) {
  /**
	* @ngdoc property
	* @name vm
	* @description
	* vm is an instance of the current controller.
	*/
  var vm = this;

  /**
  * @ngdoc property
  * @name vm.imagesLimit
  * @description
  * Initial number of displayed images.
  */
  vm.imagesLimit = 30;

  /**
  * @ngdoc property
  * @name vm.images
  * @description
  * An array that keeps images data.
  */
  vm.images = [];

  /**
  * @ngdoc function
  * @name vm.imageLoader
  * @description
  * This function send request, and receive data with images
  */
  vm.imageLoader = function() {
    vm.promise = imageService.getAll().then(function (response) {
      vm.images = response.data;
      return vm.images;
    }).catch(function (err) {
      console.error('Error load images!!!', err);
    });
  };
};
