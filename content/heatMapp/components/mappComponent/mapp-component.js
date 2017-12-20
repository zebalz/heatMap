/* global angular */
(function () {
    angular.module('heatMapp')
        .component('mappComponent', {
            templateUrl: 'heatMapp/components/mappComponent/mapp-component.html',
            controller: 'mappController',
            bindings: {
                formData: '<'
            }
        })

    angular.module('heatMapp')
        .controller('mappController', AddressController)

    AddressController.$inject = ['$log', '$state', 'mappService']

    function AddressController($log, $state, mappService) {
        var vm = this
        vm.postIsh = postIsh
        vm.$onInit = init

        function init() {

        }

        function postIsh(ting) {
            mappService.post(ting)
                .then(data => {
                    $log.log(data)
                })
        }
    }
})()
