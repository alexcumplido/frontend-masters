{
    /* VARIABLE DECLARATION */
    let age = 6;
    // age = "6"; Why age cannot accept different values from numbers ?
    age = 8;
    const myAge = 6;
    // myAge = 8;
    /*What's the difference ?*/
}
{
    /* FUNCTIONS */
    // function invalidAdd (a:number, b:number): number {
    //     return "hello";
    // }
    // const invalidResult = invalidAdd("j", 5);
    function add (a:number, b:number): number {
        return a + b;
    }
    const validResult = add(1, 5);
}   
{
    /* OBJECTS */
    function printCar(car : {
            make: string,
            model: string,
            year: number,
            chargeVoltage?: number
    }) {
        let str = `${car.make} ${car.model} ${car.year}`;
        if(typeof car.chargeVoltage !== "undefined") { //What would happen if this type guard would be removed?
            str +=` ${car.chargeVoltage}`
        }
        console.log(str)
    }
    printCar({make: "Mitsubishi", model: "Lancer", year: 2010});
    printCar({make: "Toyota", model: "Supra", year: 2008, chargeVoltage: 140});
    // printCar({make: "Toyota", model: "Supra", year: 2008, chargeVoltage: 140, color: "red"}) //Excess property checking
}
{
    /* INDEX SIGNATURES */
    const phones = {
        home: { country: "+1", area: "211", number: "652-4515" },
        work: { country: "+1", area: "670", number: "752-5856" },
        fax: { country: "+1", area: "322", number: "525-4357" },
    }
    const phonesType : {
        [key: string] : {
            country: string,
            area: string,
            number: string
        }
    } = {};
    phonesType.home
}
{
    /* ARRAYS TYPES */
    let cars: {
        make: string;
        model: string;
        year: number;
    } []
  
    /*TUPLES TYPES*/
    let myCar: readonly [number, string, string];
    // myCar = ["Toyota", 2002, "Corolla"]
    // myCar.push(2)
}
{
    /* UNION TYPES */
    function flipCoin(): "heads" | "tails" {
        if (Math.random() > 0.5) return "heads"
        return "tails";
    }
    function maybeGetUserInfo():
        | ["error", Error]
        | ["success", { name: string; email: string }] {
        if (flipCoin() === "heads") {
            return [
            "success",
            { name: "Mike North", email: "mike@example.com" },
            ]
        } else {
            return [
            "error",
            new Error("The coin landed on TAILS :("),
            ]
        }
    }
    const outcome = maybeGetUserInfo()
    /* TYPE GUARDS */
    const [first, second] = outcome;
    (second instanceof Error) ? second : second;
    (outcome[0] === "error") ? outcome : outcome;
    if(second instanceof Error) {
      second
    } else {
        second
    }
    if(outcome[0] === "error") {
        outcome // In this branch of your code, second is an Error
    } else {
        outcome // In this branch of your code, second is the user info
    }
    
}
import { UserContactInfo } from "./types";
{
    /* TYPE ALIASES */
    /* VOID:  Return function should be ignored */
    const painter = {
        name: "Robert Ross",
        email: "bross@pbs.org",
        favoriteColor: "Titanium White",}

    function printUserInfo(user: UserContactInfo): void {
        console.log(user.email, user.name);
    }
    printUserInfo(painter);
}
{
    /* FLIP COIN EXAMPLE REFACTOR TYPE ALIASES */
    type UserInfoOutcomeError = ["error", Error];
    type UserInfoOutcomeSuccess = ["success", {name: string, email: string}];
    function maybeGetUserInfo():
    UserInfoOutcomeError |  UserInfoOutcomeSuccess {
        if (Math.random() > 0.5) {
            return [
            "success",
            { name: "Mike North", email: "mike@example.com" },
            ]
        } else {
            return [
            "error",
            new Error("The coin landed on TAILS :("),
            ]
        }
    }
    const outcome = maybeGetUserInfo()
}
{
    /* INTERFACES */
    interface Human {
        genre: string
        age: number
    }
    class Man implements Human {
        genre = "man"
        age: 30
    }
    class Woman implements Human {
        genre = "woman"
        age: 30
    }  
}
{
    /* JSON EXERCISE TYPE CHECKING */
    type Primitive = string | number | boolean | null;
    type JSONObject = { [key: string ]: JSONValue};
    type JSONArray = JSONValue[];
    type JSONValue = Primitive | JSONArray | JSONObject;
}
{
    /* FUNCTIONS */
    interface TwoNumberToCalc {
        (x :number, y: number) : number;
    }
    type TwoNumberCalc = {        
        (x: number, y: number) : number   
    } 
    const add : TwoNumberCalc = (a, b) => {
        return a + b;
    }
}
{
    /* TOP AND BOTTOMS TYPES */
    // First stage of TS migration any or unknown may take place
    /* TOP */
    let anyValue : any;
    console.log('hello') // Right use of any
    //Needs be checkout out via typeGuard if used
    let unkownValue: unknown = 1;
    if(typeof unkownValue === "number") {
        unkownValue += 8;  
        console.log(unkownValue);
    } 
    if(typeof unkownValue === "string") {
        unkownValue += "A longer string";
        console.log(unkownValue);
    } 
    if(typeof unkownValue === "boolean") {
        unkownValue = false;
        console.log(unkownValue)
    }
    /* BOTTOM */
    class Car { power: number }
    class Truck {  cargo: number }
    let vehicle : Car | Truck;
    if(vehicle instanceof Car) {
       vehicle.power
    } else if(vehicle instanceof Truck) {
        vehicle.cargo
    } else {
        const neverValue : never = vehicle;
    }
}
{
    /* NARROWING TYPE GUARDS */
    /* NULL: This type has no value */
    /* UNDEFINED: This type has not yet been asigned any value */
    let value :   
        | Date
        | null
        | undefined
        | "pineapple"
        | [number]
        | { dateRange: [Date, Date] };

    if(value instanceof Date) {
        value
    } else if (typeof value === "string") {
        value
    } else if( value === null) {
        value
    } else if (!value) {
        value
    } else if (Array.isArray(value)) {
        value
    } else if ("dateRange" in value) {
        value
    } else {
        value
    }

    /* BUILT IN TYPE GUARDS */
    interface Car {
        make: string,
        model: string,
        year: number
    }
    let maybeCar : unknown;

    function isCar(valueToTest: any) : valueToTest is Car {
        return (
            valueToTest &&
            typeof valueToTest === "object" &&
            "make" in valueToTest &&
            typeof valueToTest["make"] === "string" &&
            "model" in valueToTest &&
            typeof valueToTest["model"] === "string" &&
            "year" in valueToTest &&
            typeof valueToTest["year"] === "number"
        )
    }
    if(isCar(maybeCar)) {
        maybeCar
    }

    // function assertsIsCarLike( valueToTest: any ): asserts valueToTest is Car {
    //     if (
    //         !(
    //         valueToTest &&
    //         typeof valueToTest === "object" &&
    //         "make" in valueToTest &&
    //         typeof valueToTest["make"] === "string" &&
    //         "model" in valueToTest &&
    //         typeof valueToTest["model"] === "string" &&
    //         "year" in valueToTest &&
    //         typeof valueToTest["year"] === "number"
    //         )
    //     )
    //         throw new Error(
    //         `Value does not appear to be a CarLike${valueToTest}`
    //     )
    // }
    // maybeCar
    // assertsIsCarLike(maybeCar)
    // maybeCar
}
{
    /* GENERICS */
    const phoneList = [
        { customerId: "0001", areaCode: "321", num: "123-4566" },
        { customerId: "0002", areaCode: "174", num: "142-3626" },
        { customerId: "0003", areaCode: "192", num: "012-7190" },
        { customerId: "0005", areaCode: "402", num: "652-5782" },
        { customerId: "0004", areaCode: "301", num: "184-8501" },
    ]

    interface PhoneInfo {
        customerId: string
        areaCode: string
        num: string
    }

    function listToDict(
        list: PhoneInfo[],
        idGen: (argument: PhoneInfo) => string ) : { [key: string]: PhoneInfo } {
        const dict :  { [key: string]: PhoneInfo } = {};
        list.forEach(function(element){
            const dictKey = idGen(element);
            dict[dictKey] = element;
        })
        return dict;
    }

    const newDictFromList = listToDict(phoneList, (element)=> element.customerId)
    console.log(newDictFromList)

    function wrapInArray<T>(arg:T): [T] {
        return [arg];
    }
    wrapInArray("Alexandre")
    console.log(wrapInArray(30));

    function listToDictGeneric<T>(
        list: T[],
        idGen: (argument: T) => string ) : { [key: string]: T } {
        const dict :  { [key: string]: T } = {};
        list.forEach(function(element){
            const dictKey = idGen(element);
            dict[dictKey] = element;
        })
        return dict;
    }

    let dates = listToDictGeneric(
        [
            new Date("10-01-2021"),
            new Date("03-14-2021"),
            new Date("06-03-2021"),
            new Date("09-30-2021"),
            new Date("02-17-2021"),
            new Date("05-21-2021"),
        ],
        (arg) => arg.toISOString()
    )

    const fruits = {
        apple: { color: "red", mass: 100 },
        grape: { color: "red", mass: 5 },
        banana: { color: "yellow", mass: 183 },
        lemon: { color: "yellow", mass: 80 },
        pear: { color: "green", mass: 178 },
        orange: { color: "orange", mass: 262 },
        raspberry: { color: "red", mass: 4 },
        cherry: { color: "red", mass: 5 },
    }

    interface Dict<T> {
        [k: string] : T
    }

    function mapDict<T, U>(
        input: Dict<T>, mappingCb: (arg: T, key: string) => U) : Dict<U> {
        const toReturn: Dict<U> = {};
        for (let key in input) { //each
            let thisVal = input[key] //get value
            toReturn[key] = mappingCb(thisVal, key) //perform transformation
        }
        return toReturn
    }

    function filterDict<T>(
        input: Dict<T>, filterCb: (arg: T) => boolean) : Dict<T> {
        const toReturn: Dict<T> = {};
        for (let key in input) { //each
            let thisVal = input[key] //get value
            if(filterCb(thisVal))  { 
                toReturn[key] = thisVal; //perform transformation
            }
        }
        return toReturn
    }
}