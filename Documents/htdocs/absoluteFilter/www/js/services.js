// var adminurl = "http://wohlig.io/api/";
var adminurl = "http://absolute.wohlig.co.in/api/";
var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile?file=";
angular.module('starter.services', [])
  .factory('MyServices', function ($http) {
    return {

      searchRecord: function (formData, url, callback) {
        $http({
          url: adminurl + url.url,
          method: 'POST',
          data: formData
        }).success(callback);
      },

      getAll: function (formData, callback) {
        $http({
          url: adminurl + "Assignment/getAll",
          method: 'POST',
          data: formData
        }).success(callback);
      }

    }
  });