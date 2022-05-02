// The first part of the user experience involves visitors to a specially designed site 
// inputting information and being shown transport options based on the number of people 
// in their party, and the length of time they intend to be traveling.

// Motorbike 1 person - $109/day - min 1 day, max 5 days, 3.7L/100km
// Small car 1-2 people - $129/day - min 1 day, max 10 days, 8.5L/100km
// Large car 1-5 people - $144/day - min 3 days, max 10 days, 9.7L/100km
// Motor home 2-6 people - $200/day - min 2 days, max 15 days, 17L/100km




var numberOfPeople = 3;
var lengthOfTravel = 1;
const vehiclesDiv = document.getElementById("vehicles-div");

class Vehicle {
    constructor(name, minPassengers, maxPassengers, dailyRate, minDays, maxDays, efficiency){
        this.name = name,
        this.minPassengers = minPassengers,
        this.maxPassengers = maxPassengers,
        this.dailyRate = dailyRate,
        this.minDays = minDays,
        this.maxDays = maxDays,
        this.efficiency = efficiency
    }
}


const motorbike = new Vehicle("Motorbike", 1, 1, 109, 1, 5, 3.7)
const smallCar = new Vehicle("Small Car", 1, 2, 129, 1, 10, 8.5)
const largeCar = new Vehicle("Large Car", 1, 5, 144, 3, 10, 9.7)
const motorHome = new Vehicle("Motor Home", 2, 6, 200, 2, 15, 17)

const vehicles = [motorbike, smallCar, largeCar, motorHome]

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