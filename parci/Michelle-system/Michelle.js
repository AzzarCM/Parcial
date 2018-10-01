productos = [];
function addProducto(codigo, descripcion, tipo, precioCompra, precioVenta, stock) {

    var product = new Object();
    product.codigo = codigo;
    product.descripcion = descripcion;
    product.tipo = tipo;
    product.precioCompra = precioCompra;
    product.precioVenta = precioVenta;

    productos.push(product);
}
function modiStock(nuevoStock) {
    productos.stock = nuevoStock;
}
function registrarVenta() {
    

}
while (true) {
    console.log("**************");
    console.log("1- agregar un producto");
    console.log("2- modificar stock");

    switch (prompt("ingrese una opcion")) {
        case 1:
            respuesta = true;
            while (respuesta) {
                codigo = prompt("ingrese el codigo del producto ");
                descripcion = prompt("ingrese la descripcion");
                tipo = prompt("ingrese el tipo de producto");
                precioCompra = prompt("ingrese el precio de compra");
                precioVenta = prompt("ingrese el precio de venta ");
                stock = prompt("stock");

                addProducto(codigo, descripcion, tipo, precioCompra, precioVenta, stock);

                res = prompt("desea agregar otro producto? si/no")
                if (res == "no") {
                    respuesta = false;
                    break;
                } else {
                    respuesta = true;
                }
            }

        case 2:
            stock = prompt("Ingrese el nuevo Stock");
            modiStock(stock);
            break;
        default: console.log("no se agrego nada");
    }
}