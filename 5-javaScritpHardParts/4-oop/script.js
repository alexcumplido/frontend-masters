{
    // Hardcoded approach
    const user = {
        name: 'Alexandre',
        score: 30,
        increment: function () {
            user.score++;
        }
    }
}

{
    // Dot notation approach
    const user = {};
    user.name = 'Alexandre';
    user.score = 30;
    user.increment = function () {
        user.score++
    }
}

{
    // Object create approach
    const user = Object.create(null);
    user.name = 'Mixeta';
    user.score = 5;
    user.increment = function () {
        user.score++
    }
}

{
    // Factory function approach 1
    function userCreator(name, score) {
        const newUser = {};
        newUser.name = name;
        newUser.score = score;
        newUser.increment = function () {
            newUser.score++;
        }
        return newUser;
    }

    const newUser = userCreator("Alexandre", 29);
    console.log(newUser);
}

{
    // Factory function approach 2
    function userCreator(name, score) {
        const newUser = Object.create(userFunctionStore);
        newUser.name = name;
        newUser.score = score;
        return newUser;
    }

    const userFunctionStore = {
        incrementScore: function () {
            const add1 = () => this.score++; //here this. is lexically scoped
            add1();
        }
    };

    const user1 = userCreator("Alexandre", 29);
    console.log(user1);
}

{
    //New keyword approach
    function NewUserCreator(name, score) {
        this.name = name;
        this.score = score;
    }

    NewUserCreator.prototype.incrementScore = function () {
        this.score++;
    }

    NewUserCreator.prototype.printName = function () {
        console.log(`Hello ${this.name}`);
    }

    const newUser1 = new NewUserCreator("Alexandre", 29);
    console.log(newUser1);
}

{
    //Class keyword approach
    class UserCreator {
        constructor(name, score) {
            this.name = name;
            this.score = score;
        }
        incrementScore() {
            this.score++;
        }
        printName() {
            console.log(`Hello ${this.name}`)
        }
    }

    const classUser = new UserCreator("Alexandre", 29);
    console.log(classUser);
}

{
    /*CHALLENGE 2*/
    const personStore = {
        greet: function () {
            console.log(`hello`)
        }
    };

    /*CHALLENGE 4*/
    personStore.introduce = function () {
        console.log(`Hi, my name is ${this.name}`);
    }

    /*CHALLENGE 3*/
    function personFromPersonStore(name, age) {
        const person = Object.create(personStore);
        person.name = name;
        person.age = age;
        return person;
    }

    /*CHALLENGE 5*/
    function PersonConstructor() {
        this.greet = function () {
            console.log(`hello`)
        }
    }

    /*CHALLENGE 7*/
    PersonConstructor.prototype.introduce = function () {
        console.log(`Hi, my name is ${this.name}`);
    }

    /*CHALLENGE 6*/
    function personFromConstructor(name, age) {
        const person = new PersonConstructor();
        person.name = name;
        person.age = age;
        return person;
    }

    /*CHALLENGE 8*/
    class PersonClass {
        constructor(name) {
            this.name = name;
        }
        greet() {
            console.log(`hello`);
        }
    }
    /*CHALLENGE 9*/
    class DeveloperClass extends PersonClass {
        introduce() {
            console.log(`Hi, my name is ${this.name}`);
        }
    }
}
