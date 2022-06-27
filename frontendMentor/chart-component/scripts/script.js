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
// variable for array of objects from localJson
// variables that selects bars class
// variable that selects days class
// variable that selects bar-wrapper element
// variable that selects day-wrapper element
// function that receives and transform data from JSON

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
let responseFetched;

async function fetchResponse() {

    fetch(urlRequest)
        .then(function (response) {
            return response.text();
        })
        .then(function (processedResponse) {
            responseFetched = JSON.parse(processedResponse);
        })
        .catch(function (error) {
            console.log(error)
        });
    return responseFetched;

}
fetchResponse();