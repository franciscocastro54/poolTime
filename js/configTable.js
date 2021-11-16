const configTable = '<div class="window" id="configTable">
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
</div>'



const productList= '<div class="window" id="productList">
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
</div>'


const configProduct = '<div class="window" id="configProduct">
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
</div>'

const registrarProducto = '<div class="window" id="registrarProducto">
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
</div>'

const addProducts='<div class="window" id="addProducts">
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
            </div>'