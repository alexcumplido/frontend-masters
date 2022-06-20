const outputJSON = document.querySelector('.output-JSON')
const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;
console.log(responseFromServer);

const responseObject = JSON.parse(responseFromServer);
console.log(responseObject);
console.log(responseObject.name);
console.log(responseObject.location.city);

const dog = {
    name: "Luna",
    age: 10,
    breed: "Havanese",
    location: {
        city: "Seattle",
        state: "WA",
    },
};

const objString = JSON.stringify(dog, null, 6);
console.log(objString);


setTimeout(() => {
    outputJSON.innerHTML = objString;
}, "1000");