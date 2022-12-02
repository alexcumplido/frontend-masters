//HTTP Hyper Text Transfer Protocol
// HTTP Request Message and HTTP Response Message
// URL stands for Uniform Resource Locator
// https: stands that HTTP protocol is being used for communication
// What is a client ? What is a server ?

// IP: specifies Location Adressing && Network identification

// This is an adress https://en.wikipedia.org/wiki/Miniature_pig

// Domain Name System
// protocol : https
// domain en.wikipedia.org
// deploy site:  server to host website files connected to internet + acquire domain name + connect domain name to IP adress of server

// {
//     const dogTarget = document.querySelector('.dog-target');
//     const buttonDog = document.querySelector('.dog-btn');

//     const DOG_URL = "https://dog.ceo/api/breeds/image/random";

//     function fetchDog() {
//         fetch(DOG_URL)
//             .then(function (response) {
//                 return response.text();
//             })
//             .then(function (processedResponse) {
//                 const dogObj = JSON.parse(processedResponse);
//                 const img = document.createElement('img');
//                 img.src = dogObj.message;
//                 img.alt = "Cute doggo";
//                 dogTarget.appendChild(img);
//             })
//             .catch((function (error) {
//                 dogTarget.innerText = error;
//             }));
//     }

//     async function fetchDog() {
//         const promise = await fetch(DOG_URL);
//         const processedResponse = await promise.json();
//         const img = document.createElement('img');
//         img.src = processedResponse.message;
//         img.alt = "Cute doggo";
//         dogTarget.appendChild(img);
//     }

//     buttonDog.addEventListener('click', function (event) {
//         fetchDog();
//     });
// }

{
    const itemURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items';
    const apiKey = generateKey()
    const settings = { 
            method: 'GET', 
            mode:'cors', 
            headers: { 'X-API-Key': apiKey,  'Content-Type': 'application/json'}
        }

    function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
    }

    function logItems(items) {
    for (const item of items) {
        console.log(item.name)
    } 
    }

    async function requestData(url) {
        const httpRequest = fetch(itemURL,settings)
        .then( function onfullfilled (httpResponse){
            return httpResponse.json();
        })
        .catch(function onrejected(httpResponse){
            console.log(httpResponse);
        })
        return httpRequest;
    }   

    async function renderItems() {
        requestData()
        .then(function onfullfilled(httpResponse){
            logItems(httpResponse);
        })
        .catch(function onrejected(httpResponse){
            console.log(httpResponse);
        })

    }

    {
        printItems()
        async function printItems() {
            const response = await fetch(itemURL, settings);
            const responseData = await response.json();
            console.log(responseData)
        }
    }

    renderItems();
}

{
    function getDomainNameFromURL(url) {
        return url.hostname;
    }
    const urlObject = new URL('https://example.com/example-path');
    console.log(getDomainNameFromURL(urlObject));
    getDomainNameFromURL(urlObject) ;
}