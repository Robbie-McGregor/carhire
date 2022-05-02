// The first part of the user experience involves visitors to a specially designed site 
// inputting information and being shown transport options based on the number of people 
// in their party, and the length of time they intend to be traveling.

// Motorbike 1 person - $109/day - min 1 day, max 5 days, 3.7L/100km
// Small car 1-2 people - $129/day - min 1 day, max 10 days, 8.5L/100km
// Large car 1-5 people - $144/day - min 3 days, max 10 days, 9.7L/100km
// Motor home 2-6 people - $200/day - min 2 days, max 15 days, 17L/100km

const vehiclesDiv = document.getElementById("vehicles-div");
const form = document.getElementById("form");

//Vehicle Data
const vehicles = [
    {name: "Motorbike", minPassengers: 1, maxPassengers: 1, dailyRate: 109, minDays: 1, maxDays: 5, efficiency: 3.7},
    {name: "Small Car", minPassengers: 1, maxPassengers: 2, dailyRate: 129, minDays: 1, maxDays: 10, efficiency: 8.5},
    {name: "Large Car", minPassengers: 1, maxPassengers: 5, dailyRate: 144, minDays: 3, maxDays: 10, efficiency: 9.7},
    {name: "Motor Home", minPassengers: 2, maxPassengers: 6, dailyRate: 200, minDays: 2, maxDays: 15, efficiency: 17}
]

function update(passengers, distance){
    // Get user inputs
    passengers = passengers
    distance = distance


    // Validate user inputs against vehicle conditions and add available options to array
    const recommendedVehicles = []
    vehicles.forEach(vehicle => {
        if (passengers >= vehicle.minPassengers && passengers <= vehicle.maxPassengers){
            recommendedVehicles.push(vehicle)
        }
    });


    if (recommendedVehicles.length > 0) {
        //Display available options
        vehiclesDiv.innerHTML = ""
        recommendedVehicles.forEach(vehicle => {
            vehiclesDiv.appendChild(makeVehicleDiv(vehicle))
        });
    } else {
        //Add error Logic here if there's no options available
        vehiclesDiv.innerText = "Sorry, no options available for your selected party and/or distance."
    }
}

//Create HTML element to display individual vehicle option
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

//Capture submit event from form
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    passengers = e.target.children.passengers.value
    distance = e.target.children.distance.value
    update(passengers, distance)
})