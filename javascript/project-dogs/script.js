const URL_BREED_DOGS = "https://dog.ceo/api/breeds/list/all";
let select = document.querySelector(".breed-select");
let targetDog = document.querySelector(".target-dog");
let imageDog = document.querySelector(".target-dog-img");

function fetchBreeds() {
    fetch(URL_BREED_DOGS)
        .then((response) => response.json())
        .then((data) => {
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
    let dog = event.target.value;
    const URL_IMAGE_DOG = `https://dog.ceo/api/breed/${dog}/images/random`;
    fetch(URL_IMAGE_DOG)
        .then((data) => data.url)
        .then((imageUrl) => {
            if (targetDog.imageDog) {
                targetDog.removeChild(imageDog);
            }
            imageDog.src = imageUrl;
            imageDog.alt = dog;
            targetDog.appendChild(imageDog);
        })
}


select.addEventListener('change', function (event) {
    fetchDogImage(event);
});

fetchBreeds();


