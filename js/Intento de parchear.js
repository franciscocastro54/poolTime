//show and close

function closeWindow(id) {
    document.getElementById(id).parentNode.removeChild(document.getElementById(id))
}

function mesashow() {
    const mesaconfig = document.createElement('div')
    mesaconfig.innerHTML = configTable
    document.getElementById('article').appendChild(mesaconfig)
    for (nom in MesaList) {
        let addmesa = document.createElement("tr")
        addmesa.innerHTML = ` <td><button class="edit" id="editarMesa" onclick="modmesashow('${nom}')">Editar</button></td>
            <td>${nom}</td>
            <td>${TarifaList[MesaList[nom].Tarifa].Nombre}</td>
            <td><p class="state-free">${MesaList[nom].Estado}</p></td>
            <td><button class="erase" id="eliminarMesa" onclick="eliminarMesa('${nom}')">Eliminar</button></td>`
        document.getElementById("Tabla_Mesas").appendChild(addmesa)
    }
}
function mesaclose() {
    document.getElementById('configTable').parentNode.removeChild(document.getElementById('configTable'))
}
function productconfigshow() {
    const productconfig = document.createElement('div')
    productconfig.innerHTML = productList
    document.getElementById('article').appendChild(productconfig)
    for (codproducto in ProductList) {
        let addProducList = document.createElement("tr")
        addProducList.innerHTML = ` <td><button class="edit" id="editarProducto" onclick="editProductoshow(${codproducto})">Editar</button></td>
    <td>${codproducto}</td>
    <td>${ProductList[codproducto].Nombre}</td>
    <td>${ProductList[codproducto].Precio}</td>
    <td><button class="erase" id="eliminarProducto" onclick="eliminarProducto(${codproducto})">Eliminar</button></td>`
        document.getElementById("Tabla_Producto").appendChild(addProducList)
    }
}


function productconfigclose() {
    document.getElementById('productList').parentNode.removeChild(document.getElementById('productList'))

}
function editProductoshow(codigo) {
    const editProducto = document.createElement('div')
    editProducto.innerHTML = configProduct
    document.getElementById('article').appendChild(editProducto)
    //document.getElementById('codigo').value=codigo
    document.getElementById('codigo').innerText = codigo;
    document.getElementById('nombre').value = ProductList[codigo].Nombre;
    document.getElementById('precio').value = ProductList[codigo].Precio;
}
function editProductoclose() {
    document.getElementById('configProduct').parentNode.removeChild(document.getElementById('configProduct'))
    productconfigclose()
    productconfigshow()
}
function registrarProductoshow() {
    const registrarProductoshow = document.createElement('div')
    registrarProductoshow.innerHTML = registrarProducto
    document.getElementById('article').appendChild(registrarProductoshow)
}
function registrarProductosclose() {
    document.getElementById('registrarProducto').parentNode.removeChild(document.getElementById('registrarProducto'))
    productconfigclose()
    productconfigshow()
}
function AgregarProductoshow(nombreMesa) {
    let productos = ""
    for (const producto in ProductList) {
        productos += `<tr>
            <td><input type="number" name="cantidad" id="cantidad"></td>
            <td>${producto}</td>
            <td>${ProductList[producto].Nombre}</td>
            <td>${ProductList[producto].Precio}</td>
        </tr>`
    }
    const AgregarProducto = document.createElement('div')
    AgregarProducto.innerHTML = `<div class="window" id="addProducts">
                <button id="cerrarVentana" onclick="AgregarProductoclose()">x</button>
                <h2>Agregar Producto</h2>
                <table>
                    <tr>
                        <th>Cantidad</th>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Precio unidad</th>
                    </tr>
                    ${productos}
                </table>
                <button id="guardarProducto" onclick=guardarProductos(${nombreMesa}) class="add">Guardar</button>
            </div>`
    document.getElementById('article').appendChild(AgregarProducto)
}

function guardarProductos(nombreMesa) {
    //TO DO
}

function AgregarProductoclose() {
    document.getElementById('addProducts').parentNode.removeChild(document.getElementById('addProducts'))
}
function Tarifashow() {
    const Tarifa = document.createElement('div')
    Tarifa.innerHTML = tarifas
    document.getElementById('article').appendChild(Tarifa)
    for (codtarifa in TarifaList) {
        let addTarifaList = document.createElement("tr")
        addTarifaList.innerHTML =
            `<td><button class="edit" id="editarTarifa" onclick="modTarifashow(${codtarifa})">Editar</button></td>
    <td>${codtarifa}</td>
    <td>${TarifaList[codtarifa].Nombre}</td>
    <td>${TarifaList[codtarifa].Precio}</td>
    <td><button class="erase" id="eliminarTarifa" onclick="eliminarTarifa(${codtarifa})">Eliminar</button></td>`
        document.getElementById("tabla_Tarifa").appendChild(addTarifaList)
    }
}
function Tarifaclose() {
    document.getElementById('tarifas').parentNode.removeChild(document.getElementById('tarifas'))
}
function configTarifashow() {
    const configTarifashow = document.createElement('div')
    configTarifashow.innerHTML = configTarifa
    document.getElementById('article').appendChild(configTarifashow)


}
function configTarifaclose() {
    document.getElementById('configTarifa').parentNode.removeChild(document.getElementById('configTarifa'))
    Tarifaclose()
    Tarifashow()
}
function modTarifashow(codigo) {
    const configTarifashow = document.createElement('div')
    configTarifashow.innerHTML = modTarifa
    document.getElementById('article').appendChild(configTarifashow)
    document.getElementById('codigo').innerText = codigo;
    document.getElementById('nombre').value = TarifaList[codigo].Nombre;
    document.getElementById('precio').value = TarifaList[codigo].Precio;

}
function modTarifaclose() {
    document.getElementById('configTarifa').parentNode.removeChild(document.getElementById('configTarifa'))
    Tarifaclose()
    Tarifashow()
}
function signInshow() {
    const signInshow = document.createElement('div')
    signInshow.innerHTML = signIn
    document.getElementById('article').appendChild(signInshow)
}
function signInclose() {
    document.getElementById('signIn').parentNode.removeChild(document.getElementById('signIn'))
}
function historialVentasshow() {
    const historialVentasshow = document.createElement('div')
    historialVentasshow.innerHTML = historialVentas
    document.getElementById('article').appendChild(historialVentasshow)
}
function historialVentasclose() {
    document.getElementById('historial').parentNode.removeChild(document.getElementById('historial'))
}
function detalleshow() {
    const detalle = document.createElement("div");
    detalle.id = 'detalle';
    detalle.className = 'window';
    const article = document.getElementById('article');
    const contenido = infoDetalles
    detalle.innerHTML = contenido;
    article.appendChild(detalle);
}
function detalleclose() {
    const article = document.getElementById('article');
    const detalle = document.getElementById('detalle');
    article.removeChild(detalle);
}

function mesaCardshow() {
    for (card in MesaList) {
        const mesaCardshow = document.createElement('div')
        mesaCardshow.innerHTML = ` <div class="card">
        <h2>${card}</h2>
        <img class="card-photo" src="./img/table.jpg" alt="">
        <button id="${card}agregar">Agregar producto</button>
        <p id='${card + "Cliente"}'>Nombre de Cliente:</p>
        <p id='${card + "Horain"}'>Hora de inicio: --:--</p>
        <p id='${card + "Tempo"}'>Tiempo: 0 min 0 seg</p>
        <p id='${card + "Costo"}'>Total: $----</p>
        <button id="${card}control" class="blue-button" onclick='IniciarTiempo("${card}")'>Iniciar</button>
        <button id="${card}detener" class="stop-btn" onclick="">Detener</button>
        <button id="${card}detalles" class="details-btn" onclick="detalleshow()">Detalle</button>
        </div>`
        document.getElementById('mesas').appendChild(mesaCardshow)
    }
}

function mesaCardClose() {
    document.getElementById('mesas').innerHTML = "";

}
function addmesashow() {
    const addmesashow = document.createElement('div')
    addmesashow.innerHTML = addMesa
    document.getElementById('article').appendChild(addmesashow)
    for (tarifa in TarifaList) {
        document.getElementById('tarifaselect').innerHTML =
            document.getElementById('tarifaselect').innerHTML +
            `\n  <option value="${tarifa}">${TarifaList[tarifa].Nombre}</option>`
    }
}
function addmesaclose() {
    document.getElementById('addMesa').parentNode.removeChild(document.getElementById('addMesa'))

}
function modmesashow(nom) {
    const modmesashow = document.createElement('div')
    modmesashow.innerHTML = modMesa
    document.getElementById('article').appendChild(modmesashow)
    for (tarifa in TarifaList) {
        document.getElementById('tarifaselect').innerHTML =
            document.getElementById('tarifaselect').innerHTML +
            `\n  <option value="${tarifa}">${TarifaList[tarifa].Nombre}</option>`
    }
    document.getElementById("nombre").value = nom
    document.getElementById('tarifaselect').value = MesaList[nom].Tarifa
    document.getElementById('guardarProducto').addEventListener("click", () => modificarMesa(nom))
}
function modmesaClose() {
    document.getElementById('modMesa').parentNode.removeChild(document.getElementById('modMesa'))

}

//Crud
let ProductList = {}
function AgregarProducto() {
    let codigo = document.getElementById("codigo").value
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value
    let flag = () => { for (cod in ProductList) { if (cod == codigo) return false } return true }
    if (codigo && nombre && precio && flag()) {
        ProductList = Object.assign(ProductList, JSON.parse(`{"${codigo}" : { "Nombre": "${nombre}", "Precio": ${precio}}}`));
        console.log(ProductList)
        registrarProductosclose()
    }
}
function ModificarProducto() {
    let codigo = document.getElementById("codigo").innerHTML
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value
    if (nombre, precio) {
        ProductList = Object.assign(ProductList, JSON.parse(`{"${codigo}" : {"Nombre": "${nombre}", "Precio": ${precio}}}`));
        console.log(ProductList)
        editProductoclose()
    }
}
function eliminarProducto(codigo) {

    delete ProductList[codigo]
    productconfigclose()
    productconfigshow()

}
let TarifaList = {}
function agregarTarifa() {
    let codigo = document.getElementById("codigo").value
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value
    let flag = () => { for (cod in TarifaList) { if (cod == codigo) return false } return true }
    if (codigo && nombre && precio && flag()) {
        TarifaList = Object.assign(TarifaList, JSON.parse(`{"${codigo}" : { "Nombre": "${nombre}", "Precio": ${precio}}}`));
        console.log(TarifaList)
        configTarifaclose()
    }
}
function modificarTarifa() {
    let codigo = document.getElementById("codigo").innerHTML
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value
    if (nombre, precio) {
        TarifaList = Object.assign(ProductList, JSON.parse(`{"${codigo}" : {"Nombre": "${nombre}", "Precio": ${precio}}}`));
        console.log(TarifaList)
        modTarifaclose()
    }

}
function eliminarTarifa(codigo) {

    delete TarifaList[codigo]
    Tarifaclose()
    Tarifashow()
}


let MesaList = {}

function agregarMesa() {
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("tarifaselect").value
    let flag = () => { for (nom in MesaList) { if (nom == nombre) return false } return true }
    if (nombre && precio && flag()) {
        MesaList = Object.assign(MesaList, JSON.parse(`
            {"${nombre}" :
                { "Precio":${TarifaList[precio].Precio},
                "Tarifa" : "${precio}",
                "Estado":"Vacia",
                "Cliente": "",
                "Fecha": "",
                "Tiempo": "",
                "Total": ""
               }}`));
        console.log(MesaList)
        mesaCardClose()
        mesaCardshow()
        addmesaclose()
        mesaclose()
        mesashow()
    }

}
function modificarMesa(nom) {
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("tarifaselect").value

    if (nombre && precio && MesaList[nom].Estado == "Vacia") {
        delete MesaList[nom]
        MesaList = Object.assign(MesaList, JSON.parse(`{"${nombre}" :{ "Precio":${TarifaList[precio].Precio},"Tarifa" : "${precio}","Estado":"Vacia","Cliente": ""}}`));
        console.log(MesaList)
        mesaCardClose()
        mesaCardshow()
        modmesaClose()
        mesaclose()
        mesashow()
    }


}
function eliminarMesa(nom) {
    if (MesaList[nom].Estado == "Vacia") {
        delete MesaList[nom]
        mesaCardClose()
        mesaCardshow()
        mesaclose()
        mesashow()



    }


}




const cronometro = (nombreMesa) => setInterval(function () {

    let segundos ++;
    if ((segundos < 10) || (segundos == 0)) { segundos = "0" + segundos }

    if (segundos == 60) {
        segundos = 0;
    }

    if (segundos == 0) {
        minutos++;
        MesaList[`${nombreMesa}`].Tiempo = minutos
        MesaList[`${nombreMesa}`].Total += MesaList[`${nombreMesa}`].Precio
        MesaList[`${nombreMesa}`].Cliente = prompt("Nombre de cliente");
        document.getElementById(nombreMesa+"Costo").innerHTML = `Total: $ ${MesaList[`${nombreMesa}`].Total}`
        if (minutos < 10) { minutos = "0" + minutos }
    }
    document.getElementById(nombreMesa+"Tempo").innerHTML = `Tiempo: ${minutos} min ${segundos} seg`
}, 1000)


//Registro de tiempo
let contadores = {}
function IniciarTiempo(nombreMesa) {
    segundos = 0
    minutos = 0

    // index = MesaList.findIndex( );
    index = 0;
  
        const date = new Date();
    MesaList[`${nombreMesa}`].Tiempo = 0
    MesaList[`${nombreMesa}`].Fecha = date
    MesaList[`${nombreMesa}`].Total = 0

    contadores = Object.assign(contadores, JSON.parse(`{"${nombreMesa}" : ${cronometro(nombreMesa, index)}}`))
    document.getElementById(nombreMesa+"Costo").innerHTML = `Total: $----}`
    // contadores = Object.assign(contadores, JSON.parse(`{"${nombreMesa}" : ${date.getTime()}}`));
   document.getElementById(nombreMesa + "Horain").innerHTML = 'Hora de inicio: ' + date.getHours() + ":" + date.getMinutes()
    //document.getElementById('control').addEventListener('click',()=>PausarTiempo(nombreMesa))
    document.getElementById(nombreMesa +'control').innerHTML = 'Pausar'
    document.getElementById(nombreMesa +'control').parentNode.replaceChild(document.getElementById(nombreMesa +'control').cloneNode(true), document.getElementById(nombreMesa +'control'))
    document.getElementById(nombreMesa +'control').onclick = () => { };
    document.getElementById(nombreMesa +'detener').addEventListener('click', () => DetenerTiempo(nombreMesa))


}
function PausarTiempo(nombreMesa) {
    console.log('pausar' + nombreMesa)
    console.log(nombreMesa)

}
function DetenerTiempo(nombreMesa) {
    //  let time = contadores[nombreMesa];
    //  let date = new Date(parseInt(time));
    //   console.log(date.getTime());
    //   date = new Date(Date.now() - date.getTime());

    //   document.getElementById('cobro').innerHTML = 'Tiempo: ' + Math.trunc(date.getTime() / 60000) + 'Min ' + Math.trunc((date.getTime() % 60000) / 1000) + 'seg'
    clearInterval(contadores[nombreMesa])
    document.getElementById(nombreMesa +'detener').parentNode.replaceChild(document.getElementById(nombreMesa +'detener').cloneNode(true), document.getElementById(nombreMesa +'detener'))
    document.getElementById(nombreMesa +'control').innerHTML = 'Iniciar'
    document.getElementById(nombreMesa +'control').addEventListener('click', () => IniciarTiempo(nombreMesa))
}


