{
    // Factory function approach
    function userCreator(name, score) {
        const newUser = Object.create(userFunctionStore);
        newUser.name = name;
        newUser.score = score;
        return newUser;
    }

    const userFunctionStore = {
        incrementScore: function () {
            const add1 = () => this.score++;
            add1();
        }
    };

    const user1 = userCreator("Alexandre", 29);
    user1.incrementScore();
    console.log(user1, user1.hasOwnProperty('score'));
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
        console.log(`Hello ${this.name}`)
    }

    const newUser1 = new NewUserCreator("Alexandre", 29);
    newUser1.incrementScore();
    console.log(newUser1, newUser1.printName(), newUser1.hasOwnProperty('score'));
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
    classUser.incrementScore();
    console.log(classUser, classUser.printName(), classUser.hasOwnProperty('score'));
}