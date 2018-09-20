var app = angular.module("theApp", [] );

app.controller('priceCtrl', function($scope){

    // defaults
    $scope.otherLoaded = false;

    $scope.tuition = 3167;

    $scope.itc = {
        name: "Certificate (ITC)" ,
        price: $scope.tuition ,
        semesters: 2 ,
        total: function(){
            return this.price * this.semesters
        }
    }

    $scope.aas = {
        name: 'Associate\'s (AAS)' ,
        price: $scope.tuition ,
        semesters: 4 ,
        // expenses: 2650 ,
        total: function(){
            return (this.price * this.semesters)
        }
    }

    $scope.bas = {
        name: 'Bachelor\'s (BAS)' ,
        price: $scope.tuition ,
        semesters: 8 ,
        // expenses: 2650 ,
        total: function(){
            return (this.price * this.semesters)
        }
    }

    $scope.others = [
        {
            name: 'University of Idaho' ,
            cost: 3616     
        },
        {
            name: 'Boise State University' ,
            cost: 3663 // 5368
        },
        {
            name: 'UCLA' ,
            cost: 5751     
        },
        {
            name: "WSU (Out of State)" ,
            cost: 12258
        },
        {
            name: 'Harvard University' ,
            cost: 22495     
        },
        {
            name: 'Stanford University' ,
            cost: 26047 
        }
    ];

    $scope.loadOther = function(){
       // $scope.otherLoaded = true;
        //console.log("Working?");
    }
});


app.controller( 'socialCtrl', function($scope){
    $scope.facebook = 'https://www.facebook.com/lcscbts/'
    $scope.twitter = 'https://twitter.com/lcsc_bts'
    $scope.instagram = 'https://www.instagram.com/lcsc_bts/'
    $scope.email = 'bts@lcsc.edu'
})