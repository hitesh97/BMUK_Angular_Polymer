app.controller('appController', ['$location','$q', '$timeout', '$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', 'BMUKService',
    function ($location, $q, $timeout, $scope, $mdBottomSheet, $mdSidenav, $mdDialog, $BMUKService) {
        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };


        $scope.selected = [];

        $scope.Titles = ['Mr', 'Mrs' , 'Ms', 'Dr', 'Master' ];

        $scope.menu = [
            {
                link: '/ListMembers',
                title: 'List Members',
                icon: 'group'
            }, {
                link: '/CreateHead',
                title: 'Create Head Member',
                icon: 'person'
            }, {
                link: '/view3',
                title: 'Create Relative Member',
                icon: 'group_add'
            }, {
                link: '/ListMembers',
                title: 'Run Report on Data',
                icon: 'dashboard'
            }
        ];

        $scope.query = {
            order: 'FirstName',
            limit: 15,
            page: 1
        };

        function loadRemoteData() {
            $BMUKService.getMembers().then(
                function (members) {
                    applyRemoteData(members);
                });

            $BMUKService.getTitles().then(
                function(titles) {
                    applyTitleData(titles);
                });
        }

        function applyTitleData(titles) {
            $scope.titlesList = titles;
        }

        function applyRemoteData(newMembers) {
            $scope.membersList = newMembers;
        }

        $scope.onpagechange = function (page, limit) {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve();
            }, 2000);

            return deferred.promise;
        };

        $scope.onorderchange = function (order) {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve();
            }, 2000);

            return deferred.promise;
        };

        $scope.editMember = function($model, isReadOnly) {
            $model.isReadOnly = isReadOnly;
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: parentEl,
                targetEvent: $model,
                locals: {
                    memberInfo: $model
                }
            }).then(function(answer) {
                //Changed model is received in $model
                //use the model and service to post changed data to save it in DB ( if its not read only!)

                if (!readOnly) {
                    //get BMUK Update endpoint and post data!!
                }
            }, function() {

            });

        };

        $scope.navigate = function (navigationLink) {
            //alert(navigationLink);
            $location.url(navigationLink);
        };

        $scope.announceClick = function (index) {
            $mdDialog.show(
              $mdDialog.alert()
                .title('You clicked!')
                .content('You clicked the menu item at index ' + index)
                .ok('Nice')
            );
        };

        loadRemoteData();
    }]);