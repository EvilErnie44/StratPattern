"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = require("./context");
var stratA_1 = require("./stratA");
var display_1 = require("./display");
var App = /** @class */ (function () {
    function App() {
    }
    App.main = function () {
        var context = new context_1.Context(new stratA_1.ConcreteStrategyA());
        var display = new display_1.Display(context);
    };
    return App;
}());
App.main();
//# sourceMappingURL=app.js.map