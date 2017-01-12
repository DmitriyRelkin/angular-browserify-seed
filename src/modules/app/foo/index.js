'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('homeCtrl', require('./controllers/home.controller'))
        .controller('imageCtrl', require('./controllers/image.controller'));
