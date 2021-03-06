// Controlador para la pagina que gestiona los usuarios en el sistema.

app.controller('usuariosCtrl', [ '$scope', '$mdBottomSheet', 'usuarioService',
		function($scope, $mdBottomSheet, usuarioService) {
//		Función para listar los usuarios
			$scope.listar = function() {
				usuarioService.listar().success(function(data) {
					if (data.usuarioWS.length > 0) {
						$scope.usuarios = data.usuarioWS;
					} else {
						$scope.usuarios = data;
					}
				})
			}

			$scope.listar();
//			Función que permite crear un nuevo usuario
			$scope.crearUsuario = function(nuevoUsuario) {
				usuarioService.crear(nuevoUsuario).success(function(data) {
					if (data == "Usuario creado correctamente") {
						$scope.listar();
					} else {
						alert(data);
					}
				})
			}

		} ]);