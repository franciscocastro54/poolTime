window.onload = ()=>{
    console.log('reloadiando')
    console.log(ProductList)
    console.log(sessionStorage.getItem('productList'))
    if (sessionStorage.getItem('productList') !== null) {
        ProductList = JSON.parse(sessionStorage.getItem('productList'))
    }

    if (sessionStorage.getItem('tarifaList') !== null) {
        TarifaList = JSON.parse(sessionStorage.getItem('tarifaList'))
    }

    if (sessionStorage.getItem('mesaList') !== null) {
        MesaList = JSON.parse(sessionStorage.getItem('mesaList'))
    }

    if (sessionStorage.getItem('detallesList') !== null) {
        detallesList = JSON.parse(sessionStorage.getItem('detallesList'))
    }

    mesaCardshow()
}