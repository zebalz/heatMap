'use strict';

(function () {

    angular.module('client', ['ui.router', 'ui.bootstrap', 'heatMapp.pages']);

    angular.module('client').congfig(RouteConfig).run(StateErrorHandler);

    StateErrorHandler.$inject = ['$rootScope', '$log'];

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function (info) {
            return $log.log(info);
        });
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouteProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouteProvider, $locationProvider) {
        $urlRouteProvider.otherwise('/index/whack');
        $locationProvider.html5Mode(true);
    }
})();