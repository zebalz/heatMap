'use strict';

/* global angular */
(function () {
    angular.module('heatMapp', ['ui.router', 'ui.bootstrap', 'heatMapp.states', 'heatMapp.services', 'mapboxgl-directive']);

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
    'use strict';

    angular.module('heatMapp.services', []);
})();
'use strict';

/* global angular */
(function () {
    'use-strict';

    angular.module('heatMapp.states', ['ui.router', 'ui.bootstrap', 'mapboxgl-directive']);

    angular.module('heatMapp.states').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site', {
            url: '/index',
            views: {
                mapp: {
                    component: 'mainComponent'
                }
            }
        });
    }
})();
'use strict';

/* global angular */
(function () {
    angular.module('heatMapp.services').factory('mappService', MappService);

    MappService.$inject = ['$log', '$http', '$q'];

    function MappService($log, $http, $q) {
        return {
            readAll: readAll,
            post: post,
            update: update
        };

        function readAll() {
            return $http.get('/api/heaters').then(postSuccess).catch(postError);
        }

        function post(data) {
            return $http.post('/api/heaters', data).then(postSuccess).catch(postError);
        }

        function update(data) {
            return $http.put('/api/heaters' + data._id, data).then(postSuccess).catch(postError);
        }

        function postSuccess(response) {
            return response.data;
        }
        function postError(error) {
            console.log(error.data);
            return $q.reject(error.data);
        }
    }
})();
'use strict';

/* global angular */
(function () {
    angular.module('heatMapp').component('mainComponent', {
        templateUrl: 'heatMapp/components/mainComponent/main.html',
        controller: 'mainController',
        bindings: {
            formData: '<'
        }
    });

    angular.module('heatMapp').controller('mainController', MainController);

    MainController.$inject = ['$log', '$state'];

    function MainController($log, $state) {
        var vm = this;
        vm.$onInit = init;

        function init() {}
    }
})();
'use strict';

/* global angular */
(function () {
    angular.module('heatMapp').component('mappComponent', {
        templateUrl: 'heatMapp/components/mappComponent/mapp-component.html',
        controller: 'mappController',
        bindings: {
            formData: '<'
        }
    });

    angular.module('heatMapp').controller('mappController', MappController);

    MappController.$inject = ['$log', '$state', 'mappService'];

    function MappController($log, $state, mappService) {
        var vm = this;
        vm.postIsh = postIsh;
        vm.$onInit = init;

        function init() {}

        mapboxgl.accessToken = 'pk.eyJ1Ijoic25la2t5c25layIsImEiOiJjamF0eHd1Mzk1NjhvMnFvMmR3NGR2NDJtIn0._5awRs1gX159x4zFOz0V0g';

        function postIsh(ting) {
            mappService.post(ting).then(function (data) {
                $log.log(data);
            });
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