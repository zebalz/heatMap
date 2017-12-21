/* global angular */
(function () {
    'use strict'
    angular.module('heatMapp.services')
        .factory('geoService', GeoService)

    GeoService.$inject = ['$log', '$http', '$q', '$window']

    function GeoService($log, $http, $q, $window) {
        let deferred = $q.defer()
        
        return {
            getUserLocation
        }
        
        function getUserLocation() {
            if (!$window.navigator.geolocation) {
                deferred.reject('alright then whatever bro')
            } else {
                $window.navigator.geolocation.getCurrentPosition(onSuccess, onError)
            }
            return deferred.promise
        }

        function onSuccess(position) {
            deferred.resolve(position)
        }

        function onError(err) {
            deferred.reject(err)
        }
    }
})()
