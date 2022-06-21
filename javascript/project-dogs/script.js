const URL_BREED_DOGS = "https://dog.ceo/api/breeds/list/all";
let select = document.querySelector(".breed-select");
let targetDog = document.querySelector(".target-dog");
let imageDog = document.querySelector(".target-dog-img");
let loader = document.querySelector(".loader");

function fetchBreeds() {
    fetch(URL_BREED_DOGS)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const breedsObject = data.message;
            const breedsArray = Object.keys(breedsObject);
            for (let i = 0; i < breedsArray.length; i++) {
                const option = document.createElement("option");
                option.value = breedsArray[i];
                option.innerText = breedsArray[i];
                select.appendChild(option);
            }
        })
}

select.addEventListener('change', function (event) {
    let URL_DOG = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    fetchDogImage(URL_DOG);
});

function fetchDogImage(URL) {
    loader.style.display = "block";
    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            imageDog.src = data.message;
        })
}

imageDog.addEventListener('load', function (event) {
    loader.style.display = "none";
})


fetchBreeds();



