const URL_BREED_DOGS = "https://dog.ceo/api/breeds/list/all";
let select = document.querySelector(".breed-select");

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

select.addEventListener('change', function (event) {
    console.log(event.target.value);

})

fetchBreeds();


