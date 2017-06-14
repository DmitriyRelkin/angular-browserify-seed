'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('imageService', require('./imageService.service'));
