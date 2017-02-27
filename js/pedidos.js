/*
------ Gestión de Pedidos -------
Fecha: 27/02/2017
Autor: jlmerdiez
Versión: 1.0
Descripción: Un pedido consta de los siguientes datos:
- Una fecha de pedido
- Un número total de artículos
- Un total de pedido
- Una dirección de entrega
- Una dirección de facturación
---------------------------------
*/
function Pedido(fechaPedido,
							  totalArticulos,
							  totalPedido,
							  direccionEntrega,
							  direccionFacturacion) {
	this.fechaPedido = fechaPedido;
	this.totalArticulos = totalArticulos;
	this.totalPedido = totalPedido;
	this.direccionEntrega = direccionEntrega;
	this.direccionFacturacion = direccionFacturacion;

	// Método para conocer la fecha del pedido
	this.getFechaPedido = function () {
		return this.fechaPedido;
	};
	// Método para conocer el total de artículos del pedido
	this.getTotalArticulos = function () {
		return this.totalArticulos;
	};	// Método para conocer el total del pedido
	this.getTotalPedido = function () {
		return this.totalPedido;
	};
	// Método para conocer la dirección de entrega del pedido
	this.getDireccionEntrega = function () {
		return this.direccionEntrega;
	};
	// Método para conocer la dirección de facturación del pedido
	this.getDireccionFacturacion = function () {
		return this.direccionFacturacion;
	};
	// Método para poder cambiar la dirección de entrega del pedido
	this.setDireccionEntrega = function (direccionEntrega) {
		this.direccionEntrega = direccionEntrega;
	};
	// Método para poder cambiar la dirección de facturación del pedido
	this.setDireccionFacturacion = function (direccionFacturacion) {
		this.direccionFacturacion = direccionFacturacion;
	};
}