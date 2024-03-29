"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.doSomeBusinessLogic = function () {
        return this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']).join(' ');
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map