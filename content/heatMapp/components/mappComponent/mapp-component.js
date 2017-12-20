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
        .controller('mappController', MappController)

    MappController.$inject = ['$log', '$state', 'mappService']

    function MappController($log, $state, mappService) {
        var vm = this
        vm.postIsh = postIsh
        vm.$onInit = init

        function init() {

        }
        
        mapboxgl.accessToken = 'pk.eyJ1Ijoic25la2t5c25layIsImEiOiJjamF0eHd1Mzk1NjhvMnFvMmR3NGR2NDJtIn0._5awRs1gX159x4zFOz0V0g';


        function postIsh(ting) {
            mappService.post(ting)
                .then(data => {
                    $log.log(data)
                })
        }
    }
})()
