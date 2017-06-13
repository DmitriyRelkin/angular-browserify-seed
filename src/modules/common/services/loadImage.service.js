'use strict';

module.exports = /*@ngInject*/
    function loadImage($http) {
      var id;
      return {
          all: all,
          current: current
      };
      /**
      * @ngdoc function
      * @name all
      * @description
      * This function to download all images.
      **/
      function all() {
        return $http.get("http://jsonplaceholder.typicode.com/photos/");
      }
      /**
      * @ngdoc function
      * @name current.
      * @param {[type]} id current image.
      * @description
      * This function to load the current image by its id.
      **/
      function current(id) {
        return $http.get("http://jsonplaceholder.typicode.com/photos/" + id);
      }
    };
