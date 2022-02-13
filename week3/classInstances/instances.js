module.exports = class Instances {
    constructor(inst){
        this.inst = inst;
    }
    
    returnInst(){
        if(typeof this.inst === 'number'){
            if (this.inst % 3 == 0 & this.inst % 7 == 0){   // Return "Good Evening" when passed a multiple of 3 and 7
                console.log('Good Evening!')
            } else{
                if (this.inst % 3 == 0){                    // Return "Good Morning" when passed a 3 or a multiple thereof
                    console.log('Good Morning!')
                } else if (this.inst % 7 == 0){              // Return "Good Afternoon" when passed a 7 or a multiple thereof
                    console.log('Good Afternoon!')
                } else{
                    console.log(String(this.inst))                // If the number is neither a multiple of 3 or 7 return that number as a string
                }
            }
        } else{
            console.log('ERROR: You may only enter a number.')    // If any data type other than a number is passed return an error message.
        }
    }
}