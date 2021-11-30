//show and close
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
function closeWindow(id){
    document.getElementById(id).parentNode.removeChild(document.getElementById(id))
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
function AgregarProductoshow(iddetalle) {
    const AgregarProducto = document.createElement('div')
    AgregarProducto.innerHTML = addProducts
    document.getElementById('article').appendChild(AgregarProducto)
    for (producto in ProductList) {
        document.getElementById('addnompro').innerHTML =
            document.getElementById('addnompro').innerHTML +
            `\n  <option value="${producto}">${ProductList[producto].Nombre}</option>`
    }
document.getElementById('guardarProducto').addEventListener("click",() =>AddPDetalle(iddetalle))
document.getElementById('cantidad').oninput=changerselect
document.getElementById('addnompro').oninput=changerselect
}
function changerselect(){
   
    document.getElementById('codProducto').innerHTML= document.getElementById('addnompro').value
    document.getElementById('preProducto').innerHTML=parseInt(ProductList[ document.getElementById('addnompro').value].Precio)*
    document.getElementById('cantidad').value
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
  let TotalResult=0
    for(var i=0 ;i<historialList.length;i++){
    Fecha=new Date(historialList[i].HoraInicio)
    document.getElementById('HistorialVentas').innerHTML+=`
    <tr>
    <td>${Fecha.getDate() + "/"+( Fecha.getMonth()+1)+"/"+Fecha.getFullYear()}</td>
    <td>${Fecha.getHours()+":"+Fecha.getMinutes()}</td>
    <td>${historialList[i].Cliente}</td>
    <td><button class="yellow-btn" onclick="detalleHistorialshow(${i})">Detalle</button></td>
    <td>$${historialList[i].Total}</td>
</tr>
    `
TotalResult+=    parseInt(historialList[i].Total)

}
document.getElementById('total-historial').innerHTML="$"+TotalResult
}
function historialVentasclose() {
    document.getElementById('historial').parentNode.removeChild(document.getElementById('historial'))
}
function detalleHistorialshow(idHistorial){
    const detalleshow = document.createElement('div')
    detalleshow.innerHTML = detalle
    document.getElementById('article').appendChild(detalleshow)
 document.getElementById('tablaDetalles')
  let Total=0; 
  for(var i=0;i<historialList[idHistorial].Productos.length;i++){
      let aux=historialList[idHistorial].Productos[i]
      document.getElementById('tablaDetalles').innerHTML=document.getElementById('tablaDetalles').innerHTML+`
<tr>
<td>${aux.Cantidad}</td>
<td>${aux.Codigo}</td>
<td>${aux.Nombre}</td>
<td>$${aux.Precio}</td>
<td>$${aux.Total}</td>
</tr>
`
Total+=aux.Total
    }  

    let date = new Date(parseInt(historialList[idHistorial].HoraInicio));
    date = new Date(Date.now() - date.getTime());
    document.getElementById('tablaDetalles').innerHTML=document.getElementById('tablaDetalles').innerHTML+`
    <tr>
    <td>${date.getMinutes()}</td>
    <td>----</td>
    <td>Tiempo(min)</td>
    <td>$${historialList[idHistorial].Tarifa}</td>
    <td>$${parseInt(historialList[idHistorial].Tarifa)*parseInt(historialList[idHistorial].Minutos)}</td>
    </tr>
    `
    Total+=parseInt(historialList[idHistorial].Tarifa)*parseInt(historialList[idHistorial].Minutos);
document.getElementById('result').innerHTML= `
<tr>
<th>neto</th><td id="neto">$${Total*1.19}</td>
</tr>
<tr>
<th>iva 19%</th><td id="iva">$${Total*0.19}</td>
</tr>
<tr>
<th>Total</th><td id="total">$${Total}</td>
</tr>
`


}
function detalleshow(iddetalle) {
    const detalleshow = document.createElement('div')
    detalleshow.innerHTML = detalle
    document.getElementById('article').appendChild(detalleshow)
 document.getElementById('tablaDetalles')
  let Total=0; 
  for(var i=0;i<detallesList[iddetalle].Productos.length;i++){
      let aux=detallesList[iddetalle].Productos[i]
      document.getElementById('tablaDetalles').innerHTML=document.getElementById('tablaDetalles').innerHTML+`
<tr>
<td>${aux.Cantidad}</td>
<td>${aux.Codigo}</td>
<td>${aux.Nombre}</td>
<td>$${aux.Precio}</td>
<td>$${aux.Total}</td>
</tr>
`
Total+=aux.Total
    }  

    let date = new Date(parseInt(detallesList[iddetalle].HoraInicio));
    date = new Date(Date.now() - date.getTime());
    document.getElementById('tablaDetalles').innerHTML=document.getElementById('tablaDetalles').innerHTML+`
    <tr>
    <td>${date.getMinutes()}</td>
    <td>----</td>
    <td>Tiempo(min)</td>
    <td>$${detallesList[iddetalle].Tarifa}</td>
    <td>$${parseInt(detallesList[iddetalle].Tarifa)*parseInt(detallesList[iddetalle].Minutos)}</td>
    </tr>
    `
    Total+=parseInt(detallesList[iddetalle].Tarifa)*parseInt(detallesList[iddetalle].Minutos);
document.getElementById('result').innerHTML= `
<tr>
<th>neto</th><td id="neto">$${Total*1.19}</td>
</tr>
<tr>
<th>iva 19%</th><td id="iva">$${Total*0.19}</td>
</tr>
<tr>
<th>Total</th><td id="total">$${Total}</td>
</tr>
`

}
function detalleclose() {
    document.getElementById('detalle').parentNode.removeChild(document.getElementById('detalle'))
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
    <button id="${card}detalles" class="details-btn" onclick="detalleshow('${card}')">Detalle</button>
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
        sessionStorage.setItem('productList', JSON.stringify(ProductList));
        console.log(sessionStorage)
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
        sessionStorage.setItem('productList', JSON.stringify(ProductList));
        console.log(ProductList)
        editProductoclose()
    }
}
function eliminarProducto(codigo) {

    delete ProductList[codigo]
    sessionStorage.setItem('productList', JSON.stringify(ProductList));
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
        sessionStorage.setItem('tarifaList', JSON.stringify(TarifaList));
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
        sessionStorage.setItem('tarifaList', JSON.stringify(TarifaList));
        console.log(TarifaList)
        modTarifaclose()
    }

}
function eliminarTarifa(codigo) {

    delete TarifaList[codigo]
    sessionStorage.setItem('tarifaList', JSON.stringify(TarifaList));
    Tarifaclose()
    Tarifashow()
}


let MesaList = {}

function agregarMesa() {
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("tarifaselect").value
    let flag = () => { for (nom in MesaList) { if (nom == nombre) return false } return true }
    console.log(MesaList)
    
    if (nombre && precio && flag()) {
        MesaList = Object.assign(MesaList, JSON.parse(`{"${nombre}" :{ "Precio":${TarifaList[precio].Precio},"Tarifa" : "${precio}","Estado":"Vacia","Cliente": ""}}`));
        sessionStorage.setItem('mesaList', JSON.stringify(MesaList))
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
        sessionStorage.setItem('mesaList', JSON.stringify(MesaList));
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
        sessionStorage.setItem('mesaList', JSON.stringify(MesaList));
        mesaCardClose()
        mesaCardshow()
        mesaclose()
        mesashow()



    }


}



function AddPDetalle(idCuenta){
    let  codigo=document.getElementById("codProducto").innerHTML
    let nombre=ProductList[codigo].Nombre
    let cantidad=document.getElementById("cantidad").value
    let precio= ProductList[codigo].Precio
detallesList[idCuenta].Productos.push(JSON.parse(
    `{"Nombre": "${nombre}",
"Codigo":"${codigo}",
"Cantidad": ${cantidad},
"Precio": ${precio},
"Total": ${parseInt(precio)*parseInt(cantidad)}}
    `))
alert("Producto agregado")
    sessionStorage.setItem('detallesList', JSON.stringify(detallesList));
console.log(detallesList)
}



//Registro de tiempo
let detallesList = {}
let historialList = []
function IniciarTiempo(nombreMesa) {
    const date = new Date();
    detallesList = Object.assign(detallesList, JSON.parse(`{"${nombreMesa}" : {
        "HoraInicio":${date.getTime()},
        "HoraTermino":null,
        "Minutos": 0,
        "Cliente":"${prompt("Ingrese nombre del cliente", "Sin nombre")}",
        "Encargado": null,
        "Productos":[],
        "Tarifa":${MesaList[nombreMesa].Precio},
        "Total": 0,
        "IdActualizacion":null
}}`));
sessionStorage.setItem('detallesList', JSON.stringify(detallesList));
    document.getElementById(nombreMesa + "Horain").innerHTML = 'Hora de inicio: ' + date.getHours() + ":" + date.getMinutes()
    //document.getElementById('control').addEventListener('click',()=>PausarTiempo(nombreMesa))
    document.getElementById(nombreMesa + 'control').innerHTML = 'Pausar'
    document.getElementById(nombreMesa + 'control').parentNode.replaceChild(document.getElementById(nombreMesa + 'control').cloneNode(true), document.getElementById(nombreMesa + 'control'))
    document.getElementById(nombreMesa + 'control').onclick = () => { };
    document.getElementById(nombreMesa + 'detener').addEventListener('click', () => DetenerTiempo(nombreMesa))
    document.getElementById(nombreMesa + "Cliente").innerHTML = `Nombre de Cliente:${detallesList[nombreMesa].Cliente}`
    console.log(detallesList)
    detallesList[nombreMesa].IdActualizacion = setInterval(() => actualizartemporizador(nombreMesa), 500);
    document.getElementById(nombreMesa + 'agregar').addEventListener('click', () => AgregarProductoshow(nombreMesa))
}
function actualizartemporizador(nombreMesa) {
    let Total=0; 
    for(var i=0;i<detallesList[nombreMesa].Productos.length;i++){
        let aux=detallesList[nombreMesa].Productos[i]
  Total+=aux.Total
      }  

    let time = detallesList[nombreMesa].HoraInicio;
    let date = new Date(parseInt(time));

    date = new Date(Date.now() - date.getTime());
    detallesList[nombreMesa].Minutos=date.getMinutes()
    console.log(parseInt(detallesList[nombreMesa].Tarifa) * date.getMinutes);
    document.getElementById(nombreMesa + "Tempo").innerHTML = 'Tiempo: ' + Math.trunc(date.getTime() / 60000) + 'Min ' + Math.trunc((date.getTime() % 60000) / 1000) + 'seg'
    document.getElementById(nombreMesa + "Costo").innerText =
        `Total: $${(detallesList[nombreMesa].Tarifa * (Math.trunc(date.getTime() / 60000)))+Total}`
 



}
function PausarTiempo(nombreMesa) {
    console.log('pausar' + nombreMesa)
    console.log(nombreMesa)
}
function DetenerTiempo(nombreMesa) {
    clearInterval(detallesList[nombreMesa].IdActualizacion)
    document.getElementById(nombreMesa + 'agregar').parentNode.replaceChild(document.getElementById(nombreMesa + 'agregar').cloneNode(true), document.getElementById(nombreMesa + 'agregar'))
    document.getElementById(nombreMesa + 'detener').parentNode.replaceChild(document.getElementById(nombreMesa + 'detener').cloneNode(true), document.getElementById(nombreMesa + 'detener'))
    document.getElementById(nombreMesa + 'control').innerHTML = 'Iniciar'
    document.getElementById(nombreMesa + 'control').addEventListener('click', () => IniciarTiempo(nombreMesa))

let Total=0
for(var i=0;i<detallesList[nombreMesa].Productos.length;i++){
    let aux=detallesList[nombreMesa].Productos[i]
Total+=aux.Total
  }  
  let date = new Date(parseInt(detallesList[nombreMesa].HoraInicio));
  date = new Date(Date.now() - date.getTime());
  Total+=parseInt(detallesList[nombreMesa].Tarifa)*date.getMinutes();
  detallesList[nombreMesa].Total=Total
  sessionStorage.setItem('detallesList', JSON.stringify(detallesList));
  historialList.push(detallesList[nombreMesa])
}