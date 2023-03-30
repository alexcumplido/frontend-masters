{
    function houseOne(){
        console.log(`Paper delivered to house 1`);
    }

    function houseTwo(callback){
        setTimeout(() => {
            console.log(`Paper delivered to house 2`);
            callback();
        }, 0)
    }

    function houseThree(){
        console.log(`Paper delivered to house 3`);
    }

    houseOne();
    houseTwo(houseThree)

    function hellHouseOne() {
        setTimeout(() => {
            console.log(`Paper delivered to house 1`);
            setTimeout(() => {
                console.log(`Paper delivered to house 2`);  
                setTimeout(() => {
                    console.log(`Paper delivered to house 3`);  
                }, 3000)
            }, 4000)
        }, 5000)
    }

    hellHouseOne();
}


{
    const promise = new Promise ((resolve, reject) => {
        const error = false;
        if(!error){
            resolve('Promise has been fullfilled');
        } else {
            reject('Error: Operation has failed');
        }
    }); 

    function houseOne() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Paper delivered to house 1')
            }, 1000)
        });
    }

    function houseTwo() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Paper delivered to house 2')
            }, 2000)
        });
    }

    function houseThree() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Paper delivered to house 3')
            }, 3000)
        });   
    }

    /* Promises chaining */
    houseOne()
        .then(function(data) {
            console.log(data)
        })
        .then(houseTwo)
        .then(function(data) {
            console.log(data)
        })
        .then(houseThree)
        .then(function(data) {
            console.log(data)
        })
        .catch(function(error) {
            console.log(error)
        })

    async function getPaid() {
        const houseOneWait = await houseOne();
        const houseTwoWait = await houseTwo();
        const houseThreeWait = await houseThree();
        console.log(houseOneWait);
        console.log(houseTwoWait);
        console.log(houseThreeWait);
    }

    getPaid();
}

{
    async function getACuteDogPhoto() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        } 
    }

    getACuteDogPhoto();
}

{
    const dogTarget = document.querySelector('.dog-target');
    const buttonDog = document.querySelector('.dog-btn');
    const DOG_URL = "https://dog.ceo/api/breeds/image/random";

    function fetchDog() {
        fetch(DOG_URL)
            .then(function (response) {
                return response.text();
            })
            .then(function (processedResponse) {
                const dogObj = JSON.parse(processedResponse);
                const img = document.createElement('img');
                img.src = dogObj.message;
                img.alt = "Cute doggo";
                dogTarget.appendChild(img);
            })
            .catch((function (error) {
                dogTarget.innerText = error;
            }));
    }

    async function fetchDog() {
        const promise = await fetch(DOG_URL);
        const processedResponse = await promise.json();
        const img = document.createElement('img');
        img.src = processedResponse.message;
        img.alt = "Cute doggo";
        dogTarget.appendChild(img);
    }

    buttonDog.addEventListener('click', function (event) {
        fetchDog();
    });
}

