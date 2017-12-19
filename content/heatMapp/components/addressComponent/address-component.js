/* global angular */
(function () {
    angular.module('heatMapp')
        .component('addressComponent', {
            templateUrl: 'heatMapp/components/addressComponent/address-component.html',
            controller: 'addressController as $ctrl'
        })

    angular.module('heatMapp')
        .controller('addressController', AddressController)

    AddressController.$inject = ['$log', '$state']

    function AddressController($log, $state) {
        var vm = this
        vm.$onInit = init

        function init() {
            vm.hey = 'heyyyyy'
        }
    }
})()
