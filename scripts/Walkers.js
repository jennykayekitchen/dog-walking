import { getCities, getWalkerCities, getWalkers } from "./database.js"
const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()



const filterWalkerCitiesByWalker = (walker) => {
    let assignments = []
    for (const assignment of walkerCities) {
        if (assignment.walkerId === walker.id) {
            assignments.push(assignment)
        }
    }
    return assignments
}

const assignedCityNames = (assignments) => {
    let cityNames = ""
    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                cityNames = `${cityNames}
${city.name}` 
            }
        }
    }
    return cityNames
}

export const Walkers = () => {
    let walkerHTML = "<ul>"
    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
    walkerHTML += "</ul>"
    return walkerHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("walker")) {
                const [,walkerId] = itemClicked.id.split("--")
                for (const walker of walkers) {
                    if (walker.id === parseInt(walkerId)) {
                        const assignments = filterWalkerCitiesByWalker(walker)
                        const cities = assignedCityNames(assignments)
                
                        window.alert(`${walker.name} services: ${cities}`)
                    }
                }
            }
    }
)





