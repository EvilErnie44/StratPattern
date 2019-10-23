import { Context } from "./context";

export class Display {

    public displayString(theString:string) {
        console.log(theString); 
    }

    constructor(private context: Context) {
        //this.displayString(context.doSomeBusinessLogic().join(' '))

       let theString = context.doSomeBusinessLogic()

       this.displayString(theString); 
    }
}