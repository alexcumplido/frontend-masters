const URL_BREED_DOGS = "https://dog.ceo/api/breeds/list/all";
let select = document.querySelector(".breed-select");

function fetchBreeds() {
    fetch(URL_BREED_DOGS)
        .then((response) => response.json())
        .then((data) => {
            const breedsObject = data.message;
            const breedsArray = Object.keys(breedsObject);
            breedsArray.forEach((breed) => {
                const option = document.createElement("option");
                option.value = breed;
                option.innerText = breed;
                select.appendChild(option);
            })
        });
}

select.addEventListener('change', function (event) {
    console.log(event.target.value);

})

fetchBreeds();


