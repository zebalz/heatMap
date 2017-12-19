/* global angular */
(function() {
    'use-strict'
    angular.module('heatMapp.states', ['ui.router', 'ui.bootstrap'])

    angular.module('heatMapp.states').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site', {
                url: '/index',
                views: {
                    mapp: {
                        component: 'addressComponent'
                    }
                }
            })
    }
})();
