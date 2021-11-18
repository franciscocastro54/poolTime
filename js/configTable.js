const configTable = `<div class="window" id="configTable">
<button id="cerrarVentana" onclick="mesaclose()">x</button>
<h2>Modificar Mesas</h2>
<button id="agregarMesa" class="add" onclick="addmesashow()">Agregar Mesa</button>
<table id="Tabla_Mesas">
    <tr>
        <th></th>
        <th>Nombre</th>
        <th>Tarifa</th>
        <th>Estado</th>
        <th></th>
    </tr>
 
</table>
</div>`



const productList= `<div class="window" id="productList">
<button id="cerrarVentana" onclick="productconfigclose()">x</button>
<h2>Productos</h2>
<button id="agregarProducto" class="add" onclick="registrarProductoshow()">Nuevo producto</button>
<table id="Tabla_Producto">
    <tr>
        <th></th>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th></th>
    </tr>
  
</table>
</div>`


const configProduct = `<div class="window" id="configProduct">
<button id="cerrarVentana" onclick="editProductoclose()">x</button>
<h2>Modificar Producto</h2>
<table>
    <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
    </tr>
    <tr>

    <td><p type="text" name="codigo" id="codigo"></p></td>
    <td><input type="text" name="nombre" id="nombre" placeholder="ej: Promo 5"></td>
    <td><input type="number" name="precio" id="precio" placeholder="ej: 10.000"></td>
    </tr>
</table>

<button id="guardarProducto" class="add" onclick="ModificarProducto()">Guardar</button>
</div>`

const registrarProducto = `<div class="window" id="registrarProducto">
<button id="cerrarVentana" onclick="registrarProductosclose()">x</button>
<h2>Registrar Producto</h2>
<table>
    <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
    </tr>
    <tr>

        <td><input type="number" name="codigo" id="codigo" placeholder="ej: 1516"></td>
        <td><input type="text" name="nombre" id="nombre" placeholder="ej: Promo 5"></td>
        <td><input type="number" name="precio" id="precio" placeholder="ej: 10.000"></td>
    </tr>
</table>

<button id="guardarProducto" class="add" onclick="AgregarProducto()">Guardar</button>
</div>`

const addProducts=`<div class="window" id="addProducts">
                <button id="cerrarVentana" onclick="AgregarProductoclose()">x</button>
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
                </table>
                <button id="Productos" class="blue-button">Regresar</button>
                <button id="guardarProducto" class="add">Guardar</button>
            </div>`

//Revisar
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
<button id="cerrarVentana" onclick="Tarifaclose()">x</button>
<h2>Tarifas</h2>
<button id="agregarTarifa" class="add" onclick="configTarifashow()">Nueva tarifa</button>
<table id="tabla_Tarifa">
    <tr>
        <th></th>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio/min</th>
        <th></th>
    </tr>
    
 
</table>
</div>`

const configTarifa=`<div class="window" id="configTarifa">
<button id="cerrarVentana" onclick="configTarifaclose()">x</button>
<h2>Tarifa</h2>
<table>
    <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio/min</th>
    </tr>
    <tr>

        <td><input type="number" name="codigo"  id="codigo" placeholder="ej: 1516"></td>
        <td><input type="text" name="nombre" id="nombre" placeholder="ej: Tarifa 2"></td>
        <td><input type="number" name="precio" id="precio" placeholder="ej: 150"></td>
    </tr>
</table>
<button id="guardarProducto" class="add" onclick="agregarTarifa()">Guardar</button>
</div>`
const modTarifa=`<div class="window" id="configTarifa">
<button id="cerrarVentana" onclick="configTarifaclose()">x</button>
<h2>Tarifa</h2>
<table>
    <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio/min</th>
    </tr>
    <tr>

        <td><p type="text" name="codigo" id="codigo"></p></td>
        <td><input type="text" name="nombre" id="nombre" placeholder="ej: Tarifa 2"></td>
        <td><input type="number" name="precio" id="precio" placeholder="ej: 150"></td>
    </tr>
</table>
<button id="guardarProducto" class="add" onclick="modificarTarifa()">Guardar</button>
</div>`
const signIn=`<div class="window" id="signIn">
<button id="cerrarVentana" onclick="signInclose()">x</button>
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
<button id="cerrarVentana" onclick="historialVentasclose()">x</button>
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


const infoDetalles=`<button id="cerrarVentana" onclick='detalleclose()'>x</button>
<h2>Detalle</h2>
<table>
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

</table>`


const addMesa=`<div class="window" id="addMesa">
<button id="cerrarVentana" onclick="addmesaclose()">x</button>
<h2>Registrar Mesa</h2>
<table>
    <tr>
        <th>Nombre</th>
        <th>Tarifa</th>
     
    </tr>
    <tr>

        <td><input type="text" name="nombre" id="nombre" placeholder="ej: Promo 5"></td>
        <td><select name="tarifa" id="tarifaselect">
        
      </select></td>
      
    </tr>
</table>

<button id="guardarProducto" class="add" onclick="agregarMesa()">Guardar</button>
</div>`
const modMesa=`<div class="window" id="modMesa">
<button id="cerrarVentana" onclick="modmesaClose()">x</button>
<h2>Modificar Mesa</h2>
<table>
    <tr>
        <th>Nombre</th>
        <th>Tarifa</th>
     
    </tr>
    <tr>

        <td><input type="text" name="nombre" id="nombre" placeholder="ej: Promo 5"></td>
        <td><select name="tarifa" id="tarifaselect">
        
      </select></td>
      
    </tr>
</table>

<button id="guardarProducto" class="add" >Guardar</button>
</div>`