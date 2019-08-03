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
/*! exports provided: Input, Output */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return Output; });
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



/***/ }),

/***/ "./src/circuit/gates.ts":
/*!******************************!*\
  !*** ./src/circuit/gates.ts ***!
  \******************************/
/*! exports provided: Gate, AndGate, OrGate, NotGate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gate", function() { return Gate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndGate", function() { return AndGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrGate", function() { return OrGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotGate", function() { return NotGate; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/circuit/core.ts");
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
var Gate = /** @class */ (function () {
    function Gate() {
    }
    return Gate;
}());

var AndGate = /** @class */ (function (_super) {
    __extends(AndGate, _super);
    function AndGate() {
        var _this = _super.call(this) || this;
        _this.a = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        _this.b = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        _this.x = new _core__WEBPACK_IMPORTED_MODULE_0__["Output"](function () { return _this.a.value && _this.b.value; });
        return _this;
    }
    Object.defineProperty(AndGate.prototype, "inputs", {
        get: function () {
            return [this.a, this.b];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndGate.prototype, "outputs", {
        get: function () {
            return [this.x];
        },
        enumerable: true,
        configurable: true
    });
    return AndGate;
}(Gate));

var OrGate = /** @class */ (function (_super) {
    __extends(OrGate, _super);
    function OrGate() {
        var _this = _super.call(this) || this;
        _this.a = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        _this.b = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        _this.x = new _core__WEBPACK_IMPORTED_MODULE_0__["Output"](function () { return _this.a.value || _this.b.value; });
        return _this;
    }
    Object.defineProperty(OrGate.prototype, "inputs", {
        get: function () {
            return [this.a, this.b];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrGate.prototype, "outputs", {
        get: function () {
            return [this.x];
        },
        enumerable: true,
        configurable: true
    });
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
}(Gate));

var NotGate = /** @class */ (function (_super) {
    __extends(NotGate, _super);
    function NotGate() {
        var _this = _super.call(this) || this;
        _this.a = new _core__WEBPACK_IMPORTED_MODULE_0__["Input"]();
        _this.x = new _core__WEBPACK_IMPORTED_MODULE_0__["Output"](function () { return !_this.a.value; });
        return _this;
    }
    Object.defineProperty(NotGate.prototype, "inputs", {
        get: function () {
            return [this.a];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotGate.prototype, "outputs", {
        get: function () {
            return [this.x];
        },
        enumerable: true,
        configurable: true
    });
    return NotGate;
}(Gate));



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
        this._scale = 50;
    }
    Object.defineProperty(Entity.prototype, "position", {
        get: function () {
            if (!this._parent) {
                return this._localPosition;
            }
            return {
                x: this._localPosition.x + this._parent.position.x,
                y: this._localPosition.y + this._parent.position.y
            };
        },
        set: function (value) {
            this._localPosition.x = value.x;
            this._localPosition.y = value.y;
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
        var globalPos = this.position;
        this._parent.removeChild(this);
        this._parent = undefined;
        this._localPosition = globalPos;
    };
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
        _this.position = { x: 0, y: 0 };
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
            this._holding.position = { x: 0, y: 0 };
        },
        enumerable: true,
        configurable: true
    });
    Pointer.prototype.onMouseMove = function (e) {
        this.position = {
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

/***/ "./src/graphics/sprites/and-sprite.ts":
/*!********************************************!*\
  !*** ./src/graphics/sprites/and-sprite.ts ***!
  \********************************************/
/*! exports provided: AndSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndSprite", function() { return AndSprite; });
/* harmony import */ var _gate_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gate-sprite */ "./src/graphics/sprites/gate-sprite.ts");
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
        return _super.call(this, gate) || this;
    }
    AndSprite.prototype.makeGateBodyPath = function (ctx) {
        var x = this.position.x;
        var y = this.position.y;
        ctx.beginPath();
        ctx.moveTo(x, this.topLeft.y);
        ctx.lineTo(this.topLeft.x, this.topLeft.y);
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y);
        ctx.lineTo(x, this.bottomLeft.y);
        ctx.arc(x, y, this._scale, Math.PI * 3 / 2, Math.PI / 2);
    };
    AndSprite.prototype.draw = function (ctx) {
        var x = this.position.x;
        var y = this.position.y;
        ctx.strokeStyle = '#eeeeee';
        ctx.lineWidth = 3;
        // Body
        this.makeGateBodyPath(ctx);
        ctx.stroke();
        // Top Wire
        ctx.beginPath();
        ctx.moveTo(this.topLeft.x - this._scale, y - this._scale / 3);
        ctx.lineTo(x - this._scale, y - this._scale / 3);
        ctx.strokeStyle = this._gate.inputs[0].value ? 'green' : 'red';
        ctx.stroke();
        // Bottom wire
        ctx.beginPath();
        ctx.moveTo(this.topLeft.x - this._scale, y + this._scale / 3);
        ctx.lineTo(x - this._scale, y + this._scale / 3);
        ctx.strokeStyle = this._gate.inputs[1].value ? 'green' : 'red';
        ctx.stroke();
        // Output
        ctx.beginPath();
        ctx.moveTo(this.out.x, this.out.y);
        ctx.lineTo(this.output.x, this.output.y);
        ctx.strokeStyle = this._gate.outputs[0].value ? 'green' : 'red';
        ctx.stroke();
    };
    return AndSprite;
}(_gate_sprite__WEBPACK_IMPORTED_MODULE_0__["GateSprite"]));



/***/ }),

/***/ "./src/graphics/sprites/gate-sprite.ts":
/*!*********************************************!*\
  !*** ./src/graphics/sprites/gate-sprite.ts ***!
  \*********************************************/
/*! exports provided: GateSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateSprite", function() { return GateSprite; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/graphics/core.ts");
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

var GateSprite = /** @class */ (function (_super) {
    __extends(GateSprite, _super);
    function GateSprite(gate) {
        var _this = _super.call(this) || this;
        _this._gate = gate;
        return _this;
    }
    Object.defineProperty(GateSprite.prototype, "gate", {
        get: function () {
            return this._gate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GateSprite.prototype, "topLeft", {
        get: function () {
            return {
                x: this.position.x - this._scale,
                y: this.position.y + this._scale
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GateSprite.prototype, "bottomLeft", {
        get: function () {
            return {
                x: this.position.x - this._scale,
                y: this.position.y - this._scale
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GateSprite.prototype, "out", {
        get: function () {
            return {
                x: this.position.x + this._scale,
                y: this.position.y
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GateSprite.prototype, "output", {
        get: function () {
            return {
                x: this.out.x + this._scale,
                y: this.out.y
            };
        },
        enumerable: true,
        configurable: true
    });
    GateSprite.prototype.cointainsPoint = function (point, ctx) {
        this.makeGateBodyPath(ctx);
        return ctx.isPointInPath(point.x, point.y);
    };
    return GateSprite;
}(_core__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/graphics/sprites/not-sprite.ts":
/*!********************************************!*\
  !*** ./src/graphics/sprites/not-sprite.ts ***!
  \********************************************/
/*! exports provided: NotSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSprite", function() { return NotSprite; });
/* harmony import */ var _gate_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gate-sprite */ "./src/graphics/sprites/gate-sprite.ts");
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

var NotSprite = /** @class */ (function (_super) {
    __extends(NotSprite, _super);
    function NotSprite(gate) {
        return _super.call(this, gate) || this;
    }
    NotSprite.prototype.makeGateBodyPath = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.topLeft.x, this.topLeft.y);
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y);
        ctx.lineTo(this.out.x - this._scale / 5, this.out.y);
        ctx.closePath();
    };
    NotSprite.prototype.draw = function (ctx) {
        var x = this.position.x;
        var y = this.position.y;
        ctx.strokeStyle = '#eeeeee';
        ctx.lineWidth = 3;
        // Body
        this.makeGateBodyPath(ctx);
        ctx.stroke();
        // DOT
        ctx.beginPath();
        ctx.arc(this.out.x - this._scale / 10, this.out.y, this._scale / 10, 0, Math.PI * 2);
        ctx.stroke();
        // In
        ctx.beginPath();
        ctx.moveTo(this.topLeft.x - this._scale, y);
        ctx.lineTo(x - this._scale, y);
        ctx.strokeStyle = this._gate.inputs[0].value ? 'green' : 'red';
        ctx.stroke();
        // Output
        ctx.beginPath();
        ctx.moveTo(this.out.x, this.out.y);
        ctx.lineTo(this.output.x, this.output.y);
        ctx.strokeStyle = this._gate.inputs[1].value ? 'green' : 'red';
        ctx.stroke();
    };
    return NotSprite;
}(_gate_sprite__WEBPACK_IMPORTED_MODULE_0__["GateSprite"]));



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
/* harmony import */ var _graphics_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics/pointer */ "./src/graphics/pointer.ts");
/* harmony import */ var _graphics_sprites_and_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphics/sprites/and-sprite */ "./src/graphics/sprites/and-sprite.ts");
/* harmony import */ var _graphics_sprites_not_sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics/sprites/not-sprite */ "./src/graphics/sprites/not-sprite.ts");





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
var powerToOrA = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"](power, orGate.a);
var groundToOrB = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"](ground, orGate.b);
var aToAndA = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"](aOutput, andGate.a);
var bToAndB = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"](bOutput, andGate.b);
var andToNot = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"](andGate.x, notGate.a);
var andSprite = new _graphics_sprites_and_sprite__WEBPACK_IMPORTED_MODULE_3__["AndSprite"](andGate);
andSprite.position = { x: 250, y: 360 };
var notSprite = new _graphics_sprites_not_sprite__WEBPACK_IMPORTED_MODULE_4__["NotSprite"](notGate);
notSprite.position = { x: 400, y: 360 };
var sprites = [andSprite, notSprite];
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
    sprites.forEach(function (s) { return s.draw(context); });
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
var goBtn = document.getElementById('go');
goBtn.onclick = tick;
var pointer = new _graphics_pointer__WEBPACK_IMPORTED_MODULE_2__["Pointer"](computeCanvas, function (p) {
    for (var i = 0; i < sprites.length; i++) {
        if (sprites[i].cointainsPoint(p, context)) {
            pointer.holding = sprites[i];
            break;
        }
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmN1aXQvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2lyY3VpdC9nYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvcG9pbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3Mvc3ByaXRlcy9hbmQtc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9zcHJpdGVzL2dhdGUtc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9zcHJpdGVzL25vdC1zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7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LEdBQUcsU0FBUztJQUM3QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUVoQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFmLENBQWUsQ0FBQztJQUVyQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7QUFDL0IsQ0FBQztBQUNELHFCQUFxQixDQUFDLElBQUksQ0FBQztBQUUzQixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztBQUMzQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUk7QUFHcEIsSUFBTSxPQUFPLEdBQUcsSUFBSSx5REFBTyxDQUFDLGFBQWEsRUFBRSxXQUFDO0lBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDdkMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQUs7U0FDUjtLQUNKO0FBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIElucHV0IHtcbiAgICBwcml2YXRlIF9vdXRwdXQ6IE91dHB1dCB8IG51bGxcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9vdXRwdXQgPSBudWxsXG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5fb3V0cHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fb3V0cHV0LnZhbHVlXG4gICAgfVxuXG4gICAgY29ubmVjdChvdXRwdXQ6IE91dHB1dCkge1xuICAgICAgICB0aGlzLl9vdXRwdXQgPSBvdXRwdXRcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLl9vdXRwdXQgPSBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3V0cHV0IHtcbiAgICBwcml2YXRlIF92YWx1ZTogYm9vbGVhblxuICAgIHByaXZhdGUgX25leHRWYWx1ZTogYm9vbGVhbiB8IG51bGxcbiAgICBwcml2YXRlIF9uZXh0RnVuYzogKCkgPT4gYm9vbGVhblxuXG4gICAgY29uc3RydWN0b3IobmV4dEZ1bmM6ICgpID0+IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXh0RnVuYygpXG4gICAgICAgIHRoaXMuX25leHRWYWx1ZSA9IG51bGxcbiAgICAgICAgdGhpcy5fbmV4dEZ1bmMgPSBuZXh0RnVuY1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVOZXh0KCkge1xuICAgICAgICB0aGlzLl9uZXh0VmFsdWUgPSB0aGlzLl9uZXh0RnVuYygpXG4gICAgICAgIHJldHVybiB0aGlzLl9uZXh0VmFsdWVcbiAgICB9XG5cbiAgICBhcHBseU5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9uZXh0VmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyaWVkIHRvIGFwcGx5IG5leHQgd2l0aG91dCBnZW5lcmF0aW5nIGl0JylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fbmV4dFZhbHVlXG4gICAgICAgIHRoaXMuX25leHRWYWx1ZSA9IG51bGxcbiAgICB9XG59IiwiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCB9IGZyb20gJy4vY29yZSdcblxuY29uc3QgRFMgPSA1MFxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2F0ZSB7XG4gICAgYWJzdHJhY3QgZ2V0IGlucHV0cygpOiBJbnB1dFtdXG4gICAgYWJzdHJhY3QgZ2V0IG91dHB1dHMoKTogT3V0cHV0W11cbn1cblxuZXhwb3J0IGNsYXNzIEFuZEdhdGUgZXh0ZW5kcyBHYXRlIHtcbiAgICByZWFkb25seSBhOiBJbnB1dFxuICAgIHJlYWRvbmx5IGI6IElucHV0XG4gICAgcmVhZG9ubHkgeDogT3V0cHV0XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmEgPSBuZXcgSW5wdXQoKVxuICAgICAgICB0aGlzLmIgPSBuZXcgSW5wdXQoKVxuICAgICAgICB0aGlzLnggPSBuZXcgT3V0cHV0KCgpID0+IHRoaXMuYS52YWx1ZSAmJiB0aGlzLmIudmFsdWUpXG4gICAgfVxuXG4gICAgZ2V0IGlucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLmEsIHRoaXMuYl1cbiAgICB9XG5cbiAgICBnZXQgb3V0cHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnhdXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3JHYXRlIGV4dGVuZHMgR2F0ZSB7XG4gICAgcmVhZG9ubHkgYTogSW5wdXRcbiAgICByZWFkb25seSBiOiBJbnB1dFxuICAgIHJlYWRvbmx5IHg6IE91dHB1dFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5hID0gbmV3IElucHV0KClcbiAgICAgICAgdGhpcy5iID0gbmV3IElucHV0KClcbiAgICAgICAgdGhpcy54ID0gbmV3IE91dHB1dCgoKSA9PiB0aGlzLmEudmFsdWUgfHwgdGhpcy5iLnZhbHVlKVxuICAgIH1cblxuICAgIGdldCBpbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5hLCB0aGlzLmJdXG4gICAgfVxuXG4gICAgZ2V0IG91dHB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy54XVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHRvcExlZnQgPSB7IHg6IHggLSBEUywgeTogeSArIERTfVxuICAgICAgICBjb25zdCBib3R0b21MZWZ0ID0geyB4OiB4IC0gRFMsIHk6IHkgLSBEUyB9XG4gICAgICAgIGNvbnN0IG91dCA9IHsgeDogeCArIERTLCB5IH0gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gQm9keVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh0b3BMZWZ0LngsIHRvcExlZnQueSlcbiAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCAtIERTIC8gMiwgeSwgYm90dG9tTGVmdC54LCBib3R0b21MZWZ0LnkpXG4gICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgLSBEUywgb3V0LngsIG91dC55KVxuICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgRFMsIHRvcExlZnQueCwgdG9wTGVmdC55KVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNlZWVlZWUnXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAzXG4gICAgICAgIGN0eC5zdHJva2UoKVxuXG4gICAgICAgIC8vIFRvcCBXaXJlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRvcExlZnQueCAtIERTLCB5IC0gRFMgLyAzKVxuICAgICAgICBjdHgubGluZVRvKHggLSBEUyAvIDEuMywgeSAtIERTIC8gMylcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5hLnZhbHVlID8gJ2dyZWVuJyA6ICdyZWQnXG4gICAgICAgIGN0eC5zdHJva2UoKVxuXG4gICAgICAgIC8vIEJvdHRvbSB3aXJlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRvcExlZnQueCAtIERTLCB5ICsgRFMgLyAzKVxuICAgICAgICBjdHgubGluZVRvKHggLSBEUyAvIDEuMywgeSArIERTIC8gMylcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5iLnZhbHVlID8gJ2dyZWVuJyA6ICdyZWQnXG4gICAgICAgIGN0eC5zdHJva2UoKVxuXG4gICAgICAgIC8vIE91dHB1dFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyhvdXQueCwgb3V0LnkpXG4gICAgICAgIGN0eC5saW5lVG8ob3V0LnggKyBEUywgb3V0LnkpXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMueC52YWx1ZSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RHYXRlIGV4dGVuZHMgR2F0ZSB7XG4gICAgcmVhZG9ubHkgYTogSW5wdXRcbiAgICByZWFkb25seSB4OiBPdXRwdXRcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYSA9IG5ldyBJbnB1dCgpXG4gICAgICAgIHRoaXMueCA9IG5ldyBPdXRwdXQoKCkgPT4gIXRoaXMuYS52YWx1ZSlcbiAgICB9XG5cbiAgICBnZXQgaW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuYV1cbiAgICB9XG5cbiAgICBnZXQgb3V0cHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnhdXG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBEUyA9IDUwXG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW50aXR5IHtcbiAgICBwcm90ZWN0ZWQgX3BhcmVudD86IEdyb3VwXG4gICAgcHJvdGVjdGVkIF9sb2NhbFBvc2l0aW9uOiBQb2ludFxuICAgIHByb3RlY3RlZCBfc2NhbGU6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICB0aGlzLl9zY2FsZSA9IDUwXG4gICAgfVxuXG4gICAgZ2V0IHBvc2l0aW9uKCk6IFBvaW50IHtcbiAgICAgICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMuX2xvY2FsUG9zaXRpb24ueCArIHRoaXMuX3BhcmVudC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5fbG9jYWxQb3NpdGlvbi55ICsgdGhpcy5fcGFyZW50LnBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBwYXJlbnQocGFyZW50OiBHcm91cCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgdGhpcy5fcGFyZW50LmFkZENoaWxkKHRoaXMpXG4gICAgfVxuXG4gICAgcmVtb3ZlUGFyZW50KCkge1xuICAgICAgICBjb25zdCBnbG9iYWxQb3MgPSB0aGlzLnBvc2l0aW9uXG4gICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzKVxuICAgICAgICB0aGlzLl9wYXJlbnQgPSB1bmRlZmluZWRcbiAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbiA9IGdsb2JhbFBvc1xuICAgIH1cblxuICAgIHNldCBwb3NpdGlvbih2YWx1ZTogUG9pbnQpIHtcbiAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbi54ID0gdmFsdWUueFxuICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uLnkgPSB2YWx1ZS55XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWRcbiAgICBhYnN0cmFjdCBjb2ludGFpbnNQb2ludChwb2ludDogUG9pbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogYm9vbGVhblxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JvdXAgZXh0ZW5kcyBFbnRpdHkge1xuICAgIHByb3RlY3RlZCBfY2hpbGRyZW46IEVudGl0eVtdXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdXG4gICAgfVxuXG4gICAgYWRkQ2hpbGQoZW50aXR5OiBFbnRpdHkpIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChlbnRpdHkpXG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGQoZW50aXR5OiBFbnRpdHkpIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSB0aGlzLl9jaGlsZHJlbi5maWx0ZXIoYyA9PiBjICE9PSBlbnRpdHkpXG4gICAgfVxuXG4gICAgY29pbnRhaW5zUG9pbnQocG9pbnQ6IFBvaW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4uc29tZShjID0+IGMuY29pbnRhaW5zUG9pbnQocG9pbnQsIGN0eCkpICAgIFxuICAgIH1cbn1cbiIsImltcG9ydCB7IEVudGl0eSwgUG9pbnQsIEdyb3VwIH0gZnJvbSAnLi9jb3JlJ1xuXG5leHBvcnQgY2xhc3MgUG9pbnRlciBleHRlbmRzIEdyb3VwIHtcbiAgICBwcml2YXRlIF9ob2xkaW5nPzogRW50aXR5XG5cbiAgICBwcml2YXRlIF9jYjogKHA6IFBvaW50KSA9PiB2b2lkXG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjYjogKHA6IFBvaW50KSA9PiB2b2lkKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gZSA9PiB0aGlzLm9uTW91c2VNb3ZlKGUpXG4gICAgICAgIGNhbnZhcy5vbmNsaWNrID0gZSA9PiB0aGlzLm9uQ2xpY2soZSlcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgIHRoaXMuX2NiID0gY2JcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5faG9sZGluZykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faG9sZGluZy5kcmF3KGN0eClcbiAgICB9XG5cbiAgICBzZXQgaG9sZGluZyhlOiBFbnRpdHkpIHtcbiAgICAgICAgdGhpcy5faG9sZGluZyA9IGVcbiAgICAgICAgdGhpcy5faG9sZGluZy5wYXJlbnQgPSB0aGlzXG4gICAgICAgIHRoaXMuX2hvbGRpbmcucG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfVxuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGUub2Zmc2V0WCxcbiAgICAgICAgICAgIHk6IGUub2Zmc2V0WVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9ob2xkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9ob2xkaW5nLnJlbW92ZVBhcmVudCgpXG4gICAgICAgICAgICB0aGlzLl9ob2xkaW5nID0gdW5kZWZpbmVkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jYih7XG4gICAgICAgICAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IGUub2Zmc2V0WVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBBbmRHYXRlIH0gZnJvbSBcIi4uLy4uL2NpcmN1aXQvZ2F0ZXNcIjtcbmltcG9ydCB7IEdhdGVTcHJpdGUgfSBmcm9tIFwiLi9nYXRlLXNwcml0ZVwiO1xuXG5leHBvcnQgY2xhc3MgQW5kU3ByaXRlIGV4dGVuZHMgR2F0ZVNwcml0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihnYXRlOiBBbmRHYXRlKSB7XG4gICAgICAgIHN1cGVyKGdhdGUpXG4gICAgfVxuXG4gICAgbWFrZUdhdGVCb2R5UGF0aChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnlcblxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB0aGlzLnRvcExlZnQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnRvcExlZnQueCwgdGhpcy50b3BMZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5ib3R0b21MZWZ0LngsIHRoaXMuYm90dG9tTGVmdC55KVxuICAgICAgICBjdHgubGluZVRvKHgsIHRoaXMuYm90dG9tTGVmdC55KVxuICAgICAgICBjdHguYXJjKHgsIHksIHRoaXMuX3NjYWxlLCBNYXRoLlBJICogMyAvIDIsIE1hdGguUEkgLyAyKVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb24ueFxuICAgICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbi55XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZWVlZWVlJ1xuICAgICAgICBjdHgubGluZVdpZHRoID0gM1xuXG4gICAgICAgIC8vIEJvZHlcbiAgICAgICAgdGhpcy5tYWtlR2F0ZUJvZHlQYXRoKGN0eClcbiAgICAgICAgY3R4LnN0cm9rZSgpXG5cbiAgICAgICAgLy8gVG9wIFdpcmVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy50b3BMZWZ0LnggLSB0aGlzLl9zY2FsZSwgeSAtIHRoaXMuX3NjYWxlIC8gMylcbiAgICAgICAgY3R4LmxpbmVUbyh4IC0gdGhpcy5fc2NhbGUsIHkgLSB0aGlzLl9zY2FsZSAvIDMpXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuX2dhdGUuaW5wdXRzWzBdLnZhbHVlID8gJ2dyZWVuJyA6ICdyZWQnXG4gICAgICAgIGN0eC5zdHJva2UoKVxuXG4gICAgICAgIC8vIEJvdHRvbSB3aXJlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRoaXMudG9wTGVmdC54IC0gdGhpcy5fc2NhbGUsIHkgKyB0aGlzLl9zY2FsZSAvIDMpXG4gICAgICAgIGN0eC5saW5lVG8oeCAtIHRoaXMuX3NjYWxlLCB5ICsgdGhpcy5fc2NhbGUgLyAzKVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9nYXRlLmlucHV0c1sxXS52YWx1ZSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBPdXRwdXRcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5vdXQueCwgdGhpcy5vdXQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLm91dHB1dC54LCB0aGlzLm91dHB1dC55KVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9nYXRlLm91dHB1dHNbMF0udmFsdWUgPyAnZ3JlZW4nIDogJ3JlZCdcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxufSIsImltcG9ydCB7IEVudGl0eSwgUG9pbnQgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gXCIuLi8uLi9jaXJjdWl0L2dhdGVzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHYXRlU3ByaXRlIGV4dGVuZHMgRW50aXR5IHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2dhdGU6IEdhdGVcblxuICAgIGNvbnN0cnVjdG9yKGdhdGU6IEdhdGUpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLl9nYXRlID0gZ2F0ZVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2F0ZSgpOiBHYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhdGVcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHRvcExlZnQoKTogUG9pbnQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5fc2NhbGUsXG4gICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLl9zY2FsZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBib3R0b21MZWZ0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3NjYWxlLFxuICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5fc2NhbGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgb3V0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuX3NjYWxlLCBcbiAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvdXRwdXQoKTogUG9pbnQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5vdXQueCArIHRoaXMuX3NjYWxlLCBcbiAgICAgICAgICAgIHk6IHRoaXMub3V0LnlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFic3RyYWN0IG1ha2VHYXRlQm9keVBhdGgoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkXG4gICAgXG4gICAgY29pbnRhaW5zUG9pbnQocG9pbnQ6IFBvaW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLm1ha2VHYXRlQm9keVBhdGgoY3R4KVxuICAgICAgICByZXR1cm4gY3R4LmlzUG9pbnRJblBhdGgocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG59IiwiaW1wb3J0IHsgR2F0ZVNwcml0ZSB9IGZyb20gXCIuL2dhdGUtc3ByaXRlXCI7XG5pbXBvcnQgeyBOb3RHYXRlIH0gZnJvbSBcIi4uLy4uL2NpcmN1aXQvZ2F0ZXNcIjtcblxuZXhwb3J0IGNsYXNzIE5vdFNwcml0ZSBleHRlbmRzIEdhdGVTcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKGdhdGU6IE5vdEdhdGUpIHtcbiAgICAgICAgc3VwZXIoZ2F0ZSlcbiAgICB9XG5cbiAgICBtYWtlR2F0ZUJvZHlQYXRoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRoaXMudG9wTGVmdC54LCB0aGlzLnRvcExlZnQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmJvdHRvbUxlZnQueCwgdGhpcy5ib3R0b21MZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5vdXQueCAtIHRoaXMuX3NjYWxlIC8gNSwgdGhpcy5vdXQueSlcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNlZWVlZWUnXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAzXG5cbiAgICAgICAgLy8gQm9keVxuICAgICAgICB0aGlzLm1ha2VHYXRlQm9keVBhdGgoY3R4KVxuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBET1RcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5hcmModGhpcy5vdXQueCAtIHRoaXMuX3NjYWxlIC8gMTAsIHRoaXMub3V0LnksIHRoaXMuX3NjYWxlIC8gMTAsIDAsIE1hdGguUEkgKiAyKVxuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBJblxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnRvcExlZnQueCAtIHRoaXMuX3NjYWxlLCB5KVxuICAgICAgICBjdHgubGluZVRvKHggLSB0aGlzLl9zY2FsZSwgeSlcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5fZ2F0ZS5pbnB1dHNbMF0udmFsdWUgPyAnZ3JlZW4nIDogJ3JlZCdcbiAgICAgICAgY3R4LnN0cm9rZSgpXG5cbiAgICAgICAgLy8gT3V0cHV0XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRoaXMub3V0LngsIHRoaXMub3V0LnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5vdXRwdXQueCwgdGhpcy5vdXRwdXQueSlcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5fZ2F0ZS5pbnB1dHNbMV0udmFsdWUgPyAnZ3JlZW4nIDogJ3JlZCdcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxufSIsImltcG9ydCB7IE9yR2F0ZSwgTm90R2F0ZSwgQW5kR2F0ZSB9IGZyb20gXCIuL2NpcmN1aXQvZ2F0ZXNcIjtcbmltcG9ydCB7IE91dHB1dCwgV2lyZSB9IGZyb20gXCIuL2NpcmN1aXQvY29yZVwiO1xuaW1wb3J0IHtQb2ludGVyfSBmcm9tIFwiLi9ncmFwaGljcy9wb2ludGVyXCJcbmltcG9ydCB7IEFuZFNwcml0ZSB9IGZyb20gXCIuL2dyYXBoaWNzL3Nwcml0ZXMvYW5kLXNwcml0ZVwiO1xuaW1wb3J0IHsgTm90U3ByaXRlIH0gZnJvbSBcIi4vZ3JhcGhpY3Mvc3ByaXRlcy9ub3Qtc3ByaXRlXCI7XG5cbmNvbnN0IGNvbXB1dGVDYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGUnKVxuY29uc3QgY29udGV4dCA9IGNvbXB1dGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuY29uc3QgYSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhJylcbmNvbnN0IGIgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYicpXG5cbmNvbnN0IGFPdXRwdXQgPSBuZXcgT3V0cHV0KCgpID0+IGEuY2hlY2tlZClcbmNvbnN0IGJPdXRwdXQgPSBuZXcgT3V0cHV0KCgpID0+IGIuY2hlY2tlZClcbmNvbnN0IHBvd2VyID0gbmV3IE91dHB1dCgoKSA9PiB0cnVlKVxuY29uc3QgZ3JvdW5kID0gbmV3IE91dHB1dCgoKSA9PiBmYWxzZSlcblxuY29uc3QgYW5kR2F0ZSA9IG5ldyBBbmRHYXRlKClcbmNvbnN0IG9yR2F0ZSA9IG5ldyBPckdhdGUoKVxuY29uc3Qgbm90R2F0ZSA9IG5ldyBOb3RHYXRlKClcblxuY29uc3QgcG93ZXJUb09yQSA9IG5ldyBXaXJlKHBvd2VyLCBvckdhdGUuYSlcbmNvbnN0IGdyb3VuZFRvT3JCID0gbmV3IFdpcmUoZ3JvdW5kLCBvckdhdGUuYilcbmNvbnN0IGFUb0FuZEEgPSBuZXcgV2lyZShhT3V0cHV0LCBhbmRHYXRlLmEpXG5jb25zdCBiVG9BbmRCID0gbmV3IFdpcmUoYk91dHB1dCwgYW5kR2F0ZS5iKVxuY29uc3QgYW5kVG9Ob3QgPSBuZXcgV2lyZShhbmRHYXRlLngsIG5vdEdhdGUuYSlcblxuY29uc3QgYW5kU3ByaXRlID0gbmV3IEFuZFNwcml0ZShhbmRHYXRlKVxuYW5kU3ByaXRlLnBvc2l0aW9uID0geyB4OiAyNTAsIHk6IDM2MCB9XG5cbmNvbnN0IG5vdFNwcml0ZSA9IG5ldyBOb3RTcHJpdGUobm90R2F0ZSlcbm5vdFNwcml0ZS5wb3NpdGlvbiA9IHsgeDogNDAwLCB5OiAzNjAgfVxuXG5jb25zdCBzcHJpdGVzID0gW2FuZFNwcml0ZSwgbm90U3ByaXRlXVxuXG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCd0aWNrJylcblxuICAgIGNvbnNvbGUubG9nKCdvciBhOiAnICsgYW5kR2F0ZS5hLnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKCdvciBiOiAnICsgYW5kR2F0ZS5iLnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKCdvciB4OiAnICsgYW5kR2F0ZS54LnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKCdub3QgYTogJyArIG5vdEdhdGUuYS52YWx1ZSlcbiAgICBjb25zb2xlLmxvZygnbm90IHg6ICcgKyBub3RHYXRlLngudmFsdWUpXG5cbiAgICBjb25zb2xlLmxvZygnb3IgbmV4dDogJyArIGFuZEdhdGUueC5nZW5lcmF0ZU5leHQoKSlcbiAgICBjb25zb2xlLmxvZygnbm90IG5leHQ6ICcgKyBub3RHYXRlLnguZ2VuZXJhdGVOZXh0KCkpXG4gICAgYU91dHB1dC5nZW5lcmF0ZU5leHQoKVxuICAgIGJPdXRwdXQuZ2VuZXJhdGVOZXh0KClcblxuICAgIGFPdXRwdXQuYXBwbHlOZXh0KClcbiAgICBiT3V0cHV0LmFwcGx5TmV4dCgpXG4gICAgYW5kR2F0ZS54LmFwcGx5TmV4dCgpXG4gICAgbm90R2F0ZS54LmFwcGx5TmV4dCgpXG59XG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzIyMjIyMidcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIDcyMCwgNzIwKVxuXG4gICAgc3ByaXRlcy5mb3JFYWNoKHMgPT4gcy5kcmF3KGNvbnRleHQpKVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpXG59XG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdylcblxuY29uc3QgZ29CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ28nKVxuZ29CdG4ub25jbGljayA9IHRpY2tcblxuXG5jb25zdCBwb2ludGVyID0gbmV3IFBvaW50ZXIoY29tcHV0ZUNhbnZhcywgcCA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzcHJpdGVzW2ldLmNvaW50YWluc1BvaW50KHAsIGNvbnRleHQpKSB7XG4gICAgICAgICAgICBwb2ludGVyLmhvbGRpbmcgPSBzcHJpdGVzW2ldXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufSkiXSwic291cmNlUm9vdCI6IiJ9