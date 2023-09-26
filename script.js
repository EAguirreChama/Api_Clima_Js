let difKelvin = 273.15

let api_key = "158dd70078533efbfd2f1d62af0027bc"
let url_base = "https://api.openweathermap.org/data/2.5/weather"

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadBuscada').value
    if(ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${url_base}?q=${ciudad}&appid=${api_key}`)
        .then(res => res.json())
        .then(res => mostrarDatosClima(res))
}

function mostrarDatosClima(res){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const nombreCiudad = res.name
    const tempCiudad = res.main.temp
    const descripCiudad = res.weather[0].descripcion

    // Creando Elementos HTML
    // Titulo
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = nombreCiudad

    // Temperatura
    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es: ${tempCiudad - difKelvin}°C`

    // Descripción
    const descripInfo = document.createElement('p')
    descripInfo.textContent = descripCiudad
}