let myApp = angular.module("app",[]);

myApp.controller("controller",['$scope',function($scope) {
    $scope.shoppinglist = {
        "task":[{
            "name":"Bring water",
            "completed":true,
            "id":0
        }]
    };

    $scope.addlist = function() 
    {
        let id = $scope.shoppinglist.task.length == 0?0:$scope.shoppinglist.task[$scope.shoppinglist.task.length - 1].id + 1
        let pdata = {
            "name":$scope.list,
            "completed":false,
            "id":id
        }
        $scope.shoppinglist.task.push(pdata);
        $("#listinput").val("")
    }    

    $scope.toComplete = function(event)
    {
        let id = event.target.getAttribute("listid");
        $scope.shoppinglist.task.forEach(element => {
            if(element.id == id)
            {
                element.completed = ! element.completed;
            }
        });
    }

    $scope.toDelete = function(event)
    {
        $scope.shoppinglist.task = $scope.shoppinglist.task.filter((element)=>{
            return element.completed == false;
        });
    }
}])
