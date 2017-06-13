'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('loadImage', require('./loadImage.service'));
