// The first part of the user experience involves visitors to a specially designed site 
// inputting information and being shown transport options based on the number of people 
// in their party, and the length of time they intend to be traveling.

// Motorbike 1 person - $109/day - min 1 day, max 5 days, 3.7L/100km
// Small car 1-2 people - $129/day - min 1 day, max 10 days, 8.5L/100km
// Large car 1-5 people - $144/day - min 3 days, max 10 days, 9.7L/100km
// Motor home 2-6 people - $200/day - min 2 days, max 15 days, 17L/100km

const vehiclesDiv = document.getElementById("vehicles-div");

const vehicles = [
    {name: "Motorbike", minPassengers: 1, maxPassengers: 1, dailyRate: 109, minDays: 1, maxDays: 5, efficiency: 3.7},
    {name: "Small Car", minPassengers: 1, maxPassengers: 2, dailyRate: 129, minDays: 1, maxDays: 10, efficiency: 8.5},
    {name: "Large Car", minPassengers: 1, maxPassengers: 5, dailyRate: 144, minDays: 3, maxDays: 10, efficiency: 9.7},
    {name: "Motor Home", minPassengers: 2, maxPassengers: 6, dailyRate: 200, minDays: 2, maxDays: 15, efficiency: 17}
]

function update(){

    numberOfPeople = document.getElementById("passengers-input").value

    const recommendedVehicles = []

    vehicles.forEach(vehicle => {
        if (numberOfPeople >= vehicle.minPassengers && numberOfPeople <= vehicle.maxPassengers){
            recommendedVehicles.push(vehicle)
        }
    });

    vehiclesDiv.innerHTML = ""
    recommendedVehicles.forEach(vehicle => {
        vehiclesDiv.appendChild(makeVehicleDiv(vehicle))
    });
}

function makeVehicleDiv(vehicle){
    const element = document.createElement("div")
    element.classList.add("vehicle")
    element.innerHTML = `
        <div>${vehicle.name}</div><br>
        <div>$${vehicle.dailyRate} per day</div><br>
        <div>Efficiency: ${vehicle.efficiency}L per 100KM</div><br><br><br>
    `
    return element
}

document.getElementById("submit").addEventListener("click", () => {
    update()
})