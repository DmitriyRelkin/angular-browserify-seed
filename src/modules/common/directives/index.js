'use strict';

module.exports =
    angular.module('expressly.common.directives', [])
        .directive('scrollInfinite', require('./scroll-infinite.directive'));
