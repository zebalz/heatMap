'use strict';

/* global angular */
(function () {
    angular.module('client', ['ui.router', 'client.services']);

    angular.module('client').config(RouteConfig).run(StateErrorHandler);

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
'use strict';

(function () {
    'use-strict';

    angular.module('client.views', ['ui.router', 'client.services']);
    angular.module('client.views').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site.index', {
            url: '/heatmapp',
            abstract: true
        }).state('site.index.home', {
            url: '/mapp',
            views: {
                'root': {
                    component: 'mappComponent'
                }
            }
        });
    }
});
"use strict";