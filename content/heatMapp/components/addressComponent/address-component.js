/* global angular */
(function() {
    angular.module('heatMapp')
        .component('addressComponent', {
            templateUrl: 'heatMapp/components/addressComponent/address-component.html',
            controller: 'addressController as $ctrl',
            bindings: {
                formData: '<'
            }
        })

    angular.module('heatMapp')
        .controller('addressController', AddressController)

    AddressController.$inject = ['$log', '$state', 'mappService']

    function AddressController($log, $state, mappService) {
        var vm = this
        vm.postIsh = postIsh
        vm.$onInit = init

        function init() {

        }

        function postIsh(ting){
            mappService.post(ting)
            .then(data => {
                $log.log(data)
            })
        }
    }
})()
