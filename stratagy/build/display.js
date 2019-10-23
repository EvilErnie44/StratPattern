"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Display = /** @class */ (function () {
    function Display(context) {
        //this.displayString(context.doSomeBusinessLogic().join(' '))
        this.context = context;
        var theString = context.doSomeBusinessLogic();
        this.displayString(theString);
    }
    Display.prototype.displayString = function (theString) {
        console.log(theString);
    };
    return Display;
}());
exports.Display = Display;
//# sourceMappingURL=display.js.map