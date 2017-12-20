/* global angular */
(function () {
    angular.module('heatMapp', [
        'ui.router', 'ui.bootstrap', 'heatMapp.states', 'heatMapp.services', 'mapboxgl-directive'
    ])

    angular.module('heatMapp')
        .config(RouteConfig)
        .run(StateErrorHandler)
        .run([function () {
            mapboxgl.accessToken = 'pk.eyJ1Ijoic25la2t5c25layIsImEiOiJjamF0eHd1Mzk1NjhvMnFvMmR3NGR2NDJtIn0._5awRs1gX159x4zFOz0V0g'
        }])

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
