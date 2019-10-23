import { Strategy } from "./strategyint";


export class Context {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): string {

        return this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']).join(' ');

    }
}