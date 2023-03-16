//variables:
const api_url = 'https://goweather.herokuapp.com/weather'

//Variables que hacen referencia a algun elemento HTML (DOM).
const form = document.querySelector('form.weather-form')
const app = document.querySelector('.app')

//Manejo de eventos.
form.addEventListener('submit', formSubmitHandler)

//Funciones relacionados con los eventos.
async function formSubmitHandler(e) {
    e.preventDefault()
    const city = e.target.city.value
    console.log(city);
    const city_data = await getData(city)
    console.log(city_data)
}


async function getData(city) {
    try {
        const response = await fetch(`${api_url}/${city}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.error(error)
    }
}

function render(city) {
    const description = city.description

    const html = 
    <article className="weather">
        <img scr="./assets/images/icons/$(description.trim().toLowerCase()"></img>
        <h3 class="weather__title">${Temperature}</h3>
    </article>
}