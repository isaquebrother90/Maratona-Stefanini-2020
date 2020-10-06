(function () {
    "use strict";

    angular
    .module('app', []) /* Nome da aplicação e import de bibliotecas */
    .controller('controlador', function ($scope) {
        $scope.nome = 'Isaque'; /* As coisas que queremos mostrar no html */
        $scope.contador = 10;
    })


})();