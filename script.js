const productos = [
 { nombre: "Arroz", categoria: "Granos", precio: 4500, cantidad: 25, minimo: 10
},
 { nombre: "Aceite", categoria: "Despensa", precio: 12000, cantidad: 3, minimo: 5
},
 { nombre: "Azúcar", categoria: "Despensa", precio: 3800, cantidad: 0, minimo: 8
},
 { nombre: "Café", categoria: "Bebidas", precio: 18500, cantidad: 8, minimo: 4
},
 { nombre: "Leche", categoria: "Lácteos", precio: 4200, cantidad: 2, minimo: 6
},
 { nombre: "Panela", categoria: "Despensa", precio: 3000, cantidad: 15, minimo: 10
},
 { nombre: "Queso", categoria: "Lácteos", precio: 9800, cantidad: 4, minimo: 5
},
 { nombre: "Jugo", categoria: "Bebidas", precio: 5200, cantidad: 4, minimo: 3 }
];

// Buscar el <tbody> vacío
const cuerpoTabla = document.getElementById("cuerpo-tabla");
for (let i = 0; i < productos.length; i++) {
 const producto = productos[i]; // Producto de esta vuelta
 const fila = document.createElement("tr"); // Crea una fila (aún no se ve)

 const tdNombre = document.createElement("td"); // Crea una celda
 tdNombre.textContent = producto.nombre; // Le pone el texto

 const tdCantidad = document.createElement("td");
 tdCantidad.textContent = producto.cantidad;

 fila.appendChild(tdNombre); // Mete las celdas en la fila
 fila.appendChild(tdCantidad);

}
 const producto = productos[i];
 const subtotal = producto.precio * producto.cantidad; // Nuevo cálculo

 const fila = document.createElement("tr");

 // Nombre
 const tdNombre = document.createElement("td");
 tdNombre.textContent = producto.nombre;

 // Categoría: un <span> dentro de la celda
 const tdCategoria = document.createElement("td");
 const etiqueta = document.createElement("span");
 etiqueta.textContent = producto.categoria;
 etiqueta.classList.add("etiqueta");

 if (producto.categoria === "Granos") {
 etiqueta.style.backgroundColor = "#8d6e63";
 } else if (producto.categoria === "Despensa") {
 etiqueta.style.backgroundColor = "#6f42c1";
 } else if (producto.categoria === "Bebidas") {
etiqueta.style.backgroundColor = "#0d6efd";  
} else if (producto.categoria === "Lácteos") {
 etiqueta.style.backgroundColor = "#20c997";
 } else {
 etiqueta.style.backgroundColor = "gray";
 }
 tdCategoria.appendChild(etiqueta);

 // Precio con puntos de miles
 const tdPrecio = document.createElement("td");
 tdPrecio.textContent = "$" + producto.precio.toLocaleString("es-CO");
 if (producto.precio > 10000) {
 tdPrecio.style.fontWeight = "bold";
 }

 // Cantidad y mínimo
 const tdCantidad = document.createElement("td");
 tdCantidad.textContent = producto.cantidad;

 const tdMinimo = document.createElement("td");
 tdMinimo.textContent = producto.minimo;

 // Subtotal
 const tdSubtotal = document.createElement("td");
 tdSubtotal.textContent = "$" + subtotal.toLocaleString("es-CO");

 // Estado
 const tdEstado = document.createElement("td");

 if(producto.cantidad < producto.minimo) {
 fila.classList.add("bajo-stock");
 const faltan = producto.minimo - producto.cantidad;
 tdEstado.textContent = "Bajo stock - pedir " + faltan;

 }

 else if(producto.cantidad === 0) {
 fila.classList.add("agotado");
 const faltan = producto.minimo;
 tdEstado.textContent = "AGOTADO - pedir " + faltan;
 tdEstado.style.color = "#dc3545";
 tdEstado.style.fontWeight = "bold";

  } else {
 fila.classList.add("disponible");
 tdEstado.textContent = "OK";
 }

 // Armar la fila en el mismo orden de los encabezados
 fila.appendChild(tdNombre);
 fila.appendChild(tdCategoria);
 fila.appendChild(tdPrecio);
 fila.appendChild(tdCantidad);
 fila.appendChild(tdMinimo);
 fila.appendChild(tdSubtotal);
 fila.appendChild(tdEstado);

 cuerpoTabla.appendChild(fila);

}

