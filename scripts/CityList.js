import { getCities, getWalkerCities, getWalkers } from "./database.js"
const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

