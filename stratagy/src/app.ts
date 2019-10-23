import { Context } from "./context";
import { ConcreteStrategyA } from "./stratA";
import { Display } from "./display";

class App {
    public static main() {
        const context = new Context(new ConcreteStrategyA());
        const display = new Display(context); 
    }
}

App.main(); 