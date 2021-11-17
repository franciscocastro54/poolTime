/*<div class="window" id="detalle">
                <button id="cerrarVentana">x</button>
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
                <div id="result">

                </div>
                <button id="Productos" class="blue-button">Regresar</button>
                <button id="guardarProducto" class="add">Guardar</button>
            </div> */

function detalleshow(){
const detalle=    document.createElement("div");
detalle.id='detalle';
detalle.className='window';
const article=document.getElementById('article');
const contenido=`<button id="cerrarVentana" onclick='detalleclose()'>x</button>
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
<div id="result">

</div>
<button id="Productos" class="blue-button">Regresar</button>
<button id="guardarProducto" class="add">Guardar</button>`
detalle.innerHTML=contenido;
article.appendChild(detalle);
}
function detalleclose(){
    const article=document.getElementById('article');
    const detalle=document.getElementById('detalle');
    article.removeChild(detalle);
}
let contadores={}
function IniciarTiempo(nombreMesa){
const date = new Date();
contadores=Object.assign(contadores,JSON.parse(`{"${nombreMesa}" : ${date.getTime()}}`));
document.getElementById('time').innerHTML='Hora de inicio: '+date.getHours()+":"+date.getMinutes()
//document.getElementById('control').addEventListener('click',()=>PausarTiempo(nombreMesa))
document.getElementById('control').innerHTML='Pausar'
document.getElementById('control').parentNode.replaceChild(document.getElementById('control').cloneNode(true),document.getElementById('control'))
document.getElementById('control').onclick=()=>{};
document.getElementById('detener').addEventListener('click',()=>DetenerTiempo(nombreMesa))


}
function PausarTiempo(nombreMesa){
console.log('pausar'+nombreMesa)
console.log(nombreMesa)

}
function DetenerTiempo(nombreMesa){ 
  let time=contadores[nombreMesa];
  let date = new Date(parseInt(time));
  console.log(date.getTime());
date = new Date(Date.now()-date.getTime());
document.getElementById('cobro').innerHTML='Tiempo: '+Math.trunc(date.getTime()/60000)+'Min '+Math.trunc((date.getTime()%60000)/1000)+'seg'
document.getElementById('detener').parentNode.replaceChild(document.getElementById('detener').cloneNode(true),document.getElementById('detener'))
document.getElementById('control').innerHTML='Iniciar'
document.getElementById('control').addEventListener('click',()=>IniciarTiempo(nombreMesa))
}



