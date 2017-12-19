/* global angular */
(function () {
    angular
        .module('heatMapp.services', [])
        .factory('mappService', MappService)

    MappService.$inject = ['$log', '$http', '$q']

    function MappService($log, $http, $q) {
        return $http.get('/api/heat')
            .then(() => Promise.resolve())
    }


})()
