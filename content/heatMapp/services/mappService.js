/* global angular */
(function () {
    angular
        .module('heatMapp.services')
        .factory('mappService', MappService)

    MappService.$inject = ['$log', '$http', '$q']

    function MappService($log, $http, $q) {
        return {
            readAll,
            post,
            update
        }

        function readAll() {
            return $http.get('/api/heaters')
                .then(postSuccess)
                .catch(postError)
        }

        function post(data) {
            return $http.post('/api/heaters', data)
                .then(postSuccess)
                .catch(postError)
        }

        function update(data) {
            return $http.put(`/api/heaters${data._id}`, data)
                .then(postSuccess)
                .catch(postError)
        }

        function postSuccess(response) {
            return response.data
        }
        function postError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }
})()
