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

/***/ "./src/circuit/chips.ts":
/*!******************************!*\
  !*** ./src/circuit/chips.ts ***!
  \******************************/
/*! exports provided: AndGate, OrGate, NotGate, TriState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndGate", function() { return AndGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrGate", function() { return OrGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotGate", function() { return NotGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriState", function() { return TriState; });
var AndGate = /** @class */ (function () {
    function AndGate(name) {
        var _this = this;
        this._a = null;
        this._b = null;
        this.a = function (value) { return _this._a = value; };
        this.b = function (value) { return _this._b = value; };
        this.x = function () { return _this._a && _this._b; };
        this.inputs = [this.a, this.b];
        this.outputs = [this.x];
        this.name = 'AND - ';
    }
    return AndGate;
}());

var OrGate = /** @class */ (function () {
    function OrGate(name) {
        var _this = this;
        this._a = null;
        this._b = null;
        this.a = function (value) { return _this._a = value; };
        this.b = function (value) { return _this._b = value; };
        this.x = function () { return _this._a || _this._b; };
        this.inputs = [this.a, this.b];
        this.outputs = [this.x];
        this.name = 'OR - ';
    }
    return OrGate;
}());

var NotGate = /** @class */ (function () {
    function NotGate(name) {
        var _this = this;
        this._a = null;
        this.a = function (value) { return _this._a = value; };
        this.x = function () { return _this._a === null ? null : !_this._a; };
        this.inputs = [this.a];
        this.outputs = [this.x];
        this.name = 'NOT - ';
    }
    return NotGate;
}());

var TriState = /** @class */ (function () {
    function TriState(name) {
        var _this = this;
        this.a = function (value) { return _this._a = value; };
        this.en = function (value) { return _this._en = value; };
        this.x = function () { return _this._en ? _this._a : null; };
        this.inputs = [this.a, this.en];
        this.outputs = [this.x];
        this.name = 'TRI-STATE - ';
    }
    return TriState;
}());



/***/ }),

/***/ "./src/circuit/core.ts":
/*!*****************************!*\
  !*** ./src/circuit/core.ts ***!
  \*****************************/
/*! exports provided: Wire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wire", function() { return Wire; });
var Wire = /** @class */ (function () {
    function Wire(name, outputs, inputs) {
        this.name = name;
        this.outputs = outputs || [];
        this.inputs = inputs || [];
    }
    Wire.prototype.read = function () {
        var activeSignals = this.outputs
            .map(function (o, i) { return [i, o()]; })
            .filter(function (s) { return s[1] !== null; });
        if (activeSignals.length > 1) {
            throw new Error("Multiple active signals on wire " + this.name + ":\n" + JSON.stringify(activeSignals));
        }
        if (activeSignals.length === 1) {
            this._next = activeSignals[0][1];
        }
        else {
            this._next = null;
        }
        console.log("Wire " + this.name + " read value " + this._next);
    };
    Wire.prototype.write = function () {
        var _this = this;
        this.inputs.forEach(function (i) { return i(_this._next); });
    };
    return Wire;
}());



/***/ }),

/***/ "./src/graphics/core.ts":
/*!******************************!*\
  !*** ./src/graphics/core.ts ***!
  \******************************/
/*! exports provided: DS, Point, Entity, Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DS", function() { return DS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
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
var Point;
(function (Point) {
    function dist(a, b) {
        return Math.sqrt(dist2(a, b));
    }
    Point.dist = dist;
    function dist2(a, b) {
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        return dx * dx + dy * dy;
    }
    Point.dist2 = dist2;
})(Point || (Point = {}));
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
            if (this._parent) {
                this.removeParent();
            }
            this._parent = parent;
            this._parent.addChild(this);
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.removeParent = function () {
        var globalPos = this.position;
        this._parent && this._parent.removeChild(this);
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
    Group.prototype.draw = function (ctx) {
        this._children.forEach(function (c) { return c.draw(ctx); });
    };
    Group.prototype.cointainsPoint = function (point, ctx) {
        for (var i = 0; i < this._children.length; i++) {
            var hit = this._children[i].cointainsPoint(point, ctx);
            if (hit) {
                return hit;
            }
        }
        return null;
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
/* harmony import */ var _chip_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip-sprite */ "./src/graphics/sprites/chip-sprite.ts");
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
        ctx.strokeStyle = this._gate._a ? 'green' : 'red';
        ctx.stroke();
        // Bottom wire
        ctx.beginPath();
        ctx.moveTo(this.topLeft.x - this._scale, y + this._scale / 3);
        ctx.lineTo(x - this._scale, y + this._scale / 3);
        ctx.strokeStyle = this._gate._b ? 'green' : 'red';
        ctx.stroke();
        // Output
        ctx.beginPath();
        ctx.moveTo(this.out.x, this.out.y);
        ctx.lineTo(this.output.x, this.output.y);
        ctx.strokeStyle = this._gate.x() ? 'green' : 'red';
        ctx.stroke();
    };
    return AndSprite;
}(_chip_sprite__WEBPACK_IMPORTED_MODULE_0__["ChipSprite"]));



/***/ }),

/***/ "./src/graphics/sprites/chip-sprite.ts":
/*!*********************************************!*\
  !*** ./src/graphics/sprites/chip-sprite.ts ***!
  \*********************************************/
/*! exports provided: ChipSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipSprite", function() { return ChipSprite; });
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

var ChipSprite = /** @class */ (function (_super) {
    __extends(ChipSprite, _super);
    function ChipSprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ChipSprite.prototype, "topLeft", {
        get: function () {
            return {
                x: this.position.x - this._scale,
                y: this.position.y + this._scale
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipSprite.prototype, "bottomLeft", {
        get: function () {
            return {
                x: this.position.x - this._scale,
                y: this.position.y - this._scale
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipSprite.prototype, "out", {
        get: function () {
            return {
                x: this.position.x + this._scale,
                y: this.position.y
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipSprite.prototype, "output", {
        get: function () {
            return {
                x: this.out.x + this._scale,
                y: this.out.y
            };
        },
        enumerable: true,
        configurable: true
    });
    ChipSprite.prototype.cointainsPoint = function (point, ctx) {
        this.makeGateBodyPath(ctx);
        return ctx.isPointInPath(point.x, point.y) ? this : null;
    };
    return ChipSprite;
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
/* harmony import */ var _chip_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip-sprite */ "./src/graphics/sprites/chip-sprite.ts");
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
        var _this = _super.call(this) || this;
        _this._gate = gate;
        return _this;
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
        ctx.strokeStyle = this._gate._a ? 'green' : 'red';
        ctx.stroke();
        // Output
        ctx.beginPath();
        ctx.moveTo(this.out.x, this.out.y);
        ctx.lineTo(this.output.x, this.output.y);
        ctx.strokeStyle = this._gate.x() ? 'green' : 'red';
        ctx.stroke();
    };
    return NotSprite;
}(_chip_sprite__WEBPACK_IMPORTED_MODULE_0__["ChipSprite"]));



/***/ }),

/***/ "./src/graphics/sprites/source-sprite.ts":
/*!***********************************************!*\
  !*** ./src/graphics/sprites/source-sprite.ts ***!
  \***********************************************/
/*! exports provided: SourceSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSprite", function() { return SourceSprite; });
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

var SourceSprite = /** @class */ (function (_super) {
    __extends(SourceSprite, _super);
    function SourceSprite(source) {
        var _this = _super.call(this) || this;
        _this._source = source;
        return _this;
    }
    SourceSprite.prototype.draw = function (ctx) {
        var _a = this.position, x = _a.x, y = _a.y;
        var value = this._source();
        var color = value === null ? 'gray' : value ? 'green' : 'red';
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, this._scale, 0, Math.PI * 2);
        ctx.fill();
    };
    SourceSprite.prototype.cointainsPoint = function (point, ctx) {
        return _core__WEBPACK_IMPORTED_MODULE_0__["Point"].dist(this.position, point) < this._scale ? this : null;
    };
    return SourceSprite;
}(_core__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circuit_chips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circuit/chips */ "./src/circuit/chips.ts");
/* harmony import */ var _circuit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circuit/core */ "./src/circuit/core.ts");
/* harmony import */ var _graphics_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics/pointer */ "./src/graphics/pointer.ts");
/* harmony import */ var _graphics_sprites_and_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphics/sprites/and-sprite */ "./src/graphics/sprites/and-sprite.ts");
/* harmony import */ var _graphics_sprites_not_sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics/sprites/not-sprite */ "./src/graphics/sprites/not-sprite.ts");
/* harmony import */ var _graphics_sprites_source_sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphics/sprites/source-sprite */ "./src/graphics/sprites/source-sprite.ts");






var computeCanvas = document.getElementById('compute');
var context = computeCanvas.getContext('2d');
var aElem = document.getElementById('a');
var bElem = document.getElementById('b');
var andGate = new _circuit_chips__WEBPACK_IMPORTED_MODULE_0__["AndGate"]('0');
var orGate = new _circuit_chips__WEBPACK_IMPORTED_MODULE_0__["OrGate"]('1');
var notGate = new _circuit_chips__WEBPACK_IMPORTED_MODULE_0__["NotGate"]('2');
var power = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('power', [function () { return true; }]);
var ground = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('ground', [function () { return false; }]);
var a = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('a', [function () { return aElem.checked; }], [andGate.a]);
var b = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('b', [function () { return bElem.checked; }], [andGate.b]);
var andOut = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('and_out', [andGate.x], [notGate.a]);
var notOut = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('not_out', [notGate.x]);
var wires = [a, b, andOut, notOut];
var aSprite = new _graphics_sprites_source_sprite__WEBPACK_IMPORTED_MODULE_5__["SourceSprite"](function () { return aElem.checked; });
aSprite.position = { x: 100, y: 200 };
var bSprite = new _graphics_sprites_source_sprite__WEBPACK_IMPORTED_MODULE_5__["SourceSprite"](function () { return bElem.checked; });
bSprite.position = { x: 100, y: 400 };
var andSprite = new _graphics_sprites_and_sprite__WEBPACK_IMPORTED_MODULE_3__["AndSprite"](andGate);
andSprite.position = { x: 250, y: 360 };
var notSprite = new _graphics_sprites_not_sprite__WEBPACK_IMPORTED_MODULE_4__["NotSprite"](notGate);
notSprite.position = { x: 400, y: 360 };
var sprites = [andSprite, notSprite, aSprite, bSprite];
function tick() {
    console.log('--- TiCK ---');
    wires.forEach(function (w) { return w.read(); });
    console.log('--- DONE ---');
    wires.forEach(function (w) { return w.write(); });
}
tick();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmN1aXQvY2hpcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmN1aXQvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvcG9pbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3Mvc3ByaXRlcy9hbmQtc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9zcHJpdGVzL2NoaXAtc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9zcHJpdGVzL25vdC1zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoaWNzL3Nwcml0ZXMvc291cmNlLXNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERB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QVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFFaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBZixDQUFlLENBQUM7SUFFckMscUJBQXFCLENBQUMsSUFBSSxDQUFDO0FBQy9CLENBQUM7QUFDRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7QUFFM0IsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQWdCO0FBQzFELEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSTtBQUdwQixJQUFNLE9BQU8sR0FBRyxJQUFJLHlEQUFPLENBQUMsYUFBYSxFQUFFLFdBQUM7SUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBSztTQUNSO0tBQ0o7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge0lucHV0LCBPdXRwdXQsIFNpZ25hbCwgQ2hpcH0gZnJvbSAnLi9jb3JlJ1xuXG5leHBvcnQgY2xhc3MgQW5kR2F0ZSBpbXBsZW1lbnRzIENoaXAge1xuICAgIF9hOiBTaWduYWwgPSBudWxsXG4gICAgX2I6IFNpZ25hbCA9IG51bGxcbiAgICByZWFkb25seSBhOiBJbnB1dCA9ICh2YWx1ZTogU2lnbmFsKSA9PiB0aGlzLl9hID0gdmFsdWVcbiAgICByZWFkb25seSBiOiBJbnB1dCA9ICh2YWx1ZTogU2lnbmFsKSA9PiB0aGlzLl9iID0gdmFsdWVcbiAgICByZWFkb25seSB4OiBPdXRwdXQgPSAoKTogU2lnbmFsID0+IHRoaXMuX2EgJiYgdGhpcy5fYlxuICAgIHJlYWRvbmx5IGlucHV0cyA9IFt0aGlzLmEsIHRoaXMuYl1cbiAgICByZWFkb25seSBvdXRwdXRzID0gW3RoaXMueF1cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0FORCAtICdcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPckdhdGUgaW1wbGVtZW50cyBDaGlwIHtcbiAgICBfYTogU2lnbmFsID0gbnVsbFxuICAgIF9iOiBTaWduYWwgPSBudWxsXG4gICAgcmVhZG9ubHkgYTogSW5wdXQgPSAodmFsdWU6IFNpZ25hbCkgPT4gdGhpcy5fYSA9IHZhbHVlXG4gICAgcmVhZG9ubHkgYjogSW5wdXQgPSAodmFsdWU6IFNpZ25hbCkgPT4gdGhpcy5fYiA9IHZhbHVlXG4gICAgcmVhZG9ubHkgeDogT3V0cHV0ID0gKCkgPT4gdGhpcy5fYSB8fCB0aGlzLl9iXG4gICAgcmVhZG9ubHkgaW5wdXRzID0gW3RoaXMuYSwgdGhpcy5iXVxuICAgIHJlYWRvbmx5IG91dHB1dHMgPSBbdGhpcy54XVxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnT1IgLSAnXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm90R2F0ZSBpbXBsZW1lbnRzIENoaXAge1xuICAgIF9hOiBTaWduYWwgPSBudWxsXG4gICAgcmVhZG9ubHkgYTogSW5wdXQgPSAodmFsdWU6IFNpZ25hbCkgPT4gdGhpcy5fYSA9IHZhbHVlXG4gICAgcmVhZG9ubHkgeDogT3V0cHV0ID0gKCkgPT4gdGhpcy5fYSA9PT0gbnVsbCA/IG51bGwgOiAhdGhpcy5fYVxuICAgIHJlYWRvbmx5IGlucHV0cyA9IFt0aGlzLmFdXG4gICAgcmVhZG9ubHkgb3V0cHV0cyA9IFt0aGlzLnhdXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdOT1QgLSAnXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJpU3RhdGUgaW1wbGVtZW50cyBDaGlwIHtcbiAgICBfYTogU2lnbmFsXG4gICAgX2VuOiBTaWduYWxcbiAgICByZWFkb25seSBhOiBJbnB1dCA9ICh2YWx1ZTogU2lnbmFsKSA9PiB0aGlzLl9hID0gdmFsdWVcbiAgICByZWFkb25seSBlbjogSW5wdXQgPSAodmFsdWU6IFNpZ25hbCkgPT4gdGhpcy5fZW4gPSB2YWx1ZVxuICAgIHJlYWRvbmx5IHg6IE91dHB1dCA9ICgpID0+IHRoaXMuX2VuID8gdGhpcy5fYSA6IG51bGxcbiAgICByZWFkb25seSBpbnB1dHMgPSBbdGhpcy5hLCB0aGlzLmVuXVxuICAgIHJlYWRvbmx5IG91dHB1dHMgPSBbdGhpcy54XVxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnVFJJLVNUQVRFIC0gJ1xuICAgIH1cbn0iLCJleHBvcnQgdHlwZSBTaWduYWwgPSBib29sZWFuIHwgbnVsbFxuXG5leHBvcnQgdHlwZSBJbnB1dCA9ICh2YWx1ZTogU2lnbmFsKSA9PiB2b2lkXG5leHBvcnQgdHlwZSBPdXRwdXQgPSAoKSA9PiBTaWduYWxcblxuZXhwb3J0IGludGVyZmFjZSBDaGlwIHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICByZWFkb25seSBpbnB1dHM6IElucHV0W11cbiAgICByZWFkb25seSBvdXRwdXRzOiBPdXRwdXRbXVxufVxuXG5leHBvcnQgY2xhc3MgV2lyZSB7XG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gICAgcmVhZG9ubHkgaW5wdXRzOiBJbnB1dFtdIFxuICAgIHJlYWRvbmx5IG91dHB1dHM6IE91dHB1dFtdIFxuXG4gICAgX25leHQ6IFNpZ25hbFxuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBvdXRwdXRzPzogT3V0cHV0W10sIGlucHV0cz86IElucHV0W10pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLm91dHB1dHMgPSBvdXRwdXRzIHx8IFtdXG4gICAgICAgIHRoaXMuaW5wdXRzID0gaW5wdXRzIHx8IFtdXG4gICAgfVxuXG4gICAgcmVhZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYWN0aXZlU2lnbmFscyA9IHRoaXMub3V0cHV0c1xuICAgICAgICAgICAgLm1hcCgobywgaSkgPT4gW2ksIG8oKV0pXG4gICAgICAgICAgICAuZmlsdGVyKHMgPT4gc1sxXSAhPT0gbnVsbClcblxuICAgICAgICBpZiAoYWN0aXZlU2lnbmFscy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGFjdGl2ZSBzaWduYWxzIG9uIHdpcmUgJHt0aGlzLm5hbWV9OlxcbiR7SlNPTi5zdHJpbmdpZnkoYWN0aXZlU2lnbmFscyl9YClcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlU2lnbmFscy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQgPSBhY3RpdmVTaWduYWxzWzBdWzFdIGFzIHVua25vd24gYXMgU2lnbmFsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0ID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYFdpcmUgJHt0aGlzLm5hbWV9IHJlYWQgdmFsdWUgJHt0aGlzLl9uZXh0fWApXG4gICAgfVxuXG4gICAgd3JpdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goaSA9PiBpKHRoaXMuX25leHQpKVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgRFMgPSA1MFxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBQb2ludCB7XG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRpc3QoYTogUG9pbnQsIGI6IFBvaW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZGlzdDIoYSwgYikpXG4gICAgfVxuICAgIGV4cG9ydCBmdW5jdGlvbiBkaXN0MihhOiBQb2ludCwgYjogUG9pbnQpIHtcbiAgICAgICAgY29uc3QgZHggPSBhLnggLSBiLnhcbiAgICAgICAgY29uc3QgZHkgPSBhLnkgLSBiLnlcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5XG4gICAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW50aXR5IHtcbiAgICBwcm90ZWN0ZWQgX3BhcmVudD86IEdyb3VwXG4gICAgcHJvdGVjdGVkIF9sb2NhbFBvc2l0aW9uOiBQb2ludFxuICAgIHByb3RlY3RlZCBfc2NhbGU6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICB0aGlzLl9zY2FsZSA9IDUwXG4gICAgfVxuXG4gICAgZ2V0IHBvc2l0aW9uKCk6IFBvaW50IHtcbiAgICAgICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMuX2xvY2FsUG9zaXRpb24ueCArIHRoaXMuX3BhcmVudC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5fbG9jYWxQb3NpdGlvbi55ICsgdGhpcy5fcGFyZW50LnBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBwYXJlbnQocGFyZW50OiBHcm91cCkge1xuICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVBhcmVudCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuX3BhcmVudC5hZGRDaGlsZCh0aGlzKVxuICAgIH1cblxuICAgIHJlbW92ZVBhcmVudCgpIHtcbiAgICAgICAgY29uc3QgZ2xvYmFsUG9zID0gdGhpcy5wb3NpdGlvblxuICAgICAgICB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uID0gZ2xvYmFsUG9zXG4gICAgfVxuXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlOiBQb2ludCkge1xuICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uLnggPSB2YWx1ZS54XG4gICAgICAgIHRoaXMuX2xvY2FsUG9zaXRpb24ueSA9IHZhbHVlLnlcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZFxuICAgIGFic3RyYWN0IGNvaW50YWluc1BvaW50KHBvaW50OiBQb2ludCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBFbnRpdHkgfCBudWxsXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcm91cCBleHRlbmRzIEVudGl0eSB7XG4gICAgcHJvdGVjdGVkIF9jaGlsZHJlbjogRW50aXR5W11cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW11cbiAgICB9XG5cbiAgICBhZGRDaGlsZChlbnRpdHk6IEVudGl0eSkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGVudGl0eSlcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChlbnRpdHk6IEVudGl0eSkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IHRoaXMuX2NoaWxkcmVuLmZpbHRlcihjID0+IGMgIT09IGVudGl0eSlcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goYyA9PiBjLmRyYXcoY3R4KSlcbiAgICB9XG5cbiAgICBjb2ludGFpbnNQb2ludChwb2ludDogUG9pbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGhpdCA9IHRoaXMuX2NoaWxkcmVuW2ldLmNvaW50YWluc1BvaW50KHBvaW50LCBjdHgpXG4gICAgICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBQb2ludCwgR3JvdXAgfSBmcm9tICcuL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBQb2ludGVyIGV4dGVuZHMgR3JvdXAge1xuICAgIHByaXZhdGUgX2hvbGRpbmc/OiBFbnRpdHlcblxuICAgIHByaXZhdGUgX2NiOiAocDogUG9pbnQpID0+IHZvaWRcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGNiOiAocDogUG9pbnQpID0+IHZvaWQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBjYW52YXMub25tb3VzZW1vdmUgPSBlID0+IHRoaXMub25Nb3VzZU1vdmUoZSlcbiAgICAgICAgY2FudmFzLm9uY2xpY2sgPSBlID0+IHRoaXMub25DbGljayhlKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgdGhpcy5fY2IgPSBjYlxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9ob2xkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ob2xkaW5nLmRyYXcoY3R4KVxuICAgIH1cblxuICAgIHNldCBob2xkaW5nKGU6IEVudGl0eSkge1xuICAgICAgICB0aGlzLl9ob2xkaW5nID0gZVxuICAgICAgICB0aGlzLl9ob2xkaW5nLnBhcmVudCA9IHRoaXNcbiAgICAgICAgdGhpcy5faG9sZGluZy5wb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZTogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hvbGRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2hvbGRpbmcucmVtb3ZlUGFyZW50KClcbiAgICAgICAgICAgIHRoaXMuX2hvbGRpbmcgPSB1bmRlZmluZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NiKHtcbiAgICAgICAgICAgICAgICB4OiBlLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEFuZEdhdGUgfSBmcm9tIFwiLi4vLi4vY2lyY3VpdC9jaGlwc1wiO1xuaW1wb3J0IHsgQ2hpcFNwcml0ZSB9IGZyb20gXCIuL2NoaXAtc3ByaXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmRTcHJpdGUgZXh0ZW5kcyBDaGlwU3ByaXRlIHtcbiAgICBwcml2YXRlIF9nYXRlOiBBbmRHYXRlXG5cbiAgICBjb25zdHJ1Y3RvcihnYXRlOiBBbmRHYXRlKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5fZ2F0ZSA9IGdhdGVcbiAgICB9XG5cbiAgICBtYWtlR2F0ZUJvZHlQYXRoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uLnhcbiAgICAgICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb24ueVxuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHgsIHRoaXMudG9wTGVmdC55KVxuICAgICAgICBjdHgubGluZVRvKHRoaXMudG9wTGVmdC54LCB0aGlzLnRvcExlZnQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmJvdHRvbUxlZnQueCwgdGhpcy5ib3R0b21MZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8oeCwgdGhpcy5ib3R0b21MZWZ0LnkpXG4gICAgICAgIGN0eC5hcmMoeCwgeSwgdGhpcy5fc2NhbGUsIE1hdGguUEkgKiAzIC8gMiwgTWF0aC5QSSAvIDIpXG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNlZWVlZWUnXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAzXG5cbiAgICAgICAgLy8gQm9keVxuICAgICAgICB0aGlzLm1ha2VHYXRlQm9keVBhdGgoY3R4KVxuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBUb3AgV2lyZVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnRvcExlZnQueCAtIHRoaXMuX3NjYWxlLCB5IC0gdGhpcy5fc2NhbGUgLyAzKVxuICAgICAgICBjdHgubGluZVRvKHggLSB0aGlzLl9zY2FsZSwgeSAtIHRoaXMuX3NjYWxlIC8gMylcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5fZ2F0ZS5fYSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBCb3R0b20gd2lyZVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnRvcExlZnQueCAtIHRoaXMuX3NjYWxlLCB5ICsgdGhpcy5fc2NhbGUgLyAzKVxuICAgICAgICBjdHgubGluZVRvKHggLSB0aGlzLl9zY2FsZSwgeSArIHRoaXMuX3NjYWxlIC8gMylcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5fZ2F0ZS5fYiA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBPdXRwdXRcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5vdXQueCwgdGhpcy5vdXQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLm91dHB1dC54LCB0aGlzLm91dHB1dC55KVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9nYXRlLngoKSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG59IiwiaW1wb3J0IHsgRW50aXR5LCBQb2ludCB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBDaGlwIH0gZnJvbSBcIi4uLy4uL2NpcmN1aXQvY29yZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hpcFNwcml0ZSBleHRlbmRzIEVudGl0eSB7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHRvcExlZnQoKTogUG9pbnQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5fc2NhbGUsXG4gICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLl9zY2FsZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBib3R0b21MZWZ0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3NjYWxlLFxuICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5fc2NhbGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgb3V0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuX3NjYWxlLCBcbiAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvdXRwdXQoKTogUG9pbnQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5vdXQueCArIHRoaXMuX3NjYWxlLCBcbiAgICAgICAgICAgIHk6IHRoaXMub3V0LnlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFic3RyYWN0IG1ha2VHYXRlQm9keVBhdGgoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkXG4gICAgXG4gICAgY29pbnRhaW5zUG9pbnQocG9pbnQ6IFBvaW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IEVudGl0eSB8IG51bGwge1xuICAgICAgICB0aGlzLm1ha2VHYXRlQm9keVBhdGgoY3R4KVxuICAgICAgICByZXR1cm4gY3R4LmlzUG9pbnRJblBhdGgocG9pbnQueCwgcG9pbnQueSkgPyB0aGlzIDogbnVsbFxuICAgIH1cbn0iLCJpbXBvcnQgeyBDaGlwU3ByaXRlIH0gZnJvbSBcIi4vY2hpcC1zcHJpdGVcIjtcbmltcG9ydCB7IE5vdEdhdGUgfSBmcm9tIFwiLi4vLi4vY2lyY3VpdC9jaGlwc1wiO1xuaW1wb3J0IHsgT3V0cHV0LCBTaWduYWwgfSBmcm9tIFwiLi4vLi4vY2lyY3VpdC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBOb3RTcHJpdGUgZXh0ZW5kcyBDaGlwU3ByaXRlIHtcbiAgICBwcml2YXRlIF9nYXRlOiBOb3RHYXRlXG5cbiAgICBjb25zdHJ1Y3RvcihnYXRlOiBOb3RHYXRlKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5fZ2F0ZSA9IGdhdGVcbiAgICB9XG5cbiAgICBtYWtlR2F0ZUJvZHlQYXRoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRoaXMudG9wTGVmdC54LCB0aGlzLnRvcExlZnQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmJvdHRvbUxlZnQueCwgdGhpcy5ib3R0b21MZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5vdXQueCAtIHRoaXMuX3NjYWxlIC8gNSwgdGhpcy5vdXQueSlcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNlZWVlZWUnXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAzXG5cbiAgICAgICAgLy8gQm9keVxuICAgICAgICB0aGlzLm1ha2VHYXRlQm9keVBhdGgoY3R4KVxuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBET1RcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5hcmModGhpcy5vdXQueCAtIHRoaXMuX3NjYWxlIC8gMTAsIHRoaXMub3V0LnksIHRoaXMuX3NjYWxlIC8gMTAsIDAsIE1hdGguUEkgKiAyKVxuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBJblxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnRvcExlZnQueCAtIHRoaXMuX3NjYWxlLCB5KVxuICAgICAgICBjdHgubGluZVRvKHggLSB0aGlzLl9zY2FsZSwgeSlcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5fZ2F0ZS5fYSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBPdXRwdXRcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5vdXQueCwgdGhpcy5vdXQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLm91dHB1dC54LCB0aGlzLm91dHB1dC55KVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9nYXRlLngoKSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG59IiwiaW1wb3J0IHsgRW50aXR5LCBQb2ludCB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tIFwiLi4vLi4vY2lyY3VpdC9jb3JlXCJcblxuZXhwb3J0IGNsYXNzIFNvdXJjZVNwcml0ZSBleHRlbmRzIEVudGl0eSB7XG5cbiAgICBwcml2YXRlIF9zb3VyY2U6IE91dHB1dFxuXG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBPdXRwdXQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLl9zb3VyY2UgPSBzb3VyY2VcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5wb3NpdGlvblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX3NvdXJjZSgpXG4gICAgICAgIGNvbnN0IGNvbG9yID0gdmFsdWUgPT09IG51bGwgPyAnZ3JheScgOiB2YWx1ZSA/ICdncmVlbicgOiAncmVkJ1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JcblxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyh4LCB5LCB0aGlzLl9zY2FsZSwgMCwgTWF0aC5QSSAqIDIpXG4gICAgICAgIGN0eC5maWxsKClcbiAgICB9XG5cbiAgICBjb2ludGFpbnNQb2ludChwb2ludDogUG9pbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogRW50aXR5IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBQb2ludC5kaXN0KHRoaXMucG9zaXRpb24sIHBvaW50KSA8IHRoaXMuX3NjYWxlID8gdGhpcyA6IG51bGxcbiAgICB9XG59IiwiaW1wb3J0IHsgT3JHYXRlLCBOb3RHYXRlLCBBbmRHYXRlIH0gZnJvbSBcIi4vY2lyY3VpdC9jaGlwc1wiO1xuaW1wb3J0IHsgT3V0cHV0LCBXaXJlIH0gZnJvbSBcIi4vY2lyY3VpdC9jb3JlXCI7XG5pbXBvcnQge1BvaW50ZXJ9IGZyb20gXCIuL2dyYXBoaWNzL3BvaW50ZXJcIlxuaW1wb3J0IHsgQW5kU3ByaXRlIH0gZnJvbSBcIi4vZ3JhcGhpY3Mvc3ByaXRlcy9hbmQtc3ByaXRlXCI7XG5pbXBvcnQgeyBOb3RTcHJpdGUgfSBmcm9tIFwiLi9ncmFwaGljcy9zcHJpdGVzL25vdC1zcHJpdGVcIjtcbmltcG9ydCB7IFNvdXJjZVNwcml0ZSB9IGZyb20gXCIuL2dyYXBoaWNzL3Nwcml0ZXMvc291cmNlLXNwcml0ZVwiXG5cbmNvbnN0IGNvbXB1dGVDYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGUnKVxuY29uc3QgY29udGV4dCA9IGNvbXB1dGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbmNvbnN0IGFFbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EnKVxuY29uc3QgYkVsZW0gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYicpXG5cbmNvbnN0IGFuZEdhdGUgPSBuZXcgQW5kR2F0ZSgnMCcpXG5jb25zdCBvckdhdGUgPSBuZXcgT3JHYXRlKCcxJylcbmNvbnN0IG5vdEdhdGUgPSBuZXcgTm90R2F0ZSgnMicpXG5cbmNvbnN0IHBvd2VyID0gbmV3IFdpcmUoJ3Bvd2VyJywgWygpID0+IHRydWVdKVxuY29uc3QgZ3JvdW5kID0gbmV3IFdpcmUoJ2dyb3VuZCcsIFsoKSA9PiBmYWxzZV0pXG5jb25zdCBhID0gbmV3IFdpcmUoJ2EnLCBbKCkgPT4gYUVsZW0uY2hlY2tlZF0sIFthbmRHYXRlLmFdKVxuY29uc3QgYiA9IG5ldyBXaXJlKCdiJywgWygpID0+IGJFbGVtLmNoZWNrZWRdLCBbYW5kR2F0ZS5iXSlcblxuY29uc3QgYW5kT3V0ID0gbmV3IFdpcmUoJ2FuZF9vdXQnLCBbYW5kR2F0ZS54XSwgW25vdEdhdGUuYV0pXG5jb25zdCBub3RPdXQgPSBuZXcgV2lyZSgnbm90X291dCcsIFtub3RHYXRlLnhdKVxuXG5jb25zdCB3aXJlcyA9IFthLCBiLCBhbmRPdXQsIG5vdE91dF1cblxuY29uc3QgYVNwcml0ZSA9IG5ldyBTb3VyY2VTcHJpdGUoKCkgPT4gYUVsZW0uY2hlY2tlZClcbmFTcHJpdGUucG9zaXRpb24gPSB7IHg6IDEwMCwgeTogMjAwIH1cbmNvbnN0IGJTcHJpdGUgPSBuZXcgU291cmNlU3ByaXRlKCgpID0+IGJFbGVtLmNoZWNrZWQpXG5iU3ByaXRlLnBvc2l0aW9uID0geyB4OiAxMDAsIHk6IDQwMCB9XG5cbmNvbnN0IGFuZFNwcml0ZSA9IG5ldyBBbmRTcHJpdGUoYW5kR2F0ZSlcbmFuZFNwcml0ZS5wb3NpdGlvbiA9IHsgeDogMjUwLCB5OiAzNjAgfVxuXG5jb25zdCBub3RTcHJpdGUgPSBuZXcgTm90U3ByaXRlKG5vdEdhdGUpXG5ub3RTcHJpdGUucG9zaXRpb24gPSB7IHg6IDQwMCwgeTogMzYwIH1cblxuY29uc3Qgc3ByaXRlcyA9IFthbmRTcHJpdGUsIG5vdFNwcml0ZSwgYVNwcml0ZSwgYlNwcml0ZV1cblxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tIFRpQ0sgLS0tJylcbiAgICB3aXJlcy5mb3JFYWNoKHcgPT4gdy5yZWFkKCkpXG5cbiAgICBjb25zb2xlLmxvZygnLS0tIERPTkUgLS0tJylcbiAgICB3aXJlcy5mb3JFYWNoKHcgPT4gdy53cml0ZSgpKVxufVxudGljaygpXG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzIyMjIyMidcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIDcyMCwgNzIwKVxuXG4gICAgc3ByaXRlcy5mb3JFYWNoKHMgPT4gcy5kcmF3KGNvbnRleHQpKVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpXG59XG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdylcblxuY29uc3QgZ29CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ28nKSBhcyBIVE1MRWxlbWVudFxuZ29CdG4ub25jbGljayA9IHRpY2tcblxuXG5jb25zdCBwb2ludGVyID0gbmV3IFBvaW50ZXIoY29tcHV0ZUNhbnZhcywgcCA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzcHJpdGVzW2ldLmNvaW50YWluc1BvaW50KHAsIGNvbnRleHQpKSB7XG4gICAgICAgICAgICBwb2ludGVyLmhvbGRpbmcgPSBzcHJpdGVzW2ldXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufSkiXSwic291cmNlUm9vdCI6IiJ9