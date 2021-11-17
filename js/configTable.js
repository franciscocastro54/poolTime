const configTable = `<div class="window" id="configTable">
<button id="cerrarVentana">x</button>
<h2>Modificar Mesas</h2>
<button id="agregarMesa" class="add">Agregar Mesa</button>
<table>
    <tr>
        <th></th>
        <th>Nombre</th>
        <th>Tarifa</th>
        <th>Estado</th>
        <th></th>
    </tr>
    <tr>

        <td><button class="edit" id="editarMesa">Editar</button></td>
        <td>Mesa 1</td>
        <td>normal</td>
        <td><p class="state-full">ocupada</p></td>
        <td><button class="erase" id="eliminarMesa">Eliminar</button></td>
    </tr>
    <tr>
        <td><button class="edit" id="editarMesa">Editar</button></td>
        <td>Mesa 2</td>
        <td>vip</td>
        <td><p class="state-free">Libre</p></td>
        <td><button class="erase" id="eliminarMesa">Eliminar</button></td>
    </tr>
    <tr>
        <td><button class="edit" id="editarMesa">Editar</button></td>
        <td>Mesa 3</td>
        <td>normal</td>
        <td><p class="state-free">Libre</p></td>
        <td><button class="erase" id="eliminarMesa">Eliminar</button></td>
    </tr>
</table>
</div>`



const productList= `<div class="window" id="productList">
<button id="cerrarVentana">x</button>
<h2>Productos</h2>
<button id="agregarProducto" class="add">Nuevo producto</button>
<table>
    <tr>
        <th></th>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th></th>
    </tr>
    <tr>

        <td><button class="edit" id="editarProducto">Editar</button></td>
        <td>1245</td>
        <td>Papas fritas grandes</td>
        <td>$4.500</td>
        <td><button class="erase" id="eliminarProducto">Eliminar</button></td>
    </tr>
    <tr>
        <td><button class="edit" id="editarProducto">Editar</button></td>
        <td>1250</td>
        <td>Promo 2</td>
        <td>$8.500</td>
        <td><button class="erase" id="eliminarProducto">Eliminar</button></td>
    </tr>
    <tr>
        <td><button class="edit" id="editarProducto">Editar</button></td>
        <td>1260</td>
        <td>Bebida mediana</td>
        <td>$1.500</td>
        <td><button class="erase" id="eliminarProducto">Eliminar</button></td>
    </tr>
</table>
</div>`


const configProduct = `<div class="window" id="configProduct">
<button id="cerrarVentana">x</button>
<h2>Modificar Producto</h2>
<table>
    <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
    </tr>
    <tr>

        <td><input type="number" name="codigo" placeholder="ej: 1516"></td>
        <td><input type="text" name="nombre" placeholder="ej: Promo 5"></td>
        <td><input type="number" name="precio" placeholder="ej: 10.000"></td>
    </tr>
</table>
<button id="Productos" class="blue-button">Regresar</button>
<button id="guardarProducto" class="add">Guardar</button>
</div>`

const registrarProducto = `<div class="window" id="registrarProducto">
<button id="cerrarVentana">x</button>
<h2>Registrar Producto</h2>
<table>
    <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
    </tr>
    <tr>

        <td><input type="number" name="codigo" placeholder="ej: 1516"></td>
        <td><input type="text" name="nombre" placeholder="ej: Promo 5"></td>
        <td><input type="number" name="precio" placeholder="ej: 10.000"></td>
    </tr>
</table>
<button id="Productos" class="blue-button">Regresar</button>
<button id="guardarProducto" class="add">Guardar</button>
</div>`

const addProducts=`<div class="window" id="addProducts">
                <button id="cerrarVentana">x</button>
                <h2>Agregar Producto</h2>
                <table>
                    <tr>
                        <th>Cantidad</th>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Precio unidad</th>
                    </tr>
                    <tr>
                        <td><input type="number" name="cantidad" id="cantidad"></td>
                        <td>1245</td>
                        <td>Promo 1</td>
                        <td>$4.500</td>
                    </tr>
                    <tr>
                        <td><input type="number" name="cantidad" id="cantidad"></td>
                        <td>1245</td>
                        <td>Promo 2</td>
                        <td>$8.500</td>
                    </tr>
                    <tr>
                        <td><input type="number" name="cantidad" id="cantidad"></td>
                        <td>1245</td>
                        <td>Promo 3</td>
                        <td>$10.500</td>
                    </tr>
                </table>
                <button id="Productos" class="blue-button">Regresar</button>
                <button id="guardarProducto" class="add">Guardar</button>
            </div>`


const detalle = `<div class="window" id="detalle">
                <button id="cerrarVentana">x</button>
                <h2>Detalle</h2>

                <table class="tablaDetalles">
                    <tr>
                        <th>Cantidad</th>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Precio unitario</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>1245</td>
                        <td>Promo 1</td>
                        <td>$4.500</td>
                        <td>$13.500</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>1245</td>
                        <td>Promo 2</td>
                        <td>$8.500</td>
                        <td>$17.000</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1245</td>
                        <td>Promo 3</td>
                        <td>$10.500</td>
                        <td>$10.500</td>
                    </tr>
                </table>
                <table class="total" id="result">
                    <tr>
                        <th>neto</th><td id="neto">$41.000</td>
                    </tr>
                    <tr>
                        <th>iva 19%</th><td id="iva">$41.000</td>
                    </tr>
                    <tr>
                        <th>Total</th><td id="total">$41.000</td>
                    </tr>
                </table>
                <button id="Productos" class="blue-button">Regresar</button>
                <button id="guardarProducto" class="add">Guardar</button>
            </div>`

const tarifas=`<div class="window" id="tarifas">
<button id="cerrarVentana">x</button>
<h2>Tarifas</h2>
<button id="agregarTarifa" class="add">Nueva tarifa</button>
<table>
    <tr>
        <th></th>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio/min</th>
        <th></th>
    </tr>
    <tr>

        <td><button class="edit" id="editarTarifa">Editar</button></td>
        <td>1245</td>
        <td>Tarifa normal</td>
        <td>$200</td>
        <td><button class="erase" id="eliminarTarifa">Eliminar</button></td>
    </tr>
    <tr>
        <td><button class="edit" id="editarTarifa">Editar</button></td>
        <td>1250</td>
        <td>Tarifa socio</td>
        <td>$120</td>
        <td><button class="erase" id="eliminarTarifa">Eliminar</button></td>
    </tr>
    <tr>
        <td><button class="edit" id="editarTarifa">Editar</button></td>
        <td>1260</td>
        <td>Tarifa Premium</td>
        <td>$300</td>
        <td><button class="erase" id="eliminarTarifa">Eliminar</button></td>
    </tr>
</table>
</div>`

const configTarifa=`<div class="window" id="configTarifa">
<button id="cerrarVentana">x</button>
<h2>Tarifa</h2>
<table>
    <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio/min</th>
    </tr>
    <tr>

        <td><input type="number" name="codigo" placeholder="ej: 1516"></td>
        <td><input type="text" name="nombre" placeholder="ej: Tarifa 2"></td>
        <td><input type="number" name="precio" placeholder="ej: 150"></td>
    </tr>
</table>
<button id="Productos" class="blue-button">Regresar</button>
<button id="guardarProducto" class="add">Guardar</button>
</div>`

const signIn=`<div class="window" id="signIn">
<button id="cerrarVentana">x</button>
<h2>Iniciar Sesión</h2>
<table>
    <tr>
        <th>Nombre de usuario</th>
        <th>Contraseña</th>
    </tr>
    <tr>

        <td><input type="text" name="username" ></td>
        <td><input type="password" name="pass" ></td>

    </tr>
</table>
<button id="logIn" class="add">Ingresar</button>
</div>`

const historialVentas= `<div class="window" id="historial">
<button id="cerrarVentana">x</button>
<h2>Historial de ventas</h2>
<table class="tablaDetalles">
    <tr>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Nombre</th>
        <th>Detalle</th>
        <th>Total</th>
    </tr>
    <tr>
        <td>01/01/21</td>
        <td>17:30</td>
        <td>Jhon Doe</td>
        <td><button class="yellow-btn">Detalle</button></td>
        <td>$25.500</td>
    </tr>
    <tr>
        <td>01/01/21</td>
        <td>17:30</td>
        <td>Jhon Doe</td>
        <td><button class="yellow-btn">Detalle</button></td>
        <td>$25.500</td>
    </tr>
    <tr>
        <td>01/01/21</td>
        <td>17:30</td>
        <td>Jhon Doe</td>
        <td><button class="yellow-btn">Detalle</button></td>
        <td>$25.500</td>
    </tr>
</table>
<table class="total" id="result">
    <tr>
        <th>Total</th><td id="total-historial">$41.000</td>
    </tr>
</table>
</div>`