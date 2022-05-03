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
    {id: 1, name: "Motorbike", minPassengers: 1, maxPassengers: 1, dailyRate: 109, minDays: 1, maxDays: 5, efficiency: 3.7},
    {id: 2, name: "Small Car", minPassengers: 1, maxPassengers: 2, dailyRate: 129, minDays: 1, maxDays: 10, efficiency: 8.5},
    {id: 3, name: "Large Car", minPassengers: 1, maxPassengers: 5, dailyRate: 144, minDays: 3, maxDays: 10, efficiency: 9.7},
    {id: 4, name: "Motor Home", minPassengers: 2, maxPassengers: 6, dailyRate: 200, minDays: 2, maxDays: 15, efficiency: 17}
]

function update(formData){
    // Get user inputs
    passengers = formData.passengers
    days = formData.days
    vehiclesDiv.innerHTML = ""
    // Validate user inputs against vehicle conditions and add available options to page
    numAvailableOptions = 0
    vehicles.forEach(vehicle => {
        if (passengers >= vehicle.minPassengers && passengers <= vehicle.maxPassengers && days >= vehicle.minDays && days <= vehicle.maxDays){
            vehiclesDiv.appendChild(makeVehicleDiv(vehicle))
            numAvailableOptions++
        }
    });
    if (numAvailableOptions == 0) {
        //Add error Logic here if there's no options available
        vehiclesDiv.innerText = "Sorry, no options available for your selected party and/or length."
    }
}

//Create HTML element to display individual vehicle option
function makeVehicleDiv(vehicle){
    const element = document.createElement("div")
    element.classList.add("vehicle")
    element.innerHTML = `
        <div>
            <img src="img/${vehicle.id}.jpg" alt="" srcset="">
        </div>
        <div class="vehicle-info">
            <h1>${vehicle.name}</h1><br>
            <div>$${vehicle.dailyRate} per day</div><br>
            <div>Efficiency: ${vehicle.efficiency}L per 100KM</div><br><br><br>
        </div>
    `
    return element
}

//Capture submit event from form
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    update({
        passengers: e.target.elements.passengers.value,
        days: e.target.elements.days.value 
    })
})