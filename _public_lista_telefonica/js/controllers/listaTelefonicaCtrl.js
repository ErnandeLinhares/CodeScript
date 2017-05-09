angular.module("codeScript")
.controller("listaTelefonicaCtrl", function($scope){
	
	$scope.app = "Lista Telefonica";
	
	$scope.contatos = [
		{nome: "Pedro", data: new Date(), telefone: "999999999", cor: "#9d0"},
		{nome: "Maria", data: new Date(), telefone: "999999787", cor: "#930"},
		{nome: "Ana", data: new Date(), telefone: "999999787", cor: "#930"},
		{nome: "João", data: new Date(), telefone: "97799787", cor: "#09d"},
	];

	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "Celular"},
		{nome: "Vivo", codigo: 15, categoria: "Celular"},
		{nome: "Tim", codigo: 41, categoria: "Celular"},
		{nome: "GVT", codigo: 25, categoria: "Fixo"},
		{nome: "Embratel", codigo: 21, categoria: "Fixo"},
	];

	$scope.contato = {
		data: new Date()
	};

	$scope.selecionado = "selecionado";
	$scope.negrito = "negrito";

	$scope.addToList = function(contato){
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};

	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	};

	$scope.removeToList = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if(!contato.selecionado) return contato;
		});
	};

	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	};

});