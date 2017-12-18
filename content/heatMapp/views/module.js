/* global angular */
(function() {
    'use-strict'

    angular
        .module('heatMapp.views', ['ui.router', 'heatMapp.services'])
    angular
        .module('heatMapp.views').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.index', {
                url: '/heatmapp',
                abstract: true
            })
            .state('site.index.home', {
                url: '/mapp',
                views: {
                    'root': {
                        component: 'mappComponent'
                    }
                }
            })
    }
})()
