// 1. Problem analysis(Understand)
// 2. Define features and user flow
// 3. Structure variables and functions
// 4. Pseudocode
// 5. Implement programm

// Input data
// Access - manipulate data
// Output data


// INPUT
// Data from JSON file

// MANIPULATION
// Acess JSON object

// OUTPUT
// dynamically generated bars based on the data provided in the local JSON file
// User hover over the individual bar and see its data
// User see current day's bar in a different colour

// Create variables
// function that iterates over jsontransformed and extract values
// function that creates elements representing bars
// function that creates elements representing days


// Import local JSON file
// Iterate over data and in each iteration
// Append two elements in corresponding wrappers
// On bar-wrapper append:
//In each creation style the width according data add px as height
// On day-wrapper append:
//On each creation assign corresponding day


const urlRequest = "./json/data.json";

const barClass = document.querySelector('.bar');
const dayClass = document.querySelector('.day');
const barWrapper = document.querySelector('.bar-wrapper');
const dayWrapper = document.querySelector('.day-wrapper');
const statsTotal = document.querySelector('.stats-total-span')
let totalAmount = 0;

async function fetchResponse() {
    fetch(urlRequest)
        .then(function (response) {
            return response.text();
        })
        .then(function (processedResponse) {
            const responseFetched = JSON.parse(processedResponse);
            for (let i = 0; i < responseFetched.length; i++) {
                debugger;
                let bar = document.createElement('div');
                let day = document.createElement('div');
                day.classList.add('day');
                day.innerText = responseFetched[i].day;
                bar.classList.add('bar');
                bar.style.height = `${responseFetched[i].amount * 4}px`;
                barWrapper.appendChild(bar);
                dayWrapper.appendChild(day);
                totalAmount += responseFetched[i].amount;
            }
            statsTotal.innerText = `${totalAmount}$`;
        })
        .catch(function (error) {
            console.log(error)
        });


}
fetchResponse();

function createBars(object) {

}
