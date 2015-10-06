app.controller('appController', ['$location', '$q', '$timeout', '$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', 'BMUKService',
    function ($location, $q, $timeout, $scope, $mdBottomSheet, $mdSidenav, $mdDialog, $BMUKService) {
        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };


        $scope.selected = [];

        $scope.Titles = ['Mr', 'Mrs' , 'Ms', 'Dr', 'Master' ];

        $scope.currentYear = new Date().getFullYear();

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

        $scope.editMember = function ($model, isReadOnly) {
            $model.isReadOnly = isReadOnly;
            $model.Titles = $scope.Titles;
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: parentEl,
                targetEvent: $model,
                locals: {
                    memberInfo: $model
                }
            }).then(function(editedMember) {
                //Changed model is received in $model
                //use the model and service to post changed data to save it in DB ( if its not read only!)
                if (!editedMember.isReadOnly) {
                    //get BMUK Update endpoint and post data!!
                    if (editedMember.ParentId == -1) {
                        //Save HEAD MEMBER
                        $scope.saveNewHead(editedMember);
                    }
                    else {
                        //SAVE NON HEAD MEMBER
                        
                    }
                }
            }, function() {

            });

        };

        $scope.navigate = function (navigationLink) {
            //alert(navigationLink);
            $location.url(navigationLink);
        };

        $scope.saveNewHead = function(addedMember) {
            alert('in saveNewHead')
            if (addedMember.Id) {
                //update member
            } else {

                //Add new Head member
                addedMember.ParentId = -1;
                addedMember.RelationToHead = "Head";

                //post data to BMUK controller
                //var memberObj = $scope.toMemberObject();
                $BMUKService.addHeadMember(addedMember)
                    .then(function (response) {
                    console.log(response);
                    if (response.StatusCode === 200) {
                        //navigate to list page!
                        $scope.navigate('/ListMembers');
                    } else {
                        //show error message to the user!!
                        console.log('Error Occured!!')
                    }
                });
            }
            console.log('save member!');
        }

        $scope.toMemberObject = function() {
            return {
                Id: $scope.memberInfo.Id,
                ParentId: $scope.memberInfo.ParentId,
                Title: $scope.memberInfo.Title,
                Surname: $scope.memberInfo.Surname,
                FirstName: $scope.memberInfo.FirstName,
                BirthYear: $scope.memberInfo.BirthYear,
                RelationToHead: $scope.memberInfo.RelationToHead, 
                SecondndName: $scope.memberInfo.SecondndName, 
                FathersName: $scope.memberInfo.FathersName,
                Mosal: $scope.memberInfo.Mosal,
                Profession: $scope.memberInfo.Profession,
                AddressLine1: $scope.memberInfo.AddressLine1,
                AddressLine2: $scope.memberInfo.AddressLine2,
                Town: $scope.memberInfo.Town,
                County: $scope.memberInfo.County,
                Postcode: $scope.memberInfo.Postcode,
                TelephoneNo: $scope.memberInfo.TelephoneNo,
                MobileNo: $scope.memberInfo.MobileNo,
                EmailAddress: $scope.memberInfo.EmailAddress
            }
        }

        $scope.cancelSaveNewHead = function () {
            alert('save cancelled');
        }

        loadRemoteData();
    }]);