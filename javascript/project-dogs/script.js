const URL_BREED_DOGS = "https://dog.ceo/api/breeds/list/all";
let breedSelect = document.querySelector(".breed-select");

function fetchBreeds() {
    fetch(URL_BREED_DOGS)
        .then((response) => response.json())
        .then((processedResponse) => {
            const objBreed = processedResponse.message;
            for (const breed in objBreed) {
                console.log(breed);
                const option = document.createElement("option");
                option.value = breed;
                option.innerText = breed;
                breedSelect.appendChild(option);
            }
        });
}

breedSelect.addEventListener('click', function () {
    fetchBreeds();
});


