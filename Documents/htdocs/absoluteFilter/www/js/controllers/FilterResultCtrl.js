connector.controller('FilterResultCtrl', function ($scope, $state, $stateParams, MyServices) {

    $scope.filterObj = _.cloneDeep($.jStorage.get('filterObj'));

    //Function to get filtered data
    $scope.getData = function () {
        $scope.filterObj.sorting = ["", 1];
        $scope.filterObj.pagenumber = 1;
        $scope.filterObj.pagelimit = 10
        $scope.filterObj.ownerStatus = "All files";
        $scope.filterObj.accessToken = "LLKUZluWC8QSKj4P";

        MyServices.getAll($scope.filterObj, function (data) {
            console.log("final data", data);
            if (data.value) {
                $scope.filterData = data.data.results;
            } else {
                console.log("Error");
            }
        })
    };
    $scope.getData();

    //Function to go back to filter page
    $scope.getBack = function () {
        $state.go('filter');
    }
})