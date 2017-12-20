/* global angular */
(function () {
    angular.module('heatMapp', [
        'ui.router', 'ui.bootstrap', 'heatMapp.states', 'heatMapp.services', 'mapboxgl-directive'
    ])

    angular.module('heatMapp')
        .config(RouteConfig)
        .run(StateErrorHandler)
       

    StateErrorHandler.$inject = ['$rootScope', '$log']

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', info => $log.log(info))
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/index')
        $locationProvider.html5Mode(true)
    }
})()
