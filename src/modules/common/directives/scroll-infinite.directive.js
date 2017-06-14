'use strict';

module.exports = 
function scrollInfinite($timeout) {
  return {
    scope: {
      limit: "=",
      promise: "=",
      itemSelector: '@'
    },
    link: link
  };
  function link(scope, element) {
    var step = scope.limit;
    var body = document.querySelector('body');

    if (!scope.promise) {
      return;
    }

    /**
    * @ngdoc function
    * @name imagesLoader
    * @description
    * This function change limit.
    */
    var imagesLoader = function (event) {
      var allImages = document.querySelectorAll('.images > a > img');
      var lastImage = allImages[allImages.length - 1];
      if (window.scrollY + document.body.offsetHeight >= lastImage.offsetTop) {
        scope.limit += step;
        scope.$apply();
      }
    };

    /**
    * @ngdoc method
    * @description
    * This function launch EventListener after response from the server.
    */
    scope.promise.then(function(res) {
      if (Array.isArray(res)) {
        $timeout(function() {
          var images = document.querySelectorAll('.' + scope.itemSelector);
          document.addEventListener("scroll", imagesLoader);
          scope.$on('$destroy', function() {
            document.removeEventListener("scroll", imagesLoader);
          });
        }, 100);
      }
    });
  }
};
