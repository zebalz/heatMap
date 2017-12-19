'use strict';

/* global angular */
(function () {
    angular.module('heatMapp', ['ui.router', 'ui.bootstrap', 'heatMapp.states']);

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

    angular.module('heatMapp.states', ['ui.router', 'ui.bootstrap']);

    angular.module('heatMapp.states').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site', {
            url: '/index',
            views: {
                mapp: {
                    component: 'addressComponent'
                }
            }
        });
    }
})();
'use strict';

/* global angular */
(function () {
    angular.module('heatMapp').component('addressComponent', {
        templateUrl: 'heatMapp/components/addressComponent/address-component.html',
        controller: 'addressController as $ctrl'
    });

    angular.module('heatMapp').controller('addressController', AddressController);

    AddressController.$inject = ['$log', '$state'];

    function AddressController($log, $state) {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.hey = 'heyyyyy';
        }
    }
})();
'use strict';

/* global angular */
(function () {
    angular.module('heatMapp').component('navbarComponent', {
        templateUrl: 'heatMapp/components/navbarComponent/navbar-component.html',
        controller: 'navbarController as $ctrl'
    });

    angular.module('heatMapp').controller('navbarController', navbarController);

    navbarController.$inject = ['$log', '$state'];

    function navbarController($log, $state) {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.hey = 'heyyyyy';
        }
    }
})();