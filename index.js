/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const meterEl = document.getElementById("meter-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function(){    
    render()
})

function render(){
    
    let meterfeet = `${inputEl.value} meters = ${(inputEl.value*3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(3)} meters`
    meterEl.innerHTML = meterfeet    

    let litergallons = `${inputEl.value} liters = ${(inputEl.value*0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value/0.264).toFixed(3)} liters`
    volumeEl.innerHTML = litergallons  

    let kilopounds = `${inputEl.value} kilograms = ${(inputEl.value*2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.204).toFixed(3)} kilograms`
    massEl.innerHTML = kilopounds
}

