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
/*! exports provided: Source, AndGate, OrGate, NotGate, NandGate, TriState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndGate", function() { return AndGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrGate", function() { return OrGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotGate", function() { return NotGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NandGate", function() { return NandGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriState", function() { return TriState; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/circuit/core.ts");

var Source = /** @class */ (function () {
    function Source(x, name) {
        this.type = _core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].Source;
        this.x = x;
        this.name = 'SRC - ' + name;
    }
    return Source;
}());

var AndGate = /** @class */ (function () {
    function AndGate(name) {
        var _this = this;
        this.type = _core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].And;
        this._a = null;
        this._b = null;
        this.a = function (value) { return _this._a = value; };
        this.b = function (value) { return _this._b = value; };
        this.x = function () {
            if (_core__WEBPACK_IMPORTED_MODULE_0__["Chip"].anyNulls(_this._a, _this._b)) {
                return null;
            }
            return _this._a && _this._b;
        };
        this.name = 'AND - ' + name;
    }
    return AndGate;
}());

var OrGate = /** @class */ (function () {
    function OrGate(name) {
        var _this = this;
        this.type = _core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].Or;
        this._a = null;
        this._b = null;
        this.a = function (value) { return _this._a = value; };
        this.b = function (value) { return _this._b = value; };
        this.x = function () {
            if (_core__WEBPACK_IMPORTED_MODULE_0__["Chip"].anyNulls(_this._a, _this._b)) {
                return null;
            }
            return _this._a || _this._b;
        };
        this.name = 'OR - ' + name;
    }
    return OrGate;
}());

var NotGate = /** @class */ (function () {
    function NotGate(name) {
        var _this = this;
        this._a = null;
        this.a = function (value) { return _this._a = value; };
        this.x = function () { return _this._a === null ? null : !_this._a; };
        this.type = _core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].Not;
        this.name = 'NOT - ' + name;
    }
    return NotGate;
}());

var NandGate = /** @class */ (function () {
    function NandGate(name) {
        var _this = this;
        this.type = _core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].Nand;
        this._a = null;
        this._b = null;
        this.a = function (value) { return _this._a = value; };
        this.b = function (value) { return _this._b = value; };
        this.x = function () {
            if (_core__WEBPACK_IMPORTED_MODULE_0__["Chip"].anyNulls(_this._a, _this._b)) {
                return null;
            }
            return !(_this._a && _this._b);
        };
        this.name = 'NAND - ' + name;
    }
    return NandGate;
}());

var TriState = /** @class */ (function () {
    function TriState(name) {
        var _this = this;
        this.a = function (value) { return _this._a = value; };
        this.en = function (value) { return _this._en = value; };
        this.x = function () { return _this._en ? _this._a : null; };
        this.inputs = [this.a, this.en];
        this.outputs = [this.x];
        this.type = _core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].TriState;
        this.name = 'TRI-STATE - ' + name;
    }
    return TriState;
}());



/***/ }),

/***/ "./src/circuit/core.ts":
/*!*****************************!*\
  !*** ./src/circuit/core.ts ***!
  \*****************************/
/*! exports provided: ChipType, Chip, Wire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipType", function() { return ChipType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return Chip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wire", function() { return Wire; });
var ChipType;
(function (ChipType) {
    ChipType[ChipType["Source"] = 0] = "Source";
    ChipType[ChipType["And"] = 1] = "And";
    ChipType[ChipType["Or"] = 2] = "Or";
    ChipType[ChipType["Not"] = 3] = "Not";
    ChipType[ChipType["TriState"] = 4] = "TriState";
    ChipType[ChipType["Nand"] = 5] = "Nand";
})(ChipType || (ChipType = {}));
var Chip;
(function (Chip) {
    function anyNulls() {
        var signals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            signals[_i] = arguments[_i];
        }
        return signals.filter(function (s) { return s === null; }).length > 0;
    }
    Chip.anyNulls = anyNulls;
})(Chip || (Chip = {}));
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

/***/ "./src/graphics/board-manager.ts":
/*!***************************************!*\
  !*** ./src/graphics/board-manager.ts ***!
  \***************************************/
/*! exports provided: BoardManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardManager", function() { return BoardManager; });
/* harmony import */ var _circuit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../circuit/core */ "./src/circuit/core.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/graphics/core.ts");
/* harmony import */ var _sprites_wire_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprites/wire-sprite */ "./src/graphics/sprites/wire-sprite.ts");
/* harmony import */ var _sprites_and_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprites/and-sprite */ "./src/graphics/sprites/and-sprite.ts");
/* harmony import */ var _sprites_not_sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sprites/not-sprite */ "./src/graphics/sprites/not-sprite.ts");
/* harmony import */ var _sprites_source_sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprites/source-sprite */ "./src/graphics/sprites/source-sprite.ts");
/* harmony import */ var _sprites_nand_sprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sprites/nand-sprite */ "./src/graphics/sprites/nand-sprite.ts");
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







var xOffset = 100;
var yOffset = 100;
var xStep = 150;
var yStep = 150;
var xMax = 5;
var yMax = 5;
var currX = 0;
var currY = 0;
var BoardManager = /** @class */ (function (_super) {
    __extends(BoardManager, _super);
    function BoardManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wires = [];
        _this.chips = [];
        _this.chipSprites = [];
        _this.addChip = function (chip) {
            _this.chips.push(chip);
            var sprite = _this.getChipSprite(chip);
            if (sprite) {
                sprite.setParent(_this);
                _this.chipSprites.push(sprite);
            }
        };
        _this.tick = function () {
            console.log('--- TiCK ---');
            _this.wires.forEach(function (w) { return w.read(); });
            console.log('--- DONE ---');
            _this.wires.forEach(function (w) { return w.write(); });
        };
        _this.getInputPos = function (input) {
            for (var i = 0; i < _this.chipSprites.length; i++) {
                var pos = _this.chipSprites[i].getInputPos(input);
                if (pos) {
                    return pos;
                }
            }
            return null;
        };
        _this.getOutputPos = function (output) {
            for (var i = 0; i < _this.chipSprites.length; i++) {
                var pos = _this.chipSprites[i].getOutputPos(output);
                if (pos) {
                    return pos;
                }
            }
            return null;
        };
        _this.getSignalColor = function (signal) {
            return signal === null ? 'gray' : signal ? 'green' : 'red';
        };
        return _this;
    }
    BoardManager.prototype.addWire = function (wire) {
        this.wires.push(wire);
        var sprite = new _sprites_wire_sprite__WEBPACK_IMPORTED_MODULE_2__["WireSprite"](this, wire);
        sprite.setParent(this);
    };
    BoardManager.prototype.getChipSprite = function (chip) {
        var sprite;
        switch (chip.type) {
            case _circuit_core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].Source:
                sprite = new _sprites_source_sprite__WEBPACK_IMPORTED_MODULE_5__["SourceSprite"](chip);
                break;
            case _circuit_core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].And:
                sprite = new _sprites_and_sprite__WEBPACK_IMPORTED_MODULE_3__["AndSprite"](chip);
                break;
            case _circuit_core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].Nand:
                sprite = new _sprites_nand_sprite__WEBPACK_IMPORTED_MODULE_6__["NandSprite"](chip);
                break;
            case _circuit_core__WEBPACK_IMPORTED_MODULE_0__["ChipType"].Not:
                sprite = new _sprites_not_sprite__WEBPACK_IMPORTED_MODULE_4__["NotSprite"](chip);
                break;
            default: return null;
        }
        sprite.position = this.getNextPos();
        return sprite;
    };
    BoardManager.prototype.getNextPos = function () {
        var x = currX * xStep + xOffset;
        var y = currY * yStep + yOffset;
        currX++;
        if (currX > xMax) {
            currX = 0;
            currY++;
            if (currY > yMax) {
                currY = 0;
                xOffset++;
                yOffset++;
            }
        }
        return { x: x, y: y };
    };
    return BoardManager;
}(_core__WEBPACK_IMPORTED_MODULE_1__["Group"]));



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
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.setParent = function (parent) {
        if (this._parent) {
            this.removeParent();
        }
        this._parent = parent;
        this._parent.addChild(this);
    };
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
    Object.defineProperty(Pointer.prototype, "holding", {
        get: function () {
            return this._children[0];
        },
        enumerable: true,
        configurable: true
    });
    Pointer.prototype.draw = function (ctx) {
        this.holding && this.holding.draw(ctx);
    };
    Pointer.prototype.hold = function (e) {
        this._oldParent = e.parent;
        e.setParent(this);
        e.position = { x: 0, y: 0 };
    };
    Pointer.prototype.onMouseMove = function (e) {
        this.position = {
            x: e.offsetX,
            y: e.offsetY
        };
    };
    Pointer.prototype.onClick = function (e) {
        var held = this.holding;
        if (held) {
            held.removeParent();
            if (this._oldParent) {
                held.setParent(this._oldParent);
                this._oldParent = undefined;
            }
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
    AndSprite.prototype.makeChipBodyPath = function (ctx) {
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
        this.makeChipBodyPath(ctx);
        ctx.stroke();
    };
    AndSprite.prototype.getInputPos = function (input) {
        if (input === this._gate.a) {
            return {
                x: this.position.x - this._scale,
                y: this.position.y - this._scale * 2 / 3
            };
        }
        if (input === this._gate.b) {
            return {
                x: this.position.x - this._scale,
                y: this.position.y + this._scale * 2 / 3
            };
        }
        return null;
    };
    AndSprite.prototype.getOutputPos = function (output) {
        if (output === this._gate.x) {
            return this.out;
        }
        return null;
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
        this.makeChipBodyPath(ctx);
        return ctx.isPointInPath(point.x, point.y) ? this : null;
    };
    return ChipSprite;
}(_core__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/graphics/sprites/nand-sprite.ts":
/*!*********************************************!*\
  !*** ./src/graphics/sprites/nand-sprite.ts ***!
  \*********************************************/
/*! exports provided: NandSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NandSprite", function() { return NandSprite; });
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

var NandSprite = /** @class */ (function (_super) {
    __extends(NandSprite, _super);
    function NandSprite(gate) {
        var _this = _super.call(this) || this;
        _this._gate = gate;
        return _this;
    }
    NandSprite.prototype.makeChipBodyPath = function (ctx) {
        var x = this.position.x;
        var y = this.position.y;
        ctx.beginPath();
        ctx.moveTo(x - this._scale / 5, this.topLeft.y);
        ctx.lineTo(this.topLeft.x, this.topLeft.y);
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y);
        ctx.lineTo(x - this._scale / 5, this.bottomLeft.y);
        ctx.arc(x - this._scale / 5, y, this._scale, Math.PI * 3 / 2, Math.PI / 2);
    };
    NandSprite.prototype.draw = function (ctx) {
        var x = this.position.x;
        var y = this.position.y;
        ctx.strokeStyle = '#eeeeee';
        ctx.lineWidth = 3;
        // Body
        this.makeChipBodyPath(ctx);
        ctx.stroke();
        // DOT
        ctx.beginPath();
        ctx.arc(this.out.x - this._scale / 10, this.out.y, this._scale / 10, 0, Math.PI * 2);
        ctx.stroke();
    };
    NandSprite.prototype.getInputPos = function (input) {
        if (input === this._gate.a) {
            return {
                x: this.position.x - this._scale,
                y: this.position.y - this._scale * 2 / 3
            };
        }
        if (input === this._gate.b) {
            return {
                x: this.position.x - this._scale,
                y: this.position.y + this._scale * 2 / 3
            };
        }
        return null;
    };
    NandSprite.prototype.getOutputPos = function (output) {
        if (output === this._gate.x) {
            return this.out;
        }
        return null;
    };
    return NandSprite;
}(_chip_sprite__WEBPACK_IMPORTED_MODULE_0__["ChipSprite"]));



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
    NotSprite.prototype.makeChipBodyPath = function (ctx) {
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
        this.makeChipBodyPath(ctx);
        ctx.stroke();
        // DOT
        ctx.beginPath();
        ctx.arc(this.out.x - this._scale / 10, this.out.y, this._scale / 10, 0, Math.PI * 2);
        ctx.stroke();
    };
    NotSprite.prototype.getInputPos = function (input) {
        if (this._gate.a === input) {
            return {
                x: this.topLeft.x,
                y: this.position.y
            };
        }
        return null;
    };
    NotSprite.prototype.getOutputPos = function (output) {
        if (output === this._gate.x) {
            return this.out;
        }
        return null;
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

var SourceSprite = /** @class */ (function (_super) {
    __extends(SourceSprite, _super);
    function SourceSprite(source) {
        var _this = _super.call(this) || this;
        _this._source = source;
        return _this;
    }
    SourceSprite.prototype.makeChipBodyPath = function (ctx) {
        var _a = this.position, x = _a.x, y = _a.y;
        ctx.beginPath();
        ctx.arc(x, y, this._scale, 0, Math.PI * 2);
    };
    SourceSprite.prototype.draw = function (ctx) {
        var value = this._source.x();
        var color = value === null ? 'gray' : value ? 'green' : 'red';
        ctx.fillStyle = color;
        this.makeChipBodyPath(ctx);
        ctx.fill();
    };
    SourceSprite.prototype.getInputPos = function (input) {
        return null;
    };
    SourceSprite.prototype.getOutputPos = function (output) {
        if (output === this._source.x) {
            return this.position;
        }
        return null;
    };
    return SourceSprite;
}(_chip_sprite__WEBPACK_IMPORTED_MODULE_0__["ChipSprite"]));



/***/ }),

/***/ "./src/graphics/sprites/wire-sprite.ts":
/*!*********************************************!*\
  !*** ./src/graphics/sprites/wire-sprite.ts ***!
  \*********************************************/
/*! exports provided: WireSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WireSprite", function() { return WireSprite; });
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

var WireSprite = /** @class */ (function (_super) {
    __extends(WireSprite, _super);
    function WireSprite(bm, wire) {
        var _this = _super.call(this) || this;
        _this._wire = wire;
        _this._bm = bm;
        return _this;
    }
    WireSprite.prototype.draw = function (ctx) {
        // just one for now
        var input = this._wire.inputs[0];
        var output = this._wire.outputs[0];
        var outPos = this._bm.getOutputPos(output);
        if (!outPos) {
            return;
        }
        var inPos = this._bm.getInputPos(input);
        if (!inPos) {
            inPos = { x: outPos.x + this._scale, y: outPos.y };
        }
        ctx.strokeStyle = this._bm.getSignalColor(this._wire._next);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(inPos.x, inPos.y);
        ctx.lineTo(outPos.x, outPos.y);
        ctx.stroke();
    };
    WireSprite.prototype.cointainsPoint = function (point, ctx) {
        return null;
    };
    return WireSprite;
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
/* harmony import */ var _graphics_board_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphics/board-manager */ "./src/graphics/board-manager.ts");




var computeCanvas = document.getElementById('compute');
var context = computeCanvas.getContext('2d');
var aElem = document.getElementById('a');
var bElem = document.getElementById('b');
var aSrc = new _circuit_chips__WEBPACK_IMPORTED_MODULE_0__["Source"](function () { return aElem.checked; }, 'a');
var bSrc = new _circuit_chips__WEBPACK_IMPORTED_MODULE_0__["Source"](function () { return bElem.checked; }, 'b');
var nandGate = new _circuit_chips__WEBPACK_IMPORTED_MODULE_0__["NandGate"]('0');
var orGate = new _circuit_chips__WEBPACK_IMPORTED_MODULE_0__["OrGate"]('1');
var notGate = new _circuit_chips__WEBPACK_IMPORTED_MODULE_0__["NotGate"]('2');
var chips = [aSrc, bSrc, nandGate, orGate, notGate];
var a = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('a_out', [aSrc.x], [nandGate.a]);
var b = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('b_out', [bSrc.x], [nandGate.b]);
var andOut = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('nand_out', [nandGate.x], [notGate.a]);
var notOut = new _circuit_core__WEBPACK_IMPORTED_MODULE_1__["Wire"]('not_out', [notGate.x]);
var wires = [a, b, andOut, notOut];
var bm = new _graphics_board_manager__WEBPACK_IMPORTED_MODULE_3__["BoardManager"]();
wires.forEach(function (w) { return bm.addWire(w); });
chips.forEach(function (c) { return bm.addChip(c); });
bm.tick();
// Event handling
var goBtn = document.getElementById('go');
goBtn.onclick = function () { return bm.tick(); };
var pointer = new _graphics_pointer__WEBPACK_IMPORTED_MODULE_2__["Pointer"](computeCanvas, function (p) {
    var sprite = bm.cointainsPoint(p, context);
    if (sprite) {
        pointer.hold(sprite);
    }
});
var workspace = [bm, pointer];
// Rendering
function draw() {
    context.fillStyle = '#222222';
    context.fillRect(0, 0, 720, 720);
    workspace.forEach(function (w) { return w.draw(context); });
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmN1aXQvY2hpcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmN1aXQvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvYm9hcmQtbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvcG9pbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3Mvc3ByaXRlcy9hbmQtc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9zcHJpdGVzL2NoaXAtc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9zcHJpdGVzL25hbmQtc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9zcHJpdGVzL25vdC1zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoaWNzL3Nwcml0ZXMvc291cmNlLXNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3Mvc3ByaXRlcy93aXJlLXNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LFNBQVMsR0FBRyxTQUFTO0lBQzdCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBRWhDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQWYsQ0FBZSxDQUFDO0lBRXZDLHFCQUFxQixDQUFDLElBQUksQ0FBQztBQUMvQixDQUFDO0FBQ0QscUJBQXFCLENBQUMsSUFBSSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtJbnB1dCwgT3V0cHV0LCBTaWduYWwsIENoaXAsIENoaXBUeXBlfSBmcm9tICcuL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBTb3VyY2UgaW1wbGVtZW50cyBDaGlwIHtcbiAgICByZWFkb25seSB4OiBPdXRwdXRcblxuICAgIHJlYWRvbmx5IHR5cGUgPSBDaGlwVHlwZS5Tb3VyY2VcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgICAgXG4gICAgY29uc3RydWN0b3IoeDogT3V0cHV0LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLm5hbWUgPSAnU1JDIC0gJyArIG5hbWVcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmRHYXRlIGltcGxlbWVudHMgQ2hpcCB7XG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gICAgcmVhZG9ubHkgdHlwZSA9IENoaXBUeXBlLkFuZFxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnQU5EIC0gJyArIG5hbWVcbiAgICB9XG5cbiAgICBfYTogU2lnbmFsID0gbnVsbFxuICAgIF9iOiBTaWduYWwgPSBudWxsXG4gICAgcmVhZG9ubHkgYTogSW5wdXQgPSAodmFsdWU6IFNpZ25hbCkgPT4gdGhpcy5fYSA9IHZhbHVlXG4gICAgcmVhZG9ubHkgYjogSW5wdXQgPSAodmFsdWU6IFNpZ25hbCkgPT4gdGhpcy5fYiA9IHZhbHVlXG4gICAgcmVhZG9ubHkgeDogT3V0cHV0ID0gKCk6IFNpZ25hbCA9PiB7XG4gICAgICAgIGlmIChDaGlwLmFueU51bGxzKHRoaXMuX2EsIHRoaXMuX2IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hICYmIHRoaXMuX2JcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPckdhdGUgaW1wbGVtZW50cyBDaGlwIHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICByZWFkb25seSB0eXBlID0gQ2hpcFR5cGUuT3JcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ09SIC0gJyArIG5hbWVcbiAgICB9XG5cbiAgICBfYTogU2lnbmFsID0gbnVsbFxuICAgIF9iOiBTaWduYWwgPSBudWxsXG4gICAgcmVhZG9ubHkgYTogSW5wdXQgPSAodmFsdWU6IFNpZ25hbCkgPT4gdGhpcy5fYSA9IHZhbHVlXG4gICAgcmVhZG9ubHkgYjogSW5wdXQgPSAodmFsdWU6IFNpZ25hbCkgPT4gdGhpcy5fYiA9IHZhbHVlXG4gICAgcmVhZG9ubHkgeDogT3V0cHV0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoQ2hpcC5hbnlOdWxscyh0aGlzLl9hLCB0aGlzLl9iKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYSB8fCB0aGlzLl9iXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm90R2F0ZSBpbXBsZW1lbnRzIENoaXAge1xuICAgIF9hOiBTaWduYWwgPSBudWxsXG5cbiAgICByZWFkb25seSBhOiBJbnB1dCA9ICh2YWx1ZTogU2lnbmFsKSA9PiB0aGlzLl9hID0gdmFsdWVcbiAgICByZWFkb25seSB4OiBPdXRwdXQgPSAoKSA9PiB0aGlzLl9hID09PSBudWxsID8gbnVsbCA6ICF0aGlzLl9hXG5cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICByZWFkb25seSB0eXBlID0gQ2hpcFR5cGUuTm90XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdOT1QgLSAnICsgbmFtZVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hbmRHYXRlIGltcGxlbWVudHMgQ2hpcCB7XG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nOyAgICBcbiAgICByZWFkb25seSB0eXBlID0gQ2hpcFR5cGUuTmFuZFxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnTkFORCAtICcgKyBuYW1lXG4gICAgfVxuXG4gICAgX2E6IFNpZ25hbCA9IG51bGxcbiAgICBfYjogU2lnbmFsID0gbnVsbFxuXG4gICAgcmVhZG9ubHkgYSA9ICh2YWx1ZTogU2lnbmFsKSA9PiB0aGlzLl9hID0gdmFsdWVcbiAgICByZWFkb25seSBiID0gKHZhbHVlOiBTaWduYWwpID0+IHRoaXMuX2IgPSB2YWx1ZVxuICAgIHJlYWRvbmx5IHggPSAoKSA9PiB7XG4gICAgICAgIGlmIChDaGlwLmFueU51bGxzKHRoaXMuX2EsIHRoaXMuX2IpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKHRoaXMuX2EgJiYgdGhpcy5fYilcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFRyaVN0YXRlIGltcGxlbWVudHMgQ2hpcCB7XG4gICAgX2E6IFNpZ25hbFxuICAgIF9lbjogU2lnbmFsXG5cbiAgICByZWFkb25seSBhOiBJbnB1dCA9ICh2YWx1ZTogU2lnbmFsKSA9PiB0aGlzLl9hID0gdmFsdWVcbiAgICByZWFkb25seSBlbjogSW5wdXQgPSAodmFsdWU6IFNpZ25hbCkgPT4gdGhpcy5fZW4gPSB2YWx1ZVxuICAgIHJlYWRvbmx5IHg6IE91dHB1dCA9ICgpID0+IHRoaXMuX2VuID8gdGhpcy5fYSA6IG51bGxcblxuICAgIHJlYWRvbmx5IGlucHV0cyA9IFt0aGlzLmEsIHRoaXMuZW5dXG4gICAgcmVhZG9ubHkgb3V0cHV0cyA9IFt0aGlzLnhdXG4gICAgXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gICAgcmVhZG9ubHkgdHlwZSA9IENoaXBUeXBlLlRyaVN0YXRlXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdUUkktU1RBVEUgLSAnICsgbmFtZVxuICAgIH1cbn0iLCJleHBvcnQgdHlwZSBTaWduYWwgPSBib29sZWFuIHwgbnVsbFxuXG5leHBvcnQgdHlwZSBJbnB1dCA9ICh2YWx1ZTogU2lnbmFsKSA9PiB2b2lkXG5leHBvcnQgdHlwZSBPdXRwdXQgPSAoKSA9PiBTaWduYWxcblxuZXhwb3J0IGVudW0gQ2hpcFR5cGUge1xuICAgIFNvdXJjZSxcbiAgICBBbmQsXG4gICAgT3IsXG4gICAgTm90LFxuICAgIFRyaVN0YXRlLFxuICAgIE5hbmRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGlwIHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgICByZWFkb25seSB0eXBlOiBDaGlwVHlwZVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIENoaXAge1xuICAgIGV4cG9ydCBmdW5jdGlvbiBhbnlOdWxscyguLi5zaWduYWxzOiBTaWduYWxbXSkge1xuICAgICAgICByZXR1cm4gc2lnbmFscy5maWx0ZXIocyA9PiBzID09PSBudWxsKS5sZW5ndGggPiAwXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2lyZSB7XG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gICAgcmVhZG9ubHkgaW5wdXRzOiBJbnB1dFtdIFxuICAgIHJlYWRvbmx5IG91dHB1dHM6IE91dHB1dFtdIFxuXG4gICAgX25leHQ6IFNpZ25hbFxuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBvdXRwdXRzPzogT3V0cHV0W10sIGlucHV0cz86IElucHV0W10pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLm91dHB1dHMgPSBvdXRwdXRzIHx8IFtdXG4gICAgICAgIHRoaXMuaW5wdXRzID0gaW5wdXRzIHx8IFtdXG4gICAgfVxuXG4gICAgcmVhZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYWN0aXZlU2lnbmFscyA9IHRoaXMub3V0cHV0c1xuICAgICAgICAgICAgLm1hcCgobywgaSkgPT4gW2ksIG8oKV0pXG4gICAgICAgICAgICAuZmlsdGVyKHMgPT4gc1sxXSAhPT0gbnVsbClcblxuICAgICAgICBpZiAoYWN0aXZlU2lnbmFscy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGFjdGl2ZSBzaWduYWxzIG9uIHdpcmUgJHt0aGlzLm5hbWV9OlxcbiR7SlNPTi5zdHJpbmdpZnkoYWN0aXZlU2lnbmFscyl9YClcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlU2lnbmFscy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQgPSBhY3RpdmVTaWduYWxzWzBdWzFdIGFzIHVua25vd24gYXMgU2lnbmFsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0ID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYFdpcmUgJHt0aGlzLm5hbWV9IHJlYWQgdmFsdWUgJHt0aGlzLl9uZXh0fWApXG4gICAgfVxuXG4gICAgd3JpdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goaSA9PiBpKHRoaXMuX25leHQpKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBTaWduYWwsIFdpcmUsIENoaXAsIENoaXBUeXBlIH0gZnJvbSBcIi4uL2NpcmN1aXQvY29yZVwiO1xuaW1wb3J0IHsgUG9pbnQsIEVudGl0eSwgR3JvdXAgfSBmcm9tIFwiLi9jb3JlXCI7XG5pbXBvcnQgeyBXaXJlU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlcy93aXJlLXNwcml0ZVwiO1xuaW1wb3J0IHsgQ2hpcFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZXMvY2hpcC1zcHJpdGVcIjtcbmltcG9ydCB7IEFuZFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZXMvYW5kLXNwcml0ZVwiO1xuaW1wb3J0IHsgQW5kR2F0ZSwgTm90R2F0ZSwgU291cmNlLCBOYW5kR2F0ZSB9IGZyb20gXCIuLi9jaXJjdWl0L2NoaXBzXCI7XG5pbXBvcnQgeyBOb3RTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVzL25vdC1zcHJpdGVcIjtcbmltcG9ydCB7IFNvdXJjZVNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZXMvc291cmNlLXNwcml0ZVwiO1xuaW1wb3J0IHsgTmFuZFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZXMvbmFuZC1zcHJpdGVcIjtcblxubGV0IHhPZmZzZXQgPSAxMDBcbmxldCB5T2Zmc2V0ID0gMTAwXG5jb25zdCB4U3RlcCA9IDE1MFxuY29uc3QgeVN0ZXAgPSAxNTBcbmNvbnN0IHhNYXggPSA1XG5jb25zdCB5TWF4ID0gNVxuXG5sZXQgY3VyclggPSAwXG5sZXQgY3VyclkgPSAwXG5cbmV4cG9ydCBjbGFzcyBCb2FyZE1hbmFnZXIgZXh0ZW5kcyBHcm91cCB7XG5cbiAgICByZWFkb25seSB3aXJlczogV2lyZVtdID0gW11cbiAgICByZWFkb25seSBjaGlwczogQ2hpcFtdID0gW11cblxuICAgIHJlYWRvbmx5IGNoaXBTcHJpdGVzOiBDaGlwU3ByaXRlW10gPSBbXVxuXG4gICAgYWRkV2lyZSh3aXJlOiBXaXJlKSB7XG4gICAgICAgIHRoaXMud2lyZXMucHVzaCh3aXJlKVxuICAgICAgICBjb25zdCBzcHJpdGUgPSBuZXcgV2lyZVNwcml0ZSh0aGlzLCB3aXJlKVxuICAgICAgICBzcHJpdGUuc2V0UGFyZW50KHRoaXMpO1xuICAgIH1cblxuICAgIGFkZENoaXAgPSAoY2hpcDogQ2hpcCkgPT4ge1xuICAgICAgICB0aGlzLmNoaXBzLnB1c2goY2hpcClcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5nZXRDaGlwU3ByaXRlKGNoaXApXG4gICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgIHNwcml0ZS5zZXRQYXJlbnQodGhpcylcbiAgICAgICAgICAgIHRoaXMuY2hpcFNwcml0ZXMucHVzaChzcHJpdGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tIFRpQ0sgLS0tJylcbiAgICAgICAgdGhpcy53aXJlcy5mb3JFYWNoKHcgPT4gdy5yZWFkKCkpXG5cbiAgICAgICAgY29uc29sZS5sb2coJy0tLSBET05FIC0tLScpXG4gICAgICAgIHRoaXMud2lyZXMuZm9yRWFjaCh3ID0+IHcud3JpdGUoKSlcbiAgICB9XG5cbiAgICBnZXRJbnB1dFBvcyA9IChpbnB1dDogSW5wdXQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaXBTcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmNoaXBTcHJpdGVzW2ldLmdldElucHV0UG9zKGlucHV0KVxuICAgICAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGdldE91dHB1dFBvcyA9IChvdXRwdXQ6IE91dHB1dCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpcFNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuY2hpcFNwcml0ZXNbaV0uZ2V0T3V0cHV0UG9zKG91dHB1dClcbiAgICAgICAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBnZXRTaWduYWxDb2xvciA9IChzaWduYWw6IFNpZ25hbCkgPT4ge1xuICAgICAgICByZXR1cm4gc2lnbmFsID09PSBudWxsID8gJ2dyYXknIDogc2lnbmFsID8gJ2dyZWVuJyA6ICdyZWQnXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDaGlwU3ByaXRlKGNoaXA6IENoaXApIHtcbiAgICAgICAgbGV0IHNwcml0ZTogQ2hpcFNwcml0ZVxuICAgICAgICBzd2l0Y2goY2hpcC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIENoaXBUeXBlLlNvdXJjZTpcbiAgICAgICAgICAgICAgICBzcHJpdGUgPSBuZXcgU291cmNlU3ByaXRlKGNoaXAgYXMgU291cmNlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIENoaXBUeXBlLkFuZDpcbiAgICAgICAgICAgICAgICBzcHJpdGUgPSBuZXcgQW5kU3ByaXRlKGNoaXAgYXMgQW5kR2F0ZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBDaGlwVHlwZS5OYW5kOlxuICAgICAgICAgICAgICAgIHNwcml0ZSA9IG5ldyBOYW5kU3ByaXRlKGNoaXAgYXMgTmFuZEdhdGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgQ2hpcFR5cGUuTm90OlxuICAgICAgICAgICAgICAgIHNwcml0ZSA9IG5ldyBOb3RTcHJpdGUoY2hpcCBhcyBOb3RHYXRlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIHNwcml0ZS5wb3NpdGlvbiA9IHRoaXMuZ2V0TmV4dFBvcygpXG5cbiAgICAgICAgcmV0dXJuIHNwcml0ZVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TmV4dFBvcygpIHtcbiAgICAgICAgY29uc3QgeCA9IGN1cnJYICogeFN0ZXAgKyB4T2Zmc2V0XG4gICAgICAgIGNvbnN0IHkgPSBjdXJyWSAqIHlTdGVwICsgeU9mZnNldFxuXG4gICAgICAgIGN1cnJYKytcbiAgICAgICAgaWYgKGN1cnJYID4geE1heCkge1xuICAgICAgICAgICAgY3VyclggPSAwXG4gICAgICAgICAgICBjdXJyWSsrXG4gICAgICAgICAgICBpZiAoY3VyclkgPiB5TWF4KSB7XG4gICAgICAgICAgICAgICAgY3VyclkgPSAwXG4gICAgICAgICAgICAgICAgeE9mZnNldCsrXG4gICAgICAgICAgICAgICAgeU9mZnNldCsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB4LCB5IH1cbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IERTID0gNTBcblxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUG9pbnQge1xuICAgIGV4cG9ydCBmdW5jdGlvbiBkaXN0KGE6IFBvaW50LCBiOiBQb2ludCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGRpc3QyKGEsIGIpKVxuICAgIH1cbiAgICBleHBvcnQgZnVuY3Rpb24gZGlzdDIoYTogUG9pbnQsIGI6IFBvaW50KSB7XG4gICAgICAgIGNvbnN0IGR4ID0gYS54IC0gYi54XG4gICAgICAgIGNvbnN0IGR5ID0gYS55IC0gYi55XG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeVxuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eSB7XG4gICAgcHJvdGVjdGVkIF9wYXJlbnQ/OiBHcm91cFxuICAgIHByb3RlY3RlZCBfbG9jYWxQb3NpdGlvbjogUG9pbnRcbiAgICBwcm90ZWN0ZWQgX3NjYWxlOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgdGhpcy5fc2NhbGUgPSA1MFxuICAgIH1cblxuICAgIGdldCBwb3NpdGlvbigpOiBQb2ludCB7XG4gICAgICAgIGlmICghdGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxQb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLl9sb2NhbFBvc2l0aW9uLnggKyB0aGlzLl9wYXJlbnQucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuX2xvY2FsUG9zaXRpb24ueSArIHRoaXMuX3BhcmVudC5wb3NpdGlvbi55XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudFxuICAgIH1cblxuICAgIHNldFBhcmVudChwYXJlbnQ6IEdyb3VwKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUGFyZW50KClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgdGhpcy5fcGFyZW50LmFkZENoaWxkKHRoaXMpXG4gICAgfVxuXG4gICAgcmVtb3ZlUGFyZW50KCkge1xuICAgICAgICBjb25zdCBnbG9iYWxQb3MgPSB0aGlzLnBvc2l0aW9uXG4gICAgICAgIHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcylcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gdW5kZWZpbmVkXG4gICAgICAgIHRoaXMuX2xvY2FsUG9zaXRpb24gPSBnbG9iYWxQb3NcbiAgICB9XG5cbiAgICBzZXQgcG9zaXRpb24odmFsdWU6IFBvaW50KSB7XG4gICAgICAgIHRoaXMuX2xvY2FsUG9zaXRpb24ueCA9IHZhbHVlLnhcbiAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbi55ID0gdmFsdWUueVxuICAgIH1cblxuICAgIGFic3RyYWN0IGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkXG4gICAgYWJzdHJhY3QgY29pbnRhaW5zUG9pbnQocG9pbnQ6IFBvaW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IEVudGl0eSB8IG51bGxcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyb3VwIGV4dGVuZHMgRW50aXR5IHtcbiAgICBwcm90ZWN0ZWQgX2NoaWxkcmVuOiBFbnRpdHlbXVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXVxuICAgIH1cblxuICAgIGFkZENoaWxkKGVudGl0eTogRW50aXR5KSB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goZW50aXR5KVxuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGVudGl0eTogRW50aXR5KSB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gdGhpcy5fY2hpbGRyZW4uZmlsdGVyKGMgPT4gYyAhPT0gZW50aXR5KVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMuZHJhdyhjdHgpKVxuICAgIH1cblxuICAgIGNvaW50YWluc1BvaW50KHBvaW50OiBQb2ludCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gdGhpcy5fY2hpbGRyZW5baV0uY29pbnRhaW5zUG9pbnQocG9pbnQsIGN0eClcbiAgICAgICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIFBvaW50LCBHcm91cCB9IGZyb20gJy4vY29yZSdcblxuZXhwb3J0IGNsYXNzIFBvaW50ZXIgZXh0ZW5kcyBHcm91cCB7XG5cbiAgICBwcml2YXRlIF9vbGRQYXJlbnQ/OiBHcm91cFxuICAgIHByaXZhdGUgX2NiOiAocDogUG9pbnQpID0+IHZvaWRcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGNiOiAocDogUG9pbnQpID0+IHZvaWQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBjYW52YXMub25tb3VzZW1vdmUgPSBlID0+IHRoaXMub25Nb3VzZU1vdmUoZSlcbiAgICAgICAgY2FudmFzLm9uY2xpY2sgPSBlID0+IHRoaXMub25DbGljayhlKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgdGhpcy5fY2IgPSBjYlxuICAgIH1cblxuICAgIGdldCBob2xkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW5bMF1cbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaG9sZGluZyAmJiB0aGlzLmhvbGRpbmcuZHJhdyhjdHgpXG4gICAgfVxuXG4gICAgaG9sZChlOiBFbnRpdHkpIHtcbiAgICAgICAgdGhpcy5fb2xkUGFyZW50ID0gZS5wYXJlbnRcbiAgICAgICAgZS5zZXRQYXJlbnQodGhpcylcbiAgICAgICAgZS5wb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZTogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogZS5vZmZzZXRYLFxuICAgICAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgaGVsZCA9IHRoaXMuaG9sZGluZ1xuICAgICAgICBpZiAoaGVsZCkge1xuICAgICAgICAgICAgaGVsZC5yZW1vdmVQYXJlbnQoKVxuICAgICAgICAgICAgaWYgKHRoaXMuX29sZFBhcmVudCkge1xuICAgICAgICAgICAgICAgIGhlbGQuc2V0UGFyZW50KHRoaXMuX29sZFBhcmVudClcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRQYXJlbnQgPSB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NiKHtcbiAgICAgICAgICAgICAgICB4OiBlLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogZS5vZmZzZXRZXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEFuZEdhdGUgfSBmcm9tIFwiLi4vLi4vY2lyY3VpdC9jaGlwc1wiO1xuaW1wb3J0IHsgQ2hpcFNwcml0ZSB9IGZyb20gXCIuL2NoaXAtc3ByaXRlXCI7XG5pbXBvcnQgeyBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIi4uLy4uL2NpcmN1aXQvY29yZVwiO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQW5kU3ByaXRlIGV4dGVuZHMgQ2hpcFNwcml0ZSB7XG4gICAgcHJpdmF0ZSBfZ2F0ZTogQW5kR2F0ZVxuXG4gICAgY29uc3RydWN0b3IoZ2F0ZTogQW5kR2F0ZSkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuX2dhdGUgPSBnYXRlXG4gICAgfVxuXG4gICAgbWFrZUNoaXBCb2R5UGF0aChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnlcblxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB0aGlzLnRvcExlZnQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnRvcExlZnQueCwgdGhpcy50b3BMZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5ib3R0b21MZWZ0LngsIHRoaXMuYm90dG9tTGVmdC55KVxuICAgICAgICBjdHgubGluZVRvKHgsIHRoaXMuYm90dG9tTGVmdC55KVxuICAgICAgICBjdHguYXJjKHgsIHksIHRoaXMuX3NjYWxlLCBNYXRoLlBJICogMyAvIDIsIE1hdGguUEkgLyAyKVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb24ueFxuICAgICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbi55XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZWVlZWVlJ1xuICAgICAgICBjdHgubGluZVdpZHRoID0gM1xuXG4gICAgICAgIC8vIEJvZHlcbiAgICAgICAgdGhpcy5tYWtlQ2hpcEJvZHlQYXRoKGN0eClcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgZ2V0SW5wdXRQb3MoaW5wdXQ6IElucHV0KTogUG9pbnQgfCBudWxsIHtcbiAgICAgICAgaWYgKGlucHV0ID09PSB0aGlzLl9nYXRlLmEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5fc2NhbGUsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5fc2NhbGUgKiAyIC8gM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dCA9PT0gdGhpcy5fZ2F0ZS5iKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3NjYWxlLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuX3NjYWxlICogMiAvIDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGdldE91dHB1dFBvcyhvdXRwdXQ6IE91dHB1dCkge1xuICAgICAgICBpZiAob3V0cHV0ID09PSB0aGlzLl9nYXRlLngpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSIsImltcG9ydCB7IEVudGl0eSwgUG9pbnQgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgQ2hpcCwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCIuLi8uLi9jaXJjdWl0L2NvcmVcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoaXBTcHJpdGUgZXh0ZW5kcyBFbnRpdHkge1xuXG4gICAgcHJvdGVjdGVkIGdldCB0b3BMZWZ0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3NjYWxlLFxuICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5fc2NhbGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYm90dG9tTGVmdCgpOiBQb2ludCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLl9zY2FsZSxcbiAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSAtIHRoaXMuX3NjYWxlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IG91dCgpOiBQb2ludCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLl9zY2FsZSwgXG4gICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3V0cHV0KCk6IFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMub3V0LnggKyB0aGlzLl9zY2FsZSwgXG4gICAgICAgICAgICB5OiB0aGlzLm91dC55XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRJbnB1dFBvcyhpbnB1dDogSW5wdXQpOiBQb2ludCB8IG51bGxcbiAgICBhYnN0cmFjdCBnZXRPdXRwdXRQb3Mob3V0cHV0OiBPdXRwdXQpOiBQb2ludCB8IG51bGxcbiAgICBhYnN0cmFjdCBtYWtlQ2hpcEJvZHlQYXRoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZFxuICAgIFxuICAgIGNvaW50YWluc1BvaW50KHBvaW50OiBQb2ludCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBFbnRpdHkgfCBudWxsIHtcbiAgICAgICAgdGhpcy5tYWtlQ2hpcEJvZHlQYXRoKGN0eClcbiAgICAgICAgcmV0dXJuIGN0eC5pc1BvaW50SW5QYXRoKHBvaW50LngsIHBvaW50LnkpID8gdGhpcyA6IG51bGxcbiAgICB9XG59IiwiaW1wb3J0IHsgTmFuZEdhdGUgfSBmcm9tIFwiLi4vLi4vY2lyY3VpdC9jaGlwc1wiO1xuaW1wb3J0IHsgQ2hpcFNwcml0ZSB9IGZyb20gXCIuL2NoaXAtc3ByaXRlXCI7XG5pbXBvcnQgeyBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIi4uLy4uL2NpcmN1aXQvY29yZVwiO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgTmFuZFNwcml0ZSBleHRlbmRzIENoaXBTcHJpdGUge1xuICAgIHByaXZhdGUgX2dhdGU6IE5hbmRHYXRlXG5cbiAgICBjb25zdHJ1Y3RvcihnYXRlOiBOYW5kR2F0ZSkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuX2dhdGUgPSBnYXRlXG4gICAgfVxuXG4gICAgbWFrZUNoaXBCb2R5UGF0aChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnlcblxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh4IC0gdGhpcy5fc2NhbGUgLyA1LCB0aGlzLnRvcExlZnQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnRvcExlZnQueCwgdGhpcy50b3BMZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5ib3R0b21MZWZ0LngsIHRoaXMuYm90dG9tTGVmdC55KVxuICAgICAgICBjdHgubGluZVRvKHggLSB0aGlzLl9zY2FsZSAvIDUsIHRoaXMuYm90dG9tTGVmdC55KVxuICAgICAgICBjdHguYXJjKHggLSB0aGlzLl9zY2FsZSAvIDUsIHksIHRoaXMuX3NjYWxlLCBNYXRoLlBJICogMyAvIDIsIE1hdGguUEkgLyAyKVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb24ueFxuICAgICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbi55XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZWVlZWVlJ1xuICAgICAgICBjdHgubGluZVdpZHRoID0gM1xuXG4gICAgICAgIC8vIEJvZHlcbiAgICAgICAgdGhpcy5tYWtlQ2hpcEJvZHlQYXRoKGN0eClcbiAgICAgICAgY3R4LnN0cm9rZSgpXG5cbiAgICAgICAgLy8gRE9UXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguYXJjKHRoaXMub3V0LnggLSB0aGlzLl9zY2FsZSAvIDEwLCB0aGlzLm91dC55LCB0aGlzLl9zY2FsZSAvIDEwLCAwLCBNYXRoLlBJICogMilcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgZ2V0SW5wdXRQb3MoaW5wdXQ6IElucHV0KTogUG9pbnQgfCBudWxsIHtcbiAgICAgICAgaWYgKGlucHV0ID09PSB0aGlzLl9nYXRlLmEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5fc2NhbGUsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5fc2NhbGUgKiAyIC8gM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dCA9PT0gdGhpcy5fZ2F0ZS5iKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3NjYWxlLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuX3NjYWxlICogMiAvIDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGdldE91dHB1dFBvcyhvdXRwdXQ6IE91dHB1dCkge1xuICAgICAgICBpZiAob3V0cHV0ID09PSB0aGlzLl9nYXRlLngpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSIsImltcG9ydCB7IENoaXBTcHJpdGUgfSBmcm9tIFwiLi9jaGlwLXNwcml0ZVwiO1xuaW1wb3J0IHsgTm90R2F0ZSB9IGZyb20gXCIuLi8uLi9jaXJjdWl0L2NoaXBzXCI7XG5pbXBvcnQgeyBPdXRwdXQsIFNpZ25hbCwgSW5wdXQgfSBmcm9tIFwiLi4vLi4vY2lyY3VpdC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBOb3RTcHJpdGUgZXh0ZW5kcyBDaGlwU3ByaXRlIHtcbiAgICBwcml2YXRlIF9nYXRlOiBOb3RHYXRlXG5cbiAgICBjb25zdHJ1Y3RvcihnYXRlOiBOb3RHYXRlKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5fZ2F0ZSA9IGdhdGVcbiAgICB9XG5cbiAgICBtYWtlQ2hpcEJvZHlQYXRoKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRoaXMudG9wTGVmdC54LCB0aGlzLnRvcExlZnQueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmJvdHRvbUxlZnQueCwgdGhpcy5ib3R0b21MZWZ0LnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5vdXQueCAtIHRoaXMuX3NjYWxlIC8gNSwgdGhpcy5vdXQueSlcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNlZWVlZWUnXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAzXG5cbiAgICAgICAgLy8gQm9keVxuICAgICAgICB0aGlzLm1ha2VDaGlwQm9keVBhdGgoY3R4KVxuICAgICAgICBjdHguc3Ryb2tlKClcblxuICAgICAgICAvLyBET1RcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5hcmModGhpcy5vdXQueCAtIHRoaXMuX3NjYWxlIC8gMTAsIHRoaXMub3V0LnksIHRoaXMuX3NjYWxlIC8gMTAsIDAsIE1hdGguUEkgKiAyKVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBnZXRJbnB1dFBvcyhpbnB1dDogSW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2dhdGUuYSA9PT0gaW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy50b3BMZWZ0LngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBnZXRPdXRwdXRQb3Mob3V0cHV0OiBPdXRwdXQpIHtcbiAgICAgICAgaWYgKG91dHB1dCA9PT0gdGhpcy5fZ2F0ZS54KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iLCJpbXBvcnQgeyBFbnRpdHksIFBvaW50IH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gXCIuLi8uLi9jaXJjdWl0L2NoaXBzXCI7XG5pbXBvcnQgeyBDaGlwU3ByaXRlIH0gZnJvbSBcIi4vY2hpcC1zcHJpdGVcIjtcbmltcG9ydCB7IElucHV0LCBPdXRwdXQgfSBmcm9tIFwiLi4vLi4vY2lyY3VpdC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VTcHJpdGUgZXh0ZW5kcyBDaGlwU3ByaXRlIHtcblxuICAgIHByaXZhdGUgX3NvdXJjZTogU291cmNlXG5cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuX3NvdXJjZSA9IHNvdXJjZVxuICAgIH1cblxuICAgIG1ha2VDaGlwQm9keVBhdGgoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnBvc2l0aW9uXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguYXJjKHgsIHksIHRoaXMuX3NjYWxlLCAwLCBNYXRoLlBJICogMilcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fc291cmNlLngoKVxuICAgICAgICBjb25zdCBjb2xvciA9IHZhbHVlID09PSBudWxsID8gJ2dyYXknIDogdmFsdWUgPyAnZ3JlZW4nIDogJ3JlZCdcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yXG5cbiAgICAgICAgdGhpcy5tYWtlQ2hpcEJvZHlQYXRoKGN0eClcbiAgICAgICAgY3R4LmZpbGwoKVxuICAgIH1cblxuICAgIGdldElucHV0UG9zKGlucHV0OiBJbnB1dCk6IFBvaW50IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgZ2V0T3V0cHV0UG9zKG91dHB1dDogT3V0cHV0KSB7XG4gICAgICAgIGlmIChvdXRwdXQgPT09IHRoaXMuX3NvdXJjZS54KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSIsImltcG9ydCB7IEVudGl0eSwgUG9pbnQgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgV2lyZSB9IGZyb20gXCIuLi8uLi9jaXJjdWl0L2NvcmVcIjtcbmltcG9ydCB7IEJvYXJkTWFuYWdlciB9IGZyb20gXCIuLi9ib2FyZC1tYW5hZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBXaXJlU3ByaXRlIGV4dGVuZHMgRW50aXR5IHtcbiAgICBwcml2YXRlIF93aXJlOiBXaXJlXG4gICAgcHJpdmF0ZSBfYm06IEJvYXJkTWFuYWdlclxuXG5cbiAgICBjb25zdHJ1Y3RvcihibTogQm9hcmRNYW5hZ2VyLCB3aXJlOiBXaXJlKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5fd2lyZSA9IHdpcmVcbiAgICAgICAgdGhpcy5fYm0gPSBibVxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgLy8ganVzdCBvbmUgZm9yIG5vd1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuX3dpcmUuaW5wdXRzWzBdXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuX3dpcmUub3V0cHV0c1swXVxuXG4gICAgICAgIGNvbnN0IG91dFBvcyA9IHRoaXMuX2JtLmdldE91dHB1dFBvcyhvdXRwdXQpXG4gICAgICAgIGlmICghb3V0UG9zKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpblBvcyA9IHRoaXMuX2JtLmdldElucHV0UG9zKGlucHV0KVxuICAgICAgICBpZiAoIWluUG9zKSB7XG4gICAgICAgICAgICBpblBvcyA9IHsgeDogb3V0UG9zLnggKyB0aGlzLl9zY2FsZSwgeTogb3V0UG9zLnl9XG4gICAgICAgIH1cblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9ibS5nZXRTaWduYWxDb2xvcih0aGlzLl93aXJlLl9uZXh0KVxuICAgICAgICBjdHgubGluZVdpZHRoID0gMlxuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKGluUG9zLngsIGluUG9zLnkpXG4gICAgICAgIGN0eC5saW5lVG8ob3V0UG9zLngsIG91dFBvcy55KVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBjb2ludGFpbnNQb2ludChwb2ludDogUG9pbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogRW50aXR5IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSIsImltcG9ydCB7IE9yR2F0ZSwgTm90R2F0ZSwgQW5kR2F0ZSwgU291cmNlLCBOYW5kR2F0ZSB9IGZyb20gXCIuL2NpcmN1aXQvY2hpcHNcIjtcbmltcG9ydCB7IFdpcmUgfSBmcm9tIFwiLi9jaXJjdWl0L2NvcmVcIjtcbmltcG9ydCB7UG9pbnRlcn0gZnJvbSBcIi4vZ3JhcGhpY3MvcG9pbnRlclwiXG5pbXBvcnQgeyBCb2FyZE1hbmFnZXIgfSBmcm9tIFwiLi9ncmFwaGljcy9ib2FyZC1tYW5hZ2VyXCI7XG5cbmNvbnN0IGNvbXB1dGVDYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGUnKVxuY29uc3QgY29udGV4dCA9IGNvbXB1dGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbmNvbnN0IGFFbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EnKVxuY29uc3QgYkVsZW0gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYicpXG5cbmNvbnN0IGFTcmMgPSBuZXcgU291cmNlKCgpID0+IGFFbGVtLmNoZWNrZWQsICdhJylcbmNvbnN0IGJTcmMgPSBuZXcgU291cmNlKCgpID0+IGJFbGVtLmNoZWNrZWQsICdiJylcblxuY29uc3QgbmFuZEdhdGUgPSBuZXcgTmFuZEdhdGUoJzAnKVxuY29uc3Qgb3JHYXRlID0gbmV3IE9yR2F0ZSgnMScpXG5jb25zdCBub3RHYXRlID0gbmV3IE5vdEdhdGUoJzInKVxuXG5jb25zdCBjaGlwcyA9IFthU3JjLCBiU3JjLCBuYW5kR2F0ZSwgb3JHYXRlLCBub3RHYXRlXVxuXG5jb25zdCBhID0gbmV3IFdpcmUoJ2Ffb3V0JywgW2FTcmMueF0sIFtuYW5kR2F0ZS5hXSlcbmNvbnN0IGIgPSBuZXcgV2lyZSgnYl9vdXQnLCBbYlNyYy54XSwgW25hbmRHYXRlLmJdKVxuXG5jb25zdCBhbmRPdXQgPSBuZXcgV2lyZSgnbmFuZF9vdXQnLCBbbmFuZEdhdGUueF0sIFtub3RHYXRlLmFdKVxuY29uc3Qgbm90T3V0ID0gbmV3IFdpcmUoJ25vdF9vdXQnLCBbbm90R2F0ZS54XSlcblxuY29uc3Qgd2lyZXMgPSBbYSwgYiwgYW5kT3V0LCBub3RPdXRdXG5cbmNvbnN0IGJtID0gbmV3IEJvYXJkTWFuYWdlcigpXG53aXJlcy5mb3JFYWNoKHcgPT4gYm0uYWRkV2lyZSh3KSlcbmNoaXBzLmZvckVhY2goYyA9PiBibS5hZGRDaGlwKGMpKVxuYm0udGljaygpXG5cbi8vIEV2ZW50IGhhbmRsaW5nXG5jb25zdCBnb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnbycpIGFzIEhUTUxFbGVtZW50XG5nb0J0bi5vbmNsaWNrID0gKCkgPT4gYm0udGljaygpXG5cbmNvbnN0IHBvaW50ZXIgPSBuZXcgUG9pbnRlcihjb21wdXRlQ2FudmFzLCBwID0+IHtcbiAgICBjb25zdCBzcHJpdGUgPSBibS5jb2ludGFpbnNQb2ludChwLCBjb250ZXh0KVxuICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgcG9pbnRlci5ob2xkKHNwcml0ZSlcbiAgICB9XG59KVxuXG5jb25zdCB3b3Jrc3BhY2UgPSBbYm0sIHBvaW50ZXJdXG5cbi8vIFJlbmRlcmluZ1xuZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjMjIyMjIyJ1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgNzIwLCA3MjApXG5cbiAgICB3b3Jrc3BhY2UuZm9yRWFjaCh3ID0+IHcuZHJhdyhjb250ZXh0KSlcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KVxufVxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpXG4iXSwic291cmNlUm9vdCI6IiJ9