'use strict';

/* Controllers */


function MyCtrl1() {
}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function PetListCtrl($scope, Pet) {
//    console.log("Hello");
    $scope.orderProp = 'nearest';
    $scope.numberPerPage = 5;
    $scope.pageNumber=0;
    var pets = Pet.query({limit:$scope.numberPerPage});
    $scope.pets = pets;

    $scope.doSearch = function () {
        $scope.pets = Pet.query({limit:$scope.numberPerPage, skip: $scope.pageNumber * $scope.numberPerPage});
        $scope.pageNumber = 0;
    }

    $scope.doGotoPage = function(pageNumber) {
        $scope.pets = Pet.query({limit:$scope.numberPerPage, skip: pageNumber*$scope.numberPerPage});
    }

    $scope.updatePageNumber = function(pageNumber) {
        if (pageNumber >= 0 && pageNumber*$scope.numberPerPage < $scope.pets.count) {
            $scope.pageNumber = pageNumber;
            this.doGotoPage($scope.pageNumber);
        }
    }
}


