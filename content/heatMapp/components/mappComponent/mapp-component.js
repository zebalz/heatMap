/* global angular */
(function () {
    angular.module('heatMapp')
        .component('mappComponent', {
            templateUrl: "content/heatMapp/components/mappComponent/mapp-component.html",
            controller: 'mappController as $ctrl'
        })

    angular.module('heatMapp')
        .controller('mappController', MappController)

    MappController.$inject = ['$log', '$state']

    function MappController($log, $state) {
        var vm = this
        vm.$onInit = init

        function init() {
            vm.hey = 'heyyyyy'
        }
    }
})()
