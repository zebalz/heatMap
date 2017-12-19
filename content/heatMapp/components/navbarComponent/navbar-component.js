/* global angular */
(function () {
    angular.module('heatMapp')
        .component('navbarComponent', {
            templateUrl: 'heatMapp/components/navbarComponent/navbar-component.html',
            controller: 'navbarController as $ctrl'
        })

    angular.module('heatMapp')
        .controller('navbarController', navbarController)

    navbarController.$inject = ['$log', '$state']

    function navbarController($log, $state) {
        var vm = this
        vm.$onInit = init

        function init() {
            vm.hey = 'heyyyyy'
        }
    }
})()
