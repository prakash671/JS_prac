class Bank {
    constructor(amount) {
        this.amount = amount
    }

    withDrawal(withdrawalAmt) {
        return new Promise((resolve,reject)=>{
            if(withdrawalAmt > this.amount) {
                console.log(withdrawalAmt < this.amount);
                reject(`The amount ${withdrawalAmt} which tend to withdraw should is more than the balance.`);
            } else {
                this.amount -= withdrawalAmt;
                setTimeout(() => {
                    resolve(`the current balance of the account is ${this.amount}`);
                    console.log(`The amount which trying to withdraw of ${withdrawalAmt} is done sucessfully`);
                }, 3000); 
            }
        })
    }
}

const bank1 = new Bank(10000);

bank1.withDrawal(3000)
.then(console.log)
.catch(console.error);