/* global angular */
(function() {
    'use-strict'

    angular
        .module('client.views', ['ui.router', 'client.services'])
    angular
        .module('client.views').config(RouteConfig)

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
