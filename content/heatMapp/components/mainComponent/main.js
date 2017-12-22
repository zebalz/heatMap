/* global angular */
(function () {
    angular.module('heatMapp')
        .component('mainComponent', {
            templateUrl: 'heatMapp/components/mainComponent/main.html',
            controller: 'mainController as ctrl',
            bindings: {
                things: '<'
            }
        })

    angular.module('heatMapp')
        .controller('mainController', MainController)

    MainController.$inject = ['$log', '$state', '$http', 'mappService', 'geoService']

    function MainController($log, $state, $http, mappService, geoService) {
        var vm = this
        vm.$onInit = init
        vm.formData
        vm.post = post
        vm.deleteTing = deleteTing
        vm.people = []
        vm.getLocation = getLocation
        vm.theplaceiam


        function init() {
            vm.people = vm.things
        }


        function getLocation() {
            geoService.getUserLocation()
                .then(position => {
                    $log.log(position.coords)
                    vm.theplaceiam = { latitude: position.coords.latitude, longitude: position.coords.latitude }
                    post(vm.theplaceiam)
                })
        }

        function post(location) {
            if (!location) {
                vm.people.push(vm.formData)
                mappService.post(vm.formData)
                    .then(data => {
                        $log.log(data)
                    })
            } else {
                mappService.post(location)
                    .then(data => {
                        $log.log(data)
                    })
            }

            vm.formData = {}
        }

        function post1(info) {
            vm.people.push(info)
            mappService.post(info)
                .then(data => {
                    $log.log(data)
                })
        }

        function deleteTing(ting) {
            let index = vm.people.findIndex(item => item._id === ting)
            vm.people.splice(index, 1)
        }
    }
})()
