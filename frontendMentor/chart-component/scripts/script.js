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
// User see current day's bar in a different colour

// Create variables

// If day matches with current day
// Add special class
// Create corresponding classes for current day and current day hover
// Retrieve from Date object current day
// Match agaisnt JSON object
// If match apply created classes


const URL_REQUEST = "./json/data.json";

const barClass = document.querySelector('.bar');
const barWrapper = document.querySelector('.bar-wrapper');
const dayWrapper = document.querySelector('.day-wrapper');
const statsTotal = document.querySelector('.stats-total-span')
let totalAmount = 0;
const currentDay = new Date().toLocaleString('en-us', { weekday: 'short' }).toLowerCase();

async function fetchResponse() {
    fetch(URL_REQUEST)
        .then(function (response) {
            return response.text();
        })
        .then(function (processedResponse) {
            const responseFetched = JSON.parse(processedResponse);
            for (let i = 0; i < responseFetched.length; i++) {
                let bar = document.createElement('div');
                let barLabel = document.createElement('span');
                let day = document.createElement('div');

                barLabel.classList.add('bar-span');
                barLabel.innerText = `${responseFetched[i].amount}$`;
                bar.appendChild(barLabel);
                bar.classList.add('bar');
                bar.style.height = `${responseFetched[i].amount * 4}px`;


                day.classList.add('day');
                day.innerText = responseFetched[i].day;
                if (responseFetched[i].day === currentDay) {
                    bar.classList.add('bar-current-day');
                }

                bar.addEventListener('mouseover', function () {
                    barLabel.classList.add('bar-span-active');
                })

                bar.addEventListener('mouseout', function () {
                    barLabel.classList.remove('bar-span-active');
                })

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

