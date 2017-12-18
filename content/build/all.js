'use strict';

/* global angular */
(function () {
    angular.module('heatMapp', ['ui.router', 'heatMapp.services']);

    angular.module('heatMapp').config(RouteConfig).run(StateErrorHandler);

    StateErrorHandler.$inject = ['$rootScope', '$log'];

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function (info) {
            return $log.log(info);
        });
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/index');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

/* global angular */
(function () {
    angular.module('heatMapp.services', []).factory('mappService', MappService);

    MappService.$inject = ['$log', '$http', '$q'];

    function MappService($log, $http, $q) {
        return $http.get('/api/heat').then(function () {
            return Promise.resolve();
        });
    }
})();
'use strict';

/* global angular */
(function () {
    'use-strict';

    angular.module('heatMapp.views', ['ui.router', 'heatMapp.services']);
    angular.module('heatMapp.views').config(RouteConfig);

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
})();
'use strict';

/* global angular */
(function () {
    angular.module('heatMapp').component('mappComponent', {
        templateUrl: "content/heatMapp/components/mappComponent/mapp-component.html",
        controller: 'mappController as $ctrl'
    });

    angular.module('heatMapp').controller('mappController', MappController);

    MappController.$inject = ['$log', '$state'];

    function MappController($log, $state) {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.hey = 'heyyyyy';
        }
    }
})();