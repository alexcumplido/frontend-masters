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

function fetchDogImage(event) {
    loader.style.display = "block";
    let dog = event.target.value;
    const URL_IMAGE_DOG = `https://dog.ceo/api/breed/${dog}/images/random`;
    fetch(URL_IMAGE_DOG)
        .then(function (data) {
            return data.url;
        })
        .then(function (imageUrl) {
            imageDog.src = imageUrl;
            imageDog.alt = dog;
        })

}

fetchBreeds();

imageDog.addEventListener('load', function (event) {
    loader.style.display = "none";
})

select.addEventListener('change', function (event) {
    fetchDogImage(event);
});




