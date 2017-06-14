'use strict';

module.exports =
function imageService($http) {
  return {
    getAll: getAll,
    getOne: getOne
  };

  /**
  * @ngdoc function
  * @name all
  * @description
  * This function downloads all images.
  */
  function getAll() {
    return $http.get("http://jsonplaceholder.typicode.com/photos/");
  }

  /**
  * @ngdoc function
  * @name current.
  * @param {[type]} id current image.
  * @description
  * This function loads image by id.
  */
  function getOne(id) {
    return $http.get("http://jsonplaceholder.typicode.com/photos/" + id);
  }
};
