class User {
    constructor(name) {
        this.name = name;
    }

    assignNameValue(){
        console.log(this.name);
    }
}

let demoClassProtype = User.prototype.name = "Thunivu"; 

let demoClassProtypeMethod = User.prototype.assignNameValue;

console.log(demoClassProtype);

console.log(demoClassProtypeMethod);

console.log(User.prototype.assignNameValue);

let obj1 = {
    "" : "12",
    "Prakash C": "123"
}

console.log(obj1["Prakash C"]);


class Life {

    #love = "girl who is kind"; 
    constructor(love, friend) {
        this.love = love; 
        this.friend = friend; 
    }

    /**
     * @param {string} secretValue
     */

    set theSecretValue(secretValue) {
        this.#love = secretValue;
    }
    
    get theSecretValue() {
        return this.#love;
    }

    getTheSecret() {
        console.log(this.#love);
    }
}

createLife = new Life ();

console.log("------ get create by me ------");
createLife.getTheSecret();
createLife.theSecretValue = "kind and hot";
//createLife.getTheSecret();
console.log(createLife.theSecretValue);






