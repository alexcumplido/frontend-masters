
const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;

const responseObject = JSON.parse(responseFromServer);

const dog = {
    name: "Luna",
    age: 10,
    breed: "Havanese",
    location: {
        city: "Seattle",
        state: "WA",
    },
};

const objString = JSON.stringify(dog, null, 2);
