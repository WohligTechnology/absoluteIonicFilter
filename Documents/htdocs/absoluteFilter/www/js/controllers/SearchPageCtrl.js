connector.controller('SearchPageCtrl', function ($scope, $state, $stateParams, MyServices, $ionicPlatform) {

    $scope.searchObj = {};
    $scope.searchObj.searchText = null;
    $scope.searchField = $stateParams.label;
    $scope.filterObj = {};
    $scope.filterObj = _.cloneDeep($.jStorage.get('filterObj'));
    // $scope.preSelectedArray = _.cloneDeep($scope.filterObj);
    $scope.searchResultArray = [];
    $scope.isList = 1;
    $scope.activeButton1 = 'active';
    // console.log("$scope.preSelectedArray", $scope.preSelectedArray);

    _.each($scope.filterObj.ownerName, function (n) {
        n.checked = true;
    });


    //To switch tab
    $scope.changeTab = function (value) {
        if (value == 1) {
            $scope.isList = 1;
            $scope.activeButton1 = 'active';
            $scope.activeButton2 = '';
        } else {
            $scope.isList = 2;
            $scope.activeButton1 = '';
            $scope.activeButton2 = 'active';
        }

    }
    //Function to search record on autocomplete
    $scope.searchRecord = function (value1, value2) {

        switch (value2) {
            case "ownerName":
                var url = 'Employee/getBackendEmployeeOnly';
                break;
            case "insurer":
                var url = 'Customer/search';
                break;
            case "insured":
                var url = 'Customer/search';
                break;
            case "brocker":
                var url = 'Customer/search';
                break;
            case "city":
                var url = 'city/search';
                break;
            case "branch":
                var url = 'branch/search';
                break;
            case "natureOfSurvey":
                var url = 'department/search';
                break;
            default:
                console.log("Invalid search");
        }

        MyServices.searchRecord({ "keyword": value1 }, { url: url }, function (data) {
            // console.log("my data", data);
            switch (value2) {
                case "ownerName":
                    if ($scope.filterObj.ownerName == undefined || $scope.filterObj.ownerName.length == 0) {
                        // _.each(data.data.results, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = data.data.results;
                    } else if ($scope.filterObj.ownerName.length > 0) {
                        console.log("$scope.filterObj.ownerName", $scope.filterObj.ownerName);
                        console.log("data.data.results", data.data.results);
                        var demo = _.differenceBy(data.data.results, $scope.filterObj.ownerName, '_id');
                        // _.each(demo, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = demo;
                    }
                    break;

                case "insurer":
                    if ($scope.filterObj.insurer == undefined || $scope.filterObj.insurer.length == 0) {
                        // _.each(data.data.results, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })

                        $scope.searchResultArray = data.data.results;
                    } else if ($scope.filterObj.insurer.length > 0) {
                        console.log("$scope.filterObj.insurer", $scope.filterObj.insurer);
                        console.log("data.data.results", data.data.results);
                        var demo = _.differenceBy(data.data.results, $scope.filterObj.insurer, '_id');
                        // _.each(demo, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = demo;
                    }
                    break;

                case "insured":
                    if ($scope.filterObj.insured == undefined || $scope.filterObj.insured.length == 0) {
                        // _.each(data.data.results, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = data.data.results;
                    } else if ($scope.filterObj.insured.length > 0) {
                        console.log("$scope.filterObj.insured", $scope.filterObj.insured);
                        console.log("data.data.results", data.data.results);
                        var demo = _.differenceBy(data.data.results, $scope.filterObj.insured, '_id');
                        // _.each(demo, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = demo;
                    }
                    break;

                case "brocker":
                    if ($scope.filterObj.brocker == undefined || $scope.filterObj.brocker.length == 0) {
                        // _.each(data.data.results, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = data.data.results;
                    } else if ($scope.filterObj.brocker.length > 0) {
                        console.log("$scope.filterObj.brocker", $scope.filterObj.brocker);
                        console.log("data.data.results", data.data.results);
                        var demo = _.differenceBy(data.data.results, $scope.filterObj.brocker, '_id');
                        // _.each(demo, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = demo;
                    }
                    break;

                case "city":
                    if ($scope.filterObj.city == undefined || $scope.filterObj.city.length == 0) {
                        // _.each(data.data.results, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = data.data.results;
                    } else if ($scope.filterObj.city.length > 0) {
                        console.log("$scope.filterObj.city", $scope.filterObj.city);
                        console.log("data.data.results", data.data.results);
                        var demo = _.differenceBy(data.data.results, $scope.filterObj.city, '_id');
                        // _.each(demo, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = demo;
                    }
                    break;

                case "branch":
                    if ($scope.filterObj.branch == undefined || $scope.filterObj.branch.length == 0) {
                        // _.each(data.data.results, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = data.data.results;
                    } else if ($scope.filterObj.branch.length > 0) {
                        console.log("$scope.filterObj.branch", $scope.filterObj.branch);
                        console.log("data.data.results", data.data.results);
                        var demo = _.differenceBy(data.data.results, $scope.filterObj.branch, '_id');
                        // _.each(demo, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = demo;
                    }
                    break;

                case "natureOfSurvey":
                    if ($scope.filterObj.natureOfSurvey == undefined || $scope.filterObj.natureOfSurvey.length == 0) {
                        // _.each(data.data.results, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = data.data.results;
                    } else if ($scope.filterObj.natureOfSurvey.length > 0) {
                        console.log("$scope.filterObj.natureOfSurvey", $scope.filterObj.natureOfSurvey);
                        console.log("data.data.results", data.data.results);
                        var demo = _.differenceBy(data.data.results, $scope.filterObj.natureOfSurvey, '_id');
                        // _.each(demo, function (n) {
                        //     n.checked = false;
                        //     $scope.searchResultArray.push(n);
                        // })
                        $scope.searchResultArray = demo;
                    }
                    break;
                default:
                    console.log("Invalid search");
            }
        })
    }

    if ($stateParams.searchText != null || $stateParams.searchText != undefined || $stateParams.searchText != '') {
        $scope.searchObj.searchText = $stateParams.searchText;
        $scope.searchRecord($scope.searchObj.searchText, $scope.searchField);
    };


    //Function to go previous $state
    $scope.getBack = function () {
        $.jStorage.set('filterObj', $scope.filterObj);
        $state.go('filter');
    };

    //Function to filter selected data and pass only relevent data to filter page

    $scope.getMyResult = function (value1, value2) {

        // switch (value2) {
        //     case "ownerName":
        //         // var filterObj = $.jStorage.get('filterObj');
        //         // filterObj.ownerName = value1.name;
        //         // filterObj.ownerId = value1._id;
        //         $.jStorage.set('filterObj', $scope.filterObj);
        //         $state.go('filter');
        //         break;

        //     default:
        //         console.log("Invalid selection");
        // }

    };

    //To push element into array 
    $scope.selectItem = function (obj, fieldType) {

        switch (fieldType) {
            case "ownerName":
                var selectedItem = _.find($scope.filterObj.ownerName, function (o) {
                    if (o._id == obj._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem == undefined) {
                    if ($scope.filterObj.ownerName == undefined) {
                        $scope.filterObj.ownerName = [];
                        $scope.filterObj.ownerName.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })

                        _.pull($scope.searchResultArray, obj);
                    } else {
                        $scope.filterObj.ownerName.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })
                        _.pull($scope.searchResultArray, obj);
                    }
                    $ionicPlatform.ready(function () {
                        window.plugins.toast.showWithOptions(
                            {
                                message: "Added to list",
                                duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                                position: "bottom",
                                addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                            }
                        );
                    });

                } else {
                    _.pull($scope.filterObj.ownerName, selectedItem);
                }
                break;

            case "insurer":
                var selectedItem = _.find($scope.filterObj.insurer, function (o) {
                    if (o._id == obj._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem == undefined) {
                    if ($scope.filterObj.insurer == undefined) {
                        $scope.filterObj.insurer = [];
                        $scope.filterObj.insurer.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })

                        _.pull($scope.searchResultArray, obj);
                    } else {
                        $scope.filterObj.insurer.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })
                        _.pull($scope.searchResultArray, obj);
                    }
                    $ionicPlatform.ready(function () {
                        window.plugins.toast.showWithOptions(
                            {
                                message: "Added to list",
                                duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                                position: "bottom",
                                addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                            }
                        );
                    });
                } else {
                    _.pull($scope.filterObj.insurer, selectedItem);
                }
                break;

            case "insured":
                var selectedItem = _.find($scope.filterObj.insured, function (o) {
                    if (o._id == obj._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem == undefined) {
                    if ($scope.filterObj.insured == undefined) {
                        $scope.filterObj.insured = [];
                        $scope.filterObj.insured.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })

                        _.pull($scope.searchResultArray, obj);
                    } else {
                        $scope.filterObj.insured.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })
                        _.pull($scope.searchResultArray, obj);
                    }
                    $ionicPlatform.ready(function () {
                        window.plugins.toast.showWithOptions(
                            {
                                message: "Added to list",
                                duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                                position: "bottom",
                                addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                            }
                        );
                    });
                } else {
                    _.pull($scope.filterObj.insured, selectedItem);
                }
                break;

            case "brocker":
                var selectedItem = _.find($scope.filterObj.brocker, function (o) {
                    if (o._id == obj._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem == undefined) {
                    if ($scope.filterObj.brocker == undefined) {
                        $scope.filterObj.brocker = [];
                        $scope.filterObj.brocker.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })

                        _.pull($scope.searchResultArray, obj);
                    } else {
                        $scope.filterObj.brocker.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })
                        _.pull($scope.searchResultArray, obj);
                    }
                    $ionicPlatform.ready(function () {
                        window.plugins.toast.showWithOptions(
                            {
                                message: "Added to list",
                                duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                                position: "bottom",
                                addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                            }
                        );
                    });
                } else {
                    _.pull($scope.filterObj.brocker, selectedItem);
                }
                break;

            case "city":
                var selectedItem = _.find($scope.filterObj.city, function (o) {
                    if (o._id == obj._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem == undefined) {
                    if ($scope.filterObj.city == undefined) {
                        $scope.filterObj.city = [];
                        $scope.filterObj.city.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })

                        _.pull($scope.searchResultArray, obj);
                    } else {
                        $scope.filterObj.city.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })
                        _.pull($scope.searchResultArray, obj);
                    }
                    $ionicPlatform.ready(function () {
                        window.plugins.toast.showWithOptions(
                            {
                                message: "Added to list",
                                duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                                position: "bottom",
                                addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                            }
                        );
                    });
                } else {
                    _.pull($scope.filterObj.city, selectedItem);
                }
                break;

            case "branch":
                var selectedItem = _.find($scope.filterObj.branch, function (o) {
                    if (o._id == obj._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem == undefined) {
                    if ($scope.filterObj.branch == undefined) {
                        $scope.filterObj.branch = [];
                        $scope.filterObj.branch.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })

                        _.pull($scope.searchResultArray, obj);
                    } else {
                        $scope.filterObj.branch.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })
                        _.pull($scope.searchResultArray, obj);
                    }
                    $ionicPlatform.ready(function () {
                        window.plugins.toast.showWithOptions(
                            {
                                message: "Added to list",
                                duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                                position: "bottom",
                                addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                            }
                        );
                    });
                } else {
                    _.pull($scope.filterObj.branch, selectedItem);
                }
                break;

            case "natureOfSurvey":
                var selectedItem = _.find($scope.filterObj.natureOfSurvey, function (o) {
                    if (o._id == obj._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem == undefined) {
                    if ($scope.filterObj.natureOfSurvey == undefined) {
                        $scope.filterObj.natureOfSurvey = [];
                        $scope.filterObj.natureOfSurvey.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })

                        _.pull($scope.searchResultArray, obj);
                    } else {
                        $scope.filterObj.natureOfSurvey.push({ _id: obj._id, name: obj.name, email: obj.email, photo: obj.photo, checked: true })
                        _.pull($scope.searchResultArray, obj);
                    }
                    $ionicPlatform.ready(function () {
                        window.plugins.toast.showWithOptions(
                            {
                                message: "Added to list",
                                duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                                position: "bottom",
                                addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                            }
                        );
                    });
                } else {
                    _.pull($scope.filterObj.natureOfSurvey, selectedItem);
                }
                break;
            default:
                console.log("Invalid selection");
        }

        // console.log($scope.filterObj.ownerName);

    };

    //To remove record from preselected list 
    $scope.removeRecord = function (value1, value2) {
        switch (value2) {
            case "ownerName":
                var selectedItem = _.find($scope.filterObj.ownerName, function (o) {
                    if (o._id == value1._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem != undefined) {
                    _.pull($scope.filterObj.ownerName, selectedItem);
                    value1.checked = false;
                    $scope.searchResultArray.push(value1);
                }
                break;

            case "insurer":
                var selectedItem = _.find($scope.filterObj.insurer, function (o) {
                    if (o._id == value1._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem != undefined) {
                    _.pull($scope.filterObj.insurer, selectedItem);
                    value1.checked = false;
                    $scope.searchResultArray.push(value1);
                }
                break;

            case "insured":
                var selectedItem = _.find($scope.filterObj.insured, function (o) {
                    if (o._id == value1._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem != undefined) {
                    _.pull($scope.filterObj.insured, selectedItem);
                    value1.checked = false;
                    $scope.searchResultArray.push(value1);
                }
                break;

            case "brocker":
                var selectedItem = _.find($scope.filterObj.brocker, function (o) {
                    if (o._id == value1._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem != undefined) {
                    _.pull($scope.filterObj.brocker, selectedItem);
                    value1.checked = false;
                    $scope.searchResultArray.push(value1);
                }
                break;

            case "city":
                var selectedItem = _.find($scope.filterObj.city, function (o) {
                    if (o._id == value1._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem != undefined) {
                    _.pull($scope.filterObj.city, selectedItem);
                    value1.checked = false;
                    $scope.searchResultArray.push(value1);
                }
                break;

            case "branch":
                var selectedItem = _.find($scope.filterObj.branch, function (o) {
                    if (o._id == value1._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem != undefined) {
                    _.pull($scope.filterObj.branch, selectedItem);
                    value1.checked = false;
                    $scope.searchResultArray.push(value1);
                }
                break;

            case "natureOfSurvey":
                var selectedItem = _.find($scope.filterObj.natureOfSurvey, function (o) {
                    if (o._id == value1._id) {
                        return o;
                    }
                });
                console.log(selectedItem);
                if (selectedItem != undefined) {
                    _.pull($scope.filterObj.natureOfSurvey, selectedItem);
                    value1.checked = false;
                    $scope.searchResultArray.push(value1);
                }
                break;
            default:
                console.log("Invalid selection");
        }
    };

    //To save filter obj in jStorage and return to filter page
    // $scope.saveList = function () {
    //     $.jStorage.set('filterObj', $scope.filterObj);
    //     $state.go('filter');
    // }

    //To clear filter 
    $scope.clearfilter = function (value2) {
        switch (value2) {
            case "ownerName":

                _.each($scope.filterObj.ownerName, function (n) {
                    $scope.searchResultArray.push(n);
                });
                $scope.filterObj.ownerName = [];

                break;

            case "insurer":
                _.each($scope.filterObj.insurer, function (n) {
                    $scope.searchResultArray.push(n);
                });
                $scope.filterObj.insurer = [];
                break;

            case "insured":
                _.each($scope.filterObj.insured, function (n) {
                    $scope.searchResultArray.push(n);
                });
                $scope.filterObj.insured = [];
                break;

            case "brocker":
                _.each($scope.filterObj.brocker, function (n) {
                    $scope.searchResultArray.push(n);
                });
                $scope.filterObj.brocker = [];
                break;

            case "city":
                _.each($scope.filterObj.city, function (n) {
                    $scope.searchResultArray.push(n);
                });
                $scope.filterObj.city = [];
                break;

            case "branch":
                _.each($scope.filterObj.branch, function (n) {
                    $scope.searchResultArray.push(n);
                });
                $scope.filterObj.branch = [];
                break;

            case "natureOfSurvey":
                _.each($scope.filterObj.natureOfSurvey, function (n) {
                    $scope.searchResultArray.push(n);
                });
                $scope.filterObj.natureOfSurvey = [];
                break;
            default:
                console.log("Invalid selection");
        }
    }
});