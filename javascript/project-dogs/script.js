const dogTarget = document.querySelector('.dog-target');
const buttonDog = document.querySelector('.dog-btn');

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

function fetchDog() {

    fetch(DOG_URL)
        .then(function (response) {
            const processingPromise = response.text();
            return processingPromise;
        })
        .then(function (processedResponse) {
            const dogObj = JSON.parse(processedResponse);
            const img = document.createElement('img');
            img.src = dogObj.message;
            img.alt = "Cute doggo";
            dogTarget.appendChild(img);
        });
}

buttonDog.addEventListener('click', function (event) {
    fetchDog();
    console.log("Dog fetched");
});



