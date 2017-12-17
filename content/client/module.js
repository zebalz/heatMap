/* global angular */
(function () {
    angular.module('client', [
        'ui.router', 'client.services'
    ])

    angular.module('client')
        .config(RouteConfig)
        .run(StateErrorHandler)

    StateErrorHandler.$inject = ['$rootScope', '$log']

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', info => $log.log(info))
    }

    RouteConfig.$inject = [
        '$stateProvider',
        '$urlRouteProvider',
        '$locationProvider'
    ]

    function RouteConfig($stateProvider, $urlRouteProvider, $locationProvider) {
        $urlRouteProvider.otherwise('/index/whack')
        $locationProvider.html5Mode(true)
    }


})()