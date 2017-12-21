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
        vm.people = null
        vm.getLocation = getLocation
        vm.theplaceiam = []


        function init() {
        }


        function getLocation() {
            geoService.getUserLocation()
                .then(position => {
                    $log.log(position.coords)
                    vm.theplaceiam.push(position.coords.long)
                })
        }

        function post(info) {
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
