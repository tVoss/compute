/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/circuit/core.ts":
/*!*****************************!*\
  !*** ./src/circuit/core.ts ***!
  \*****************************/
/*! exports provided: Input, Output, Wire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return Output; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wire", function() { return Wire; });
var Input = /** @class */ (function () {
    function Input() {
        this._output = null;
    }
    Object.defineProperty(Input.prototype, "value", {
        get: function () {
            if (this._output === null) {
                return false;
            }
            return this._output.value;
        },
        enumerable: true,
        configurable: true
    });
    Input.prototype.connect = function (output) {
        this._output = output;
    };
    Input.prototype.disconnect = function () {
        this._output = null;
    };
    return Input;
}());

var Output = /** @class */ (function () {
    function Output(nextFunc) {
        this._value = nextFunc();
        this._nextValue = null;
        this._nextFunc = nextFunc;
    }
    Object.defineProperty(Output.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Output.prototype.generateNext = function () {
        this._nextValue = this._nextFunc();
        return this._nextValue;
    };
    Output.prototype.applyNext = function () {
        if (this._nextValue === null) {
            console.error('Tried to apply next without generating it');
            return;
        }
        this._value = this._nextValue;
        this._nextValue = null;
    };
    return Output;
}());

var Wire = /** @class */ (function () {
    function Wire() {
        var _this = this;
        this.in = new Input();
        this.out = new Output(function () { return _this.in.value; });
    }
    return Wire;
}());



/***/ }),

/***/ "./src/circuit/gates.ts":
/*!******************************!*\
  !*** ./src/circuit/gates.ts ***!
  \******************************/
/*! exports provided: AndGate, OrGate, NotGate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndGate", function() { return AndGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrGate", function() { return OrGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotGate", function() { return NotGate; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/circuit/core.ts");

var DS = 50;
var AndGate = /** @class */ (function () {
    function AndGate() {
        var _this = this;
        this.a = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        this.b = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        this.x = new _core__WEBPACK_IMPORTED_MODULE_0__["Output"](function () { return _this.a.value && _this.b.value; });
    }
    return AndGate;
}());

var OrGate = /** @class */ (function () {
    function OrGate() {
        var _this = this;
        this.a = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        this.b = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        this.x = new _core__WEBPACK_IMPORTED_MODULE_0__["Output"](function () { return _this.a.value || _this.b.value; });
    }
    OrGate.prototype.draw = function (ctx, x, y) {
        var topLeft = { x: x - DS, y: y + DS };
        var bottomLeft = { x: x - DS, y: y - DS };
        var out = { x: x + DS, y: y };
        // Body
        ctx.beginPath();
        ctx.moveTo(topLeft.x, topLeft.y);
        ctx.quadraticCurveTo(x - DS / 2, y, bottomLeft.x, bottomLeft.y);
        ctx.quadraticCurveTo(x, y - DS, out.x, out.y);
        ctx.quadraticCurveTo(x, y + DS, topLeft.x, topLeft.y);
        ctx.closePath();
        ctx.strokeStyle = '#eeeeee';
        ctx.lineWidth = 3;
        ctx.stroke();
        // Top Wire
        ctx.beginPath();
        ctx.moveTo(topLeft.x - DS, y - DS / 3);
        ctx.lineTo(x - DS / 1.3, y - DS / 3);
        ctx.strokeStyle = this.a.value ? 'green' : 'red';
        ctx.stroke();
        // Bottom wire
        ctx.beginPath();
        ctx.moveTo(topLeft.x - DS, y + DS / 3);
        ctx.lineTo(x - DS / 1.3, y + DS / 3);
        ctx.strokeStyle = this.b.value ? 'green' : 'red';
        ctx.stroke();
        // Output
        ctx.beginPath();
        ctx.moveTo(out.x, out.y);
        ctx.lineTo(out.x + DS, out.y);
        ctx.strokeStyle = this.x.value ? 'green' : 'red';
        ctx.stroke();
    };
    return OrGate;
}());

var NotGate = /** @class */ (function () {
    function NotGate() {
        var _this = this;
        this.a = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        this.x = new _core__WEBPACK_IMPORTED_MODULE_0__["Output"](function () { return !_this.a.value; });
    }
    NotGate.prototype.draw = function (ctx, x, y) {
        var topLeft = { x: x - DS, y: y + DS };
        var bottomLeft = { x: x - DS, y: y - DS };
        var out = { x: x + DS, y: y };
        // Body
        ctx.beginPath();
        ctx.moveTo(topLeft.x, topLeft.y);
        ctx.lineTo(bottomLeft.x, bottomLeft.y);
        ctx.lineTo(out.x - DS / 5, out.y);
        ctx.closePath();
        ctx.strokeStyle = '#eeeeee';
        ctx.lineWidth = 3;
        ctx.stroke();
        // DOT
        ctx.beginPath();
        ctx.arc(out.x - DS / 10, out.y, DS / 10, 0, Math.PI * 2);
        ctx.stroke();
        // In
        ctx.beginPath();
        ctx.moveTo(topLeft.x - DS, y);
        ctx.lineTo(x - DS, y);
        ctx.strokeStyle = this.a.value ? 'green' : 'red';
        ctx.stroke();
        // Output
        ctx.beginPath();
        ctx.moveTo(out.x, out.y);
        ctx.lineTo(out.x + DS, out.y);
        ctx.strokeStyle = this.x.value ? 'green' : 'red';
        ctx.stroke();
    };
    return NotGate;
}());



/***/ }),

/***/ "./src/graphics/core.ts":
/*!******************************!*\
  !*** ./src/graphics/core.ts ***!
  \******************************/
/*! exports provided: DS, Entity, Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DS", function() { return DS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DS = 50;
var Entity = /** @class */ (function () {
    function Entity() {
        this._localPosition = { x: 0, y: 0 };
    }
    Object.defineProperty(Entity.prototype, "globalPosition", {
        get: function () {
            if (!this._parent) {
                return this._localPosition;
            }
            return {
                x: this._localPosition.x + this._parent.globalPosition.x,
                y: this._localPosition.y + this._parent.globalPosition.y
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "parent", {
        set: function (parent) {
            this._parent = parent;
            this._parent.addChild(this);
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.removeParent = function () {
        var globalPos = this.globalPosition;
        this._parent.removeChild(this);
        this._parent = undefined;
        this._localPosition = globalPos;
    };
    Object.defineProperty(Entity.prototype, "localPosition", {
        set: function (value) {
            this._localPosition.x = value.x;
            this._localPosition.y = value.y;
        },
        enumerable: true,
        configurable: true
    });
    return Entity;
}());

var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super.call(this) || this;
        _this._children = [];
        return _this;
    }
    Group.prototype.addChild = function (entity) {
        this._children.push(entity);
    };
    Group.prototype.removeChild = function (entity) {
        this._children = this._children.filter(function (c) { return c !== entity; });
    };
    Group.prototype.cointainsPoint = function (point, ctx) {
        return this._children.some(function (c) { return c.cointainsPoint(point, ctx); });
    };
    return Group;
}(Entity));



/***/ }),

/***/ "./src/graphics/gate-sprites.ts":
/*!**************************************!*\
  !*** ./src/graphics/gate-sprites.ts ***!
  \**************************************/
/*! exports provided: AndSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndSprite", function() { return AndSprite; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/graphics/core.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AndSprite = /** @class */ (function (_super) {
    __extends(AndSprite, _super);
    function AndSprite(gate) {
        var _this = _super.call(this) || this;
        _this._gate = gate;
        return _this;
    }
    Object.defineProperty(AndSprite.prototype, "topLeft", {
        get: function () {
            return {
                x: this.globalPosition.x - _core__WEBPACK_IMPORTED_MODULE_0__["DS"],
                y: this.globalPosition.y + _core__WEBPACK_IMPORTED_MODULE_0__["DS"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndSprite.prototype, "bottomLeft", {
        get: function () {
            return {
                x: this.globalPosition.x - _core__WEBPACK_IMPORTED_MODULE_0__["DS"],
                y: this.globalPosition.y - _core__WEBPACK_IMPORTED_MODULE_0__["DS"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndSprite.prototype, "out", {
        get: function () {
            return {
                x: this.globalPosition.x + _core__WEBPACK_IMPORTED_MODULE_0__["DS"],
                y: this.globalPosition.y
            };
        },
        enumerable: true,
        configurable: true
    });
    AndSprite.prototype.makeGateBodyPath = function (ctx) {
        var x = this.globalPosition.x;
        var y = this.globalPosition.y;
        ctx.beginPath();
        ctx.moveTo(x, this.topLeft.y);
        ctx.lineTo(this.topLeft.x, this.topLeft.y);
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y);
        ctx.lineTo(x, this.bottomLeft.y);
        ctx.arc(x, y, _core__WEBPACK_IMPORTED_MODULE_0__["DS"], Math.PI * 3 / 2, Math.PI / 2);
    };
    AndSprite.prototype.draw = function (ctx) {
        var x = this.globalPosition.x;
        var y = this.globalPosition.y;
        ctx.strokeStyle = '#eeeeee';
        ctx.lineWidth = 3;
        // Body
        this.makeGateBodyPath(ctx);
        ctx.stroke();
        // Top Wire
        ctx.beginPath();
        ctx.moveTo(this.topLeft.x - _core__WEBPACK_IMPORTED_MODULE_0__["DS"], y - _core__WEBPACK_IMPORTED_MODULE_0__["DS"] / 3);
        ctx.lineTo(x - _core__WEBPACK_IMPORTED_MODULE_0__["DS"], y - _core__WEBPACK_IMPORTED_MODULE_0__["DS"] / 3);
        ctx.strokeStyle = this._gate.a.value ? 'green' : 'red';
        ctx.stroke();
        // Bottom wire
        ctx.beginPath();
        ctx.moveTo(this.topLeft.x - _core__WEBPACK_IMPORTED_MODULE_0__["DS"], y + _core__WEBPACK_IMPORTED_MODULE_0__["DS"] / 3);
        ctx.lineTo(x - _core__WEBPACK_IMPORTED_MODULE_0__["DS"], y + _core__WEBPACK_IMPORTED_MODULE_0__["DS"] / 3);
        ctx.strokeStyle = this._gate.b.value ? 'green' : 'red';
        ctx.stroke();
        // Output
        ctx.beginPath();
        ctx.moveTo(this.out.x, this.out.y);
        ctx.lineTo(this.out.x + _core__WEBPACK_IMPORTED_MODULE_0__["DS"], this.out.y);
        ctx.strokeStyle = this._gate.x.value ? 'green' : 'red';
        ctx.stroke();
    };
    AndSprite.prototype.cointainsPoint = function (point, ctx) {
        this.makeGateBodyPath(ctx);
        return ctx.isPointInPath(point.x, point.y);
    };
    return AndSprite;
}(_core__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/graphics/pointer.ts":
/*!*********************************!*\
  !*** ./src/graphics/pointer.ts ***!
  \*********************************/
/*! exports provided: Pointer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pointer", function() { return Pointer; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/graphics/core.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Pointer = /** @class */ (function (_super) {
    __extends(Pointer, _super);
    function Pointer(canvas, cb) {
        var _this = _super.call(this) || this;
        canvas.onmousemove = function (e) { return _this.onMouseMove(e); };
        canvas.onclick = function (e) { return _this.onClick(e); };
        _this.localPosition = { x: 0, y: 0 };
        _this._cb = cb;
        return _this;
    }
    Pointer.prototype.draw = function (ctx) {
        if (!this._holding) {
            return;
        }
        this._holding.draw(ctx);
    };
    Object.defineProperty(Pointer.prototype, "holding", {
        set: function (e) {
            this._holding = e;
            this._holding.parent = this;
            this._holding.localPosition = { x: 0, y: 0 };
        },
        enumerable: true,
        configurable: true
    });
    Pointer.prototype.onMouseMove = function (e) {
        this.localPosition = {
            x: e.offsetX,
            y: e.offsetY
        };
    };
    Pointer.prototype.onClick = function (e) {
        if (this._holding) {
            this._holding.removeParent();
            this._holding = undefined;
        }
        else {
            this._cb({
                x: e.offsetX,
                y: e.offsetY
            });
        }
    };
    return Pointer;
}(_core__WEBPACK_IMPORTED_MODULE_0__["Group"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circuit_gates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circuit/gates */ "./src/circuit/gates.ts");
/* harmony import */ var _circuit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circuit/core */ "./src/circuit/core.ts");
/* harmony import */ var _graphics_gate_sprites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics/gate-sprites */ "./src/graphics/gate-sprites.ts");
/* harmony import */ var _graphics_pointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphics/pointer */ "./src/graphics/pointer.ts");




var computeCanvas = document.getElementById('compute');
var context = computeCanvas.getContext('2d');
var a = document.getElementById('a');
var b = document.getElementById('b');
var aOutput = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Output"](function () { return a.checked; });
var bOutput = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Output"](function () { return b.checked; });
var power = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Output"](function () { return true; });
var ground = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Output"](function () { return false; });
var andGate = new _circuit_gates__WEBPACK_IMPORTED_MODULE_0__["AndGate"]();
var orGate = new _circuit_gates__WEBPACK_IMPORTED_MODULE_0__["OrGate"]();
var notGate = new _circuit_gates__WEBPACK_IMPORTED_MODULE_0__["NotGate"]();
context.fillStyle = '#222222';
context.fillRect(0, 0, 720, 720);
orGate.a.connect(power);
orGate.b.connect(ground);
andGate.a.connect(aOutput);
andGate.b.connect(bOutput);
notGate.a.connect(andGate.x);
var andSprite = new _graphics_gate_sprites__WEBPACK_IMPORTED_MODULE_2__["AndSprite"](andGate);
andSprite.localPosition = { x: 250, y: 360 };
function tick() {
    console.log('tick');
    console.log('or a: ' + andGate.a.value);
    console.log('or b: ' + andGate.b.value);
    console.log('or x: ' + andGate.x.value);
    console.log('not a: ' + notGate.a.value);
    console.log('not x: ' + notGate.x.value);
    console.log('or next: ' + andGate.x.generateNext());
    console.log('not next: ' + notGate.x.generateNext());
    aOutput.generateNext();
    bOutput.generateNext();
    aOutput.applyNext();
    bOutput.applyNext();
    andGate.x.applyNext();
    notGate.x.applyNext();
}
function draw() {
    context.fillStyle = '#222222';
    context.fillRect(0, 0, 720, 720);
    andSprite.draw(context);
    notGate.draw(context, 400, 360);
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
var goBtn = document.getElementById('go');
goBtn.onclick = tick;
var pointer = new _graphics_pointer__WEBPACK_IMPORTED_MODULE_3__["Pointer"](computeCanvas, function (p) {
    console.log(p.x + "," + p.y);
    console.log(andSprite.cointainsPoint(p, context) ? 'in' : 'out');
    if (andSprite.cointainsPoint(p, context)) {
        pointer.holding = andSprite;
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmN1aXQvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2lyY3VpdC9nYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvZ2F0ZS1zcHJpdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9wb2ludGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7SUFHSTtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtJQUN2QixDQUFDO0lBRUQsc0JBQUksd0JBQUs7YUFBVDtZQUNJLElBQUksSUFBSSxDQUFD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bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBJbnB1dCB7XG4gICAgcHJpdmF0ZSBfb3V0cHV0OiBPdXRwdXQgfCBudWxsXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fb3V0cHV0ID0gbnVsbFxuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX291dHB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX291dHB1dC52YWx1ZVxuICAgIH1cblxuICAgIGNvbm5lY3Qob3V0cHV0OiBPdXRwdXQpIHtcbiAgICAgICAgdGhpcy5fb3V0cHV0ID0gb3V0cHV0XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5fb3V0cHV0ID0gbnVsbFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE91dHB1dCB7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IGJvb2xlYW5cbiAgICBwcml2YXRlIF9uZXh0VmFsdWU6IGJvb2xlYW4gfCBudWxsXG4gICAgcHJpdmF0ZSBfbmV4dEZ1bmM6ICgpID0+IGJvb2xlYW5cblxuICAgIGNvbnN0cnVjdG9yKG5leHRGdW5jOiAoKSA9PiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV4dEZ1bmMoKVxuICAgICAgICB0aGlzLl9uZXh0VmFsdWUgPSBudWxsXG4gICAgICAgIHRoaXMuX25leHRGdW5jID0gbmV4dEZ1bmNcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZVxuICAgIH1cblxuICAgIGdlbmVyYXRlTmV4dCgpIHtcbiAgICAgICAgdGhpcy5fbmV4dFZhbHVlID0gdGhpcy5fbmV4dEZ1bmMoKVxuICAgICAgICByZXR1cm4gdGhpcy5fbmV4dFZhbHVlXG4gICAgfVxuXG4gICAgYXBwbHlOZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5fbmV4dFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUcmllZCB0byBhcHBseSBuZXh0IHdpdGhvdXQgZ2VuZXJhdGluZyBpdCcpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX25leHRWYWx1ZVxuICAgICAgICB0aGlzLl9uZXh0VmFsdWUgPSBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2lyZSB7XG4gICAgcmVhZG9ubHkgaW46IElucHV0XG4gICAgcmVhZG9ubHkgb3V0OiBPdXRwdXRcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluID0gbmV3IElucHV0KClcbiAgICAgICAgdGhpcy5vdXQgPSBuZXcgT3V0cHV0KCgpID0+IHRoaXMuaW4udmFsdWUpXG4gICAgfVxufSIsImltcG9ydCB7IElucHV0LCBPdXRwdXQsIFdpcmUgfSBmcm9tICcuL2NvcmUnXG5cbmNvbnN0IERTID0gNTBcblxuZXhwb3J0IGNsYXNzIEFuZEdhdGUge1xuICAgIHJlYWRvbmx5IGE6IElucHV0XG4gICAgcmVhZG9ubHkgYjogSW5wdXRcbiAgICByZWFkb25seSB4OiBPdXRwdXRcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmEgPSBuZXcgSW5wdXQoKVxuICAgICAgICB0aGlzLmIgPSBuZXcgSW5wdXQoKVxuICAgICAgICB0aGlzLnggPSBuZXcgT3V0cHV0KCgpID0+IHRoaXMuYS52YWx1ZSAmJiB0aGlzLmIudmFsdWUpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3JHYXRlIHtcbiAgICByZWFkb25seSBhOiBJbnB1dFxuICAgIHJlYWRvbmx5IGI6IElucHV0XG4gICAgcmVhZG9ubHkgeDogT3V0cHV0XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hID0gbmV3IElucHV0KClcbiAgICAgICAgdGhpcy5iID0gbmV3IElucHV0KClcbiAgICAgICAgdGhpcy54ID0gbmV3IE91dHB1dCgoKSA9PiB0aGlzLmEudmFsdWUgfHwgdGhpcy5iLnZhbHVlKVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHRvcExlZnQgPSB7IHg6IHggLSBEUywgeTogeSArIERTfVxuICAgICAgICBjb25zdCBib3R0b21MZWZ0ID0geyB4OiB4IC0gRFMsIHk6IHkgLSBEUyB9XG4gICAgICAgIGNvbnN0IG91dCA9IHsgeDogeCArIERTLCB5IH0gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gQm9keVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh0b3BMZWZ0LngsIHRvcExlZnQueSlcbiAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCAtIERTIC8gMiwgeSwgYm90dG9tTGVmdC54LCBib3R0b21MZWZ0LnkpXG4gICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgLSBEUywgb3V0LngsIG91dC55KVxuICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgRFMsIHRvcExlZnQueCwgdG9wTGVmdC55KVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNlZWVlZWUnXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAzXG4gICAgICAgIGN0eC5zdHJva2UoKVxuXG4gICAgICAgIC8vIFRvcCBXaXJlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRvcExlZnQueCAtIERTLCB5IC0gRFMgLyAzKVxuICAgICAgICBjdHgubGluZVRvKHggLSBEUyAvIDEuMywgeSAtIERTIC8gMylcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5hLnZhbHVlID8gJ2dyZWVuJyA6ICdyZWQnXG4gICAgICAgIGN0eC5zdHJva2UoKVxuXG4gICAgICAgIC8vIEJvdHRvbSB3aXJlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRvcExlZnQueCAtIERTLCB5ICsgRFMgLyAzKVxuICAgICAgICBjdHgubGluZVRvKHggLSBEUyAvIDEuMywgeSArIERTIC8gMylcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5iLnZhbHVlID8gJ2dyZWVuJyA6ICdyZWQnXG4gICAgICAgIGN0eC5zdHJva2UoKVxuXG4gICAgICAgIC8vIE91dHB1dFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyhvdXQueCwgb3V0LnkpXG4gICAgICAgIGN0eC5saW5lVG8ob3V0LnggKyBEUywgb3V0LnkpXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMueC52YWx1ZSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RHYXRlIHtcbiAgICByZWFkb25seSBhOiBJbnB1dFxuICAgIHJlYWRvbmx5IHg6IE91dHB1dFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYSA9IG5ldyBJbnB1dCgpXG4gICAgICAgIHRoaXMueCA9IG5ldyBPdXRwdXQoKCkgPT4gIXRoaXMuYS52YWx1ZSlcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICBjb25zdCB0b3BMZWZ0ID0geyB4OiB4IC0gRFMsIHk6IHkgKyBEUyB9XG4gICAgICAgIGNvbnN0IGJvdHRvbUxlZnQgPSB7IHg6IHggLSBEUywgeTogeSAtIERTIH1cbiAgICAgICAgY29uc3Qgb3V0ID0geyB4OiB4ICsgRFMsIHkgfVxuXG4gICAgICAgIC8vIEJvZHlcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odG9wTGVmdC54LCB0b3BMZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8oYm90dG9tTGVmdC54LCBib3R0b21MZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8ob3V0LnggLSBEUyAvIDUsIG91dC55KVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNlZWVlZWUnXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAzXG4gICAgICAgIGN0eC5zdHJva2UoKVxuXG4gICAgICAgIC8vIERPVFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyhvdXQueCAtIERTIC8gMTAsIG91dC55LCBEUyAvIDEwLCAwLCBNYXRoLlBJICogMilcbiAgICAgICAgY3R4LnN0cm9rZSgpXG5cbiAgICAgICAgLy8gSW5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odG9wTGVmdC54IC0gRFMsIHkpXG4gICAgICAgIGN0eC5saW5lVG8oeCAtIERTLCB5KVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmEudmFsdWUgPyAnZ3JlZW4nIDogJ3JlZCdcbiAgICAgICAgY3R4LnN0cm9rZSgpXG5cbiAgICAgICAgLy8gT3V0cHV0XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKG91dC54LCBvdXQueSlcbiAgICAgICAgY3R4LmxpbmVUbyhvdXQueCArIERTLCBvdXQueSlcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy54LnZhbHVlID8gJ2dyZWVuJyA6ICdyZWQnXG4gICAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgRFMgPSA1MFxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcmF3YWJsZSB7XG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWRcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eSB7XG4gICAgcHJvdGVjdGVkIF9wYXJlbnQ/OiBHcm91cFxuICAgIHByb3RlY3RlZCBfbG9jYWxQb3NpdGlvbjogUG9pbnRcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH1cbiAgICB9XG5cbiAgICBnZXQgZ2xvYmFsUG9zaXRpb24oKTogUG9pbnQge1xuICAgICAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsUG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5fbG9jYWxQb3NpdGlvbi54ICsgdGhpcy5fcGFyZW50Lmdsb2JhbFBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLl9sb2NhbFBvc2l0aW9uLnkgKyB0aGlzLl9wYXJlbnQuZ2xvYmFsUG9zaXRpb24ueVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IHBhcmVudChwYXJlbnQ6IEdyb3VwKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLl9wYXJlbnQuYWRkQ2hpbGQodGhpcylcbiAgICB9XG5cbiAgICByZW1vdmVQYXJlbnQoKSB7XG4gICAgICAgIGNvbnN0IGdsb2JhbFBvcyA9IHRoaXMuZ2xvYmFsUG9zaXRpb25cbiAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uID0gZ2xvYmFsUG9zXG4gICAgfVxuXG4gICAgc2V0IGxvY2FsUG9zaXRpb24odmFsdWU6IFBvaW50KSB7XG4gICAgICAgIHRoaXMuX2xvY2FsUG9zaXRpb24ueCA9IHZhbHVlLnhcbiAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbi55ID0gdmFsdWUueVxuICAgIH1cblxuICAgIGFic3RyYWN0IGNvaW50YWluc1BvaW50KHBvaW50OiBQb2ludCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBib29sZWFuXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcm91cCBleHRlbmRzIEVudGl0eSB7XG4gICAgcHJvdGVjdGVkIF9jaGlsZHJlbjogRW50aXR5W11cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW11cbiAgICB9XG5cbiAgICBhZGRDaGlsZChlbnRpdHk6IEVudGl0eSkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGVudGl0eSlcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChlbnRpdHk6IEVudGl0eSkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IHRoaXMuX2NoaWxkcmVuLmZpbHRlcihjID0+IGMgIT09IGVudGl0eSlcbiAgICB9XG5cbiAgICBjb2ludGFpbnNQb2ludChwb2ludDogUG9pbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbi5zb21lKGMgPT4gYy5jb2ludGFpbnNQb2ludChwb2ludCwgY3R4KSkgICAgXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBQb2ludCwgRHJhd2FibGUsIERTIH0gZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHsgQW5kR2F0ZSB9IGZyb20gXCIuLi9jaXJjdWl0L2dhdGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmRTcHJpdGUgZXh0ZW5kcyBFbnRpdHkgaW1wbGVtZW50cyBEcmF3YWJsZSB7XG4gICAgcHJpdmF0ZSBfZ2F0ZTogQW5kR2F0ZVxuXG4gICAgcHJpdmF0ZSBnZXQgdG9wTGVmdCgpOiBQb2ludCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLmdsb2JhbFBvc2l0aW9uLnggLSBEUyxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2xvYmFsUG9zaXRpb24ueSArIERTXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBib3R0b21MZWZ0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2xvYmFsUG9zaXRpb24ueCAtIERTLFxuICAgICAgICAgICAgeTogdGhpcy5nbG9iYWxQb3NpdGlvbi55IC0gRFNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IG91dCgpOiBQb2ludCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLmdsb2JhbFBvc2l0aW9uLnggKyBEUywgXG4gICAgICAgICAgICB5OiB0aGlzLmdsb2JhbFBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGdhdGU6IEFuZEdhdGUpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLl9nYXRlID0gZ2F0ZVxuICAgIH1cblxuICAgIG1ha2VHYXRlQm9keVBhdGgoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuZ2xvYmFsUG9zaXRpb24ueFxuICAgICAgICBjb25zdCB5ID0gdGhpcy5nbG9iYWxQb3NpdGlvbi55XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgdGhpcy50b3BMZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy50b3BMZWZ0LngsIHRoaXMudG9wTGVmdC55KVxuICAgICAgICBjdHgubGluZVRvKHRoaXMuYm90dG9tTGVmdC54LCB0aGlzLmJvdHRvbUxlZnQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB0aGlzLmJvdHRvbUxlZnQueSlcbiAgICAgICAgY3R4LmFyYyh4LCB5LCBEUywgTWF0aC5QSSAqIDMgLyAyLCBNYXRoLlBJIC8gMilcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLmdsb2JhbFBvc2l0aW9uLnhcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuZ2xvYmFsUG9zaXRpb24ueVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2VlZWVlZSdcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDNcblxuICAgICAgICAvLyBCb2R5XG4gICAgICAgIHRoaXMubWFrZUdhdGVCb2R5UGF0aChjdHgpXG4gICAgICAgIGN0eC5zdHJva2UoKVxuXG4gICAgICAgIC8vIFRvcCBXaXJlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRoaXMudG9wTGVmdC54IC0gRFMsIHkgLSBEUyAvIDMpXG4gICAgICAgIGN0eC5saW5lVG8oeCAtIERTLCB5IC0gRFMgLyAzKVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9nYXRlLmEudmFsdWUgPyAnZ3JlZW4nIDogJ3JlZCdcbiAgICAgICAgY3R4LnN0cm9rZSgpXG5cbiAgICAgICAgLy8gQm90dG9tIHdpcmVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy50b3BMZWZ0LnggLSBEUywgeSArIERTIC8gMylcbiAgICAgICAgY3R4LmxpbmVUbyh4IC0gRFMsIHkgKyBEUyAvIDMpXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuX2dhdGUuYi52YWx1ZSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBPdXRwdXRcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5vdXQueCwgdGhpcy5vdXQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLm91dC54ICsgRFMsIHRoaXMub3V0LnkpXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuX2dhdGUueC52YWx1ZSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG4gICAgXG4gICAgY29pbnRhaW5zUG9pbnQocG9pbnQ6IFBvaW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLm1ha2VHYXRlQm9keVBhdGgoY3R4KVxuICAgICAgICByZXR1cm4gY3R4LmlzUG9pbnRJblBhdGgocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBFbnRpdHksIERyYXdhYmxlLCBQb2ludCwgR3JvdXAgfSBmcm9tICcuL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBQb2ludGVyIGV4dGVuZHMgR3JvdXAgaW1wbGVtZW50cyBEcmF3YWJsZSB7XG4gICAgcHJpdmF0ZSBfaG9sZGluZz86IEVudGl0eSAmIERyYXdhYmxlXG5cbiAgICBwcml2YXRlIF9jYjogKHA6IFBvaW50KSA9PiB2b2lkXG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjYjogKHA6IFBvaW50KSA9PiB2b2lkKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gZSA9PiB0aGlzLm9uTW91c2VNb3ZlKGUpXG4gICAgICAgIGNhbnZhcy5vbmNsaWNrID0gZSA9PiB0aGlzLm9uQ2xpY2soZSlcbiAgICAgICAgdGhpcy5sb2NhbFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgdGhpcy5fY2IgPSBjYlxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9ob2xkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ob2xkaW5nLmRyYXcoY3R4KVxuICAgIH1cblxuICAgIHNldCBob2xkaW5nKGU6IEVudGl0eSAmIERyYXdhYmxlKSB7XG4gICAgICAgIHRoaXMuX2hvbGRpbmcgPSBlXG4gICAgICAgIHRoaXMuX2hvbGRpbmcucGFyZW50ID0gdGhpc1xuICAgICAgICB0aGlzLl9ob2xkaW5nLmxvY2FsUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfVxuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5sb2NhbFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hvbGRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2hvbGRpbmcucmVtb3ZlUGFyZW50KClcbiAgICAgICAgICAgIHRoaXMuX2hvbGRpbmcgPSB1bmRlZmluZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NiKHtcbiAgICAgICAgICAgICAgICB4OiBlLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9yR2F0ZSwgTm90R2F0ZSwgQW5kR2F0ZSB9IGZyb20gXCIuL2NpcmN1aXQvZ2F0ZXNcIjtcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gXCIuL2NpcmN1aXQvY29yZVwiO1xuaW1wb3J0IHsgQW5kU3ByaXRlIH0gZnJvbSBcIi4vZ3JhcGhpY3MvZ2F0ZS1zcHJpdGVzXCI7XG5pbXBvcnQge1BvaW50ZXJ9IGZyb20gXCIuL2dyYXBoaWNzL3BvaW50ZXJcIlxuXG5jb25zdCBjb21wdXRlQ2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlJylcbmNvbnN0IGNvbnRleHQgPSBjb21wdXRlQ2FudmFzLmdldENvbnRleHQoJzJkJylcbmNvbnN0IGEgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYScpXG5jb25zdCBiID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2InKVxuXG5jb25zdCBhT3V0cHV0ID0gbmV3IE91dHB1dCgoKSA9PiBhLmNoZWNrZWQpXG5jb25zdCBiT3V0cHV0ID0gbmV3IE91dHB1dCgoKSA9PiBiLmNoZWNrZWQpXG5jb25zdCBwb3dlciA9IG5ldyBPdXRwdXQoKCkgPT4gdHJ1ZSlcbmNvbnN0IGdyb3VuZCA9IG5ldyBPdXRwdXQoKCkgPT4gZmFsc2UpXG5cbmNvbnN0IGFuZEdhdGUgPSBuZXcgQW5kR2F0ZSgpXG5jb25zdCBvckdhdGUgPSBuZXcgT3JHYXRlKClcbmNvbnN0IG5vdEdhdGUgPSBuZXcgTm90R2F0ZSgpXG5cbmNvbnRleHQuZmlsbFN0eWxlID0gJyMyMjIyMjInXG5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIDcyMCwgNzIwKVxuXG5vckdhdGUuYS5jb25uZWN0KHBvd2VyKVxub3JHYXRlLmIuY29ubmVjdChncm91bmQpXG5hbmRHYXRlLmEuY29ubmVjdChhT3V0cHV0KVxuYW5kR2F0ZS5iLmNvbm5lY3QoYk91dHB1dClcbm5vdEdhdGUuYS5jb25uZWN0KGFuZEdhdGUueClcblxuY29uc3QgYW5kU3ByaXRlID0gbmV3IEFuZFNwcml0ZShhbmRHYXRlKVxuYW5kU3ByaXRlLmxvY2FsUG9zaXRpb24gPSB7IHg6IDI1MCwgeTogMzYwIH1cblxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBjb25zb2xlLmxvZygndGljaycpXG5cbiAgICBjb25zb2xlLmxvZygnb3IgYTogJyArIGFuZEdhdGUuYS52YWx1ZSlcbiAgICBjb25zb2xlLmxvZygnb3IgYjogJyArIGFuZEdhdGUuYi52YWx1ZSlcbiAgICBjb25zb2xlLmxvZygnb3IgeDogJyArIGFuZEdhdGUueC52YWx1ZSlcbiAgICBjb25zb2xlLmxvZygnbm90IGE6ICcgKyBub3RHYXRlLmEudmFsdWUpXG4gICAgY29uc29sZS5sb2coJ25vdCB4OiAnICsgbm90R2F0ZS54LnZhbHVlKVxuXG4gICAgY29uc29sZS5sb2coJ29yIG5leHQ6ICcgKyBhbmRHYXRlLnguZ2VuZXJhdGVOZXh0KCkpXG4gICAgY29uc29sZS5sb2coJ25vdCBuZXh0OiAnICsgbm90R2F0ZS54LmdlbmVyYXRlTmV4dCgpKVxuICAgIGFPdXRwdXQuZ2VuZXJhdGVOZXh0KClcbiAgICBiT3V0cHV0LmdlbmVyYXRlTmV4dCgpXG5cbiAgICBhT3V0cHV0LmFwcGx5TmV4dCgpXG4gICAgYk91dHB1dC5hcHBseU5leHQoKVxuICAgIGFuZEdhdGUueC5hcHBseU5leHQoKVxuICAgIG5vdEdhdGUueC5hcHBseU5leHQoKVxufVxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMyMjIyMjInXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCA3MjAsIDcyMClcblxuICAgIGFuZFNwcml0ZS5kcmF3KGNvbnRleHQpXG4gICAgbm90R2F0ZS5kcmF3KGNvbnRleHQsIDQwMCwgMzYwKVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpXG59XG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdylcblxuY29uc3QgZ29CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ28nKVxuZ29CdG4ub25jbGljayA9IHRpY2tcblxuY29uc3QgcG9pbnRlciA9IG5ldyBQb2ludGVyKGNvbXB1dGVDYW52YXMsIHAgPT4ge1xuICAgIGNvbnNvbGUubG9nKGAke3AueH0sJHtwLnl9YClcbiAgICBjb25zb2xlLmxvZyhhbmRTcHJpdGUuY29pbnRhaW5zUG9pbnQocCwgY29udGV4dCkgPyAnaW4nIDogJ291dCcpXG4gICAgaWYgKGFuZFNwcml0ZS5jb2ludGFpbnNQb2ludChwLCBjb250ZXh0KSkge1xuICAgICAgICBwb2ludGVyLmhvbGRpbmcgPSBhbmRTcHJpdGVcbiAgICB9XG59KSJdLCJzb3VyY2VSb290IjoiIn0=