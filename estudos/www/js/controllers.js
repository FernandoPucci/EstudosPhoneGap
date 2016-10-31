angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

    //model para calculo
    $scope.calculo = [
      {
        vlrAlcool:0.00,
        vlrGasolina:0.00,
        exibir : false,
        vlrResultado : ''
      }

    ]; 

    //função para calculo
    $scope.calcular = function(calculo){

        var resultado = $scope.calculo.vlrGasolina * 0.7;

          if($scope.calculo.vlrAlcool > resultado){

            $scope.calculo.vlrResultado = "GASOLINA";
            

          }else{

                $scope.calculo.vlrResultado = "ÁLCOOL";           

          }

          $scope.calculo.exibir = true;
    };


    $scope.limpar = function(){

        $scope.calculo = [
          {
            vlrAlcool:0.00,
            vlrGasolina:0.00,
            exibir : false,
            vlrResultado : ''
          }

        ]; 


    };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
