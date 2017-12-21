/* global angular */
(function () {
    angular.module('heatMapp')
        .component('mainComponent', {
            templateUrl: 'heatMapp/components/mainComponent/main.html',
            controller: 'mainController as ctrl',
            bindings: {
                emails: '<'
            }
        })

    angular.module('heatMapp')
        .controller('mainController', MainController)

    MainController.$inject = ['$log', '$state', 'mappService']

    function MainController($log, $state, mappService) {
        var vm = this
        vm.$onInit = init
        vm.formData
        vm.post = post
        vm.people = []


        function init() {
            vm.people = vm.emails
        }

        function shit() {
            $log.log('shit')
        }

        function post() {
            vm.people.push(vm.formData)
            mappService.post(vm.formData)
                .then(data => {
                    $log.log(data)
                   
                })
        }
    }
})()
