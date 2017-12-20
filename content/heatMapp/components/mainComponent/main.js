/* global angular */
(function () {
    angular.module('heatMapp')
        .component('mainComponent', {
            templateUrl: 'heatMapp/components/mainComponent/main.html',
            controller: 'mainController',
            bindings: {
                formData: '<'
            }
        })

    angular.module('heatMapp')
        .controller('mainController', MainController)

    MainController.$inject = ['$log', '$state']

    function MainController($log, $state) {
        var vm = this
        vm.$onInit = init

        function init() {

        }
    }
})()
