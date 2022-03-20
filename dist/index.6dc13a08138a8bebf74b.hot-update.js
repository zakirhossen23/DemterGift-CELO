self["webpackHotUpdatedemeter"]("/index",{

/***/ "./node_modules/@harmony-js/utils/dist/chain.js":
/*!******************************************************!*\
  !*** ./node_modules/@harmony-js/utils/dist/chain.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/**
 # @harmony-js/utils

This package provides a collection of utility apis for unit conversions like `fromWei`, `toWei`, `hexToNumber`, `numberToHex`, `isAddress`, etc.

## Installation

```
npm install @harmony-js/utils
```

## Usage

Available units
```
const { Units } = require('@harmony-js/utils');

[Units.wei, '1'], // 1 wei
[Units.Kwei, '1000'], // 1e3 wei
[Units.Mwei, '1000000'], // 1e6 wei
[Units.Gwei, '1000000000'], // 1e9 wei
[Units.szabo, '1000000000000'], // 1e12 wei
[Units.finney, '1000000000000000'], // 1e15 wei
[Units.ether, '1000000000000000000'], // 1e18 wei
[Units.one, '1000000000000000000'], // 1e18 wei
[Units.Kether, '1000000000000000000000'], // 1e21 wei
[Units.Mether, '1000000000000000000000000'], // 1e24 wei
[Units.Gether, '1000000000000000000000000000'], // 1e27 wei
[Units.Tether, '1000000000000000000000000000000'], // 1e30 wei
```

Converting between different units
```javascript
const { Units, Unit, numberToString, add0xToString, fromWei, toWei, numToStr} = require('@harmony-js/utils');
const { BN } = require('@harmony-js/crypto');

const one = new Unit('1').asOne();
const oneToGwei = one.toGwei();
console.log(oneToGwei);

// numberToString
const num = 123;
const str = numberToString(num)
console.log(str);

// add0xToString
const str = '12345';
const expected = add0xToString(str)
console.log(expected);

// fromWei
const Wei = new BN('1000000000000000000');
const expected = fromWei(Wei, Units.one);
console.log(expected);

// toWei
const one = new BN('1');
const expected = toWei(one, hmy.utils.Units.one);
const num = numToStr(expected);
console.log(num);
```
 *
 * @packageDocumentation
 * @module harmony-utils
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressSuffix = exports.HDPath = exports.HarmonyCore = exports.defaultConfig = exports.ChainID = exports.ChainType = void 0;
var ChainType;
(function (ChainType) {
    ChainType["Harmony"] = "hmy";
    ChainType["Ethereum"] = "eth";
})(ChainType = exports.ChainType || (exports.ChainType = {}));
var ChainID;
(function (ChainID) {
    ChainID[ChainID["Default"] = 0] = "Default";
    ChainID[ChainID["EthMainnet"] = 1] = "EthMainnet";
    ChainID[ChainID["Morden"] = 2] = "Morden";
    ChainID[ChainID["Ropsten"] = 3] = "Ropsten";
    ChainID[ChainID["Rinkeby"] = 4] = "Rinkeby";
    ChainID[ChainID["RootstockMainnet"] = 30] = "RootstockMainnet";
    ChainID[ChainID["RootstockTestnet"] = 31] = "RootstockTestnet";
    ChainID[ChainID["Kovan"] = 42] = "Kovan";
    ChainID[ChainID["EtcMainnet"] = 61] = "EtcMainnet";
    ChainID[ChainID["EtcTestnet"] = 62] = "EtcTestnet";
    ChainID[ChainID["Geth"] = 1337] = "Geth";
    ChainID[ChainID["Ganache"] = 0] = "Ganache";
    ChainID[ChainID["HmyMainnet"] = 1] = "HmyMainnet";
    ChainID[ChainID["HmyTestnet"] = 2] = "HmyTestnet";
    ChainID[ChainID["HmyLocal"] = 2] = "HmyLocal";
    ChainID[ChainID["HmyPangaea"] = 3] = "HmyPangaea";
})(ChainID = exports.ChainID || (exports.ChainID = {}));
/** @hidden */
exports.defaultConfig = {
    Default: {
        Chain_ID: ChainID.HmyLocal,
        Chain_Type: ChainType.Harmony,
        Chain_URL: 'http://localhost:9500',
        Network_ID: 'Local',
    },
    DefaultWS: {
        Chain_ID: ChainID.HmyLocal,
        Chain_Type: ChainType.Harmony,
        Chain_URL: 'ws://localhost:9800',
        Network_ID: 'LocalWS',
    },
};
/** @hidden */
var HarmonyCore = /** @class */ (function () {
    function HarmonyCore(chainType, chainId) {
        if (chainId === void 0) { chainId = exports.defaultConfig.Default.Chain_ID; }
        this.chainType = chainType;
        this.chainId = chainId;
    }
    Object.defineProperty(HarmonyCore.prototype, "chainPrefix", {
        get: function () {
            switch (this.chainType) {
                case ChainType.Ethereum: {
                    return 'eth';
                }
                case ChainType.Harmony: {
                    return 'hmy';
                }
                default: {
                    return 'hmy';
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HarmonyCore.prototype, "getChainId", {
        get: function () {
            return this.chainId;
        },
        enumerable: false,
        configurable: true
    });
    HarmonyCore.prototype.setChainId = function (chainId) {
        this.chainId = chainId;
    };
    HarmonyCore.prototype.setChainType = function (chainType) {
        this.chainType = chainType;
    };
    return HarmonyCore;
}());
exports.HarmonyCore = HarmonyCore;
/** @hidden */
exports.HDPath = "m/44'/1023'/0'/0/";
/** @hidden */
exports.AddressSuffix = '-';
//# sourceMappingURL=chain.js.map

/***/ }),

/***/ "./node_modules/@harmony-js/utils/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@harmony-js/utils/dist/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module harmony-utils
 * @ignore
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./validators */ "./node_modules/@harmony-js/utils/dist/validators.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./transformers */ "./node_modules/@harmony-js/utils/dist/transformers.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./utils */ "./node_modules/@harmony-js/utils/dist/utils.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./chain */ "./node_modules/@harmony-js/utils/dist/chain.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./tools */ "./node_modules/@harmony-js/utils/dist/tools.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@harmony-js/utils/dist/tools.js":
/*!******************************************************!*\
  !*** ./node_modules/@harmony-js/utils/dist/tools.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/**
 * @packageDocumentation
 * @module harmony-utils
 * @hidden
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defineReadOnly = void 0;
function defineReadOnly(object, name, value) {
    Object.defineProperty(object, name, {
        enumerable: true,
        value: value,
        writable: false,
    });
}
exports.defineReadOnly = defineReadOnly;
//# sourceMappingURL=tools.js.map

/***/ }),

/***/ "./node_modules/@harmony-js/utils/dist/transformers.js":
/*!*************************************************************!*\
  !*** ./node_modules/@harmony-js/utils/dist/transformers.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module harmony-utils
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Unit = exports.fromWei = exports.toWei = exports.hexToBN = exports.hexToNumber = exports.numberToHex = exports.strip0x = exports.add0xToString = exports.numToStr = exports.numberToString = exports.unitMap = exports.Units = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var bn_js_1 = tslib_1.__importDefault(__webpack_require__(/*! bn.js */ "./node_modules/@harmony-js/utils/node_modules/bn.js/lib/bn.js"));
var validators_1 = __webpack_require__(/*! ./validators */ "./node_modules/@harmony-js/utils/dist/validators.js");
var Units;
(function (Units) {
    Units["wei"] = "wei";
    Units["Kwei"] = "Kwei";
    Units["Mwei"] = "Mwei";
    Units["Gwei"] = "Gwei";
    Units["szabo"] = "szabo";
    Units["finney"] = "finney";
    Units["ether"] = "ether";
    Units["one"] = "one";
    Units["Kether"] = "Kether";
    Units["Mether"] = "Mether";
    Units["Gether"] = "Gether";
    Units["Tether"] = "Tether";
})(Units = exports.Units || (exports.Units = {}));
/** @hidden */
exports.unitMap = new Map([
    [Units.wei, '1'],
    [Units.Kwei, '1000'],
    [Units.Mwei, '1000000'],
    [Units.Gwei, '1000000000'],
    [Units.szabo, '1000000000000'],
    [Units.finney, '1000000000000000'],
    [Units.ether, '1000000000000000000'],
    [Units.one, '1000000000000000000'],
    [Units.Kether, '1000000000000000000000'],
    [Units.Mether, '1000000000000000000000000'],
    [Units.Gether, '1000000000000000000000000000'],
    [Units.Tether, '1000000000000000000000000000000'],
]);
/** @hidden */
var DEFAULT_OPTIONS = {
    pad: false,
};
/**
 * Convert Number to String
 */
exports.numberToString = function (obj, radix) {
    if (radix === void 0) { radix = 10; }
    if (bn_js_1.default.isBN(obj)) {
        return obj.toString(radix);
    }
    else if (validators_1.isNumber(obj)) {
        return new bn_js_1.default(obj).toString(radix);
    }
    else if (validators_1.isString(obj) && validators_1.isNumber(Number(obj))) {
        return new bn_js_1.default(obj).toString(radix);
    }
    else {
        throw new Error("cannot parse number:" + obj + " to string");
    }
};
/**
 * Convert Number to String
 */
exports.numToStr = function (input) {
    if (typeof input === 'string') {
        if (!input.match(/^-?[0-9.]+$/)) {
            throw new Error("while converting number to string, invalid number value '" + input + "', should be a number matching (^-?[0-9.]+).");
        }
        return input;
    }
    else if (typeof input === 'number') {
        return String(input);
    }
    else if (bn_js_1.default.isBN(input)) {
        return input.toString(10);
    }
    throw new Error("while converting number to string, invalid number value '" + input + "' type " + typeof input + ".");
};
exports.add0xToString = function (obj) {
    if (validators_1.isString(obj) && !obj.startsWith('-')) {
        return '0x' + obj.replace('0x', '');
    }
    else if (validators_1.isString(obj) && obj.startsWith('-')) {
        return '-0x' + obj.replace('-', '');
    }
    else {
        throw new Error(obj + " is not String");
    }
};
exports.strip0x = function (obj) {
    return obj.toLowerCase().replace('0x', '');
};
/**
 * Convert number to hex
 */
exports.numberToHex = function (obj) {
    try {
        return exports.add0xToString(exports.numberToString(obj, 16));
    }
    catch (error) {
        throw error;
    }
};
/**
 * Convert hex to Decimal number
 */
exports.hexToNumber = function (hex) {
    if (validators_1.isHex(hex) && hex[0] !== '-') {
        return new bn_js_1.default(exports.strip0x(hex), 'hex').toString();
    }
    else if (validators_1.isHex(hex) && hex[0] === '-') {
        var result = new bn_js_1.default(hex.substring(3), 16);
        return result.mul(new bn_js_1.default(-1)).toString();
    }
    else {
        throw new Error(hex + " is not hex number");
    }
};
/**
 * Convert hex to Big Number
 */
exports.hexToBN = function (hex) {
    if (validators_1.isHex(hex) && hex[0] !== '-') {
        return new bn_js_1.default(exports.strip0x(hex), 'hex');
    }
    else if (validators_1.isHex(hex) && hex[0] === '-') {
        var result = new bn_js_1.default(hex.substring(3), 16);
        return result.mul(new bn_js_1.default(-1));
    }
    else {
        throw new Error(hex + " is not hex number");
    }
};
/**
 * Converts any ONE value into wei
 */
exports.toWei = function (input, unit) {
    try {
        var inputStr = exports.numToStr(input);
        var baseStr = exports.unitMap.get(unit);
        if (!baseStr) {
            throw new Error("No unit of type " + unit + " exists.");
        }
        var baseNumDecimals = baseStr.length - 1;
        var base = new bn_js_1.default(baseStr, 10);
        // Is it negative?
        var isNegative = inputStr.substring(0, 1) === '-';
        if (isNegative) {
            inputStr = inputStr.substring(1);
        }
        if (inputStr === '.') {
            throw new Error("Cannot convert " + inputStr + " to wei.");
        }
        // Split it into a whole and fractional part
        var comps = inputStr.split('.'); // eslint-disable-line
        if (comps.length > 2) {
            throw new Error("Cannot convert " + inputStr + " to wei.");
        }
        var _a = tslib_1.__read(comps, 2), whole = _a[0], fraction = _a[1];
        if (!whole) {
            whole = '0';
        }
        if (!fraction) {
            fraction = '0';
        }
        if (fraction.length > baseNumDecimals) {
            throw new Error("Cannot convert " + inputStr + " to wei.");
        }
        while (fraction.length < baseNumDecimals) {
            fraction += '0';
        }
        var wholeBN = new bn_js_1.default(whole);
        var fractionBN = new bn_js_1.default(fraction);
        var wei = wholeBN.mul(base).add(fractionBN);
        if (isNegative) {
            wei = wei.neg();
        }
        return new bn_js_1.default(wei.toString(10), 10);
    }
    catch (error) {
        throw error;
    }
};
/**
 * Converts any wei value into a ONE value.
 */
exports.fromWei = function (wei, unit, options) {
    if (options === void 0) { options = DEFAULT_OPTIONS; }
    try {
        var weiBN = !bn_js_1.default.isBN(wei) ? new bn_js_1.default(wei) : wei;
        if (unit === 'wei') {
            return weiBN.toString(10);
        }
        var baseStr = exports.unitMap.get(unit);
        if (!baseStr) {
            throw new Error("No unit of type " + unit + " exists.");
        }
        var base = new bn_js_1.default(baseStr, 10);
        var baseNumDecimals = baseStr.length - 1;
        var fraction = weiBN
            .abs()
            .mod(base)
            .toString(10);
        // prepend 0s to the fraction half
        while (fraction.length < baseNumDecimals) {
            fraction = "0" + fraction;
        }
        if (!options.pad) {
            /* eslint-disable prefer-destructuring */
            var matchFraction = fraction.match(/^([0-9]*[1-9]|0)(0*)/);
            fraction = matchFraction ? matchFraction[1] : '0';
        }
        var whole = weiBN.div(base).toString(10);
        return fraction === '0' ? "" + whole : whole + "." + fraction;
    }
    catch (error) {
        throw error;
    }
};
var Unit = /** @class */ (function () {
    function Unit(str) {
        if (!bn_js_1.default.isBN(str) && typeof str !== 'number' && validators_1.isHex(str)) {
            this.unit = exports.hexToNumber(str);
        }
        else if (!bn_js_1.default.isBN(str) && typeof str === 'number') {
            this.unit = str.toString();
        }
        else if (str === '0x') {
            this.unit = exports.hexToNumber('0x0');
        }
        else {
            this.unit = str;
        }
        this.wei = new bn_js_1.default(this.unit);
    }
    Unit.from = function (str) {
        return new Unit(str);
    };
    Unit.Wei = function (str) {
        return new Unit(str).asWei();
    };
    Unit.Kwei = function (str) {
        return new Unit(str).asKwei();
    };
    Unit.Mwei = function (str) {
        return new Unit(str).asMwei();
    };
    Unit.Gwei = function (str) {
        return new Unit(str).asGwei();
    };
    Unit.Szabo = function (str) {
        return new Unit(str).asSzabo();
    };
    Unit.Finney = function (str) {
        return new Unit(str).asFinney();
    };
    Unit.Ether = function (str) {
        return new Unit(str).asEther();
    };
    Unit.One = function (str) {
        return new Unit(str).asOne();
    };
    Unit.Kether = function (str) {
        return new Unit(str).asKether();
    };
    Unit.Mether = function (str) {
        return new Unit(str).asMether();
    };
    Unit.Gether = function (str) {
        return new Unit(str).asGether();
    };
    Unit.Tether = function (str) {
        return new Unit(str).asTether();
    };
    Unit.prototype.asWei = function () {
        this.wei = new bn_js_1.default(this.unit);
        return this;
    };
    Unit.prototype.asKwei = function () {
        this.wei = exports.toWei(this.unit, Units.Kwei);
        return this;
    };
    Unit.prototype.asMwei = function () {
        this.wei = exports.toWei(this.unit, Units.Mwei);
        return this;
    };
    Unit.prototype.asGwei = function () {
        this.wei = exports.toWei(this.unit, Units.Gwei);
        return this;
    };
    Unit.prototype.asSzabo = function () {
        this.wei = exports.toWei(this.unit, Units.szabo);
        return this;
    };
    Unit.prototype.asFinney = function () {
        this.wei = exports.toWei(this.unit, Units.finney);
        return this;
    };
    Unit.prototype.asEther = function () {
        this.wei = exports.toWei(this.unit, Units.ether);
        return this;
    };
    Unit.prototype.asOne = function () {
        this.wei = exports.toWei(this.unit, Units.one);
        return this;
    };
    Unit.prototype.asKether = function () {
        this.wei = exports.toWei(this.unit, Units.Kether);
        return this;
    };
    Unit.prototype.asMether = function () {
        this.wei = exports.toWei(this.unit, Units.Mether);
        return this;
    };
    Unit.prototype.asGether = function () {
        this.wei = exports.toWei(this.unit, Units.Gether);
        return this;
    };
    Unit.prototype.asTether = function () {
        this.wei = exports.toWei(this.unit, Units.Tether);
        return this;
    };
    Unit.prototype.toWei = function () {
        if (this.wei) {
            return this.wei;
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toKwei = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.Kwei);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toGwei = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.Gwei);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toMwei = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.Mwei);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toSzabo = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.szabo);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toFinney = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.finney);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toEther = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.ether);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toOne = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.one);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toKether = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.Kether);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toMether = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.Mether);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toGether = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.Gether);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toTether = function () {
        if (this.wei) {
            return exports.fromWei(this.wei, Units.Tether);
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toWeiString = function () {
        if (this.wei) {
            return this.wei.toString();
        }
        else {
            throw new Error('error transforming');
        }
    };
    Unit.prototype.toHex = function () {
        if (this.wei) {
            return exports.numberToHex(this.wei);
        }
        else {
            throw new Error('error transforming');
        }
    };
    return Unit;
}());
exports.Unit = Unit;
//# sourceMappingURL=transformers.js.map

/***/ }),

/***/ "./node_modules/@harmony-js/utils/dist/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/@harmony-js/utils/dist/utils.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * @packageDocumentation
 * @module harmony-utils
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assertObject = exports.generateValidateObjects = exports.validateArgs = exports.validatorArray = exports.AssertType = void 0;
var validators_1 = __webpack_require__(/*! ./validators */ "./node_modules/@harmony-js/utils/dist/validators.js");
/** @hidden */
var AssertType;
(function (AssertType) {
    AssertType["required"] = "required";
    AssertType["optional"] = "optional";
})(AssertType = exports.AssertType || (exports.AssertType = {}));
/** @hidden */
exports.validatorArray = {
    isNumber: [validators_1.isNumber],
    isString: [validators_1.isString],
    isBoolean: [validators_1.isBoolean],
    isArray: [validators_1.isArray],
    isJsonString: [validators_1.isJsonString],
    isObject: [validators_1.isObject],
    isFunction: [validators_1.isFunction],
    isHex: [validators_1.isHex],
    isPublicKey: [validators_1.isPublicKey],
    isPrivateKey: [validators_1.isPrivateKey],
    isAddress: [validators_1.isAddress],
    isHash: [validators_1.isHash],
    isBlockNumber: [validators_1.isBlockNumber],
    isBech32Address: [validators_1.isBech32Address],
    isBech32TestNetAddress: [validators_1.isBech32TestNetAddress],
    isValidAddress: [validators_1.isValidAddress],
};
function validateArgs(args, requiredArgs, optionalArgs) {
    for (var key in requiredArgs) {
        if (args[key] !== undefined) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < requiredArgs[key].length; i += 1) {
                if (typeof requiredArgs[key][i] !== 'function') {
                    throw new Error('Validator is not a function');
                }
                if (!requiredArgs[key][i](args[key])) {
                    throw new Error("Validation failed for " + key + ",should be validated by " + requiredArgs[key][i].validator);
                }
            }
        }
        else {
            throw new Error("Key not found: " + key);
        }
    }
    for (var key in optionalArgs) {
        if (args[key]) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < optionalArgs[key].length; i += 1) {
                if (typeof optionalArgs[key][i] !== 'function') {
                    throw new Error('Validator is not a function');
                }
                if (!optionalArgs[key][i](args[key])) {
                    throw new Error("Validation failed for " + key + ",should be validated by " + optionalArgs[key][i].validator);
                }
            }
        }
    }
    return true;
}
exports.validateArgs = validateArgs;
function generateValidateObjects(validatorObject) {
    var requiredArgs = {};
    var optionalArgs = {};
    for (var index in validatorObject) {
        if (index !== undefined) {
            var newObjectKey = index;
            var newObjectValid = validatorObject[index][0];
            var isRequired = validatorObject[index][1];
            if (isRequired === AssertType.required) {
                requiredArgs[newObjectKey] = exports.validatorArray[newObjectValid];
            }
            else {
                optionalArgs[newObjectKey] = exports.validatorArray[newObjectValid];
            }
        }
    }
    return { requiredArgs: requiredArgs, optionalArgs: optionalArgs };
}
exports.generateValidateObjects = generateValidateObjects;
var assertObject = function (input) { return function (target, key, descriptor) {
    var _a = generateValidateObjects(input), requiredArgs = _a.requiredArgs, optionalArgs = _a.optionalArgs;
    var original = descriptor.value;
    function interceptor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        validateArgs(args[0], requiredArgs, optionalArgs);
        return original.apply(this, args);
    }
    descriptor.value = interceptor;
    return descriptor;
}; };
exports.assertObject = assertObject;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@harmony-js/utils/dist/validators.js":
/*!***********************************************************!*\
  !*** ./node_modules/@harmony-js/utils/dist/validators.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/**
 * @packageDocumentation
 * @module harmony-utils
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidAddress = exports.isBech32TestNetAddress = exports.isBech32Address = exports.isBlockNumber = exports.DefaultBlockParams = exports.isWs = exports.isHttp = exports.isHex = exports.isFunction = exports.isObject = exports.isJsonString = exports.isArray = exports.isBoolean = exports.isString = exports.isInt = exports.isNumber = exports.isHash = exports.isPublicKey = exports.isPrivateKey = exports.isAddress = exports.isKeyString = void 0;
exports.isKeyString = function (keyString, lengh) {
    return !!keyString.replace('0x', '').match("^[0-9a-fA-F]{" + lengh + "}$");
};
exports.isKeyString.validator = 'isKeyString';
exports.isAddress = function (address) {
    return exports.isKeyString(address, 40);
};
exports.isAddress.validator = 'isAddress';
exports.isPrivateKey = function (privateKey) {
    return exports.isKeyString(privateKey, 64);
};
exports.isPrivateKey.validator = 'isPrivateKey';
exports.isPublicKey = function (publicKey) {
    return exports.isKeyString(publicKey, 66);
};
exports.isPublicKey.validator = 'isPublicKey';
exports.isHash = function (hash) {
    return exports.isKeyString(hash, 64);
};
exports.isHash.validator = 'isHash';
/**
 * [isNumber verify param is a Number]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
exports.isNumber = function (obj) {
    return obj === +obj;
};
exports.isNumber.validator = 'isNumber';
/**
 * [isNumber verify param is a Number]
 * @param  {any}  obj [value]
 * @return {boolean}     [boolean]
 */
exports.isInt = function (obj) {
    return exports.isNumber(obj) && Number.isInteger(obj);
};
exports.isInt.validator = 'isInt';
/**
 * [isString verify param is a String]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
exports.isString = function (obj) {
    return obj === "" + obj;
};
exports.isString.validator = 'isString';
/**
 * [isBoolean verify param is a Boolean]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
exports.isBoolean = function (obj) {
    return obj === !!obj;
};
exports.isBoolean.validator = 'isBoolean';
/**
 * [isArray verify param input is an Array]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
exports.isArray = function (obj) {
    return Array.isArray(obj);
};
exports.isArray.validator = 'isArray';
/**
 * [isJson verify param input is a Json]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
exports.isJsonString = function (obj) {
    try {
        return !!JSON.parse(obj) && exports.isObject(JSON.parse(obj));
    }
    catch (e) {
        return false;
    }
};
exports.isJsonString.validator = 'isJsonString';
/**
 * [isObject verify param is an Object]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
exports.isObject = function (obj) {
    return obj !== null && !Array.isArray(obj) && typeof obj === 'object';
};
exports.isObject.validator = 'isObject';
/**
 * [isFunction verify param is a Function]
 * @param  {any}  obj [value]
 * @return {Boolean}     [description]
 */
exports.isFunction = function (obj) {
    return typeof obj === 'function';
};
exports.isFunction.validator = 'isFunction';
exports.isHex = function (obj) {
    if (!exports.isString(obj)) {
        throw new Error(obj + " is not string");
    }
    return ((obj.startsWith('0x') || obj.startsWith('-0x')) &&
        exports.isNumber(Number.parseInt(("" + obj).toLowerCase().replace('0x', ''), 16)));
};
exports.isHex.validator = 'isHex';
exports.isHttp = function (obj) {
    if (!exports.isString(obj)) {
        throw new Error(obj + " is not valid url");
    }
    else {
        return obj.startsWith('http://') || obj.startsWith('https://');
    }
};
exports.isHttp.validator = 'isHttp';
exports.isWs = function (obj) {
    if (!exports.isString(obj)) {
        throw new Error(obj + " is not valid url");
    }
    else {
        return obj.startsWith('ws://') || obj.startsWith('wss://');
    }
};
exports.isWs.validator = 'isWs';
var DefaultBlockParams;
(function (DefaultBlockParams) {
    DefaultBlockParams["earliest"] = "earliest";
    DefaultBlockParams["pending"] = "pending";
    DefaultBlockParams["latest"] = "latest";
})(DefaultBlockParams = exports.DefaultBlockParams || (exports.DefaultBlockParams = {}));
exports.isBlockNumber = function (obj) {
    var blockParams = [
        DefaultBlockParams.earliest,
        DefaultBlockParams.pending,
        DefaultBlockParams.latest,
    ];
    if (!exports.isString(obj)) {
        throw new Error(obj + " is not valid blockNumber");
    }
    return exports.isHex(obj) || blockParams.some(function (val) { return val === obj; });
};
exports.isBlockNumber.validator = 'isBlockNumber';
exports.isBech32Address = function (raw) {
    return !!raw.match(/^one1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}/);
};
exports.isBech32Address.validator = 'isBech32Address';
exports.isBech32TestNetAddress = function (raw) {
    return !!raw.match(/^tone1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}/);
};
exports.isBech32TestNetAddress.validator = 'isBech32TestNetAddress';
exports.isValidAddress = function (address) {
    if (!exports.isString(address)) {
        throw new Error(address + " is not string");
    }
    if (exports.isAddress(address) || exports.isBech32Address(address) || exports.isBech32TestNetAddress(address)) {
        return true;
    }
    else {
        return false;
    }
};
exports.isValidAddress.validator = 'isValidAddress';
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ "./node_modules/@harmony-js/utils/node_modules/bn.js/lib/bn.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@harmony-js/utils/node_modules/bn.js/lib/bn.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
      Buffer = window.Buffer;
    } else {
      Buffer = __webpack_require__(/*! buffer */ "?15c0").Buffer;
    }
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
      this.negative = 1;
    }

    if (start < number.length) {
      if (base === 16) {
        this._parseHex(number, start, endian);
      } else {
        this._parseBase(number, base, start);
        if (endian === 'le') {
          this._initArray(this.toArray(), base, endian);
        }
      }
    }
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [ 0 ];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this.strip();
  };

  function parseHex4Bits (string, index) {
    var c = string.charCodeAt(index);
    // 'A' - 'F'
    if (c >= 65 && c <= 70) {
      return c - 55;
    // 'a' - 'f'
    } else if (c >= 97 && c <= 102) {
      return c - 87;
    // '0' - '9'
    } else {
      return (c - 48) & 0xf;
    }
  }

  function parseHexByte (string, lowerBound, index) {
    var r = parseHex4Bits(string, index);
    if (index - 1 >= lowerBound) {
      r |= parseHex4Bits(string, index - 1) << 4;
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start, endian) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    // 24-bits chunks
    var off = 0;
    var j = 0;

    var w;
    if (endian === 'be') {
      for (i = number.length - 1; i >= start; i -= 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    } else {
      var parseLength = number.length - start;
      for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    }

    this.strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        r += c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa;

      // '0' - '9'
      } else {
        r += c;
      }
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [ 0 ];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    this.strip();
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype.strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  BN.prototype.inspect = function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16);
  };

  BN.prototype.toBuffer = function toBuffer (endian, length) {
    assert(typeof Buffer !== 'undefined');
    return this.toArrayLike(Buffer, endian, length);
  };

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    this.strip();
    var littleEndian = endian === 'le';
    var res = new ArrayType(reqLength);

    var b, i;
    var q = this.clone();
    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this.strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this.strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this.strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo (self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q.strip();
    }
    a.strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn (num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this.strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      if (r.strip !== undefined) {
        // r is BN v4 instance
        r.strip();
      } else {
        // r is BN v5 instance
        r._strip();
      }
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})( false || module, this);


/***/ }),

/***/ "./src/components/components/modals/BidNFTModal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/components/modals/BidNFTModal.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @harmony-js/utils */ "./node_modules/@harmony-js/utils/dist/index.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_harmony_js_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");









function BidNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      contract = _ref.contract,
      senderAddress = _ref.senderAddress,
      tokenId = _ref.tokenId,
      eventId = _ref.eventId,
      toAddress = _ref.toAddress,
      type = _ref.type,
      Highestbid = _ref.Highestbid;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");

  var ContractKit = __webpack_require__(/*! @celo/contractkit */ "./node_modules/@celo/contractkit/lib/index.js");

  var web3 = new Web3(window.ethereum);
  var kit = ContractKit.newKitFromWeb3(web3);

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__["default"])({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  function activateWarningModal() {
    var alertELM = document.getElementById("alert");
    alertELM.style = 'contents';
    setAlert("Amount cannot be under ".concat(Highestbid, " CELO Dollar (CUSD)"));
  }

  function bidNFT() {
    return _bidNFT.apply(this, arguments);
  }

  function _bidNFT() {
    _bidNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var cUSDtoken, cUSDtx;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(Amount < Highestbid)) {
                _context.next = 3;
                break;
              }

              activateWarningModal();
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return kit.contracts.getStableToken();

            case 5:
              cUSDtoken = _context.sent;
              _context.next = 8;
              return cUSDtoken.transfer(toAddress, Amount).send({
                from: senderAddress,
                feeCurrency: cUSDtoken.address
              });

            case 8:
              cUSDtx = _context.sent;
              // const tokenUri = await contract.tokenURI(tokenId);
              // var parsed = await JSON.parse(tokenUri);
              // if (Number(parsed['properties']['price']['description']) < Number(Amount)) {
              // 	parsed['properties']['price']['description'] = Amount;
              // 	parsed['properties']['higherbidadd']['description'] = senderAddress;
              // }
              // let currentDate = new Date();
              // const createdObject = {
              // 	title: 'Asset Metadata Bids',
              // 	type: 'object',
              // 	properties: {
              // 		username: {
              // 			type: 'string',
              // 			description: senderAddress
              // 		},
              // 		bid: {
              // 			type: 'string',
              // 			description: Amount
              // 		},
              // 		time: {
              // 			type: 'string',
              // 			description: currentDate
              // 		}
              // 	}
              // };
              // let CUSDinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', { useGrouping: false });
              // let cUSDcontractData = '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1'
              // const result = await contract.createBid(tokenId, JSON.stringify(createdObject), JSON.stringify(parsed), eventId, {
              // 	from: senderAddress,
              // 	gasPrice: 100000000000, value: CUSDinFull
              // });
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();
              window.location.reload();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _bidNFT.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    closeButton: true
  }, type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid Cryptopunk") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "alert",
    style: {
      display: 'none',
      fontSize: "30px"
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].Label, null, "Bid Amount in CELO Dollar (CUSD)"), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT")))));
}

/***/ }),

/***/ "?15c0":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8a0c4db677487fa48e32"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjZkYzEzYTA4MTM4YThiZWJmNzRiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxRQUFROztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxzRUFBc0U7QUFDOUUsUUFBUSxLQUFLOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUIsR0FBRyxjQUFjLEdBQUcsbUJBQW1CLEdBQUcscUJBQXFCLEdBQUcsZUFBZSxHQUFHLGlCQUFpQjtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DLGlCQUFpQixLQUFLO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDLGVBQWUsS0FBSztBQUNyRDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFD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QTtBQUNBLGVBQWU7QUFDZiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTs7QUFFQSxrQkFBa0IsYUFBYTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sa0JBQWtCLGFBQWE7QUFDL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBOztBQUVBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFdBQVc7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLG1DQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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RUFBQztBQUE1QixLQUF2QjtBQUE2RCxhQUFTLEVBQUMsb0JBQXZFO0FBQTRGLFFBQUksRUFBQztBQUFqRyxLQUNFcEMsS0FERixDQURELGVBSUMsaURBQUMsa0VBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLGtFQUFELDJDQURELEVBRUVZLFdBRkYsQ0FKRCxlQVFDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsaURBQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFTTtBQUFuQyxlQURELENBUkQsQ0FERCxDQWhCRCxDQUREO0FBc0NBOzs7Ozs7Ozs7O0FDaklEOzs7Ozs7OztVQ0FBLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGhhcm1vbnktanMvdXRpbHMvZGlzdC9jaGFpbi5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BoYXJtb255LWpzL3V0aWxzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9AaGFybW9ueS1qcy91dGlscy9kaXN0L3Rvb2xzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGhhcm1vbnktanMvdXRpbHMvZGlzdC90cmFuc2Zvcm1lcnMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9AaGFybW9ueS1qcy91dGlscy9kaXN0L3V0aWxzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGhhcm1vbnktanMvdXRpbHMvZGlzdC92YWxpZGF0b3JzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGhhcm1vbnktanMvdXRpbHMvbm9kZV9tb2R1bGVzL2JuLmpzL2xpYi9ibi5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvaWdub3JlZHxDOlxcVXNlcnNcXHpha2lyXFxEb2N1bWVudHNcXERlbXRlckdpZnQtT05FLW1haW5cXERlbXRlckdpZnQtQ0VMT1xcbm9kZV9tb2R1bGVzXFxAaGFybW9ueS1qc1xcdXRpbHNcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAjIEBoYXJtb255LWpzL3V0aWxzXG5cblRoaXMgcGFja2FnZSBwcm92aWRlcyBhIGNvbGxlY3Rpb24gb2YgdXRpbGl0eSBhcGlzIGZvciB1bml0IGNvbnZlcnNpb25zIGxpa2UgYGZyb21XZWlgLCBgdG9XZWlgLCBgaGV4VG9OdW1iZXJgLCBgbnVtYmVyVG9IZXhgLCBgaXNBZGRyZXNzYCwgZXRjLlxuXG4jIyBJbnN0YWxsYXRpb25cblxuYGBgXG5ucG0gaW5zdGFsbCBAaGFybW9ueS1qcy91dGlsc1xuYGBgXG5cbiMjIFVzYWdlXG5cbkF2YWlsYWJsZSB1bml0c1xuYGBgXG5jb25zdCB7IFVuaXRzIH0gPSByZXF1aXJlKCdAaGFybW9ueS1qcy91dGlscycpO1xuXG5bVW5pdHMud2VpLCAnMSddLCAvLyAxIHdlaVxuW1VuaXRzLkt3ZWksICcxMDAwJ10sIC8vIDFlMyB3ZWlcbltVbml0cy5Nd2VpLCAnMTAwMDAwMCddLCAvLyAxZTYgd2VpXG5bVW5pdHMuR3dlaSwgJzEwMDAwMDAwMDAnXSwgLy8gMWU5IHdlaVxuW1VuaXRzLnN6YWJvLCAnMTAwMDAwMDAwMDAwMCddLCAvLyAxZTEyIHdlaVxuW1VuaXRzLmZpbm5leSwgJzEwMDAwMDAwMDAwMDAwMDAnXSwgLy8gMWUxNSB3ZWlcbltVbml0cy5ldGhlciwgJzEwMDAwMDAwMDAwMDAwMDAwMDAnXSwgLy8gMWUxOCB3ZWlcbltVbml0cy5vbmUsICcxMDAwMDAwMDAwMDAwMDAwMDAwJ10sIC8vIDFlMTggd2VpXG5bVW5pdHMuS2V0aGVyLCAnMTAwMDAwMDAwMDAwMDAwMDAwMDAwMCddLCAvLyAxZTIxIHdlaVxuW1VuaXRzLk1ldGhlciwgJzEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnXSwgLy8gMWUyNCB3ZWlcbltVbml0cy5HZXRoZXIsICcxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJ10sIC8vIDFlMjcgd2VpXG5bVW5pdHMuVGV0aGVyLCAnMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCddLCAvLyAxZTMwIHdlaVxuYGBgXG5cbkNvbnZlcnRpbmcgYmV0d2VlbiBkaWZmZXJlbnQgdW5pdHNcbmBgYGphdmFzY3JpcHRcbmNvbnN0IHsgVW5pdHMsIFVuaXQsIG51bWJlclRvU3RyaW5nLCBhZGQweFRvU3RyaW5nLCBmcm9tV2VpLCB0b1dlaSwgbnVtVG9TdHJ9ID0gcmVxdWlyZSgnQGhhcm1vbnktanMvdXRpbHMnKTtcbmNvbnN0IHsgQk4gfSA9IHJlcXVpcmUoJ0BoYXJtb255LWpzL2NyeXB0bycpO1xuXG5jb25zdCBvbmUgPSBuZXcgVW5pdCgnMScpLmFzT25lKCk7XG5jb25zdCBvbmVUb0d3ZWkgPSBvbmUudG9Hd2VpKCk7XG5jb25zb2xlLmxvZyhvbmVUb0d3ZWkpO1xuXG4vLyBudW1iZXJUb1N0cmluZ1xuY29uc3QgbnVtID0gMTIzO1xuY29uc3Qgc3RyID0gbnVtYmVyVG9TdHJpbmcobnVtKVxuY29uc29sZS5sb2coc3RyKTtcblxuLy8gYWRkMHhUb1N0cmluZ1xuY29uc3Qgc3RyID0gJzEyMzQ1JztcbmNvbnN0IGV4cGVjdGVkID0gYWRkMHhUb1N0cmluZyhzdHIpXG5jb25zb2xlLmxvZyhleHBlY3RlZCk7XG5cbi8vIGZyb21XZWlcbmNvbnN0IFdlaSA9IG5ldyBCTignMTAwMDAwMDAwMDAwMDAwMDAwMCcpO1xuY29uc3QgZXhwZWN0ZWQgPSBmcm9tV2VpKFdlaSwgVW5pdHMub25lKTtcbmNvbnNvbGUubG9nKGV4cGVjdGVkKTtcblxuLy8gdG9XZWlcbmNvbnN0IG9uZSA9IG5ldyBCTignMScpO1xuY29uc3QgZXhwZWN0ZWQgPSB0b1dlaShvbmUsIGhteS51dGlscy5Vbml0cy5vbmUpO1xuY29uc3QgbnVtID0gbnVtVG9TdHIoZXhwZWN0ZWQpO1xuY29uc29sZS5sb2cobnVtKTtcbmBgYFxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBoYXJtb255LXV0aWxzXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWRkcmVzc1N1ZmZpeCA9IGV4cG9ydHMuSERQYXRoID0gZXhwb3J0cy5IYXJtb255Q29yZSA9IGV4cG9ydHMuZGVmYXVsdENvbmZpZyA9IGV4cG9ydHMuQ2hhaW5JRCA9IGV4cG9ydHMuQ2hhaW5UeXBlID0gdm9pZCAwO1xudmFyIENoYWluVHlwZTtcbihmdW5jdGlvbiAoQ2hhaW5UeXBlKSB7XG4gICAgQ2hhaW5UeXBlW1wiSGFybW9ueVwiXSA9IFwiaG15XCI7XG4gICAgQ2hhaW5UeXBlW1wiRXRoZXJldW1cIl0gPSBcImV0aFwiO1xufSkoQ2hhaW5UeXBlID0gZXhwb3J0cy5DaGFpblR5cGUgfHwgKGV4cG9ydHMuQ2hhaW5UeXBlID0ge30pKTtcbnZhciBDaGFpbklEO1xuKGZ1bmN0aW9uIChDaGFpbklEKSB7XG4gICAgQ2hhaW5JRFtDaGFpbklEW1wiRGVmYXVsdFwiXSA9IDBdID0gXCJEZWZhdWx0XCI7XG4gICAgQ2hhaW5JRFtDaGFpbklEW1wiRXRoTWFpbm5ldFwiXSA9IDFdID0gXCJFdGhNYWlubmV0XCI7XG4gICAgQ2hhaW5JRFtDaGFpbklEW1wiTW9yZGVuXCJdID0gMl0gPSBcIk1vcmRlblwiO1xuICAgIENoYWluSURbQ2hhaW5JRFtcIlJvcHN0ZW5cIl0gPSAzXSA9IFwiUm9wc3RlblwiO1xuICAgIENoYWluSURbQ2hhaW5JRFtcIlJpbmtlYnlcIl0gPSA0XSA9IFwiUmlua2VieVwiO1xuICAgIENoYWluSURbQ2hhaW5JRFtcIlJvb3RzdG9ja01haW5uZXRcIl0gPSAzMF0gPSBcIlJvb3RzdG9ja01haW5uZXRcIjtcbiAgICBDaGFpbklEW0NoYWluSURbXCJSb290c3RvY2tUZXN0bmV0XCJdID0gMzFdID0gXCJSb290c3RvY2tUZXN0bmV0XCI7XG4gICAgQ2hhaW5JRFtDaGFpbklEW1wiS292YW5cIl0gPSA0Ml0gPSBcIktvdmFuXCI7XG4gICAgQ2hhaW5JRFtDaGFpbklEW1wiRXRjTWFpbm5ldFwiXSA9IDYxXSA9IFwiRXRjTWFpbm5ldFwiO1xuICAgIENoYWluSURbQ2hhaW5JRFtcIkV0Y1Rlc3RuZXRcIl0gPSA2Ml0gPSBcIkV0Y1Rlc3RuZXRcIjtcbiAgICBDaGFpbklEW0NoYWluSURbXCJHZXRoXCJdID0gMTMzN10gPSBcIkdldGhcIjtcbiAgICBDaGFpbklEW0NoYWluSURbXCJHYW5hY2hlXCJdID0gMF0gPSBcIkdhbmFjaGVcIjtcbiAgICBDaGFpbklEW0NoYWluSURbXCJIbXlNYWlubmV0XCJdID0gMV0gPSBcIkhteU1haW5uZXRcIjtcbiAgICBDaGFpbklEW0NoYWluSURbXCJIbXlUZXN0bmV0XCJdID0gMl0gPSBcIkhteVRlc3RuZXRcIjtcbiAgICBDaGFpbklEW0NoYWluSURbXCJIbXlMb2NhbFwiXSA9IDJdID0gXCJIbXlMb2NhbFwiO1xuICAgIENoYWluSURbQ2hhaW5JRFtcIkhteVBhbmdhZWFcIl0gPSAzXSA9IFwiSG15UGFuZ2FlYVwiO1xufSkoQ2hhaW5JRCA9IGV4cG9ydHMuQ2hhaW5JRCB8fCAoZXhwb3J0cy5DaGFpbklEID0ge30pKTtcbi8qKiBAaGlkZGVuICovXG5leHBvcnRzLmRlZmF1bHRDb25maWcgPSB7XG4gICAgRGVmYXVsdDoge1xuICAgICAgICBDaGFpbl9JRDogQ2hhaW5JRC5IbXlMb2NhbCxcbiAgICAgICAgQ2hhaW5fVHlwZTogQ2hhaW5UeXBlLkhhcm1vbnksXG4gICAgICAgIENoYWluX1VSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6OTUwMCcsXG4gICAgICAgIE5ldHdvcmtfSUQ6ICdMb2NhbCcsXG4gICAgfSxcbiAgICBEZWZhdWx0V1M6IHtcbiAgICAgICAgQ2hhaW5fSUQ6IENoYWluSUQuSG15TG9jYWwsXG4gICAgICAgIENoYWluX1R5cGU6IENoYWluVHlwZS5IYXJtb255LFxuICAgICAgICBDaGFpbl9VUkw6ICd3czovL2xvY2FsaG9zdDo5ODAwJyxcbiAgICAgICAgTmV0d29ya19JRDogJ0xvY2FsV1MnLFxuICAgIH0sXG59O1xuLyoqIEBoaWRkZW4gKi9cbnZhciBIYXJtb255Q29yZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIYXJtb255Q29yZShjaGFpblR5cGUsIGNoYWluSWQpIHtcbiAgICAgICAgaWYgKGNoYWluSWQgPT09IHZvaWQgMCkgeyBjaGFpbklkID0gZXhwb3J0cy5kZWZhdWx0Q29uZmlnLkRlZmF1bHQuQ2hhaW5fSUQ7IH1cbiAgICAgICAgdGhpcy5jaGFpblR5cGUgPSBjaGFpblR5cGU7XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIYXJtb255Q29yZS5wcm90b3R5cGUsIFwiY2hhaW5QcmVmaXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jaGFpblR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENoYWluVHlwZS5FdGhlcmV1bToge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2V0aCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgQ2hhaW5UeXBlLkhhcm1vbnk6IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdobXknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaG15JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSGFybW9ueUNvcmUucHJvdG90eXBlLCBcImdldENoYWluSWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYWluSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBIYXJtb255Q29yZS5wcm90b3R5cGUuc2V0Q2hhaW5JZCA9IGZ1bmN0aW9uIChjaGFpbklkKSB7XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgfTtcbiAgICBIYXJtb255Q29yZS5wcm90b3R5cGUuc2V0Q2hhaW5UeXBlID0gZnVuY3Rpb24gKGNoYWluVHlwZSkge1xuICAgICAgICB0aGlzLmNoYWluVHlwZSA9IGNoYWluVHlwZTtcbiAgICB9O1xuICAgIHJldHVybiBIYXJtb255Q29yZTtcbn0oKSk7XG5leHBvcnRzLkhhcm1vbnlDb3JlID0gSGFybW9ueUNvcmU7XG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0cy5IRFBhdGggPSBcIm0vNDQnLzEwMjMnLzAnLzAvXCI7XG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0cy5BZGRyZXNzU3VmZml4ID0gJy0nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hhaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBoYXJtb255LXV0aWxzXG4gKiBAaWdub3JlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdmFsaWRhdG9yc1wiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90cmFuc2Zvcm1lcnNcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbHNcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2hhaW5cIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdG9vbHNcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBoYXJtb255LXV0aWxzXG4gKiBAaGlkZGVuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmaW5lUmVhZE9ubHkgPSB2b2lkIDA7XG5mdW5jdGlvbiBkZWZpbmVSZWFkT25seShvYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmaW5lUmVhZE9ubHkgPSBkZWZpbmVSZWFkT25seTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvb2xzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqIEBtb2R1bGUgaGFybW9ueS11dGlsc1xuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVuaXQgPSBleHBvcnRzLmZyb21XZWkgPSBleHBvcnRzLnRvV2VpID0gZXhwb3J0cy5oZXhUb0JOID0gZXhwb3J0cy5oZXhUb051bWJlciA9IGV4cG9ydHMubnVtYmVyVG9IZXggPSBleHBvcnRzLnN0cmlwMHggPSBleHBvcnRzLmFkZDB4VG9TdHJpbmcgPSBleHBvcnRzLm51bVRvU3RyID0gZXhwb3J0cy5udW1iZXJUb1N0cmluZyA9IGV4cG9ydHMudW5pdE1hcCA9IGV4cG9ydHMuVW5pdHMgPSB2b2lkIDA7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBibl9qc18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImJuLmpzXCIpKTtcbnZhciB2YWxpZGF0b3JzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0b3JzXCIpO1xudmFyIFVuaXRzO1xuKGZ1bmN0aW9uIChVbml0cykge1xuICAgIFVuaXRzW1wid2VpXCJdID0gXCJ3ZWlcIjtcbiAgICBVbml0c1tcIkt3ZWlcIl0gPSBcIkt3ZWlcIjtcbiAgICBVbml0c1tcIk13ZWlcIl0gPSBcIk13ZWlcIjtcbiAgICBVbml0c1tcIkd3ZWlcIl0gPSBcIkd3ZWlcIjtcbiAgICBVbml0c1tcInN6YWJvXCJdID0gXCJzemFib1wiO1xuICAgIFVuaXRzW1wiZmlubmV5XCJdID0gXCJmaW5uZXlcIjtcbiAgICBVbml0c1tcImV0aGVyXCJdID0gXCJldGhlclwiO1xuICAgIFVuaXRzW1wib25lXCJdID0gXCJvbmVcIjtcbiAgICBVbml0c1tcIktldGhlclwiXSA9IFwiS2V0aGVyXCI7XG4gICAgVW5pdHNbXCJNZXRoZXJcIl0gPSBcIk1ldGhlclwiO1xuICAgIFVuaXRzW1wiR2V0aGVyXCJdID0gXCJHZXRoZXJcIjtcbiAgICBVbml0c1tcIlRldGhlclwiXSA9IFwiVGV0aGVyXCI7XG59KShVbml0cyA9IGV4cG9ydHMuVW5pdHMgfHwgKGV4cG9ydHMuVW5pdHMgPSB7fSkpO1xuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydHMudW5pdE1hcCA9IG5ldyBNYXAoW1xuICAgIFtVbml0cy53ZWksICcxJ10sXG4gICAgW1VuaXRzLkt3ZWksICcxMDAwJ10sXG4gICAgW1VuaXRzLk13ZWksICcxMDAwMDAwJ10sXG4gICAgW1VuaXRzLkd3ZWksICcxMDAwMDAwMDAwJ10sXG4gICAgW1VuaXRzLnN6YWJvLCAnMTAwMDAwMDAwMDAwMCddLFxuICAgIFtVbml0cy5maW5uZXksICcxMDAwMDAwMDAwMDAwMDAwJ10sXG4gICAgW1VuaXRzLmV0aGVyLCAnMTAwMDAwMDAwMDAwMDAwMDAwMCddLFxuICAgIFtVbml0cy5vbmUsICcxMDAwMDAwMDAwMDAwMDAwMDAwJ10sXG4gICAgW1VuaXRzLktldGhlciwgJzEwMDAwMDAwMDAwMDAwMDAwMDAwMDAnXSxcbiAgICBbVW5pdHMuTWV0aGVyLCAnMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCddLFxuICAgIFtVbml0cy5HZXRoZXIsICcxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJ10sXG4gICAgW1VuaXRzLlRldGhlciwgJzEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnXSxcbl0pO1xuLyoqIEBoaWRkZW4gKi9cbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gICAgcGFkOiBmYWxzZSxcbn07XG4vKipcbiAqIENvbnZlcnQgTnVtYmVyIHRvIFN0cmluZ1xuICovXG5leHBvcnRzLm51bWJlclRvU3RyaW5nID0gZnVuY3Rpb24gKG9iaiwgcmFkaXgpIHtcbiAgICBpZiAocmFkaXggPT09IHZvaWQgMCkgeyByYWRpeCA9IDEwOyB9XG4gICAgaWYgKGJuX2pzXzEuZGVmYXVsdC5pc0JOKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai50b1N0cmluZyhyYWRpeCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbGlkYXRvcnNfMS5pc051bWJlcihvYmopKSB7XG4gICAgICAgIHJldHVybiBuZXcgYm5fanNfMS5kZWZhdWx0KG9iaikudG9TdHJpbmcocmFkaXgpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWxpZGF0b3JzXzEuaXNTdHJpbmcob2JqKSAmJiB2YWxpZGF0b3JzXzEuaXNOdW1iZXIoTnVtYmVyKG9iaikpKSB7XG4gICAgICAgIHJldHVybiBuZXcgYm5fanNfMS5kZWZhdWx0KG9iaikudG9TdHJpbmcocmFkaXgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IHBhcnNlIG51bWJlcjpcIiArIG9iaiArIFwiIHRvIHN0cmluZ1wiKTtcbiAgICB9XG59O1xuLyoqXG4gKiBDb252ZXJ0IE51bWJlciB0byBTdHJpbmdcbiAqL1xuZXhwb3J0cy5udW1Ub1N0ciA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICghaW5wdXQubWF0Y2goL14tP1swLTkuXSskLykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndoaWxlIGNvbnZlcnRpbmcgbnVtYmVyIHRvIHN0cmluZywgaW52YWxpZCBudW1iZXIgdmFsdWUgJ1wiICsgaW5wdXQgKyBcIicsIHNob3VsZCBiZSBhIG51bWJlciBtYXRjaGluZyAoXi0/WzAtOS5dKykuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gU3RyaW5nKGlucHV0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYm5fanNfMS5kZWZhdWx0LmlzQk4oaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC50b1N0cmluZygxMCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIndoaWxlIGNvbnZlcnRpbmcgbnVtYmVyIHRvIHN0cmluZywgaW52YWxpZCBudW1iZXIgdmFsdWUgJ1wiICsgaW5wdXQgKyBcIicgdHlwZSBcIiArIHR5cGVvZiBpbnB1dCArIFwiLlwiKTtcbn07XG5leHBvcnRzLmFkZDB4VG9TdHJpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKHZhbGlkYXRvcnNfMS5pc1N0cmluZyhvYmopICYmICFvYmouc3RhcnRzV2l0aCgnLScpKSB7XG4gICAgICAgIHJldHVybiAnMHgnICsgb2JqLnJlcGxhY2UoJzB4JywgJycpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWxpZGF0b3JzXzEuaXNTdHJpbmcob2JqKSAmJiBvYmouc3RhcnRzV2l0aCgnLScpKSB7XG4gICAgICAgIHJldHVybiAnLTB4JyArIG9iai5yZXBsYWNlKCctJywgJycpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG9iaiArIFwiIGlzIG5vdCBTdHJpbmdcIik7XG4gICAgfVxufTtcbmV4cG9ydHMuc3RyaXAweCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnMHgnLCAnJyk7XG59O1xuLyoqXG4gKiBDb252ZXJ0IG51bWJlciB0byBoZXhcbiAqL1xuZXhwb3J0cy5udW1iZXJUb0hleCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5hZGQweFRvU3RyaW5nKGV4cG9ydHMubnVtYmVyVG9TdHJpbmcob2JqLCAxNikpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufTtcbi8qKlxuICogQ29udmVydCBoZXggdG8gRGVjaW1hbCBudW1iZXJcbiAqL1xuZXhwb3J0cy5oZXhUb051bWJlciA9IGZ1bmN0aW9uIChoZXgpIHtcbiAgICBpZiAodmFsaWRhdG9yc18xLmlzSGV4KGhleCkgJiYgaGV4WzBdICE9PSAnLScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBibl9qc18xLmRlZmF1bHQoZXhwb3J0cy5zdHJpcDB4KGhleCksICdoZXgnKS50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWxpZGF0b3JzXzEuaXNIZXgoaGV4KSAmJiBoZXhbMF0gPT09ICctJykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IGJuX2pzXzEuZGVmYXVsdChoZXguc3Vic3RyaW5nKDMpLCAxNik7XG4gICAgICAgIHJldHVybiByZXN1bHQubXVsKG5ldyBibl9qc18xLmRlZmF1bHQoLTEpKS50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGhleCArIFwiIGlzIG5vdCBoZXggbnVtYmVyXCIpO1xuICAgIH1cbn07XG4vKipcbiAqIENvbnZlcnQgaGV4IHRvIEJpZyBOdW1iZXJcbiAqL1xuZXhwb3J0cy5oZXhUb0JOID0gZnVuY3Rpb24gKGhleCkge1xuICAgIGlmICh2YWxpZGF0b3JzXzEuaXNIZXgoaGV4KSAmJiBoZXhbMF0gIT09ICctJykge1xuICAgICAgICByZXR1cm4gbmV3IGJuX2pzXzEuZGVmYXVsdChleHBvcnRzLnN0cmlwMHgoaGV4KSwgJ2hleCcpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWxpZGF0b3JzXzEuaXNIZXgoaGV4KSAmJiBoZXhbMF0gPT09ICctJykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IGJuX2pzXzEuZGVmYXVsdChoZXguc3Vic3RyaW5nKDMpLCAxNik7XG4gICAgICAgIHJldHVybiByZXN1bHQubXVsKG5ldyBibl9qc18xLmRlZmF1bHQoLTEpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihoZXggKyBcIiBpcyBub3QgaGV4IG51bWJlclwiKTtcbiAgICB9XG59O1xuLyoqXG4gKiBDb252ZXJ0cyBhbnkgT05FIHZhbHVlIGludG8gd2VpXG4gKi9cbmV4cG9ydHMudG9XZWkgPSBmdW5jdGlvbiAoaW5wdXQsIHVuaXQpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5wdXRTdHIgPSBleHBvcnRzLm51bVRvU3RyKGlucHV0KTtcbiAgICAgICAgdmFyIGJhc2VTdHIgPSBleHBvcnRzLnVuaXRNYXAuZ2V0KHVuaXQpO1xuICAgICAgICBpZiAoIWJhc2VTdHIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVuaXQgb2YgdHlwZSBcIiArIHVuaXQgKyBcIiBleGlzdHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiYXNlTnVtRGVjaW1hbHMgPSBiYXNlU3RyLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBiYXNlID0gbmV3IGJuX2pzXzEuZGVmYXVsdChiYXNlU3RyLCAxMCk7XG4gICAgICAgIC8vIElzIGl0IG5lZ2F0aXZlP1xuICAgICAgICB2YXIgaXNOZWdhdGl2ZSA9IGlucHV0U3RyLnN1YnN0cmluZygwLCAxKSA9PT0gJy0nO1xuICAgICAgICBpZiAoaXNOZWdhdGl2ZSkge1xuICAgICAgICAgICAgaW5wdXRTdHIgPSBpbnB1dFN0ci5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0U3RyID09PSAnLicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjb252ZXJ0IFwiICsgaW5wdXRTdHIgKyBcIiB0byB3ZWkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNwbGl0IGl0IGludG8gYSB3aG9sZSBhbmQgZnJhY3Rpb25hbCBwYXJ0XG4gICAgICAgIHZhciBjb21wcyA9IGlucHV0U3RyLnNwbGl0KCcuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgaWYgKGNvbXBzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjb252ZXJ0IFwiICsgaW5wdXRTdHIgKyBcIiB0byB3ZWkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRzbGliXzEuX19yZWFkKGNvbXBzLCAyKSwgd2hvbGUgPSBfYVswXSwgZnJhY3Rpb24gPSBfYVsxXTtcbiAgICAgICAgaWYgKCF3aG9sZSkge1xuICAgICAgICAgICAgd2hvbGUgPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmcmFjdGlvbikge1xuICAgICAgICAgICAgZnJhY3Rpb24gPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyYWN0aW9uLmxlbmd0aCA+IGJhc2VOdW1EZWNpbWFscykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgXCIgKyBpbnB1dFN0ciArIFwiIHRvIHdlaS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGZyYWN0aW9uLmxlbmd0aCA8IGJhc2VOdW1EZWNpbWFscykge1xuICAgICAgICAgICAgZnJhY3Rpb24gKz0gJzAnO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aG9sZUJOID0gbmV3IGJuX2pzXzEuZGVmYXVsdCh3aG9sZSk7XG4gICAgICAgIHZhciBmcmFjdGlvbkJOID0gbmV3IGJuX2pzXzEuZGVmYXVsdChmcmFjdGlvbik7XG4gICAgICAgIHZhciB3ZWkgPSB3aG9sZUJOLm11bChiYXNlKS5hZGQoZnJhY3Rpb25CTik7XG4gICAgICAgIGlmIChpc05lZ2F0aXZlKSB7XG4gICAgICAgICAgICB3ZWkgPSB3ZWkubmVnKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBibl9qc18xLmRlZmF1bHQod2VpLnRvU3RyaW5nKDEwKSwgMTApO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufTtcbi8qKlxuICogQ29udmVydHMgYW55IHdlaSB2YWx1ZSBpbnRvIGEgT05FIHZhbHVlLlxuICovXG5leHBvcnRzLmZyb21XZWkgPSBmdW5jdGlvbiAod2VpLCB1bml0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gREVGQVVMVF9PUFRJT05TOyB9XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHdlaUJOID0gIWJuX2pzXzEuZGVmYXVsdC5pc0JOKHdlaSkgPyBuZXcgYm5fanNfMS5kZWZhdWx0KHdlaSkgOiB3ZWk7XG4gICAgICAgIGlmICh1bml0ID09PSAnd2VpJykge1xuICAgICAgICAgICAgcmV0dXJuIHdlaUJOLnRvU3RyaW5nKDEwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmFzZVN0ciA9IGV4cG9ydHMudW5pdE1hcC5nZXQodW5pdCk7XG4gICAgICAgIGlmICghYmFzZVN0cikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdW5pdCBvZiB0eXBlIFwiICsgdW5pdCArIFwiIGV4aXN0cy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJhc2UgPSBuZXcgYm5fanNfMS5kZWZhdWx0KGJhc2VTdHIsIDEwKTtcbiAgICAgICAgdmFyIGJhc2VOdW1EZWNpbWFscyA9IGJhc2VTdHIubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGZyYWN0aW9uID0gd2VpQk5cbiAgICAgICAgICAgIC5hYnMoKVxuICAgICAgICAgICAgLm1vZChiYXNlKVxuICAgICAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICAgICAgLy8gcHJlcGVuZCAwcyB0byB0aGUgZnJhY3Rpb24gaGFsZlxuICAgICAgICB3aGlsZSAoZnJhY3Rpb24ubGVuZ3RoIDwgYmFzZU51bURlY2ltYWxzKSB7XG4gICAgICAgICAgICBmcmFjdGlvbiA9IFwiMFwiICsgZnJhY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLnBhZCkge1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbiAgICAgICAgICAgIHZhciBtYXRjaEZyYWN0aW9uID0gZnJhY3Rpb24ubWF0Y2goL14oWzAtOV0qWzEtOV18MCkoMCopLyk7XG4gICAgICAgICAgICBmcmFjdGlvbiA9IG1hdGNoRnJhY3Rpb24gPyBtYXRjaEZyYWN0aW9uWzFdIDogJzAnO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aG9sZSA9IHdlaUJOLmRpdihiYXNlKS50b1N0cmluZygxMCk7XG4gICAgICAgIHJldHVybiBmcmFjdGlvbiA9PT0gJzAnID8gXCJcIiArIHdob2xlIDogd2hvbGUgKyBcIi5cIiArIGZyYWN0aW9uO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufTtcbnZhciBVbml0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFVuaXQoc3RyKSB7XG4gICAgICAgIGlmICghYm5fanNfMS5kZWZhdWx0LmlzQk4oc3RyKSAmJiB0eXBlb2Ygc3RyICE9PSAnbnVtYmVyJyAmJiB2YWxpZGF0b3JzXzEuaXNIZXgoc3RyKSkge1xuICAgICAgICAgICAgdGhpcy51bml0ID0gZXhwb3J0cy5oZXhUb051bWJlcihzdHIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFibl9qc18xLmRlZmF1bHQuaXNCTihzdHIpICYmIHR5cGVvZiBzdHIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXQgPSBzdHIudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHIgPT09ICcweCcpIHtcbiAgICAgICAgICAgIHRoaXMudW5pdCA9IGV4cG9ydHMuaGV4VG9OdW1iZXIoJzB4MCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bml0ID0gc3RyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2VpID0gbmV3IGJuX2pzXzEuZGVmYXVsdCh0aGlzLnVuaXQpO1xuICAgIH1cbiAgICBVbml0LmZyb20gPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5pdChzdHIpO1xuICAgIH07XG4gICAgVW5pdC5XZWkgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5pdChzdHIpLmFzV2VpKCk7XG4gICAgfTtcbiAgICBVbml0Lkt3ZWkgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5pdChzdHIpLmFzS3dlaSgpO1xuICAgIH07XG4gICAgVW5pdC5Nd2VpID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gbmV3IFVuaXQoc3RyKS5hc013ZWkoKTtcbiAgICB9O1xuICAgIFVuaXQuR3dlaSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVbml0KHN0cikuYXNHd2VpKCk7XG4gICAgfTtcbiAgICBVbml0LlN6YWJvID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gbmV3IFVuaXQoc3RyKS5hc1N6YWJvKCk7XG4gICAgfTtcbiAgICBVbml0LkZpbm5leSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVbml0KHN0cikuYXNGaW5uZXkoKTtcbiAgICB9O1xuICAgIFVuaXQuRXRoZXIgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5pdChzdHIpLmFzRXRoZXIoKTtcbiAgICB9O1xuICAgIFVuaXQuT25lID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gbmV3IFVuaXQoc3RyKS5hc09uZSgpO1xuICAgIH07XG4gICAgVW5pdC5LZXRoZXIgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5pdChzdHIpLmFzS2V0aGVyKCk7XG4gICAgfTtcbiAgICBVbml0Lk1ldGhlciA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVbml0KHN0cikuYXNNZXRoZXIoKTtcbiAgICB9O1xuICAgIFVuaXQuR2V0aGVyID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gbmV3IFVuaXQoc3RyKS5hc0dldGhlcigpO1xuICAgIH07XG4gICAgVW5pdC5UZXRoZXIgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5pdChzdHIpLmFzVGV0aGVyKCk7XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS5hc1dlaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWkgPSBuZXcgYm5fanNfMS5kZWZhdWx0KHRoaXMudW5pdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgVW5pdC5wcm90b3R5cGUuYXNLd2VpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLndlaSA9IGV4cG9ydHMudG9XZWkodGhpcy51bml0LCBVbml0cy5Ld2VpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS5hc013ZWkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2VpID0gZXhwb3J0cy50b1dlaSh0aGlzLnVuaXQsIFVuaXRzLk13ZWkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFVuaXQucHJvdG90eXBlLmFzR3dlaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWkgPSBleHBvcnRzLnRvV2VpKHRoaXMudW5pdCwgVW5pdHMuR3dlaSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgVW5pdC5wcm90b3R5cGUuYXNTemFibyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWkgPSBleHBvcnRzLnRvV2VpKHRoaXMudW5pdCwgVW5pdHMuc3phYm8pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFVuaXQucHJvdG90eXBlLmFzRmlubmV5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLndlaSA9IGV4cG9ydHMudG9XZWkodGhpcy51bml0LCBVbml0cy5maW5uZXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFVuaXQucHJvdG90eXBlLmFzRXRoZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2VpID0gZXhwb3J0cy50b1dlaSh0aGlzLnVuaXQsIFVuaXRzLmV0aGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS5hc09uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWkgPSBleHBvcnRzLnRvV2VpKHRoaXMudW5pdCwgVW5pdHMub25lKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS5hc0tldGhlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWkgPSBleHBvcnRzLnRvV2VpKHRoaXMudW5pdCwgVW5pdHMuS2V0aGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS5hc01ldGhlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWkgPSBleHBvcnRzLnRvV2VpKHRoaXMudW5pdCwgVW5pdHMuTWV0aGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS5hc0dldGhlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWkgPSBleHBvcnRzLnRvV2VpKHRoaXMudW5pdCwgVW5pdHMuR2V0aGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS5hc1RldGhlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWkgPSBleHBvcnRzLnRvV2VpKHRoaXMudW5pdCwgVW5pdHMuVGV0aGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS50b1dlaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMud2VpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53ZWk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHRyYW5zZm9ybWluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS50b0t3ZWkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLndlaSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuZnJvbVdlaSh0aGlzLndlaSwgVW5pdHMuS3dlaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHRyYW5zZm9ybWluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS50b0d3ZWkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLndlaSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuZnJvbVdlaSh0aGlzLndlaSwgVW5pdHMuR3dlaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHRyYW5zZm9ybWluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS50b013ZWkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLndlaSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuZnJvbVdlaSh0aGlzLndlaSwgVW5pdHMuTXdlaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHRyYW5zZm9ybWluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS50b1N6YWJvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy53ZWkpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmZyb21XZWkodGhpcy53ZWksIFVuaXRzLnN6YWJvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3IgdHJhbnNmb3JtaW5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFVuaXQucHJvdG90eXBlLnRvRmlubmV5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy53ZWkpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmZyb21XZWkodGhpcy53ZWksIFVuaXRzLmZpbm5leSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHRyYW5zZm9ybWluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS50b0V0aGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy53ZWkpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmZyb21XZWkodGhpcy53ZWksIFVuaXRzLmV0aGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3IgdHJhbnNmb3JtaW5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFVuaXQucHJvdG90eXBlLnRvT25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy53ZWkpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmZyb21XZWkodGhpcy53ZWksIFVuaXRzLm9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHRyYW5zZm9ybWluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS50b0tldGhlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMud2VpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5mcm9tV2VpKHRoaXMud2VpLCBVbml0cy5LZXRoZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB0cmFuc2Zvcm1pbmcnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVW5pdC5wcm90b3R5cGUudG9NZXRoZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLndlaSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuZnJvbVdlaSh0aGlzLndlaSwgVW5pdHMuTWV0aGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3IgdHJhbnNmb3JtaW5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFVuaXQucHJvdG90eXBlLnRvR2V0aGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy53ZWkpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmZyb21XZWkodGhpcy53ZWksIFVuaXRzLkdldGhlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHRyYW5zZm9ybWluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS50b1RldGhlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMud2VpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5mcm9tV2VpKHRoaXMud2VpLCBVbml0cy5UZXRoZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB0cmFuc2Zvcm1pbmcnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVW5pdC5wcm90b3R5cGUudG9XZWlTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLndlaSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2VpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHRyYW5zZm9ybWluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBVbml0LnByb3RvdHlwZS50b0hleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMud2VpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5udW1iZXJUb0hleCh0aGlzLndlaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHRyYW5zZm9ybWluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVW5pdDtcbn0oKSk7XG5leHBvcnRzLlVuaXQgPSBVbml0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNmb3JtZXJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqIEBtb2R1bGUgaGFybW9ueS11dGlsc1xuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFzc2VydE9iamVjdCA9IGV4cG9ydHMuZ2VuZXJhdGVWYWxpZGF0ZU9iamVjdHMgPSBleHBvcnRzLnZhbGlkYXRlQXJncyA9IGV4cG9ydHMudmFsaWRhdG9yQXJyYXkgPSBleHBvcnRzLkFzc2VydFR5cGUgPSB2b2lkIDA7XG52YXIgdmFsaWRhdG9yc18xID0gcmVxdWlyZShcIi4vdmFsaWRhdG9yc1wiKTtcbi8qKiBAaGlkZGVuICovXG52YXIgQXNzZXJ0VHlwZTtcbihmdW5jdGlvbiAoQXNzZXJ0VHlwZSkge1xuICAgIEFzc2VydFR5cGVbXCJyZXF1aXJlZFwiXSA9IFwicmVxdWlyZWRcIjtcbiAgICBBc3NlcnRUeXBlW1wib3B0aW9uYWxcIl0gPSBcIm9wdGlvbmFsXCI7XG59KShBc3NlcnRUeXBlID0gZXhwb3J0cy5Bc3NlcnRUeXBlIHx8IChleHBvcnRzLkFzc2VydFR5cGUgPSB7fSkpO1xuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydHMudmFsaWRhdG9yQXJyYXkgPSB7XG4gICAgaXNOdW1iZXI6IFt2YWxpZGF0b3JzXzEuaXNOdW1iZXJdLFxuICAgIGlzU3RyaW5nOiBbdmFsaWRhdG9yc18xLmlzU3RyaW5nXSxcbiAgICBpc0Jvb2xlYW46IFt2YWxpZGF0b3JzXzEuaXNCb29sZWFuXSxcbiAgICBpc0FycmF5OiBbdmFsaWRhdG9yc18xLmlzQXJyYXldLFxuICAgIGlzSnNvblN0cmluZzogW3ZhbGlkYXRvcnNfMS5pc0pzb25TdHJpbmddLFxuICAgIGlzT2JqZWN0OiBbdmFsaWRhdG9yc18xLmlzT2JqZWN0XSxcbiAgICBpc0Z1bmN0aW9uOiBbdmFsaWRhdG9yc18xLmlzRnVuY3Rpb25dLFxuICAgIGlzSGV4OiBbdmFsaWRhdG9yc18xLmlzSGV4XSxcbiAgICBpc1B1YmxpY0tleTogW3ZhbGlkYXRvcnNfMS5pc1B1YmxpY0tleV0sXG4gICAgaXNQcml2YXRlS2V5OiBbdmFsaWRhdG9yc18xLmlzUHJpdmF0ZUtleV0sXG4gICAgaXNBZGRyZXNzOiBbdmFsaWRhdG9yc18xLmlzQWRkcmVzc10sXG4gICAgaXNIYXNoOiBbdmFsaWRhdG9yc18xLmlzSGFzaF0sXG4gICAgaXNCbG9ja051bWJlcjogW3ZhbGlkYXRvcnNfMS5pc0Jsb2NrTnVtYmVyXSxcbiAgICBpc0JlY2gzMkFkZHJlc3M6IFt2YWxpZGF0b3JzXzEuaXNCZWNoMzJBZGRyZXNzXSxcbiAgICBpc0JlY2gzMlRlc3ROZXRBZGRyZXNzOiBbdmFsaWRhdG9yc18xLmlzQmVjaDMyVGVzdE5ldEFkZHJlc3NdLFxuICAgIGlzVmFsaWRBZGRyZXNzOiBbdmFsaWRhdG9yc18xLmlzVmFsaWRBZGRyZXNzXSxcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZUFyZ3MoYXJncywgcmVxdWlyZWRBcmdzLCBvcHRpb25hbEFyZ3MpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcmVxdWlyZWRBcmdzKSB7XG4gICAgICAgIGlmIChhcmdzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcXVpcmVkQXJnc1trZXldLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlZEFyZ3Nba2V5XVtpXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbGlkYXRvciBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXJlcXVpcmVkQXJnc1trZXldW2ldKGFyZ3Nba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsaWRhdGlvbiBmYWlsZWQgZm9yIFwiICsga2V5ICsgXCIsc2hvdWxkIGJlIHZhbGlkYXRlZCBieSBcIiArIHJlcXVpcmVkQXJnc1trZXldW2ldLnZhbGlkYXRvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiS2V5IG5vdCBmb3VuZDogXCIgKyBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25hbEFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3Nba2V5XSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbmFsQXJnc1trZXldLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25hbEFyZ3Nba2V5XVtpXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbGlkYXRvciBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbmFsQXJnc1trZXldW2ldKGFyZ3Nba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsaWRhdGlvbiBmYWlsZWQgZm9yIFwiICsga2V5ICsgXCIsc2hvdWxkIGJlIHZhbGlkYXRlZCBieSBcIiArIG9wdGlvbmFsQXJnc1trZXldW2ldLnZhbGlkYXRvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy52YWxpZGF0ZUFyZ3MgPSB2YWxpZGF0ZUFyZ3M7XG5mdW5jdGlvbiBnZW5lcmF0ZVZhbGlkYXRlT2JqZWN0cyh2YWxpZGF0b3JPYmplY3QpIHtcbiAgICB2YXIgcmVxdWlyZWRBcmdzID0ge307XG4gICAgdmFyIG9wdGlvbmFsQXJncyA9IHt9O1xuICAgIGZvciAodmFyIGluZGV4IGluIHZhbGlkYXRvck9iamVjdCkge1xuICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIG5ld09iamVjdEtleSA9IGluZGV4O1xuICAgICAgICAgICAgdmFyIG5ld09iamVjdFZhbGlkID0gdmFsaWRhdG9yT2JqZWN0W2luZGV4XVswXTtcbiAgICAgICAgICAgIHZhciBpc1JlcXVpcmVkID0gdmFsaWRhdG9yT2JqZWN0W2luZGV4XVsxXTtcbiAgICAgICAgICAgIGlmIChpc1JlcXVpcmVkID09PSBBc3NlcnRUeXBlLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRBcmdzW25ld09iamVjdEtleV0gPSBleHBvcnRzLnZhbGlkYXRvckFycmF5W25ld09iamVjdFZhbGlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsQXJnc1tuZXdPYmplY3RLZXldID0gZXhwb3J0cy52YWxpZGF0b3JBcnJheVtuZXdPYmplY3RWYWxpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgcmVxdWlyZWRBcmdzOiByZXF1aXJlZEFyZ3MsIG9wdGlvbmFsQXJnczogb3B0aW9uYWxBcmdzIH07XG59XG5leHBvcnRzLmdlbmVyYXRlVmFsaWRhdGVPYmplY3RzID0gZ2VuZXJhdGVWYWxpZGF0ZU9iamVjdHM7XG52YXIgYXNzZXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGlucHV0KSB7IHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgX2EgPSBnZW5lcmF0ZVZhbGlkYXRlT2JqZWN0cyhpbnB1dCksIHJlcXVpcmVkQXJncyA9IF9hLnJlcXVpcmVkQXJncywgb3B0aW9uYWxBcmdzID0gX2Eub3B0aW9uYWxBcmdzO1xuICAgIHZhciBvcmlnaW5hbCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgZnVuY3Rpb24gaW50ZXJjZXB0b3IoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFsaWRhdGVBcmdzKGFyZ3NbMF0sIHJlcXVpcmVkQXJncywgb3B0aW9uYWxBcmdzKTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gaW50ZXJjZXB0b3I7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG59OyB9O1xuZXhwb3J0cy5hc3NlcnRPYmplY3QgPSBhc3NlcnRPYmplY3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIGhhcm1vbnktdXRpbHNcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1ZhbGlkQWRkcmVzcyA9IGV4cG9ydHMuaXNCZWNoMzJUZXN0TmV0QWRkcmVzcyA9IGV4cG9ydHMuaXNCZWNoMzJBZGRyZXNzID0gZXhwb3J0cy5pc0Jsb2NrTnVtYmVyID0gZXhwb3J0cy5EZWZhdWx0QmxvY2tQYXJhbXMgPSBleHBvcnRzLmlzV3MgPSBleHBvcnRzLmlzSHR0cCA9IGV4cG9ydHMuaXNIZXggPSBleHBvcnRzLmlzRnVuY3Rpb24gPSBleHBvcnRzLmlzT2JqZWN0ID0gZXhwb3J0cy5pc0pzb25TdHJpbmcgPSBleHBvcnRzLmlzQXJyYXkgPSBleHBvcnRzLmlzQm9vbGVhbiA9IGV4cG9ydHMuaXNTdHJpbmcgPSBleHBvcnRzLmlzSW50ID0gZXhwb3J0cy5pc051bWJlciA9IGV4cG9ydHMuaXNIYXNoID0gZXhwb3J0cy5pc1B1YmxpY0tleSA9IGV4cG9ydHMuaXNQcml2YXRlS2V5ID0gZXhwb3J0cy5pc0FkZHJlc3MgPSBleHBvcnRzLmlzS2V5U3RyaW5nID0gdm9pZCAwO1xuZXhwb3J0cy5pc0tleVN0cmluZyA9IGZ1bmN0aW9uIChrZXlTdHJpbmcsIGxlbmdoKSB7XG4gICAgcmV0dXJuICEha2V5U3RyaW5nLnJlcGxhY2UoJzB4JywgJycpLm1hdGNoKFwiXlswLTlhLWZBLUZde1wiICsgbGVuZ2ggKyBcIn0kXCIpO1xufTtcbmV4cG9ydHMuaXNLZXlTdHJpbmcudmFsaWRhdG9yID0gJ2lzS2V5U3RyaW5nJztcbmV4cG9ydHMuaXNBZGRyZXNzID0gZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5pc0tleVN0cmluZyhhZGRyZXNzLCA0MCk7XG59O1xuZXhwb3J0cy5pc0FkZHJlc3MudmFsaWRhdG9yID0gJ2lzQWRkcmVzcyc7XG5leHBvcnRzLmlzUHJpdmF0ZUtleSA9IGZ1bmN0aW9uIChwcml2YXRlS2V5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNLZXlTdHJpbmcocHJpdmF0ZUtleSwgNjQpO1xufTtcbmV4cG9ydHMuaXNQcml2YXRlS2V5LnZhbGlkYXRvciA9ICdpc1ByaXZhdGVLZXknO1xuZXhwb3J0cy5pc1B1YmxpY0tleSA9IGZ1bmN0aW9uIChwdWJsaWNLZXkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5pc0tleVN0cmluZyhwdWJsaWNLZXksIDY2KTtcbn07XG5leHBvcnRzLmlzUHVibGljS2V5LnZhbGlkYXRvciA9ICdpc1B1YmxpY0tleSc7XG5leHBvcnRzLmlzSGFzaCA9IGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNLZXlTdHJpbmcoaGFzaCwgNjQpO1xufTtcbmV4cG9ydHMuaXNIYXNoLnZhbGlkYXRvciA9ICdpc0hhc2gnO1xuLyoqXG4gKiBbaXNOdW1iZXIgdmVyaWZ5IHBhcmFtIGlzIGEgTnVtYmVyXVxuICogQHBhcmFtICB7YW55fSAgb2JqIFt2YWx1ZV1cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICBbYm9vbGVhbl1cbiAqL1xuZXhwb3J0cy5pc051bWJlciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSArb2JqO1xufTtcbmV4cG9ydHMuaXNOdW1iZXIudmFsaWRhdG9yID0gJ2lzTnVtYmVyJztcbi8qKlxuICogW2lzTnVtYmVyIHZlcmlmeSBwYXJhbSBpcyBhIE51bWJlcl1cbiAqIEBwYXJhbSAge2FueX0gIG9iaiBbdmFsdWVdXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgW2Jvb2xlYW5dXG4gKi9cbmV4cG9ydHMuaXNJbnQgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNOdW1iZXIob2JqKSAmJiBOdW1iZXIuaXNJbnRlZ2VyKG9iaik7XG59O1xuZXhwb3J0cy5pc0ludC52YWxpZGF0b3IgPSAnaXNJbnQnO1xuLyoqXG4gKiBbaXNTdHJpbmcgdmVyaWZ5IHBhcmFtIGlzIGEgU3RyaW5nXVxuICogQHBhcmFtICB7YW55fSAgb2JqIFt2YWx1ZV1cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICBbYm9vbGVhbl1cbiAqL1xuZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBcIlwiICsgb2JqO1xufTtcbmV4cG9ydHMuaXNTdHJpbmcudmFsaWRhdG9yID0gJ2lzU3RyaW5nJztcbi8qKlxuICogW2lzQm9vbGVhbiB2ZXJpZnkgcGFyYW0gaXMgYSBCb29sZWFuXVxuICogQHBhcmFtICB7YW55fSAgb2JqIFt2YWx1ZV1cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICBbYm9vbGVhbl1cbiAqL1xuZXhwb3J0cy5pc0Jvb2xlYW4gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gISFvYmo7XG59O1xuZXhwb3J0cy5pc0Jvb2xlYW4udmFsaWRhdG9yID0gJ2lzQm9vbGVhbic7XG4vKipcbiAqIFtpc0FycmF5IHZlcmlmeSBwYXJhbSBpbnB1dCBpcyBhbiBBcnJheV1cbiAqIEBwYXJhbSAge2FueX0gIG9iaiBbdmFsdWVdXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgW2Jvb2xlYW5dXG4gKi9cbmV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xufTtcbmV4cG9ydHMuaXNBcnJheS52YWxpZGF0b3IgPSAnaXNBcnJheSc7XG4vKipcbiAqIFtpc0pzb24gdmVyaWZ5IHBhcmFtIGlucHV0IGlzIGEgSnNvbl1cbiAqIEBwYXJhbSAge2FueX0gIG9iaiBbdmFsdWVdXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgW2Jvb2xlYW5dXG4gKi9cbmV4cG9ydHMuaXNKc29uU3RyaW5nID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIUpTT04ucGFyc2Uob2JqKSAmJiBleHBvcnRzLmlzT2JqZWN0KEpTT04ucGFyc2Uob2JqKSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZXhwb3J0cy5pc0pzb25TdHJpbmcudmFsaWRhdG9yID0gJ2lzSnNvblN0cmluZyc7XG4vKipcbiAqIFtpc09iamVjdCB2ZXJpZnkgcGFyYW0gaXMgYW4gT2JqZWN0XVxuICogQHBhcmFtICB7YW55fSAgb2JqIFt2YWx1ZV1cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICBbYm9vbGVhbl1cbiAqL1xuZXhwb3J0cy5pc09iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KG9iaikgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuZXhwb3J0cy5pc09iamVjdC52YWxpZGF0b3IgPSAnaXNPYmplY3QnO1xuLyoqXG4gKiBbaXNGdW5jdGlvbiB2ZXJpZnkgcGFyYW0gaXMgYSBGdW5jdGlvbl1cbiAqIEBwYXJhbSAge2FueX0gIG9iaiBbdmFsdWVdXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuZXhwb3J0cy5pc0Z1bmN0aW9uLnZhbGlkYXRvciA9ICdpc0Z1bmN0aW9uJztcbmV4cG9ydHMuaXNIZXggPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKCFleHBvcnRzLmlzU3RyaW5nKG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG9iaiArIFwiIGlzIG5vdCBzdHJpbmdcIik7XG4gICAgfVxuICAgIHJldHVybiAoKG9iai5zdGFydHNXaXRoKCcweCcpIHx8IG9iai5zdGFydHNXaXRoKCctMHgnKSkgJiZcbiAgICAgICAgZXhwb3J0cy5pc051bWJlcihOdW1iZXIucGFyc2VJbnQoKFwiXCIgKyBvYmopLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnMHgnLCAnJyksIDE2KSkpO1xufTtcbmV4cG9ydHMuaXNIZXgudmFsaWRhdG9yID0gJ2lzSGV4JztcbmV4cG9ydHMuaXNIdHRwID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmICghZXhwb3J0cy5pc1N0cmluZyhvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihvYmogKyBcIiBpcyBub3QgdmFsaWQgdXJsXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9iai5zdGFydHNXaXRoKCdodHRwOi8vJykgfHwgb2JqLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJyk7XG4gICAgfVxufTtcbmV4cG9ydHMuaXNIdHRwLnZhbGlkYXRvciA9ICdpc0h0dHAnO1xuZXhwb3J0cy5pc1dzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmICghZXhwb3J0cy5pc1N0cmluZyhvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihvYmogKyBcIiBpcyBub3QgdmFsaWQgdXJsXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9iai5zdGFydHNXaXRoKCd3czovLycpIHx8IG9iai5zdGFydHNXaXRoKCd3c3M6Ly8nKTtcbiAgICB9XG59O1xuZXhwb3J0cy5pc1dzLnZhbGlkYXRvciA9ICdpc1dzJztcbnZhciBEZWZhdWx0QmxvY2tQYXJhbXM7XG4oZnVuY3Rpb24gKERlZmF1bHRCbG9ja1BhcmFtcykge1xuICAgIERlZmF1bHRCbG9ja1BhcmFtc1tcImVhcmxpZXN0XCJdID0gXCJlYXJsaWVzdFwiO1xuICAgIERlZmF1bHRCbG9ja1BhcmFtc1tcInBlbmRpbmdcIl0gPSBcInBlbmRpbmdcIjtcbiAgICBEZWZhdWx0QmxvY2tQYXJhbXNbXCJsYXRlc3RcIl0gPSBcImxhdGVzdFwiO1xufSkoRGVmYXVsdEJsb2NrUGFyYW1zID0gZXhwb3J0cy5EZWZhdWx0QmxvY2tQYXJhbXMgfHwgKGV4cG9ydHMuRGVmYXVsdEJsb2NrUGFyYW1zID0ge30pKTtcbmV4cG9ydHMuaXNCbG9ja051bWJlciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgYmxvY2tQYXJhbXMgPSBbXG4gICAgICAgIERlZmF1bHRCbG9ja1BhcmFtcy5lYXJsaWVzdCxcbiAgICAgICAgRGVmYXVsdEJsb2NrUGFyYW1zLnBlbmRpbmcsXG4gICAgICAgIERlZmF1bHRCbG9ja1BhcmFtcy5sYXRlc3QsXG4gICAgXTtcbiAgICBpZiAoIWV4cG9ydHMuaXNTdHJpbmcob2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob2JqICsgXCIgaXMgbm90IHZhbGlkIGJsb2NrTnVtYmVyXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZXhwb3J0cy5pc0hleChvYmopIHx8IGJsb2NrUGFyYW1zLnNvbWUoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsID09PSBvYmo7IH0pO1xufTtcbmV4cG9ydHMuaXNCbG9ja051bWJlci52YWxpZGF0b3IgPSAnaXNCbG9ja051bWJlcic7XG5leHBvcnRzLmlzQmVjaDMyQWRkcmVzcyA9IGZ1bmN0aW9uIChyYXcpIHtcbiAgICByZXR1cm4gISFyYXcubWF0Y2goL15vbmUxW3FwenJ5OXg4Z2YydHZkdzBzM2puNTRraGNlNm11YTdsXXszOH0vKTtcbn07XG5leHBvcnRzLmlzQmVjaDMyQWRkcmVzcy52YWxpZGF0b3IgPSAnaXNCZWNoMzJBZGRyZXNzJztcbmV4cG9ydHMuaXNCZWNoMzJUZXN0TmV0QWRkcmVzcyA9IGZ1bmN0aW9uIChyYXcpIHtcbiAgICByZXR1cm4gISFyYXcubWF0Y2goL150b25lMVtxcHpyeTl4OGdmMnR2ZHcwczNqbjU0a2hjZTZtdWE3bF17Mzh9Lyk7XG59O1xuZXhwb3J0cy5pc0JlY2gzMlRlc3ROZXRBZGRyZXNzLnZhbGlkYXRvciA9ICdpc0JlY2gzMlRlc3ROZXRBZGRyZXNzJztcbmV4cG9ydHMuaXNWYWxpZEFkZHJlc3MgPSBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgIGlmICghZXhwb3J0cy5pc1N0cmluZyhhZGRyZXNzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYWRkcmVzcyArIFwiIGlzIG5vdCBzdHJpbmdcIik7XG4gICAgfVxuICAgIGlmIChleHBvcnRzLmlzQWRkcmVzcyhhZGRyZXNzKSB8fCBleHBvcnRzLmlzQmVjaDMyQWRkcmVzcyhhZGRyZXNzKSB8fCBleHBvcnRzLmlzQmVjaDMyVGVzdE5ldEFkZHJlc3MoYWRkcmVzcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcbmV4cG9ydHMuaXNWYWxpZEFkZHJlc3MudmFsaWRhdG9yID0gJ2lzVmFsaWRBZGRyZXNzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbGlkYXRvcnMuanMubWFwIiwiKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFV0aWxzXG4gIGZ1bmN0aW9uIGFzc2VydCAodmFsLCBtc2cpIHtcbiAgICBpZiAoIXZhbCkgdGhyb3cgbmV3IEVycm9yKG1zZyB8fCAnQXNzZXJ0aW9uIGZhaWxlZCcpO1xuICB9XG5cbiAgLy8gQ291bGQgdXNlIGBpbmhlcml0c2AgbW9kdWxlLCBidXQgZG9uJ3Qgd2FudCB0byBtb3ZlIGZyb20gc2luZ2xlIGZpbGVcbiAgLy8gYXJjaGl0ZWN0dXJlIHlldC5cbiAgZnVuY3Rpb24gaW5oZXJpdHMgKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yO1xuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGU7XG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKTtcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3I7XG4gIH1cblxuICAvLyBCTlxuXG4gIGZ1bmN0aW9uIEJOIChudW1iZXIsIGJhc2UsIGVuZGlhbikge1xuICAgIGlmIChCTi5pc0JOKG51bWJlcikpIHtcbiAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxuXG4gICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgdGhpcy53b3JkcyA9IG51bGw7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgLy8gUmVkdWN0aW9uIGNvbnRleHRcbiAgICB0aGlzLnJlZCA9IG51bGw7XG5cbiAgICBpZiAobnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBpZiAoYmFzZSA9PT0gJ2xlJyB8fCBiYXNlID09PSAnYmUnKSB7XG4gICAgICAgIGVuZGlhbiA9IGJhc2U7XG4gICAgICAgIGJhc2UgPSAxMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faW5pdChudW1iZXIgfHwgMCwgYmFzZSB8fCAxMCwgZW5kaWFuIHx8ICdiZScpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEJOO1xuICB9IGVsc2Uge1xuICAgIGV4cG9ydHMuQk4gPSBCTjtcbiAgfVxuXG4gIEJOLkJOID0gQk47XG4gIEJOLndvcmRTaXplID0gMjY7XG5cbiAgdmFyIEJ1ZmZlcjtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5CdWZmZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBCdWZmZXIgPSB3aW5kb3cuQnVmZmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gIH1cblxuICBCTi5pc0JOID0gZnVuY3Rpb24gaXNCTiAobnVtKSB7XG4gICAgaWYgKG51bSBpbnN0YW5jZW9mIEJOKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtICE9PSBudWxsICYmIHR5cGVvZiBudW0gPT09ICdvYmplY3QnICYmXG4gICAgICBudW0uY29uc3RydWN0b3Iud29yZFNpemUgPT09IEJOLndvcmRTaXplICYmIEFycmF5LmlzQXJyYXkobnVtLndvcmRzKTtcbiAgfTtcblxuICBCTi5tYXggPSBmdW5jdGlvbiBtYXggKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGxlZnQuY21wKHJpZ2h0KSA+IDApIHJldHVybiBsZWZ0O1xuICAgIHJldHVybiByaWdodDtcbiAgfTtcblxuICBCTi5taW4gPSBmdW5jdGlvbiBtaW4gKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGxlZnQuY21wKHJpZ2h0KSA8IDApIHJldHVybiBsZWZ0O1xuICAgIHJldHVybiByaWdodDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiBpbml0IChudW1iZXIsIGJhc2UsIGVuZGlhbikge1xuICAgIGlmICh0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXROdW1iZXIobnVtYmVyLCBiYXNlLCBlbmRpYW4pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbnVtYmVyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXRBcnJheShudW1iZXIsIGJhc2UsIGVuZGlhbik7XG4gICAgfVxuXG4gICAgaWYgKGJhc2UgPT09ICdoZXgnKSB7XG4gICAgICBiYXNlID0gMTY7XG4gICAgfVxuICAgIGFzc2VydChiYXNlID09PSAoYmFzZSB8IDApICYmIGJhc2UgPj0gMiAmJiBiYXNlIDw9IDM2KTtcblxuICAgIG51bWJlciA9IG51bWJlci50b1N0cmluZygpLnJlcGxhY2UoL1xccysvZywgJycpO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgaWYgKG51bWJlclswXSA9PT0gJy0nKSB7XG4gICAgICBzdGFydCsrO1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0IDwgbnVtYmVyLmxlbmd0aCkge1xuICAgICAgaWYgKGJhc2UgPT09IDE2KSB7XG4gICAgICAgIHRoaXMuX3BhcnNlSGV4KG51bWJlciwgc3RhcnQsIGVuZGlhbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYXJzZUJhc2UobnVtYmVyLCBiYXNlLCBzdGFydCk7XG4gICAgICAgIGlmIChlbmRpYW4gPT09ICdsZScpIHtcbiAgICAgICAgICB0aGlzLl9pbml0QXJyYXkodGhpcy50b0FycmF5KCksIGJhc2UsIGVuZGlhbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl9pbml0TnVtYmVyID0gZnVuY3Rpb24gX2luaXROdW1iZXIgKG51bWJlciwgYmFzZSwgZW5kaWFuKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAxO1xuICAgICAgbnVtYmVyID0gLW51bWJlcjtcbiAgICB9XG4gICAgaWYgKG51bWJlciA8IDB4NDAwMDAwMCkge1xuICAgICAgdGhpcy53b3JkcyA9IFsgbnVtYmVyICYgMHgzZmZmZmZmIF07XG4gICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCAweDEwMDAwMDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLndvcmRzID0gW1xuICAgICAgICBudW1iZXIgJiAweDNmZmZmZmYsXG4gICAgICAgIChudW1iZXIgLyAweDQwMDAwMDApICYgMHgzZmZmZmZmXG4gICAgICBdO1xuICAgICAgdGhpcy5sZW5ndGggPSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NlcnQobnVtYmVyIDwgMHgyMDAwMDAwMDAwMDAwMCk7IC8vIDIgXiA1MyAodW5zYWZlKVxuICAgICAgdGhpcy53b3JkcyA9IFtcbiAgICAgICAgbnVtYmVyICYgMHgzZmZmZmZmLFxuICAgICAgICAobnVtYmVyIC8gMHg0MDAwMDAwKSAmIDB4M2ZmZmZmZixcbiAgICAgICAgMVxuICAgICAgXTtcbiAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICB9XG5cbiAgICBpZiAoZW5kaWFuICE9PSAnbGUnKSByZXR1cm47XG5cbiAgICAvLyBSZXZlcnNlIHRoZSBieXRlc1xuICAgIHRoaXMuX2luaXRBcnJheSh0aGlzLnRvQXJyYXkoKSwgYmFzZSwgZW5kaWFuKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX2luaXRBcnJheSA9IGZ1bmN0aW9uIF9pbml0QXJyYXkgKG51bWJlciwgYmFzZSwgZW5kaWFuKSB7XG4gICAgLy8gUGVyaGFwcyBhIFVpbnQ4QXJyYXlcbiAgICBhc3NlcnQodHlwZW9mIG51bWJlci5sZW5ndGggPT09ICdudW1iZXInKTtcbiAgICBpZiAobnVtYmVyLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLndvcmRzID0gWyAwIF07XG4gICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguY2VpbChudW1iZXIubGVuZ3RoIC8gMyk7XG4gICAgdGhpcy53b3JkcyA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLndvcmRzW2ldID0gMDtcbiAgICB9XG5cbiAgICB2YXIgaiwgdztcbiAgICB2YXIgb2ZmID0gMDtcbiAgICBpZiAoZW5kaWFuID09PSAnYmUnKSB7XG4gICAgICBmb3IgKGkgPSBudW1iZXIubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaSAtPSAzKSB7XG4gICAgICAgIHcgPSBudW1iZXJbaV0gfCAobnVtYmVyW2kgLSAxXSA8PCA4KSB8IChudW1iZXJbaSAtIDJdIDw8IDE2KTtcbiAgICAgICAgdGhpcy53b3Jkc1tqXSB8PSAodyA8PCBvZmYpICYgMHgzZmZmZmZmO1xuICAgICAgICB0aGlzLndvcmRzW2ogKyAxXSA9ICh3ID4+PiAoMjYgLSBvZmYpKSAmIDB4M2ZmZmZmZjtcbiAgICAgICAgb2ZmICs9IDI0O1xuICAgICAgICBpZiAob2ZmID49IDI2KSB7XG4gICAgICAgICAgb2ZmIC09IDI2O1xuICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZW5kaWFuID09PSAnbGUnKSB7XG4gICAgICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IG51bWJlci5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICB3ID0gbnVtYmVyW2ldIHwgKG51bWJlcltpICsgMV0gPDwgOCkgfCAobnVtYmVyW2kgKyAyXSA8PCAxNik7XG4gICAgICAgIHRoaXMud29yZHNbal0gfD0gKHcgPDwgb2ZmKSAmIDB4M2ZmZmZmZjtcbiAgICAgICAgdGhpcy53b3Jkc1tqICsgMV0gPSAodyA+Pj4gKDI2IC0gb2ZmKSkgJiAweDNmZmZmZmY7XG4gICAgICAgIG9mZiArPSAyNDtcbiAgICAgICAgaWYgKG9mZiA+PSAyNikge1xuICAgICAgICAgIG9mZiAtPSAyNjtcbiAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwYXJzZUhleDRCaXRzIChzdHJpbmcsIGluZGV4KSB7XG4gICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG4gICAgLy8gJ0EnIC0gJ0YnXG4gICAgaWYgKGMgPj0gNjUgJiYgYyA8PSA3MCkge1xuICAgICAgcmV0dXJuIGMgLSA1NTtcbiAgICAvLyAnYScgLSAnZidcbiAgICB9IGVsc2UgaWYgKGMgPj0gOTcgJiYgYyA8PSAxMDIpIHtcbiAgICAgIHJldHVybiBjIC0gODc7XG4gICAgLy8gJzAnIC0gJzknXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoYyAtIDQ4KSAmIDB4ZjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhleEJ5dGUgKHN0cmluZywgbG93ZXJCb3VuZCwgaW5kZXgpIHtcbiAgICB2YXIgciA9IHBhcnNlSGV4NEJpdHMoc3RyaW5nLCBpbmRleCk7XG4gICAgaWYgKGluZGV4IC0gMSA+PSBsb3dlckJvdW5kKSB7XG4gICAgICByIHw9IHBhcnNlSGV4NEJpdHMoc3RyaW5nLCBpbmRleCAtIDEpIDw8IDQ7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG5cbiAgQk4ucHJvdG90eXBlLl9wYXJzZUhleCA9IGZ1bmN0aW9uIF9wYXJzZUhleCAobnVtYmVyLCBzdGFydCwgZW5kaWFuKSB7XG4gICAgLy8gQ3JlYXRlIHBvc3NpYmx5IGJpZ2dlciBhcnJheSB0byBlbnN1cmUgdGhhdCBpdCBmaXRzIHRoZSBudW1iZXJcbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguY2VpbCgobnVtYmVyLmxlbmd0aCAtIHN0YXJ0KSAvIDYpO1xuICAgIHRoaXMud29yZHMgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IDA7XG4gICAgfVxuXG4gICAgLy8gMjQtYml0cyBjaHVua3NcbiAgICB2YXIgb2ZmID0gMDtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICB2YXIgdztcbiAgICBpZiAoZW5kaWFuID09PSAnYmUnKSB7XG4gICAgICBmb3IgKGkgPSBudW1iZXIubGVuZ3RoIC0gMTsgaSA+PSBzdGFydDsgaSAtPSAyKSB7XG4gICAgICAgIHcgPSBwYXJzZUhleEJ5dGUobnVtYmVyLCBzdGFydCwgaSkgPDwgb2ZmO1xuICAgICAgICB0aGlzLndvcmRzW2pdIHw9IHcgJiAweDNmZmZmZmY7XG4gICAgICAgIGlmIChvZmYgPj0gMTgpIHtcbiAgICAgICAgICBvZmYgLT0gMTg7XG4gICAgICAgICAgaiArPSAxO1xuICAgICAgICAgIHRoaXMud29yZHNbal0gfD0gdyA+Pj4gMjY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2ZmICs9IDg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnNlTGVuZ3RoID0gbnVtYmVyLmxlbmd0aCAtIHN0YXJ0O1xuICAgICAgZm9yIChpID0gcGFyc2VMZW5ndGggJSAyID09PSAwID8gc3RhcnQgKyAxIDogc3RhcnQ7IGkgPCBudW1iZXIubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdyA9IHBhcnNlSGV4Qnl0ZShudW1iZXIsIHN0YXJ0LCBpKSA8PCBvZmY7XG4gICAgICAgIHRoaXMud29yZHNbal0gfD0gdyAmIDB4M2ZmZmZmZjtcbiAgICAgICAgaWYgKG9mZiA+PSAxOCkge1xuICAgICAgICAgIG9mZiAtPSAxODtcbiAgICAgICAgICBqICs9IDE7XG4gICAgICAgICAgdGhpcy53b3Jkc1tqXSB8PSB3ID4+PiAyNjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmYgKz0gODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwYXJzZUJhc2UgKHN0ciwgc3RhcnQsIGVuZCwgbXVsKSB7XG4gICAgdmFyIHIgPSAwO1xuICAgIHZhciBsZW4gPSBNYXRoLm1pbihzdHIubGVuZ3RoLCBlbmQpO1xuICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpIC0gNDg7XG5cbiAgICAgIHIgKj0gbXVsO1xuXG4gICAgICAvLyAnYSdcbiAgICAgIGlmIChjID49IDQ5KSB7XG4gICAgICAgIHIgKz0gYyAtIDQ5ICsgMHhhO1xuXG4gICAgICAvLyAnQSdcbiAgICAgIH0gZWxzZSBpZiAoYyA+PSAxNykge1xuICAgICAgICByICs9IGMgLSAxNyArIDB4YTtcblxuICAgICAgLy8gJzAnIC0gJzknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByICs9IGM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG5cbiAgQk4ucHJvdG90eXBlLl9wYXJzZUJhc2UgPSBmdW5jdGlvbiBfcGFyc2VCYXNlIChudW1iZXIsIGJhc2UsIHN0YXJ0KSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBhcyB6ZXJvXG4gICAgdGhpcy53b3JkcyA9IFsgMCBdO1xuICAgIHRoaXMubGVuZ3RoID0gMTtcblxuICAgIC8vIEZpbmQgbGVuZ3RoIG9mIGxpbWIgaW4gYmFzZVxuICAgIGZvciAodmFyIGxpbWJMZW4gPSAwLCBsaW1iUG93ID0gMTsgbGltYlBvdyA8PSAweDNmZmZmZmY7IGxpbWJQb3cgKj0gYmFzZSkge1xuICAgICAgbGltYkxlbisrO1xuICAgIH1cbiAgICBsaW1iTGVuLS07XG4gICAgbGltYlBvdyA9IChsaW1iUG93IC8gYmFzZSkgfCAwO1xuXG4gICAgdmFyIHRvdGFsID0gbnVtYmVyLmxlbmd0aCAtIHN0YXJ0O1xuICAgIHZhciBtb2QgPSB0b3RhbCAlIGxpbWJMZW47XG4gICAgdmFyIGVuZCA9IE1hdGgubWluKHRvdGFsLCB0b3RhbCAtIG1vZCkgKyBzdGFydDtcblxuICAgIHZhciB3b3JkID0gMDtcbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gbGltYkxlbikge1xuICAgICAgd29yZCA9IHBhcnNlQmFzZShudW1iZXIsIGksIGkgKyBsaW1iTGVuLCBiYXNlKTtcblxuICAgICAgdGhpcy5pbXVsbihsaW1iUG93KTtcbiAgICAgIGlmICh0aGlzLndvcmRzWzBdICsgd29yZCA8IDB4NDAwMDAwMCkge1xuICAgICAgICB0aGlzLndvcmRzWzBdICs9IHdvcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pYWRkbih3b3JkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9kICE9PSAwKSB7XG4gICAgICB2YXIgcG93ID0gMTtcbiAgICAgIHdvcmQgPSBwYXJzZUJhc2UobnVtYmVyLCBpLCBudW1iZXIubGVuZ3RoLCBiYXNlKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG1vZDsgaSsrKSB7XG4gICAgICAgIHBvdyAqPSBiYXNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmltdWxuKHBvdyk7XG4gICAgICBpZiAodGhpcy53b3Jkc1swXSArIHdvcmQgPCAweDQwMDAwMDApIHtcbiAgICAgICAgdGhpcy53b3Jkc1swXSArPSB3b3JkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faWFkZG4od29yZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdHJpcCgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAoZGVzdCkge1xuICAgIGRlc3Qud29yZHMgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzdC53b3Jkc1tpXSA9IHRoaXMud29yZHNbaV07XG4gICAgfVxuICAgIGRlc3QubGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgZGVzdC5uZWdhdGl2ZSA9IHRoaXMubmVnYXRpdmU7XG4gICAgZGVzdC5yZWQgPSB0aGlzLnJlZDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSAoKSB7XG4gICAgdmFyIHIgPSBuZXcgQk4obnVsbCk7XG4gICAgdGhpcy5jb3B5KHIpO1xuICAgIHJldHVybiByO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5fZXhwYW5kID0gZnVuY3Rpb24gX2V4cGFuZCAoc2l6ZSkge1xuICAgIHdoaWxlICh0aGlzLmxlbmd0aCA8IHNpemUpIHtcbiAgICAgIHRoaXMud29yZHNbdGhpcy5sZW5ndGgrK10gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBSZW1vdmUgbGVhZGluZyBgMGAgZnJvbSBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLnN0cmlwID0gZnVuY3Rpb24gc3RyaXAgKCkge1xuICAgIHdoaWxlICh0aGlzLmxlbmd0aCA+IDEgJiYgdGhpcy53b3Jkc1t0aGlzLmxlbmd0aCAtIDFdID09PSAwKSB7XG4gICAgICB0aGlzLmxlbmd0aC0tO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbm9ybVNpZ24oKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX25vcm1TaWduID0gZnVuY3Rpb24gX25vcm1TaWduICgpIHtcbiAgICAvLyAtMCA9IDBcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEgJiYgdGhpcy53b3Jkc1swXSA9PT0gMCkge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gICAgcmV0dXJuICh0aGlzLnJlZCA/ICc8Qk4tUjogJyA6ICc8Qk46ICcpICsgdGhpcy50b1N0cmluZygxNikgKyAnPic7XG4gIH07XG5cbiAgLypcblxuICB2YXIgemVyb3MgPSBbXTtcbiAgdmFyIGdyb3VwU2l6ZXMgPSBbXTtcbiAgdmFyIGdyb3VwQmFzZXMgPSBbXTtcblxuICB2YXIgcyA9ICcnO1xuICB2YXIgaSA9IC0xO1xuICB3aGlsZSAoKytpIDwgQk4ud29yZFNpemUpIHtcbiAgICB6ZXJvc1tpXSA9IHM7XG4gICAgcyArPSAnMCc7XG4gIH1cbiAgZ3JvdXBTaXplc1swXSA9IDA7XG4gIGdyb3VwU2l6ZXNbMV0gPSAwO1xuICBncm91cEJhc2VzWzBdID0gMDtcbiAgZ3JvdXBCYXNlc1sxXSA9IDA7XG4gIHZhciBiYXNlID0gMiAtIDE7XG4gIHdoaWxlICgrK2Jhc2UgPCAzNiArIDEpIHtcbiAgICB2YXIgZ3JvdXBTaXplID0gMDtcbiAgICB2YXIgZ3JvdXBCYXNlID0gMTtcbiAgICB3aGlsZSAoZ3JvdXBCYXNlIDwgKDEgPDwgQk4ud29yZFNpemUpIC8gYmFzZSkge1xuICAgICAgZ3JvdXBCYXNlICo9IGJhc2U7XG4gICAgICBncm91cFNpemUgKz0gMTtcbiAgICB9XG4gICAgZ3JvdXBTaXplc1tiYXNlXSA9IGdyb3VwU2l6ZTtcbiAgICBncm91cEJhc2VzW2Jhc2VdID0gZ3JvdXBCYXNlO1xuICB9XG5cbiAgKi9cblxuICB2YXIgemVyb3MgPSBbXG4gICAgJycsXG4gICAgJzAnLFxuICAgICcwMCcsXG4gICAgJzAwMCcsXG4gICAgJzAwMDAnLFxuICAgICcwMDAwMCcsXG4gICAgJzAwMDAwMCcsXG4gICAgJzAwMDAwMDAnLFxuICAgICcwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnLFxuICAgICcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gICAgJzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnXG4gIF07XG5cbiAgdmFyIGdyb3VwU2l6ZXMgPSBbXG4gICAgMCwgMCxcbiAgICAyNSwgMTYsIDEyLCAxMSwgMTAsIDksIDgsXG4gICAgOCwgNywgNywgNywgNywgNiwgNixcbiAgICA2LCA2LCA2LCA2LCA2LCA1LCA1LFxuICAgIDUsIDUsIDUsIDUsIDUsIDUsIDUsXG4gICAgNSwgNSwgNSwgNSwgNSwgNSwgNVxuICBdO1xuXG4gIHZhciBncm91cEJhc2VzID0gW1xuICAgIDAsIDAsXG4gICAgMzM1NTQ0MzIsIDQzMDQ2NzIxLCAxNjc3NzIxNiwgNDg4MjgxMjUsIDYwNDY2MTc2LCA0MDM1MzYwNywgMTY3NzcyMTYsXG4gICAgNDMwNDY3MjEsIDEwMDAwMDAwLCAxOTQ4NzE3MSwgMzU4MzE4MDgsIDYyNzQ4NTE3LCA3NTI5NTM2LCAxMTM5MDYyNSxcbiAgICAxNjc3NzIxNiwgMjQxMzc1NjksIDM0MDEyMjI0LCA0NzA0NTg4MSwgNjQwMDAwMDAsIDQwODQxMDEsIDUxNTM2MzIsXG4gICAgNjQzNjM0MywgNzk2MjYyNCwgOTc2NTYyNSwgMTE4ODEzNzYsIDE0MzQ4OTA3LCAxNzIxMDM2OCwgMjA1MTExNDksXG4gICAgMjQzMDAwMDAsIDI4NjI5MTUxLCAzMzU1NDQzMiwgMzkxMzUzOTMsIDQ1NDM1NDI0LCA1MjUyMTg3NSwgNjA0NjYxNzZcbiAgXTtcblxuICBCTi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoYmFzZSwgcGFkZGluZykge1xuICAgIGJhc2UgPSBiYXNlIHx8IDEwO1xuICAgIHBhZGRpbmcgPSBwYWRkaW5nIHwgMCB8fCAxO1xuXG4gICAgdmFyIG91dDtcbiAgICBpZiAoYmFzZSA9PT0gMTYgfHwgYmFzZSA9PT0gJ2hleCcpIHtcbiAgICAgIG91dCA9ICcnO1xuICAgICAgdmFyIG9mZiA9IDA7XG4gICAgICB2YXIgY2FycnkgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB3ID0gdGhpcy53b3Jkc1tpXTtcbiAgICAgICAgdmFyIHdvcmQgPSAoKCh3IDw8IG9mZikgfCBjYXJyeSkgJiAweGZmZmZmZikudG9TdHJpbmcoMTYpO1xuICAgICAgICBjYXJyeSA9ICh3ID4+PiAoMjQgLSBvZmYpKSAmIDB4ZmZmZmZmO1xuICAgICAgICBpZiAoY2FycnkgIT09IDAgfHwgaSAhPT0gdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgb3V0ID0gemVyb3NbNiAtIHdvcmQubGVuZ3RoXSArIHdvcmQgKyBvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0ID0gd29yZCArIG91dDtcbiAgICAgICAgfVxuICAgICAgICBvZmYgKz0gMjtcbiAgICAgICAgaWYgKG9mZiA+PSAyNikge1xuICAgICAgICAgIG9mZiAtPSAyNjtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgICBvdXQgPSBjYXJyeS50b1N0cmluZygxNikgKyBvdXQ7XG4gICAgICB9XG4gICAgICB3aGlsZSAob3V0Lmxlbmd0aCAlIHBhZGRpbmcgIT09IDApIHtcbiAgICAgICAgb3V0ID0gJzAnICsgb3V0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDApIHtcbiAgICAgICAgb3V0ID0gJy0nICsgb3V0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBpZiAoYmFzZSA9PT0gKGJhc2UgfCAwKSAmJiBiYXNlID49IDIgJiYgYmFzZSA8PSAzNikge1xuICAgICAgLy8gdmFyIGdyb3VwU2l6ZSA9IE1hdGguZmxvb3IoQk4ud29yZFNpemUgKiBNYXRoLkxOMiAvIE1hdGgubG9nKGJhc2UpKTtcbiAgICAgIHZhciBncm91cFNpemUgPSBncm91cFNpemVzW2Jhc2VdO1xuICAgICAgLy8gdmFyIGdyb3VwQmFzZSA9IE1hdGgucG93KGJhc2UsIGdyb3VwU2l6ZSk7XG4gICAgICB2YXIgZ3JvdXBCYXNlID0gZ3JvdXBCYXNlc1tiYXNlXTtcbiAgICAgIG91dCA9ICcnO1xuICAgICAgdmFyIGMgPSB0aGlzLmNsb25lKCk7XG4gICAgICBjLm5lZ2F0aXZlID0gMDtcbiAgICAgIHdoaWxlICghYy5pc1plcm8oKSkge1xuICAgICAgICB2YXIgciA9IGMubW9kbihncm91cEJhc2UpLnRvU3RyaW5nKGJhc2UpO1xuICAgICAgICBjID0gYy5pZGl2bihncm91cEJhc2UpO1xuXG4gICAgICAgIGlmICghYy5pc1plcm8oKSkge1xuICAgICAgICAgIG91dCA9IHplcm9zW2dyb3VwU2l6ZSAtIHIubGVuZ3RoXSArIHIgKyBvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0ID0gciArIG91dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNaZXJvKCkpIHtcbiAgICAgICAgb3V0ID0gJzAnICsgb3V0O1xuICAgICAgfVxuICAgICAgd2hpbGUgKG91dC5sZW5ndGggJSBwYWRkaW5nICE9PSAwKSB7XG4gICAgICAgIG91dCA9ICcwJyArIG91dDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICAgIG91dCA9ICctJyArIG91dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgYXNzZXJ0KGZhbHNlLCAnQmFzZSBzaG91bGQgYmUgYmV0d2VlbiAyIGFuZCAzNicpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS50b051bWJlciA9IGZ1bmN0aW9uIHRvTnVtYmVyICgpIHtcbiAgICB2YXIgcmV0ID0gdGhpcy53b3Jkc1swXTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHJldCArPSB0aGlzLndvcmRzWzFdICogMHg0MDAwMDAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPT09IDMgJiYgdGhpcy53b3Jkc1syXSA9PT0gMHgwMSkge1xuICAgICAgLy8gTk9URTogYXQgdGhpcyBzdGFnZSBpdCBpcyBrbm93biB0aGF0IHRoZSB0b3AgYml0IGlzIHNldFxuICAgICAgcmV0ICs9IDB4MTAwMDAwMDAwMDAwMDAgKyAodGhpcy53b3Jkc1sxXSAqIDB4NDAwMDAwMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA+IDIpIHtcbiAgICAgIGFzc2VydChmYWxzZSwgJ051bWJlciBjYW4gb25seSBzYWZlbHkgc3RvcmUgdXAgdG8gNTMgYml0cycpO1xuICAgIH1cbiAgICByZXR1cm4gKHRoaXMubmVnYXRpdmUgIT09IDApID8gLXJldCA6IHJldDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygxNik7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnRvQnVmZmVyID0gZnVuY3Rpb24gdG9CdWZmZXIgKGVuZGlhbiwgbGVuZ3RoKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnKTtcbiAgICByZXR1cm4gdGhpcy50b0FycmF5TGlrZShCdWZmZXIsIGVuZGlhbiwgbGVuZ3RoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkgKGVuZGlhbiwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9BcnJheUxpa2UoQXJyYXksIGVuZGlhbiwgbGVuZ3RoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudG9BcnJheUxpa2UgPSBmdW5jdGlvbiB0b0FycmF5TGlrZSAoQXJyYXlUeXBlLCBlbmRpYW4sIGxlbmd0aCkge1xuICAgIHZhciBieXRlTGVuZ3RoID0gdGhpcy5ieXRlTGVuZ3RoKCk7XG4gICAgdmFyIHJlcUxlbmd0aCA9IGxlbmd0aCB8fCBNYXRoLm1heCgxLCBieXRlTGVuZ3RoKTtcbiAgICBhc3NlcnQoYnl0ZUxlbmd0aCA8PSByZXFMZW5ndGgsICdieXRlIGFycmF5IGxvbmdlciB0aGFuIGRlc2lyZWQgbGVuZ3RoJyk7XG4gICAgYXNzZXJ0KHJlcUxlbmd0aCA+IDAsICdSZXF1ZXN0ZWQgYXJyYXkgbGVuZ3RoIDw9IDAnKTtcblxuICAgIHRoaXMuc3RyaXAoKTtcbiAgICB2YXIgbGl0dGxlRW5kaWFuID0gZW5kaWFuID09PSAnbGUnO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXlUeXBlKHJlcUxlbmd0aCk7XG5cbiAgICB2YXIgYiwgaTtcbiAgICB2YXIgcSA9IHRoaXMuY2xvbmUoKTtcbiAgICBpZiAoIWxpdHRsZUVuZGlhbikge1xuICAgICAgLy8gQXNzdW1lIGJpZy1lbmRpYW5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCByZXFMZW5ndGggLSBieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzW2ldID0gMDtcbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgIXEuaXNaZXJvKCk7IGkrKykge1xuICAgICAgICBiID0gcS5hbmRsbigweGZmKTtcbiAgICAgICAgcS5pdXNocm4oOCk7XG5cbiAgICAgICAgcmVzW3JlcUxlbmd0aCAtIGkgLSAxXSA9IGI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7ICFxLmlzWmVybygpOyBpKyspIHtcbiAgICAgICAgYiA9IHEuYW5kbG4oMHhmZik7XG4gICAgICAgIHEuaXVzaHJuKDgpO1xuXG4gICAgICAgIHJlc1tpXSA9IGI7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBpIDwgcmVxTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzW2ldID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIGlmIChNYXRoLmNsejMyKSB7XG4gICAgQk4ucHJvdG90eXBlLl9jb3VudEJpdHMgPSBmdW5jdGlvbiBfY291bnRCaXRzICh3KSB7XG4gICAgICByZXR1cm4gMzIgLSBNYXRoLmNsejMyKHcpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgQk4ucHJvdG90eXBlLl9jb3VudEJpdHMgPSBmdW5jdGlvbiBfY291bnRCaXRzICh3KSB7XG4gICAgICB2YXIgdCA9IHc7XG4gICAgICB2YXIgciA9IDA7XG4gICAgICBpZiAodCA+PSAweDEwMDApIHtcbiAgICAgICAgciArPSAxMztcbiAgICAgICAgdCA+Pj49IDEzO1xuICAgICAgfVxuICAgICAgaWYgKHQgPj0gMHg0MCkge1xuICAgICAgICByICs9IDc7XG4gICAgICAgIHQgPj4+PSA3O1xuICAgICAgfVxuICAgICAgaWYgKHQgPj0gMHg4KSB7XG4gICAgICAgIHIgKz0gNDtcbiAgICAgICAgdCA+Pj49IDQ7XG4gICAgICB9XG4gICAgICBpZiAodCA+PSAweDAyKSB7XG4gICAgICAgIHIgKz0gMjtcbiAgICAgICAgdCA+Pj49IDI7XG4gICAgICB9XG4gICAgICByZXR1cm4gciArIHQ7XG4gICAgfTtcbiAgfVxuXG4gIEJOLnByb3RvdHlwZS5femVyb0JpdHMgPSBmdW5jdGlvbiBfemVyb0JpdHMgKHcpIHtcbiAgICAvLyBTaG9ydC1jdXRcbiAgICBpZiAodyA9PT0gMCkgcmV0dXJuIDI2O1xuXG4gICAgdmFyIHQgPSB3O1xuICAgIHZhciByID0gMDtcbiAgICBpZiAoKHQgJiAweDFmZmYpID09PSAwKSB7XG4gICAgICByICs9IDEzO1xuICAgICAgdCA+Pj49IDEzO1xuICAgIH1cbiAgICBpZiAoKHQgJiAweDdmKSA9PT0gMCkge1xuICAgICAgciArPSA3O1xuICAgICAgdCA+Pj49IDc7XG4gICAgfVxuICAgIGlmICgodCAmIDB4ZikgPT09IDApIHtcbiAgICAgIHIgKz0gNDtcbiAgICAgIHQgPj4+PSA0O1xuICAgIH1cbiAgICBpZiAoKHQgJiAweDMpID09PSAwKSB7XG4gICAgICByICs9IDI7XG4gICAgICB0ID4+Pj0gMjtcbiAgICB9XG4gICAgaWYgKCh0ICYgMHgxKSA9PT0gMCkge1xuICAgICAgcisrO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfTtcblxuICAvLyBSZXR1cm4gbnVtYmVyIG9mIHVzZWQgYml0cyBpbiBhIEJOXG4gIEJOLnByb3RvdHlwZS5iaXRMZW5ndGggPSBmdW5jdGlvbiBiaXRMZW5ndGggKCkge1xuICAgIHZhciB3ID0gdGhpcy53b3Jkc1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgIHZhciBoaSA9IHRoaXMuX2NvdW50Qml0cyh3KTtcbiAgICByZXR1cm4gKHRoaXMubGVuZ3RoIC0gMSkgKiAyNiArIGhpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRvQml0QXJyYXkgKG51bSkge1xuICAgIHZhciB3ID0gbmV3IEFycmF5KG51bS5iaXRMZW5ndGgoKSk7XG5cbiAgICBmb3IgKHZhciBiaXQgPSAwOyBiaXQgPCB3Lmxlbmd0aDsgYml0KyspIHtcbiAgICAgIHZhciBvZmYgPSAoYml0IC8gMjYpIHwgMDtcbiAgICAgIHZhciB3Yml0ID0gYml0ICUgMjY7XG5cbiAgICAgIHdbYml0XSA9IChudW0ud29yZHNbb2ZmXSAmICgxIDw8IHdiaXQpKSA+Pj4gd2JpdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdztcbiAgfVxuXG4gIC8vIE51bWJlciBvZiB0cmFpbGluZyB6ZXJvIGJpdHNcbiAgQk4ucHJvdG90eXBlLnplcm9CaXRzID0gZnVuY3Rpb24gemVyb0JpdHMgKCkge1xuICAgIGlmICh0aGlzLmlzWmVybygpKSByZXR1cm4gMDtcblxuICAgIHZhciByID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBiID0gdGhpcy5femVyb0JpdHModGhpcy53b3Jkc1tpXSk7XG4gICAgICByICs9IGI7XG4gICAgICBpZiAoYiAhPT0gMjYpIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIGJ5dGVMZW5ndGggKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5iaXRMZW5ndGgoKSAvIDgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS50b1R3b3MgPSBmdW5jdGlvbiB0b1R3b3MgKHdpZHRoKSB7XG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmFicygpLmlub3RuKHdpZHRoKS5pYWRkbigxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZnJvbVR3b3MgPSBmdW5jdGlvbiBmcm9tVHdvcyAod2lkdGgpIHtcbiAgICBpZiAodGhpcy50ZXN0bih3aWR0aCAtIDEpKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub3RuKHdpZHRoKS5pYWRkbigxKS5pbmVnKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNsb25lKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlzTmVnID0gZnVuY3Rpb24gaXNOZWcgKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0aXZlICE9PSAwO1xuICB9O1xuXG4gIC8vIFJldHVybiBuZWdhdGl2ZSBjbG9uZSBvZiBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLm5lZyA9IGZ1bmN0aW9uIG5lZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pbmVnKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmluZWcgPSBmdW5jdGlvbiBpbmVnICgpIHtcbiAgICBpZiAoIXRoaXMuaXNaZXJvKCkpIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgXj0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBPciBgbnVtYCB3aXRoIGB0aGlzYCBpbi1wbGFjZVxuICBCTi5wcm90b3R5cGUuaXVvciA9IGZ1bmN0aW9uIGl1b3IgKG51bSkge1xuICAgIHdoaWxlICh0aGlzLmxlbmd0aCA8IG51bS5sZW5ndGgpIHtcbiAgICAgIHRoaXMud29yZHNbdGhpcy5sZW5ndGgrK10gPSAwO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLndvcmRzW2ldID0gdGhpcy53b3Jkc1tpXSB8IG51bS53b3Jkc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdHJpcCgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5pb3IgPSBmdW5jdGlvbiBpb3IgKG51bSkge1xuICAgIGFzc2VydCgodGhpcy5uZWdhdGl2ZSB8IG51bS5uZWdhdGl2ZSkgPT09IDApO1xuICAgIHJldHVybiB0aGlzLml1b3IobnVtKTtcbiAgfTtcblxuICAvLyBPciBgbnVtYCB3aXRoIGB0aGlzYFxuICBCTi5wcm90b3R5cGUub3IgPSBmdW5jdGlvbiBvciAobnVtKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbnVtLmxlbmd0aCkgcmV0dXJuIHRoaXMuY2xvbmUoKS5pb3IobnVtKTtcbiAgICByZXR1cm4gbnVtLmNsb25lKCkuaW9yKHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS51b3IgPSBmdW5jdGlvbiB1b3IgKG51bSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiB0aGlzLmNsb25lKCkuaXVvcihudW0pO1xuICAgIHJldHVybiBudW0uY2xvbmUoKS5pdW9yKHRoaXMpO1xuICB9O1xuXG4gIC8vIEFuZCBgbnVtYCB3aXRoIGB0aGlzYCBpbi1wbGFjZVxuICBCTi5wcm90b3R5cGUuaXVhbmQgPSBmdW5jdGlvbiBpdWFuZCAobnVtKSB7XG4gICAgLy8gYiA9IG1pbi1sZW5ndGgobnVtLCB0aGlzKVxuICAgIHZhciBiO1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHtcbiAgICAgIGIgPSBudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIGIgPSB0aGlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IHRoaXMud29yZHNbaV0gJiBudW0ud29yZHNbaV07XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBiLmxlbmd0aDtcblxuICAgIHJldHVybiB0aGlzLnN0cmlwKCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmlhbmQgPSBmdW5jdGlvbiBpYW5kIChudW0pIHtcbiAgICBhc3NlcnQoKHRoaXMubmVnYXRpdmUgfCBudW0ubmVnYXRpdmUpID09PSAwKTtcbiAgICByZXR1cm4gdGhpcy5pdWFuZChudW0pO1xuICB9O1xuXG4gIC8vIEFuZCBgbnVtYCB3aXRoIGB0aGlzYFxuICBCTi5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24gYW5kIChudW0pIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSByZXR1cm4gdGhpcy5jbG9uZSgpLmlhbmQobnVtKTtcbiAgICByZXR1cm4gbnVtLmNsb25lKCkuaWFuZCh0aGlzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUudWFuZCA9IGZ1bmN0aW9uIHVhbmQgKG51bSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiB0aGlzLmNsb25lKCkuaXVhbmQobnVtKTtcbiAgICByZXR1cm4gbnVtLmNsb25lKCkuaXVhbmQodGhpcyk7XG4gIH07XG5cbiAgLy8gWG9yIGBudW1gIHdpdGggYHRoaXNgIGluLXBsYWNlXG4gIEJOLnByb3RvdHlwZS5pdXhvciA9IGZ1bmN0aW9uIGl1eG9yIChudW0pIHtcbiAgICAvLyBhLmxlbmd0aCA+IGIubGVuZ3RoXG4gICAgdmFyIGE7XG4gICAgdmFyIGI7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbnVtLmxlbmd0aCkge1xuICAgICAgYSA9IHRoaXM7XG4gICAgICBiID0gbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBhID0gbnVtO1xuICAgICAgYiA9IHRoaXM7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLndvcmRzW2ldID0gYS53b3Jkc1tpXSBeIGIud29yZHNbaV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMgIT09IGEpIHtcbiAgICAgIGZvciAoOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLndvcmRzW2ldID0gYS53b3Jkc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IGEubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaXhvciA9IGZ1bmN0aW9uIGl4b3IgKG51bSkge1xuICAgIGFzc2VydCgodGhpcy5uZWdhdGl2ZSB8IG51bS5uZWdhdGl2ZSkgPT09IDApO1xuICAgIHJldHVybiB0aGlzLml1eG9yKG51bSk7XG4gIH07XG5cbiAgLy8gWG9yIGBudW1gIHdpdGggYHRoaXNgXG4gIEJOLnByb3RvdHlwZS54b3IgPSBmdW5jdGlvbiB4b3IgKG51bSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG51bS5sZW5ndGgpIHJldHVybiB0aGlzLmNsb25lKCkuaXhvcihudW0pO1xuICAgIHJldHVybiBudW0uY2xvbmUoKS5peG9yKHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS51eG9yID0gZnVuY3Rpb24gdXhvciAobnVtKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbnVtLmxlbmd0aCkgcmV0dXJuIHRoaXMuY2xvbmUoKS5pdXhvcihudW0pO1xuICAgIHJldHVybiBudW0uY2xvbmUoKS5pdXhvcih0aGlzKTtcbiAgfTtcblxuICAvLyBOb3QgYGB0aGlzYGAgd2l0aCBgYHdpZHRoYGAgYml0d2lkdGhcbiAgQk4ucHJvdG90eXBlLmlub3RuID0gZnVuY3Rpb24gaW5vdG4gKHdpZHRoKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicgJiYgd2lkdGggPj0gMCk7XG5cbiAgICB2YXIgYnl0ZXNOZWVkZWQgPSBNYXRoLmNlaWwod2lkdGggLyAyNikgfCAwO1xuICAgIHZhciBiaXRzTGVmdCA9IHdpZHRoICUgMjY7XG5cbiAgICAvLyBFeHRlbmQgdGhlIGJ1ZmZlciB3aXRoIGxlYWRpbmcgemVyb2VzXG4gICAgdGhpcy5fZXhwYW5kKGJ5dGVzTmVlZGVkKTtcblxuICAgIGlmIChiaXRzTGVmdCA+IDApIHtcbiAgICAgIGJ5dGVzTmVlZGVkLS07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGNvbXBsZXRlIHdvcmRzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlc05lZWRlZDsgaSsrKSB7XG4gICAgICB0aGlzLndvcmRzW2ldID0gfnRoaXMud29yZHNbaV0gJiAweDNmZmZmZmY7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHRoZSByZXNpZHVlXG4gICAgaWYgKGJpdHNMZWZ0ID4gMCkge1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IH50aGlzLndvcmRzW2ldICYgKDB4M2ZmZmZmZiA+PiAoMjYgLSBiaXRzTGVmdCkpO1xuICAgIH1cblxuICAgIC8vIEFuZCByZW1vdmUgbGVhZGluZyB6ZXJvZXNcbiAgICByZXR1cm4gdGhpcy5zdHJpcCgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5ub3RuID0gZnVuY3Rpb24gbm90biAod2lkdGgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmlub3RuKHdpZHRoKTtcbiAgfTtcblxuICAvLyBTZXQgYGJpdGAgb2YgYHRoaXNgXG4gIEJOLnByb3RvdHlwZS5zZXRuID0gZnVuY3Rpb24gc2V0biAoYml0LCB2YWwpIHtcbiAgICBhc3NlcnQodHlwZW9mIGJpdCA9PT0gJ251bWJlcicgJiYgYml0ID49IDApO1xuXG4gICAgdmFyIG9mZiA9IChiaXQgLyAyNikgfCAwO1xuICAgIHZhciB3Yml0ID0gYml0ICUgMjY7XG5cbiAgICB0aGlzLl9leHBhbmQob2ZmICsgMSk7XG5cbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLndvcmRzW29mZl0gPSB0aGlzLndvcmRzW29mZl0gfCAoMSA8PCB3Yml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53b3Jkc1tvZmZdID0gdGhpcy53b3Jkc1tvZmZdICYgfigxIDw8IHdiaXQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0cmlwKCk7XG4gIH07XG5cbiAgLy8gQWRkIGBudW1gIHRvIGB0aGlzYCBpbi1wbGFjZVxuICBCTi5wcm90b3R5cGUuaWFkZCA9IGZ1bmN0aW9uIGlhZGQgKG51bSkge1xuICAgIHZhciByO1xuXG4gICAgLy8gbmVnYXRpdmUgKyBwb3NpdGl2ZVxuICAgIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwICYmIG51bS5uZWdhdGl2ZSA9PT0gMCkge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgICByID0gdGhpcy5pc3ViKG51bSk7XG4gICAgICB0aGlzLm5lZ2F0aXZlIF49IDE7XG4gICAgICByZXR1cm4gdGhpcy5fbm9ybVNpZ24oKTtcblxuICAgIC8vIHBvc2l0aXZlICsgbmVnYXRpdmVcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRpdmUgPT09IDAgJiYgbnVtLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICBudW0ubmVnYXRpdmUgPSAwO1xuICAgICAgciA9IHRoaXMuaXN1YihudW0pO1xuICAgICAgbnVtLm5lZ2F0aXZlID0gMTtcbiAgICAgIHJldHVybiByLl9ub3JtU2lnbigpO1xuICAgIH1cblxuICAgIC8vIGEubGVuZ3RoID4gYi5sZW5ndGhcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBudW0ubGVuZ3RoKSB7XG4gICAgICBhID0gdGhpcztcbiAgICAgIGIgPSBudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSBudW07XG4gICAgICBiID0gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgY2FycnkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuICAgICAgciA9IChhLndvcmRzW2ldIHwgMCkgKyAoYi53b3Jkc1tpXSB8IDApICsgY2Fycnk7XG4gICAgICB0aGlzLndvcmRzW2ldID0gciAmIDB4M2ZmZmZmZjtcbiAgICAgIGNhcnJ5ID0gciA+Pj4gMjY7XG4gICAgfVxuICAgIGZvciAoOyBjYXJyeSAhPT0gMCAmJiBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgciA9IChhLndvcmRzW2ldIHwgMCkgKyBjYXJyeTtcbiAgICAgIHRoaXMud29yZHNbaV0gPSByICYgMHgzZmZmZmZmO1xuICAgICAgY2FycnkgPSByID4+PiAyNjtcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IGEubGVuZ3RoO1xuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgdGhpcy53b3Jkc1t0aGlzLmxlbmd0aF0gPSBjYXJyeTtcbiAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgLy8gQ29weSB0aGUgcmVzdCBvZiB0aGUgd29yZHNcbiAgICB9IGVsc2UgaWYgKGEgIT09IHRoaXMpIHtcbiAgICAgIGZvciAoOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLndvcmRzW2ldID0gYS53b3Jkc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBBZGQgYG51bWAgdG8gYHRoaXNgXG4gIEJOLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKG51bSkge1xuICAgIHZhciByZXM7XG4gICAgaWYgKG51bS5uZWdhdGl2ZSAhPT0gMCAmJiB0aGlzLm5lZ2F0aXZlID09PSAwKSB7XG4gICAgICBudW0ubmVnYXRpdmUgPSAwO1xuICAgICAgcmVzID0gdGhpcy5zdWIobnVtKTtcbiAgICAgIG51bS5uZWdhdGl2ZSBePSAxO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGVsc2UgaWYgKG51bS5uZWdhdGl2ZSA9PT0gMCAmJiB0aGlzLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMDtcbiAgICAgIHJlcyA9IG51bS5zdWIodGhpcyk7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbnVtLmxlbmd0aCkgcmV0dXJuIHRoaXMuY2xvbmUoKS5pYWRkKG51bSk7XG5cbiAgICByZXR1cm4gbnVtLmNsb25lKCkuaWFkZCh0aGlzKTtcbiAgfTtcblxuICAvLyBTdWJ0cmFjdCBgbnVtYCBmcm9tIGB0aGlzYCBpbi1wbGFjZVxuICBCTi5wcm90b3R5cGUuaXN1YiA9IGZ1bmN0aW9uIGlzdWIgKG51bSkge1xuICAgIC8vIHRoaXMgLSAoLW51bSkgPSB0aGlzICsgbnVtXG4gICAgaWYgKG51bS5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgbnVtLm5lZ2F0aXZlID0gMDtcbiAgICAgIHZhciByID0gdGhpcy5pYWRkKG51bSk7XG4gICAgICBudW0ubmVnYXRpdmUgPSAxO1xuICAgICAgcmV0dXJuIHIuX25vcm1TaWduKCk7XG5cbiAgICAvLyAtdGhpcyAtIG51bSA9IC0odGhpcyArIG51bSlcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuICAgICAgdGhpcy5pYWRkKG51bSk7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMTtcbiAgICAgIHJldHVybiB0aGlzLl9ub3JtU2lnbigpO1xuICAgIH1cblxuICAgIC8vIEF0IHRoaXMgcG9pbnQgYm90aCBudW1iZXJzIGFyZSBwb3NpdGl2ZVxuICAgIHZhciBjbXAgPSB0aGlzLmNtcChudW0pO1xuXG4gICAgLy8gT3B0aW1pemF0aW9uIC0gemVyb2lmeVxuICAgIGlmIChjbXAgPT09IDApIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAwO1xuICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgICAgdGhpcy53b3Jkc1swXSA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBhID4gYlxuICAgIHZhciBhLCBiO1xuICAgIGlmIChjbXAgPiAwKSB7XG4gICAgICBhID0gdGhpcztcbiAgICAgIGIgPSBudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSBudW07XG4gICAgICBiID0gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgY2FycnkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuICAgICAgciA9IChhLndvcmRzW2ldIHwgMCkgLSAoYi53b3Jkc1tpXSB8IDApICsgY2Fycnk7XG4gICAgICBjYXJyeSA9IHIgPj4gMjY7XG4gICAgICB0aGlzLndvcmRzW2ldID0gciAmIDB4M2ZmZmZmZjtcbiAgICB9XG4gICAgZm9yICg7IGNhcnJ5ICE9PSAwICYmIGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICByID0gKGEud29yZHNbaV0gfCAwKSArIGNhcnJ5O1xuICAgICAgY2FycnkgPSByID4+IDI2O1xuICAgICAgdGhpcy53b3Jkc1tpXSA9IHIgJiAweDNmZmZmZmY7XG4gICAgfVxuXG4gICAgLy8gQ29weSByZXN0IG9mIHRoZSB3b3Jkc1xuICAgIGlmIChjYXJyeSA9PT0gMCAmJiBpIDwgYS5sZW5ndGggJiYgYSAhPT0gdGhpcykge1xuICAgICAgZm9yICg7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMud29yZHNbaV0gPSBhLndvcmRzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gTWF0aC5tYXgodGhpcy5sZW5ndGgsIGkpO1xuXG4gICAgaWYgKGEgIT09IHRoaXMpIHtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0cmlwKCk7XG4gIH07XG5cbiAgLy8gU3VidHJhY3QgYG51bWAgZnJvbSBgdGhpc2BcbiAgQk4ucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uIHN1YiAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pc3ViKG51bSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc21hbGxNdWxUbyAoc2VsZiwgbnVtLCBvdXQpIHtcbiAgICBvdXQubmVnYXRpdmUgPSBudW0ubmVnYXRpdmUgXiBzZWxmLm5lZ2F0aXZlO1xuICAgIHZhciBsZW4gPSAoc2VsZi5sZW5ndGggKyBudW0ubGVuZ3RoKSB8IDA7XG4gICAgb3V0Lmxlbmd0aCA9IGxlbjtcbiAgICBsZW4gPSAobGVuIC0gMSkgfCAwO1xuXG4gICAgLy8gUGVlbCBvbmUgaXRlcmF0aW9uIChjb21waWxlciBjYW4ndCBkbyBpdCwgYmVjYXVzZSBvZiBjb2RlIGNvbXBsZXhpdHkpXG4gICAgdmFyIGEgPSBzZWxmLndvcmRzWzBdIHwgMDtcbiAgICB2YXIgYiA9IG51bS53b3Jkc1swXSB8IDA7XG4gICAgdmFyIHIgPSBhICogYjtcblxuICAgIHZhciBsbyA9IHIgJiAweDNmZmZmZmY7XG4gICAgdmFyIGNhcnJ5ID0gKHIgLyAweDQwMDAwMDApIHwgMDtcbiAgICBvdXQud29yZHNbMF0gPSBsbztcblxuICAgIGZvciAodmFyIGsgPSAxOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgIC8vIFN1bSBhbGwgd29yZHMgd2l0aCB0aGUgc2FtZSBgaSArIGogPSBrYCBhbmQgYWNjdW11bGF0ZSBgbmNhcnJ5YCxcbiAgICAgIC8vIG5vdGUgdGhhdCBuY2FycnkgY291bGQgYmUgPj0gMHgzZmZmZmZmXG4gICAgICB2YXIgbmNhcnJ5ID0gY2FycnkgPj4+IDI2O1xuICAgICAgdmFyIHJ3b3JkID0gY2FycnkgJiAweDNmZmZmZmY7XG4gICAgICB2YXIgbWF4SiA9IE1hdGgubWluKGssIG51bS5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGogPSBNYXRoLm1heCgwLCBrIC0gc2VsZi5sZW5ndGggKyAxKTsgaiA8PSBtYXhKOyBqKyspIHtcbiAgICAgICAgdmFyIGkgPSAoayAtIGopIHwgMDtcbiAgICAgICAgYSA9IHNlbGYud29yZHNbaV0gfCAwO1xuICAgICAgICBiID0gbnVtLndvcmRzW2pdIHwgMDtcbiAgICAgICAgciA9IGEgKiBiICsgcndvcmQ7XG4gICAgICAgIG5jYXJyeSArPSAociAvIDB4NDAwMDAwMCkgfCAwO1xuICAgICAgICByd29yZCA9IHIgJiAweDNmZmZmZmY7XG4gICAgICB9XG4gICAgICBvdXQud29yZHNba10gPSByd29yZCB8IDA7XG4gICAgICBjYXJyeSA9IG5jYXJyeSB8IDA7XG4gICAgfVxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgb3V0LndvcmRzW2tdID0gY2FycnkgfCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQubGVuZ3RoLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dC5zdHJpcCgpO1xuICB9XG5cbiAgLy8gVE9ETyhpbmR1dG55KTogaXQgbWF5IGJlIHJlYXNvbmFibGUgdG8gb21pdCBpdCBmb3IgdXNlcnMgd2hvIGRvbid0IG5lZWRcbiAgLy8gdG8gd29yayB3aXRoIDI1Ni1iaXQgbnVtYmVycywgb3RoZXJ3aXNlIGl0IGdpdmVzIDIwJSBpbXByb3ZlbWVudCBmb3IgMjU2LWJpdFxuICAvLyBtdWx0aXBsaWNhdGlvbiAobGlrZSBlbGxpcHRpYyBzZWNwMjU2azEpLlxuICB2YXIgY29tYjEwTXVsVG8gPSBmdW5jdGlvbiBjb21iMTBNdWxUbyAoc2VsZiwgbnVtLCBvdXQpIHtcbiAgICB2YXIgYSA9IHNlbGYud29yZHM7XG4gICAgdmFyIGIgPSBudW0ud29yZHM7XG4gICAgdmFyIG8gPSBvdXQud29yZHM7XG4gICAgdmFyIGMgPSAwO1xuICAgIHZhciBsbztcbiAgICB2YXIgbWlkO1xuICAgIHZhciBoaTtcbiAgICB2YXIgYTAgPSBhWzBdIHwgMDtcbiAgICB2YXIgYWwwID0gYTAgJiAweDFmZmY7XG4gICAgdmFyIGFoMCA9IGEwID4+PiAxMztcbiAgICB2YXIgYTEgPSBhWzFdIHwgMDtcbiAgICB2YXIgYWwxID0gYTEgJiAweDFmZmY7XG4gICAgdmFyIGFoMSA9IGExID4+PiAxMztcbiAgICB2YXIgYTIgPSBhWzJdIHwgMDtcbiAgICB2YXIgYWwyID0gYTIgJiAweDFmZmY7XG4gICAgdmFyIGFoMiA9IGEyID4+PiAxMztcbiAgICB2YXIgYTMgPSBhWzNdIHwgMDtcbiAgICB2YXIgYWwzID0gYTMgJiAweDFmZmY7XG4gICAgdmFyIGFoMyA9IGEzID4+PiAxMztcbiAgICB2YXIgYTQgPSBhWzRdIHwgMDtcbiAgICB2YXIgYWw0ID0gYTQgJiAweDFmZmY7XG4gICAgdmFyIGFoNCA9IGE0ID4+PiAxMztcbiAgICB2YXIgYTUgPSBhWzVdIHwgMDtcbiAgICB2YXIgYWw1ID0gYTUgJiAweDFmZmY7XG4gICAgdmFyIGFoNSA9IGE1ID4+PiAxMztcbiAgICB2YXIgYTYgPSBhWzZdIHwgMDtcbiAgICB2YXIgYWw2ID0gYTYgJiAweDFmZmY7XG4gICAgdmFyIGFoNiA9IGE2ID4+PiAxMztcbiAgICB2YXIgYTcgPSBhWzddIHwgMDtcbiAgICB2YXIgYWw3ID0gYTcgJiAweDFmZmY7XG4gICAgdmFyIGFoNyA9IGE3ID4+PiAxMztcbiAgICB2YXIgYTggPSBhWzhdIHwgMDtcbiAgICB2YXIgYWw4ID0gYTggJiAweDFmZmY7XG4gICAgdmFyIGFoOCA9IGE4ID4+PiAxMztcbiAgICB2YXIgYTkgPSBhWzldIHwgMDtcbiAgICB2YXIgYWw5ID0gYTkgJiAweDFmZmY7XG4gICAgdmFyIGFoOSA9IGE5ID4+PiAxMztcbiAgICB2YXIgYjAgPSBiWzBdIHwgMDtcbiAgICB2YXIgYmwwID0gYjAgJiAweDFmZmY7XG4gICAgdmFyIGJoMCA9IGIwID4+PiAxMztcbiAgICB2YXIgYjEgPSBiWzFdIHwgMDtcbiAgICB2YXIgYmwxID0gYjEgJiAweDFmZmY7XG4gICAgdmFyIGJoMSA9IGIxID4+PiAxMztcbiAgICB2YXIgYjIgPSBiWzJdIHwgMDtcbiAgICB2YXIgYmwyID0gYjIgJiAweDFmZmY7XG4gICAgdmFyIGJoMiA9IGIyID4+PiAxMztcbiAgICB2YXIgYjMgPSBiWzNdIHwgMDtcbiAgICB2YXIgYmwzID0gYjMgJiAweDFmZmY7XG4gICAgdmFyIGJoMyA9IGIzID4+PiAxMztcbiAgICB2YXIgYjQgPSBiWzRdIHwgMDtcbiAgICB2YXIgYmw0ID0gYjQgJiAweDFmZmY7XG4gICAgdmFyIGJoNCA9IGI0ID4+PiAxMztcbiAgICB2YXIgYjUgPSBiWzVdIHwgMDtcbiAgICB2YXIgYmw1ID0gYjUgJiAweDFmZmY7XG4gICAgdmFyIGJoNSA9IGI1ID4+PiAxMztcbiAgICB2YXIgYjYgPSBiWzZdIHwgMDtcbiAgICB2YXIgYmw2ID0gYjYgJiAweDFmZmY7XG4gICAgdmFyIGJoNiA9IGI2ID4+PiAxMztcbiAgICB2YXIgYjcgPSBiWzddIHwgMDtcbiAgICB2YXIgYmw3ID0gYjcgJiAweDFmZmY7XG4gICAgdmFyIGJoNyA9IGI3ID4+PiAxMztcbiAgICB2YXIgYjggPSBiWzhdIHwgMDtcbiAgICB2YXIgYmw4ID0gYjggJiAweDFmZmY7XG4gICAgdmFyIGJoOCA9IGI4ID4+PiAxMztcbiAgICB2YXIgYjkgPSBiWzldIHwgMDtcbiAgICB2YXIgYmw5ID0gYjkgJiAweDFmZmY7XG4gICAgdmFyIGJoOSA9IGI5ID4+PiAxMztcblxuICAgIG91dC5uZWdhdGl2ZSA9IHNlbGYubmVnYXRpdmUgXiBudW0ubmVnYXRpdmU7XG4gICAgb3V0Lmxlbmd0aCA9IDE5O1xuICAgIC8qIGsgPSAwICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWwwLCBibDApO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDAsIGJoMCk7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDAsIGJsMCkpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDAsIGJoMCk7XG4gICAgdmFyIHcwID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3MCA+Pj4gMjYpKSB8IDA7XG4gICAgdzAgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWwxLCBibDApO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDEsIGJoMCk7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDEsIGJsMCkpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDEsIGJoMCk7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmwxKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmgxKSkgfCAwO1xuICAgIHZhciB3MSA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzEgPj4+IDI2KSkgfCAwO1xuICAgIHcxICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gMiAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsMiwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWwyLCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgyLCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWgyLCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMSwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwxLCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDEsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDEsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDAsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMCwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgwLCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgwLCBiaDIpKSB8IDA7XG4gICAgdmFyIHcyID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3MiA+Pj4gMjYpKSB8IDA7XG4gICAgdzIgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAzICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWwzLCBibDApO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDMsIGJoMCk7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDMsIGJsMCkpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDMsIGJoMCk7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwyLCBibDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDIsIGJoMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMiwgYmwxKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMiwgYmgxKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMSwgYmwyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwxLCBiaDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDEsIGJsMikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDEsIGJoMikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDAsIGJsMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMCwgYmgzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgwLCBibDMpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgwLCBiaDMpKSB8IDA7XG4gICAgdmFyIHczID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3MyA+Pj4gMjYpKSB8IDA7XG4gICAgdzMgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSA0ICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWw0LCBibDApO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDQsIGJoMCk7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDQsIGJsMCkpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDQsIGJoMCk7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmwxKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmgxKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmwyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsMikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoMikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmgzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDMpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDMpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw0KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg0KSkgfCAwO1xuICAgIHZhciB3NCA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzQgPj4+IDI2KSkgfCAwO1xuICAgIHc0ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gNSAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsNSwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw1LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg1LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg1LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNCwgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw0LCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDQsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDQsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDMsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMywgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgzLCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgzLCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwyLCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDIsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMiwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMiwgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMSwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwxLCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDEsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDEsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDAsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMCwgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgwLCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgwLCBiaDUpKSB8IDA7XG4gICAgdmFyIHc1ID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3NSA+Pj4gMjYpKSB8IDA7XG4gICAgdzUgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSA2ICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWw2LCBibDApO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDYsIGJoMCk7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDYsIGJsMCkpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDYsIGJoMCk7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw1LCBibDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDUsIGJoMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNSwgYmwxKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNSwgYmgxKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNCwgYmwyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw0LCBiaDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDQsIGJsMikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDQsIGJoMikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDMsIGJsMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMywgYmgzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgzLCBibDMpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgzLCBiaDMpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwyLCBibDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDIsIGJoNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMiwgYmw0KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMiwgYmg0KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMSwgYmw1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwxLCBiaDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDEsIGJsNSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDEsIGJoNSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDAsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMCwgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgwLCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgwLCBiaDYpKSB8IDA7XG4gICAgdmFyIHc2ID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3NiA+Pj4gMjYpKSB8IDA7XG4gICAgdzYgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSA3ICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWw3LCBibDApO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDcsIGJoMCk7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDcsIGJsMCkpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDcsIGJoMCk7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmwxKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmgxKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmwyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsMikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoMikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmgzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDMpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDMpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmw0KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmg0KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmw1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsNSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoNSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDYpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwwLCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDAsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMCwgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMCwgYmg3KSkgfCAwO1xuICAgIHZhciB3NyA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzcgPj4+IDI2KSkgfCAwO1xuICAgIHc3ICY9IDB4M2ZmZmZmZjtcbiAgICAvKiBrID0gOCAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOCwgYmwwKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw4LCBiaDApO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg4LCBibDApKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg4LCBiaDApO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNywgYmwxKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw3LCBiaDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDcsIGJsMSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDcsIGJoMSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDYsIGJsMikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNiwgYmgyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg2LCBibDIpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg2LCBiaDIpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw1LCBibDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDUsIGJoMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNSwgYmwzKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNSwgYmgzKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNCwgYmw0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw0LCBiaDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDQsIGJsNCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDQsIGJoNCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDMsIGJsNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMywgYmg1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgzLCBibDUpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgzLCBiaDUpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwyLCBibDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDIsIGJoNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMiwgYmw2KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMiwgYmg2KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMSwgYmw3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwxLCBiaDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDEsIGJsNykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDEsIGJoNykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDAsIGJsOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMCwgYmg4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgwLCBibDgpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgwLCBiaDgpKSB8IDA7XG4gICAgdmFyIHc4ID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3OCA+Pj4gMjYpKSB8IDA7XG4gICAgdzggJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSA5ICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWw5LCBibDApO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDksIGJoMCk7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDksIGJsMCkpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDksIGJoMCk7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw4LCBibDEpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDgsIGJoMSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOCwgYmwxKSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoOCwgYmgxKSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNywgYmwyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw3LCBiaDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDcsIGJsMikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDcsIGJoMikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDYsIGJsMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNiwgYmgzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg2LCBibDMpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg2LCBiaDMpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw1LCBibDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDUsIGJoNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNSwgYmw0KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNSwgYmg0KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNCwgYmw1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw0LCBiaDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDQsIGJsNSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDQsIGJoNSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDMsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMywgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgzLCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgzLCBiaDYpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwyLCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDIsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMiwgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMiwgYmg3KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMSwgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwxLCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDEsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDEsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDAsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMCwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgwLCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgwLCBiaDkpKSB8IDA7XG4gICAgdmFyIHc5ID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3OSA+Pj4gMjYpKSB8IDA7XG4gICAgdzkgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxMCAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmwxKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDEpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDEpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDEpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmwyKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDIpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsMikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoMikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsMykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmgzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDMpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDMpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmw0KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmg0KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmw1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsNSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoNSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDYpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmg3KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDEsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMSwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgxLCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgxLCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxMCA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzEwID4+PiAyNikpIHwgMDtcbiAgICB3MTAgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxMSAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmwyKTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDIpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDIpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDIpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmwzKSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDMpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsMykpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoMykpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmg0KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDQpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDQpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoNSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmw1KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmg1KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmw2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsNikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoNikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmg3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDcpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDcpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWwzLCBibDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDMsIGJoOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoMywgYmw4KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoMywgYmg4KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsMiwgYmw5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWwyLCBiaDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDIsIGJsOSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDIsIGJoOSkpIHwgMDtcbiAgICB2YXIgdzExID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3MTEgPj4+IDI2KSkgfCAwO1xuICAgIHcxMSAmPSAweDNmZmZmZmY7XG4gICAgLyogayA9IDEyICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWw5LCBibDMpO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDksIGJoMyk7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDksIGJsMykpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDksIGJoMyk7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw4LCBibDQpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDgsIGJoNCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOCwgYmw0KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoOCwgYmg0KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNywgYmw1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw3LCBiaDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDcsIGJsNSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDcsIGJoNSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDYsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNiwgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg2LCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg2LCBiaDYpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw1LCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDUsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNSwgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNSwgYmg3KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNCwgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw0LCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDQsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDQsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDMsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsMywgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWgzLCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWgzLCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxMiA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzEyID4+PiAyNikpIHwgMDtcbiAgICB3MTIgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxMyAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmw0KTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDQpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDQpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDQpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmw1KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDUpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsNSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoNSkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsNikpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmg2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDYpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDYpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmg3KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDQsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNCwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg0LCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg0LCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxMyA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzEzID4+PiAyNikpIHwgMDtcbiAgICB3MTMgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxNCAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmw1KTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDUpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDUpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDUpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmw2KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDYpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsNikpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoNikpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmg3KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDcpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDcpKSB8IDA7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw2LCBibDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDYsIGJoOCkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoNiwgYmw4KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoNiwgYmg4KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNSwgYmw5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw1LCBiaDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDUsIGJsOSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDUsIGJoOSkpIHwgMDtcbiAgICB2YXIgdzE0ID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3MTQgPj4+IDI2KSkgfCAwO1xuICAgIHcxNCAmPSAweDNmZmZmZmY7XG4gICAgLyogayA9IDE1ICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWw5LCBibDYpO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDksIGJoNik7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDksIGJsNikpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDksIGJoNik7XG4gICAgbG8gPSAobG8gKyBNYXRoLmltdWwoYWw4LCBibDcpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhbDgsIGJoNykpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFoOCwgYmw3KSkgfCAwO1xuICAgIGhpID0gKGhpICsgTWF0aC5pbXVsKGFoOCwgYmg3KSkgfCAwO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsNywgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw3LCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDcsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDcsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDYsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNiwgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg2LCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg2LCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxNSA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzE1ID4+PiAyNikpIHwgMDtcbiAgICB3MTUgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxNiAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmw3KTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDcpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDcpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDcpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmw4KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDgpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsOCkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoOCkpIHwgMDtcbiAgICBsbyA9IChsbyArIE1hdGguaW11bChhbDcsIGJsOSkpIHwgMDtcbiAgICBtaWQgPSAobWlkICsgTWF0aC5pbXVsKGFsNywgYmg5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg3LCBibDkpKSB8IDA7XG4gICAgaGkgPSAoaGkgKyBNYXRoLmltdWwoYWg3LCBiaDkpKSB8IDA7XG4gICAgdmFyIHcxNiA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzE2ID4+PiAyNikpIHwgMDtcbiAgICB3MTYgJj0gMHgzZmZmZmZmO1xuICAgIC8qIGsgPSAxNyAqL1xuICAgIGxvID0gTWF0aC5pbXVsKGFsOSwgYmw4KTtcbiAgICBtaWQgPSBNYXRoLmltdWwoYWw5LCBiaDgpO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWg5LCBibDgpKSB8IDA7XG4gICAgaGkgPSBNYXRoLmltdWwoYWg5LCBiaDgpO1xuICAgIGxvID0gKGxvICsgTWF0aC5pbXVsKGFsOCwgYmw5KSkgfCAwO1xuICAgIG1pZCA9IChtaWQgKyBNYXRoLmltdWwoYWw4LCBiaDkpKSB8IDA7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDgsIGJsOSkpIHwgMDtcbiAgICBoaSA9IChoaSArIE1hdGguaW11bChhaDgsIGJoOSkpIHwgMDtcbiAgICB2YXIgdzE3ID0gKCgoYyArIGxvKSB8IDApICsgKChtaWQgJiAweDFmZmYpIDw8IDEzKSkgfCAwO1xuICAgIGMgPSAoKChoaSArIChtaWQgPj4+IDEzKSkgfCAwKSArICh3MTcgPj4+IDI2KSkgfCAwO1xuICAgIHcxNyAmPSAweDNmZmZmZmY7XG4gICAgLyogayA9IDE4ICovXG4gICAgbG8gPSBNYXRoLmltdWwoYWw5LCBibDkpO1xuICAgIG1pZCA9IE1hdGguaW11bChhbDksIGJoOSk7XG4gICAgbWlkID0gKG1pZCArIE1hdGguaW11bChhaDksIGJsOSkpIHwgMDtcbiAgICBoaSA9IE1hdGguaW11bChhaDksIGJoOSk7XG4gICAgdmFyIHcxOCA9ICgoKGMgKyBsbykgfCAwKSArICgobWlkICYgMHgxZmZmKSA8PCAxMykpIHwgMDtcbiAgICBjID0gKCgoaGkgKyAobWlkID4+PiAxMykpIHwgMCkgKyAodzE4ID4+PiAyNikpIHwgMDtcbiAgICB3MTggJj0gMHgzZmZmZmZmO1xuICAgIG9bMF0gPSB3MDtcbiAgICBvWzFdID0gdzE7XG4gICAgb1syXSA9IHcyO1xuICAgIG9bM10gPSB3MztcbiAgICBvWzRdID0gdzQ7XG4gICAgb1s1XSA9IHc1O1xuICAgIG9bNl0gPSB3NjtcbiAgICBvWzddID0gdzc7XG4gICAgb1s4XSA9IHc4O1xuICAgIG9bOV0gPSB3OTtcbiAgICBvWzEwXSA9IHcxMDtcbiAgICBvWzExXSA9IHcxMTtcbiAgICBvWzEyXSA9IHcxMjtcbiAgICBvWzEzXSA9IHcxMztcbiAgICBvWzE0XSA9IHcxNDtcbiAgICBvWzE1XSA9IHcxNTtcbiAgICBvWzE2XSA9IHcxNjtcbiAgICBvWzE3XSA9IHcxNztcbiAgICBvWzE4XSA9IHcxODtcbiAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgb1sxOV0gPSBjO1xuICAgICAgb3V0Lmxlbmd0aCsrO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9O1xuXG4gIC8vIFBvbHlmaWxsIGNvbWJcbiAgaWYgKCFNYXRoLmltdWwpIHtcbiAgICBjb21iMTBNdWxUbyA9IHNtYWxsTXVsVG87XG4gIH1cblxuICBmdW5jdGlvbiBiaWdNdWxUbyAoc2VsZiwgbnVtLCBvdXQpIHtcbiAgICBvdXQubmVnYXRpdmUgPSBudW0ubmVnYXRpdmUgXiBzZWxmLm5lZ2F0aXZlO1xuICAgIG91dC5sZW5ndGggPSBzZWxmLmxlbmd0aCArIG51bS5sZW5ndGg7XG5cbiAgICB2YXIgY2FycnkgPSAwO1xuICAgIHZhciBobmNhcnJ5ID0gMDtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IG91dC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgIC8vIFN1bSBhbGwgd29yZHMgd2l0aCB0aGUgc2FtZSBgaSArIGogPSBrYCBhbmQgYWNjdW11bGF0ZSBgbmNhcnJ5YCxcbiAgICAgIC8vIG5vdGUgdGhhdCBuY2FycnkgY291bGQgYmUgPj0gMHgzZmZmZmZmXG4gICAgICB2YXIgbmNhcnJ5ID0gaG5jYXJyeTtcbiAgICAgIGhuY2FycnkgPSAwO1xuICAgICAgdmFyIHJ3b3JkID0gY2FycnkgJiAweDNmZmZmZmY7XG4gICAgICB2YXIgbWF4SiA9IE1hdGgubWluKGssIG51bS5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGogPSBNYXRoLm1heCgwLCBrIC0gc2VsZi5sZW5ndGggKyAxKTsgaiA8PSBtYXhKOyBqKyspIHtcbiAgICAgICAgdmFyIGkgPSBrIC0gajtcbiAgICAgICAgdmFyIGEgPSBzZWxmLndvcmRzW2ldIHwgMDtcbiAgICAgICAgdmFyIGIgPSBudW0ud29yZHNbal0gfCAwO1xuICAgICAgICB2YXIgciA9IGEgKiBiO1xuXG4gICAgICAgIHZhciBsbyA9IHIgJiAweDNmZmZmZmY7XG4gICAgICAgIG5jYXJyeSA9IChuY2FycnkgKyAoKHIgLyAweDQwMDAwMDApIHwgMCkpIHwgMDtcbiAgICAgICAgbG8gPSAobG8gKyByd29yZCkgfCAwO1xuICAgICAgICByd29yZCA9IGxvICYgMHgzZmZmZmZmO1xuICAgICAgICBuY2FycnkgPSAobmNhcnJ5ICsgKGxvID4+PiAyNikpIHwgMDtcblxuICAgICAgICBobmNhcnJ5ICs9IG5jYXJyeSA+Pj4gMjY7XG4gICAgICAgIG5jYXJyeSAmPSAweDNmZmZmZmY7XG4gICAgICB9XG4gICAgICBvdXQud29yZHNba10gPSByd29yZDtcbiAgICAgIGNhcnJ5ID0gbmNhcnJ5O1xuICAgICAgbmNhcnJ5ID0gaG5jYXJyeTtcbiAgICB9XG4gICAgaWYgKGNhcnJ5ICE9PSAwKSB7XG4gICAgICBvdXQud29yZHNba10gPSBjYXJyeTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0Lmxlbmd0aC0tO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQuc3RyaXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGp1bWJvTXVsVG8gKHNlbGYsIG51bSwgb3V0KSB7XG4gICAgdmFyIGZmdG0gPSBuZXcgRkZUTSgpO1xuICAgIHJldHVybiBmZnRtLm11bHAoc2VsZiwgbnVtLCBvdXQpO1xuICB9XG5cbiAgQk4ucHJvdG90eXBlLm11bFRvID0gZnVuY3Rpb24gbXVsVG8gKG51bSwgb3V0KSB7XG4gICAgdmFyIHJlcztcbiAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGggKyBudW0ubGVuZ3RoO1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMTAgJiYgbnVtLmxlbmd0aCA9PT0gMTApIHtcbiAgICAgIHJlcyA9IGNvbWIxME11bFRvKHRoaXMsIG51bSwgb3V0KTtcbiAgICB9IGVsc2UgaWYgKGxlbiA8IDYzKSB7XG4gICAgICByZXMgPSBzbWFsbE11bFRvKHRoaXMsIG51bSwgb3V0KTtcbiAgICB9IGVsc2UgaWYgKGxlbiA8IDEwMjQpIHtcbiAgICAgIHJlcyA9IGJpZ011bFRvKHRoaXMsIG51bSwgb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0ganVtYm9NdWxUbyh0aGlzLCBudW0sIG91dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICAvLyBDb29sZXktVHVrZXkgYWxnb3JpdGhtIGZvciBGRlRcbiAgLy8gc2xpZ2h0bHkgcmV2aXNpdGVkIHRvIHJlbHkgb24gbG9vcGluZyBpbnN0ZWFkIG9mIHJlY3Vyc2lvblxuXG4gIGZ1bmN0aW9uIEZGVE0gKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBGRlRNLnByb3RvdHlwZS5tYWtlUkJUID0gZnVuY3Rpb24gbWFrZVJCVCAoTikge1xuICAgIHZhciB0ID0gbmV3IEFycmF5KE4pO1xuICAgIHZhciBsID0gQk4ucHJvdG90eXBlLl9jb3VudEJpdHMoTikgLSAxO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICB0W2ldID0gdGhpcy5yZXZCaW4oaSwgbCwgTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBiaW5hcnktcmV2ZXJzZWQgcmVwcmVzZW50YXRpb24gb2YgYHhgXG4gIEZGVE0ucHJvdG90eXBlLnJldkJpbiA9IGZ1bmN0aW9uIHJldkJpbiAoeCwgbCwgTikge1xuICAgIGlmICh4ID09PSAwIHx8IHggPT09IE4gLSAxKSByZXR1cm4geDtcblxuICAgIHZhciByYiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJiIHw9ICh4ICYgMSkgPDwgKGwgLSBpIC0gMSk7XG4gICAgICB4ID4+PSAxO1xuICAgIH1cblxuICAgIHJldHVybiByYjtcbiAgfTtcblxuICAvLyBQZXJmb3JtcyBcInR3ZWVkbGluZ1wiIHBoYXNlLCB0aGVyZWZvcmUgJ2VtdWxhdGluZydcbiAgLy8gYmVoYXZpb3VyIG9mIHRoZSByZWN1cnNpdmUgYWxnb3JpdGhtXG4gIEZGVE0ucHJvdG90eXBlLnBlcm11dGUgPSBmdW5jdGlvbiBwZXJtdXRlIChyYnQsIHJ3cywgaXdzLCBydHdzLCBpdHdzLCBOKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgIHJ0d3NbaV0gPSByd3NbcmJ0W2ldXTtcbiAgICAgIGl0d3NbaV0gPSBpd3NbcmJ0W2ldXTtcbiAgICB9XG4gIH07XG5cbiAgRkZUTS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtIChyd3MsIGl3cywgcnR3cywgaXR3cywgTiwgcmJ0KSB7XG4gICAgdGhpcy5wZXJtdXRlKHJidCwgcndzLCBpd3MsIHJ0d3MsIGl0d3MsIE4pO1xuXG4gICAgZm9yICh2YXIgcyA9IDE7IHMgPCBOOyBzIDw8PSAxKSB7XG4gICAgICB2YXIgbCA9IHMgPDwgMTtcblxuICAgICAgdmFyIHJ0d2RmID0gTWF0aC5jb3MoMiAqIE1hdGguUEkgLyBsKTtcbiAgICAgIHZhciBpdHdkZiA9IE1hdGguc2luKDIgKiBNYXRoLlBJIC8gbCk7XG5cbiAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgTjsgcCArPSBsKSB7XG4gICAgICAgIHZhciBydHdkZl8gPSBydHdkZjtcbiAgICAgICAgdmFyIGl0d2RmXyA9IGl0d2RmO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgczsgaisrKSB7XG4gICAgICAgICAgdmFyIHJlID0gcnR3c1twICsgal07XG4gICAgICAgICAgdmFyIGllID0gaXR3c1twICsgal07XG5cbiAgICAgICAgICB2YXIgcm8gPSBydHdzW3AgKyBqICsgc107XG4gICAgICAgICAgdmFyIGlvID0gaXR3c1twICsgaiArIHNdO1xuXG4gICAgICAgICAgdmFyIHJ4ID0gcnR3ZGZfICogcm8gLSBpdHdkZl8gKiBpbztcblxuICAgICAgICAgIGlvID0gcnR3ZGZfICogaW8gKyBpdHdkZl8gKiBybztcbiAgICAgICAgICBybyA9IHJ4O1xuXG4gICAgICAgICAgcnR3c1twICsgal0gPSByZSArIHJvO1xuICAgICAgICAgIGl0d3NbcCArIGpdID0gaWUgKyBpbztcblxuICAgICAgICAgIHJ0d3NbcCArIGogKyBzXSA9IHJlIC0gcm87XG4gICAgICAgICAgaXR3c1twICsgaiArIHNdID0gaWUgLSBpbztcblxuICAgICAgICAgIC8qIGpzaGludCBtYXhkZXB0aCA6IGZhbHNlICovXG4gICAgICAgICAgaWYgKGogIT09IGwpIHtcbiAgICAgICAgICAgIHJ4ID0gcnR3ZGYgKiBydHdkZl8gLSBpdHdkZiAqIGl0d2RmXztcblxuICAgICAgICAgICAgaXR3ZGZfID0gcnR3ZGYgKiBpdHdkZl8gKyBpdHdkZiAqIHJ0d2RmXztcbiAgICAgICAgICAgIHJ0d2RmXyA9IHJ4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBGRlRNLnByb3RvdHlwZS5ndWVzc0xlbjEzYiA9IGZ1bmN0aW9uIGd1ZXNzTGVuMTNiIChuLCBtKSB7XG4gICAgdmFyIE4gPSBNYXRoLm1heChtLCBuKSB8IDE7XG4gICAgdmFyIG9kZCA9IE4gJiAxO1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKE4gPSBOIC8gMiB8IDA7IE47IE4gPSBOID4+PiAxKSB7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIDEgPDwgaSArIDEgKyBvZGQ7XG4gIH07XG5cbiAgRkZUTS5wcm90b3R5cGUuY29uanVnYXRlID0gZnVuY3Rpb24gY29uanVnYXRlIChyd3MsIGl3cywgTikge1xuICAgIGlmIChOIDw9IDEpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTiAvIDI7IGkrKykge1xuICAgICAgdmFyIHQgPSByd3NbaV07XG5cbiAgICAgIHJ3c1tpXSA9IHJ3c1tOIC0gaSAtIDFdO1xuICAgICAgcndzW04gLSBpIC0gMV0gPSB0O1xuXG4gICAgICB0ID0gaXdzW2ldO1xuXG4gICAgICBpd3NbaV0gPSAtaXdzW04gLSBpIC0gMV07XG4gICAgICBpd3NbTiAtIGkgLSAxXSA9IC10O1xuICAgIH1cbiAgfTtcblxuICBGRlRNLnByb3RvdHlwZS5ub3JtYWxpemUxM2IgPSBmdW5jdGlvbiBub3JtYWxpemUxM2IgKHdzLCBOKSB7XG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE4gLyAyOyBpKyspIHtcbiAgICAgIHZhciB3ID0gTWF0aC5yb3VuZCh3c1syICogaSArIDFdIC8gTikgKiAweDIwMDAgK1xuICAgICAgICBNYXRoLnJvdW5kKHdzWzIgKiBpXSAvIE4pICtcbiAgICAgICAgY2Fycnk7XG5cbiAgICAgIHdzW2ldID0gdyAmIDB4M2ZmZmZmZjtcblxuICAgICAgaWYgKHcgPCAweDQwMDAwMDApIHtcbiAgICAgICAgY2FycnkgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FycnkgPSB3IC8gMHg0MDAwMDAwIHwgMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gd3M7XG4gIH07XG5cbiAgRkZUTS5wcm90b3R5cGUuY29udmVydDEzYiA9IGZ1bmN0aW9uIGNvbnZlcnQxM2IgKHdzLCBsZW4sIHJ3cywgTikge1xuICAgIHZhciBjYXJyeSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2FycnkgPSBjYXJyeSArICh3c1tpXSB8IDApO1xuXG4gICAgICByd3NbMiAqIGldID0gY2FycnkgJiAweDFmZmY7IGNhcnJ5ID0gY2FycnkgPj4+IDEzO1xuICAgICAgcndzWzIgKiBpICsgMV0gPSBjYXJyeSAmIDB4MWZmZjsgY2FycnkgPSBjYXJyeSA+Pj4gMTM7XG4gICAgfVxuXG4gICAgLy8gUGFkIHdpdGggemVyb2VzXG4gICAgZm9yIChpID0gMiAqIGxlbjsgaSA8IE47ICsraSkge1xuICAgICAgcndzW2ldID0gMDtcbiAgICB9XG5cbiAgICBhc3NlcnQoY2FycnkgPT09IDApO1xuICAgIGFzc2VydCgoY2FycnkgJiB+MHgxZmZmKSA9PT0gMCk7XG4gIH07XG5cbiAgRkZUTS5wcm90b3R5cGUuc3R1YiA9IGZ1bmN0aW9uIHN0dWIgKE4pIHtcbiAgICB2YXIgcGggPSBuZXcgQXJyYXkoTik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgIHBoW2ldID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGg7XG4gIH07XG5cbiAgRkZUTS5wcm90b3R5cGUubXVscCA9IGZ1bmN0aW9uIG11bHAgKHgsIHksIG91dCkge1xuICAgIHZhciBOID0gMiAqIHRoaXMuZ3Vlc3NMZW4xM2IoeC5sZW5ndGgsIHkubGVuZ3RoKTtcblxuICAgIHZhciByYnQgPSB0aGlzLm1ha2VSQlQoTik7XG5cbiAgICB2YXIgXyA9IHRoaXMuc3R1YihOKTtcblxuICAgIHZhciByd3MgPSBuZXcgQXJyYXkoTik7XG4gICAgdmFyIHJ3c3QgPSBuZXcgQXJyYXkoTik7XG4gICAgdmFyIGl3c3QgPSBuZXcgQXJyYXkoTik7XG5cbiAgICB2YXIgbnJ3cyA9IG5ldyBBcnJheShOKTtcbiAgICB2YXIgbnJ3c3QgPSBuZXcgQXJyYXkoTik7XG4gICAgdmFyIG5pd3N0ID0gbmV3IEFycmF5KE4pO1xuXG4gICAgdmFyIHJtd3MgPSBvdXQud29yZHM7XG4gICAgcm13cy5sZW5ndGggPSBOO1xuXG4gICAgdGhpcy5jb252ZXJ0MTNiKHgud29yZHMsIHgubGVuZ3RoLCByd3MsIE4pO1xuICAgIHRoaXMuY29udmVydDEzYih5LndvcmRzLCB5Lmxlbmd0aCwgbnJ3cywgTik7XG5cbiAgICB0aGlzLnRyYW5zZm9ybShyd3MsIF8sIHJ3c3QsIGl3c3QsIE4sIHJidCk7XG4gICAgdGhpcy50cmFuc2Zvcm0obnJ3cywgXywgbnJ3c3QsIG5pd3N0LCBOLCByYnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgIHZhciByeCA9IHJ3c3RbaV0gKiBucndzdFtpXSAtIGl3c3RbaV0gKiBuaXdzdFtpXTtcbiAgICAgIGl3c3RbaV0gPSByd3N0W2ldICogbml3c3RbaV0gKyBpd3N0W2ldICogbnJ3c3RbaV07XG4gICAgICByd3N0W2ldID0gcng7XG4gICAgfVxuXG4gICAgdGhpcy5jb25qdWdhdGUocndzdCwgaXdzdCwgTik7XG4gICAgdGhpcy50cmFuc2Zvcm0ocndzdCwgaXdzdCwgcm13cywgXywgTiwgcmJ0KTtcbiAgICB0aGlzLmNvbmp1Z2F0ZShybXdzLCBfLCBOKTtcbiAgICB0aGlzLm5vcm1hbGl6ZTEzYihybXdzLCBOKTtcblxuICAgIG91dC5uZWdhdGl2ZSA9IHgubmVnYXRpdmUgXiB5Lm5lZ2F0aXZlO1xuICAgIG91dC5sZW5ndGggPSB4Lmxlbmd0aCArIHkubGVuZ3RoO1xuICAgIHJldHVybiBvdXQuc3RyaXAoKTtcbiAgfTtcblxuICAvLyBNdWx0aXBseSBgdGhpc2AgYnkgYG51bWBcbiAgQk4ucHJvdG90eXBlLm11bCA9IGZ1bmN0aW9uIG11bCAobnVtKSB7XG4gICAgdmFyIG91dCA9IG5ldyBCTihudWxsKTtcbiAgICBvdXQud29yZHMgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGggKyBudW0ubGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcy5tdWxUbyhudW0sIG91dCk7XG4gIH07XG5cbiAgLy8gTXVsdGlwbHkgZW1wbG95aW5nIEZGVFxuICBCTi5wcm90b3R5cGUubXVsZiA9IGZ1bmN0aW9uIG11bGYgKG51bSkge1xuICAgIHZhciBvdXQgPSBuZXcgQk4obnVsbCk7XG4gICAgb3V0LndvcmRzID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoICsgbnVtLmxlbmd0aCk7XG4gICAgcmV0dXJuIGp1bWJvTXVsVG8odGhpcywgbnVtLCBvdXQpO1xuICB9O1xuXG4gIC8vIEluLXBsYWNlIE11bHRpcGxpY2F0aW9uXG4gIEJOLnByb3RvdHlwZS5pbXVsID0gZnVuY3Rpb24gaW11bCAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5tdWxUbyhudW0sIHRoaXMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5pbXVsbiA9IGZ1bmN0aW9uIGltdWxuIChudW0pIHtcbiAgICBhc3NlcnQodHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xuICAgIGFzc2VydChudW0gPCAweDQwMDAwMDApO1xuXG4gICAgLy8gQ2FycnlcbiAgICB2YXIgY2FycnkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHcgPSAodGhpcy53b3Jkc1tpXSB8IDApICogbnVtO1xuICAgICAgdmFyIGxvID0gKHcgJiAweDNmZmZmZmYpICsgKGNhcnJ5ICYgMHgzZmZmZmZmKTtcbiAgICAgIGNhcnJ5ID4+PSAyNjtcbiAgICAgIGNhcnJ5ICs9ICh3IC8gMHg0MDAwMDAwKSB8IDA7XG4gICAgICAvLyBOT1RFOiBsbyBpcyAyN2JpdCBtYXhpbXVtXG4gICAgICBjYXJyeSArPSBsbyA+Pj4gMjY7XG4gICAgICB0aGlzLndvcmRzW2ldID0gbG8gJiAweDNmZmZmZmY7XG4gICAgfVxuXG4gICAgaWYgKGNhcnJ5ICE9PSAwKSB7XG4gICAgICB0aGlzLndvcmRzW2ldID0gY2Fycnk7XG4gICAgICB0aGlzLmxlbmd0aCsrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5tdWxuID0gZnVuY3Rpb24gbXVsbiAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pbXVsbihudW0pO1xuICB9O1xuXG4gIC8vIGB0aGlzYCAqIGB0aGlzYFxuICBCTi5wcm90b3R5cGUuc3FyID0gZnVuY3Rpb24gc3FyICgpIHtcbiAgICByZXR1cm4gdGhpcy5tdWwodGhpcyk7XG4gIH07XG5cbiAgLy8gYHRoaXNgICogYHRoaXNgIGluLXBsYWNlXG4gIEJOLnByb3RvdHlwZS5pc3FyID0gZnVuY3Rpb24gaXNxciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW11bCh0aGlzLmNsb25lKCkpO1xuICB9O1xuXG4gIC8vIE1hdGgucG93KGB0aGlzYCwgYG51bWApXG4gIEJOLnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiBwb3cgKG51bSkge1xuICAgIHZhciB3ID0gdG9CaXRBcnJheShudW0pO1xuICAgIGlmICh3Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG5ldyBCTigxKTtcblxuICAgIC8vIFNraXAgbGVhZGluZyB6ZXJvZXNcbiAgICB2YXIgcmVzID0gdGhpcztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHcubGVuZ3RoOyBpKyssIHJlcyA9IHJlcy5zcXIoKSkge1xuICAgICAgaWYgKHdbaV0gIT09IDApIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICgrK2kgPCB3Lmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgcSA9IHJlcy5zcXIoKTsgaSA8IHcubGVuZ3RoOyBpKyssIHEgPSBxLnNxcigpKSB7XG4gICAgICAgIGlmICh3W2ldID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICByZXMgPSByZXMubXVsKHEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgLy8gU2hpZnQtbGVmdCBpbi1wbGFjZVxuICBCTi5wcm90b3R5cGUuaXVzaGxuID0gZnVuY3Rpb24gaXVzaGxuIChiaXRzKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiaXRzID09PSAnbnVtYmVyJyAmJiBiaXRzID49IDApO1xuICAgIHZhciByID0gYml0cyAlIDI2O1xuICAgIHZhciBzID0gKGJpdHMgLSByKSAvIDI2O1xuICAgIHZhciBjYXJyeU1hc2sgPSAoMHgzZmZmZmZmID4+PiAoMjYgLSByKSkgPDwgKDI2IC0gcik7XG4gICAgdmFyIGk7XG5cbiAgICBpZiAociAhPT0gMCkge1xuICAgICAgdmFyIGNhcnJ5ID0gMDtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5ld0NhcnJ5ID0gdGhpcy53b3Jkc1tpXSAmIGNhcnJ5TWFzaztcbiAgICAgICAgdmFyIGMgPSAoKHRoaXMud29yZHNbaV0gfCAwKSAtIG5ld0NhcnJ5KSA8PCByO1xuICAgICAgICB0aGlzLndvcmRzW2ldID0gYyB8IGNhcnJ5O1xuICAgICAgICBjYXJyeSA9IG5ld0NhcnJ5ID4+PiAoMjYgLSByKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhcnJ5KSB7XG4gICAgICAgIHRoaXMud29yZHNbaV0gPSBjYXJyeTtcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocyAhPT0gMCkge1xuICAgICAgZm9yIChpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB0aGlzLndvcmRzW2kgKyBzXSA9IHRoaXMud29yZHNbaV07XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICAgICAgdGhpcy53b3Jkc1tpXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGVuZ3RoICs9IHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaXNobG4gPSBmdW5jdGlvbiBpc2hsbiAoYml0cykge1xuICAgIC8vIFRPRE8oaW5kdXRueSk6IGltcGxlbWVudCBtZVxuICAgIGFzc2VydCh0aGlzLm5lZ2F0aXZlID09PSAwKTtcbiAgICByZXR1cm4gdGhpcy5pdXNobG4oYml0cyk7XG4gIH07XG5cbiAgLy8gU2hpZnQtcmlnaHQgaW4tcGxhY2VcbiAgLy8gTk9URTogYGhpbnRgIGlzIGEgbG93ZXN0IGJpdCBiZWZvcmUgdHJhaWxpbmcgemVyb2VzXG4gIC8vIE5PVEU6IGlmIGBleHRlbmRlZGAgaXMgcHJlc2VudCAtIGl0IHdpbGwgYmUgZmlsbGVkIHdpdGggZGVzdHJveWVkIGJpdHNcbiAgQk4ucHJvdG90eXBlLml1c2hybiA9IGZ1bmN0aW9uIGl1c2hybiAoYml0cywgaGludCwgZXh0ZW5kZWQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGJpdHMgPT09ICdudW1iZXInICYmIGJpdHMgPj0gMCk7XG4gICAgdmFyIGg7XG4gICAgaWYgKGhpbnQpIHtcbiAgICAgIGggPSAoaGludCAtIChoaW50ICUgMjYpKSAvIDI2O1xuICAgIH0gZWxzZSB7XG4gICAgICBoID0gMDtcbiAgICB9XG5cbiAgICB2YXIgciA9IGJpdHMgJSAyNjtcbiAgICB2YXIgcyA9IE1hdGgubWluKChiaXRzIC0gcikgLyAyNiwgdGhpcy5sZW5ndGgpO1xuICAgIHZhciBtYXNrID0gMHgzZmZmZmZmIF4gKCgweDNmZmZmZmYgPj4+IHIpIDw8IHIpO1xuICAgIHZhciBtYXNrZWRXb3JkcyA9IGV4dGVuZGVkO1xuXG4gICAgaCAtPSBzO1xuICAgIGggPSBNYXRoLm1heCgwLCBoKTtcblxuICAgIC8vIEV4dGVuZGVkIG1vZGUsIGNvcHkgbWFza2VkIHBhcnRcbiAgICBpZiAobWFza2VkV29yZHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICAgIG1hc2tlZFdvcmRzLndvcmRzW2ldID0gdGhpcy53b3Jkc1tpXTtcbiAgICAgIH1cbiAgICAgIG1hc2tlZFdvcmRzLmxlbmd0aCA9IHM7XG4gICAgfVxuXG4gICAgaWYgKHMgPT09IDApIHtcbiAgICAgIC8vIE5vLW9wLCB3ZSBzaG91bGQgbm90IG1vdmUgYW55dGhpbmcgYXQgYWxsXG4gICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA+IHMpIHtcbiAgICAgIHRoaXMubGVuZ3RoIC09IHM7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLndvcmRzW2ldID0gdGhpcy53b3Jkc1tpICsgc107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud29yZHNbMF0gPSAwO1xuICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgIH1cblxuICAgIHZhciBjYXJyeSA9IDA7XG4gICAgZm9yIChpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDAgJiYgKGNhcnJ5ICE9PSAwIHx8IGkgPj0gaCk7IGktLSkge1xuICAgICAgdmFyIHdvcmQgPSB0aGlzLndvcmRzW2ldIHwgMDtcbiAgICAgIHRoaXMud29yZHNbaV0gPSAoY2FycnkgPDwgKDI2IC0gcikpIHwgKHdvcmQgPj4+IHIpO1xuICAgICAgY2FycnkgPSB3b3JkICYgbWFzaztcbiAgICB9XG5cbiAgICAvLyBQdXNoIGNhcnJpZWQgYml0cyBhcyBhIG1hc2tcbiAgICBpZiAobWFza2VkV29yZHMgJiYgY2FycnkgIT09IDApIHtcbiAgICAgIG1hc2tlZFdvcmRzLndvcmRzW21hc2tlZFdvcmRzLmxlbmd0aCsrXSA9IGNhcnJ5O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy53b3Jkc1swXSA9IDA7XG4gICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaXNocm4gPSBmdW5jdGlvbiBpc2hybiAoYml0cywgaGludCwgZXh0ZW5kZWQpIHtcbiAgICAvLyBUT0RPKGluZHV0bnkpOiBpbXBsZW1lbnQgbWVcbiAgICBhc3NlcnQodGhpcy5uZWdhdGl2ZSA9PT0gMCk7XG4gICAgcmV0dXJuIHRoaXMuaXVzaHJuKGJpdHMsIGhpbnQsIGV4dGVuZGVkKTtcbiAgfTtcblxuICAvLyBTaGlmdC1sZWZ0XG4gIEJOLnByb3RvdHlwZS5zaGxuID0gZnVuY3Rpb24gc2hsbiAoYml0cykge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaXNobG4oYml0cyk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnVzaGxuID0gZnVuY3Rpb24gdXNobG4gKGJpdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLml1c2hsbihiaXRzKTtcbiAgfTtcblxuICAvLyBTaGlmdC1yaWdodFxuICBCTi5wcm90b3R5cGUuc2hybiA9IGZ1bmN0aW9uIHNocm4gKGJpdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmlzaHJuKGJpdHMpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS51c2hybiA9IGZ1bmN0aW9uIHVzaHJuIChiaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pdXNocm4oYml0cyk7XG4gIH07XG5cbiAgLy8gVGVzdCBpZiBuIGJpdCBpcyBzZXRcbiAgQk4ucHJvdG90eXBlLnRlc3RuID0gZnVuY3Rpb24gdGVzdG4gKGJpdCkge1xuICAgIGFzc2VydCh0eXBlb2YgYml0ID09PSAnbnVtYmVyJyAmJiBiaXQgPj0gMCk7XG4gICAgdmFyIHIgPSBiaXQgJSAyNjtcbiAgICB2YXIgcyA9IChiaXQgLSByKSAvIDI2O1xuICAgIHZhciBxID0gMSA8PCByO1xuXG4gICAgLy8gRmFzdCBjYXNlOiBiaXQgaXMgbXVjaCBoaWdoZXIgdGhhbiBhbGwgZXhpc3Rpbmcgd29yZHNcbiAgICBpZiAodGhpcy5sZW5ndGggPD0gcykgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgYml0IGFuZCByZXR1cm5cbiAgICB2YXIgdyA9IHRoaXMud29yZHNbc107XG5cbiAgICByZXR1cm4gISEodyAmIHEpO1xuICB9O1xuXG4gIC8vIFJldHVybiBvbmx5IGxvd2VycyBiaXRzIG9mIG51bWJlciAoaW4tcGxhY2UpXG4gIEJOLnByb3RvdHlwZS5pbWFza24gPSBmdW5jdGlvbiBpbWFza24gKGJpdHMpIHtcbiAgICBhc3NlcnQodHlwZW9mIGJpdHMgPT09ICdudW1iZXInICYmIGJpdHMgPj0gMCk7XG4gICAgdmFyIHIgPSBiaXRzICUgMjY7XG4gICAgdmFyIHMgPSAoYml0cyAtIHIpIC8gMjY7XG5cbiAgICBhc3NlcnQodGhpcy5uZWdhdGl2ZSA9PT0gMCwgJ2ltYXNrbiB3b3JrcyBvbmx5IHdpdGggcG9zaXRpdmUgbnVtYmVycycpO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoIDw9IHMpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChyICE9PSAwKSB7XG4gICAgICBzKys7XG4gICAgfVxuICAgIHRoaXMubGVuZ3RoID0gTWF0aC5taW4ocywgdGhpcy5sZW5ndGgpO1xuXG4gICAgaWYgKHIgIT09IDApIHtcbiAgICAgIHZhciBtYXNrID0gMHgzZmZmZmZmIF4gKCgweDNmZmZmZmYgPj4+IHIpIDw8IHIpO1xuICAgICAgdGhpcy53b3Jkc1t0aGlzLmxlbmd0aCAtIDFdICY9IG1hc2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gb25seSBsb3dlcnMgYml0cyBvZiBudW1iZXJcbiAgQk4ucHJvdG90eXBlLm1hc2tuID0gZnVuY3Rpb24gbWFza24gKGJpdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmltYXNrbihiaXRzKTtcbiAgfTtcblxuICAvLyBBZGQgcGxhaW4gbnVtYmVyIGBudW1gIHRvIGB0aGlzYFxuICBCTi5wcm90b3R5cGUuaWFkZG4gPSBmdW5jdGlvbiBpYWRkbiAobnVtKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcbiAgICBhc3NlcnQobnVtIDwgMHg0MDAwMDAwKTtcbiAgICBpZiAobnVtIDwgMCkgcmV0dXJuIHRoaXMuaXN1Ym4oLW51bSk7XG5cbiAgICAvLyBQb3NzaWJsZSBzaWduIGNoYW5nZVxuICAgIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5sZW5ndGggPT09IDEgJiYgKHRoaXMud29yZHNbMF0gfCAwKSA8IG51bSkge1xuICAgICAgICB0aGlzLndvcmRzWzBdID0gbnVtIC0gKHRoaXMud29yZHNbMF0gfCAwKTtcbiAgICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMDtcbiAgICAgIHRoaXMuaXN1Ym4obnVtKTtcbiAgICAgIHRoaXMubmVnYXRpdmUgPSAxO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhvdXQgY2hlY2tzXG4gICAgcmV0dXJuIHRoaXMuX2lhZGRuKG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl9pYWRkbiA9IGZ1bmN0aW9uIF9pYWRkbiAobnVtKSB7XG4gICAgdGhpcy53b3Jkc1swXSArPSBudW07XG5cbiAgICAvLyBDYXJyeVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGggJiYgdGhpcy53b3Jkc1tpXSA+PSAweDQwMDAwMDA7IGkrKykge1xuICAgICAgdGhpcy53b3Jkc1tpXSAtPSAweDQwMDAwMDA7XG4gICAgICBpZiAoaSA9PT0gdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMud29yZHNbaSArIDFdID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud29yZHNbaSArIDFdKys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGVuZ3RoID0gTWF0aC5tYXgodGhpcy5sZW5ndGgsIGkgKyAxKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIFN1YnRyYWN0IHBsYWluIG51bWJlciBgbnVtYCBmcm9tIGB0aGlzYFxuICBCTi5wcm90b3R5cGUuaXN1Ym4gPSBmdW5jdGlvbiBpc3VibiAobnVtKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcbiAgICBhc3NlcnQobnVtIDwgMHg0MDAwMDAwKTtcbiAgICBpZiAobnVtIDwgMCkgcmV0dXJuIHRoaXMuaWFkZG4oLW51bSk7XG5cbiAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG4gICAgICB0aGlzLmlhZGRuKG51bSk7XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMud29yZHNbMF0gLT0gbnVtO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxICYmIHRoaXMud29yZHNbMF0gPCAwKSB7XG4gICAgICB0aGlzLndvcmRzWzBdID0gLXRoaXMud29yZHNbMF07XG4gICAgICB0aGlzLm5lZ2F0aXZlID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FycnlcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGggJiYgdGhpcy53b3Jkc1tpXSA8IDA7IGkrKykge1xuICAgICAgICB0aGlzLndvcmRzW2ldICs9IDB4NDAwMDAwMDtcbiAgICAgICAgdGhpcy53b3Jkc1tpICsgMV0gLT0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdHJpcCgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5hZGRuID0gZnVuY3Rpb24gYWRkbiAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pYWRkbihudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5zdWJuID0gZnVuY3Rpb24gc3VibiAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pc3VibihudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5pYWJzID0gZnVuY3Rpb24gaWFicyAoKSB7XG4gICAgdGhpcy5uZWdhdGl2ZSA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gYWJzICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmlhYnMoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuX2lzaGxuc3VibXVsID0gZnVuY3Rpb24gX2lzaGxuc3VibXVsIChudW0sIG11bCwgc2hpZnQpIHtcbiAgICB2YXIgbGVuID0gbnVtLmxlbmd0aCArIHNoaWZ0O1xuICAgIHZhciBpO1xuXG4gICAgdGhpcy5fZXhwYW5kKGxlbik7XG5cbiAgICB2YXIgdztcbiAgICB2YXIgY2FycnkgPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHcgPSAodGhpcy53b3Jkc1tpICsgc2hpZnRdIHwgMCkgKyBjYXJyeTtcbiAgICAgIHZhciByaWdodCA9IChudW0ud29yZHNbaV0gfCAwKSAqIG11bDtcbiAgICAgIHcgLT0gcmlnaHQgJiAweDNmZmZmZmY7XG4gICAgICBjYXJyeSA9ICh3ID4+IDI2KSAtICgocmlnaHQgLyAweDQwMDAwMDApIHwgMCk7XG4gICAgICB0aGlzLndvcmRzW2kgKyBzaGlmdF0gPSB3ICYgMHgzZmZmZmZmO1xuICAgIH1cbiAgICBmb3IgKDsgaSA8IHRoaXMubGVuZ3RoIC0gc2hpZnQ7IGkrKykge1xuICAgICAgdyA9ICh0aGlzLndvcmRzW2kgKyBzaGlmdF0gfCAwKSArIGNhcnJ5O1xuICAgICAgY2FycnkgPSB3ID4+IDI2O1xuICAgICAgdGhpcy53b3Jkc1tpICsgc2hpZnRdID0gdyAmIDB4M2ZmZmZmZjtcbiAgICB9XG5cbiAgICBpZiAoY2FycnkgPT09IDApIHJldHVybiB0aGlzLnN0cmlwKCk7XG5cbiAgICAvLyBTdWJ0cmFjdGlvbiBvdmVyZmxvd1xuICAgIGFzc2VydChjYXJyeSA9PT0gLTEpO1xuICAgIGNhcnJ5ID0gMDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdyA9IC0odGhpcy53b3Jkc1tpXSB8IDApICsgY2Fycnk7XG4gICAgICBjYXJyeSA9IHcgPj4gMjY7XG4gICAgICB0aGlzLndvcmRzW2ldID0gdyAmIDB4M2ZmZmZmZjtcbiAgICB9XG4gICAgdGhpcy5uZWdhdGl2ZSA9IDE7XG5cbiAgICByZXR1cm4gdGhpcy5zdHJpcCgpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5fd29yZERpdiA9IGZ1bmN0aW9uIF93b3JkRGl2IChudW0sIG1vZGUpIHtcbiAgICB2YXIgc2hpZnQgPSB0aGlzLmxlbmd0aCAtIG51bS5sZW5ndGg7XG5cbiAgICB2YXIgYSA9IHRoaXMuY2xvbmUoKTtcbiAgICB2YXIgYiA9IG51bTtcblxuICAgIC8vIE5vcm1hbGl6ZVxuICAgIHZhciBiaGkgPSBiLndvcmRzW2IubGVuZ3RoIC0gMV0gfCAwO1xuICAgIHZhciBiaGlCaXRzID0gdGhpcy5fY291bnRCaXRzKGJoaSk7XG4gICAgc2hpZnQgPSAyNiAtIGJoaUJpdHM7XG4gICAgaWYgKHNoaWZ0ICE9PSAwKSB7XG4gICAgICBiID0gYi51c2hsbihzaGlmdCk7XG4gICAgICBhLml1c2hsbihzaGlmdCk7XG4gICAgICBiaGkgPSBiLndvcmRzW2IubGVuZ3RoIC0gMV0gfCAwO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgcXVvdGllbnRcbiAgICB2YXIgbSA9IGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gICAgdmFyIHE7XG5cbiAgICBpZiAobW9kZSAhPT0gJ21vZCcpIHtcbiAgICAgIHEgPSBuZXcgQk4obnVsbCk7XG4gICAgICBxLmxlbmd0aCA9IG0gKyAxO1xuICAgICAgcS53b3JkcyA9IG5ldyBBcnJheShxLmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcS53b3Jkc1tpXSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRpZmYgPSBhLmNsb25lKCkuX2lzaGxuc3VibXVsKGIsIDEsIG0pO1xuICAgIGlmIChkaWZmLm5lZ2F0aXZlID09PSAwKSB7XG4gICAgICBhID0gZGlmZjtcbiAgICAgIGlmIChxKSB7XG4gICAgICAgIHEud29yZHNbbV0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSBtIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIHZhciBxaiA9IChhLndvcmRzW2IubGVuZ3RoICsgal0gfCAwKSAqIDB4NDAwMDAwMCArXG4gICAgICAgIChhLndvcmRzW2IubGVuZ3RoICsgaiAtIDFdIHwgMCk7XG5cbiAgICAgIC8vIE5PVEU6IChxaiAvIGJoaSkgaXMgKDB4M2ZmZmZmZiAqIDB4NDAwMDAwMCArIDB4M2ZmZmZmZikgLyAweDIwMDAwMDAgbWF4XG4gICAgICAvLyAoMHg3ZmZmZmZmKVxuICAgICAgcWogPSBNYXRoLm1pbigocWogLyBiaGkpIHwgMCwgMHgzZmZmZmZmKTtcblxuICAgICAgYS5faXNobG5zdWJtdWwoYiwgcWosIGopO1xuICAgICAgd2hpbGUgKGEubmVnYXRpdmUgIT09IDApIHtcbiAgICAgICAgcWotLTtcbiAgICAgICAgYS5uZWdhdGl2ZSA9IDA7XG4gICAgICAgIGEuX2lzaGxuc3VibXVsKGIsIDEsIGopO1xuICAgICAgICBpZiAoIWEuaXNaZXJvKCkpIHtcbiAgICAgICAgICBhLm5lZ2F0aXZlIF49IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChxKSB7XG4gICAgICAgIHEud29yZHNbal0gPSBxajtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHEpIHtcbiAgICAgIHEuc3RyaXAoKTtcbiAgICB9XG4gICAgYS5zdHJpcCgpO1xuXG4gICAgLy8gRGVub3JtYWxpemVcbiAgICBpZiAobW9kZSAhPT0gJ2RpdicgJiYgc2hpZnQgIT09IDApIHtcbiAgICAgIGEuaXVzaHJuKHNoaWZ0KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGl2OiBxIHx8IG51bGwsXG4gICAgICBtb2Q6IGFcbiAgICB9O1xuICB9O1xuXG4gIC8vIE5PVEU6IDEpIGBtb2RlYCBjYW4gYmUgc2V0IHRvIGBtb2RgIHRvIHJlcXVlc3QgbW9kIG9ubHksXG4gIC8vICAgICAgIHRvIGBkaXZgIHRvIHJlcXVlc3QgZGl2IG9ubHksIG9yIGJlIGFic2VudCB0b1xuICAvLyAgICAgICByZXF1ZXN0IGJvdGggZGl2ICYgbW9kXG4gIC8vICAgICAgIDIpIGBwb3NpdGl2ZWAgaXMgdHJ1ZSBpZiB1bnNpZ25lZCBtb2QgaXMgcmVxdWVzdGVkXG4gIEJOLnByb3RvdHlwZS5kaXZtb2QgPSBmdW5jdGlvbiBkaXZtb2QgKG51bSwgbW9kZSwgcG9zaXRpdmUpIHtcbiAgICBhc3NlcnQoIW51bS5pc1plcm8oKSk7XG5cbiAgICBpZiAodGhpcy5pc1plcm8oKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGl2OiBuZXcgQk4oMCksXG4gICAgICAgIG1vZDogbmV3IEJOKDApXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBkaXYsIG1vZCwgcmVzO1xuICAgIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwICYmIG51bS5uZWdhdGl2ZSA9PT0gMCkge1xuICAgICAgcmVzID0gdGhpcy5uZWcoKS5kaXZtb2QobnVtLCBtb2RlKTtcblxuICAgICAgaWYgKG1vZGUgIT09ICdtb2QnKSB7XG4gICAgICAgIGRpdiA9IHJlcy5kaXYubmVnKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RlICE9PSAnZGl2Jykge1xuICAgICAgICBtb2QgPSByZXMubW9kLm5lZygpO1xuICAgICAgICBpZiAocG9zaXRpdmUgJiYgbW9kLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICAgICAgbW9kLmlhZGQobnVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXY6IGRpdixcbiAgICAgICAgbW9kOiBtb2RcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmVnYXRpdmUgPT09IDAgJiYgbnVtLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICByZXMgPSB0aGlzLmRpdm1vZChudW0ubmVnKCksIG1vZGUpO1xuXG4gICAgICBpZiAobW9kZSAhPT0gJ21vZCcpIHtcbiAgICAgICAgZGl2ID0gcmVzLmRpdi5uZWcoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGl2OiBkaXYsXG4gICAgICAgIG1vZDogcmVzLm1vZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMubmVnYXRpdmUgJiBudW0ubmVnYXRpdmUpICE9PSAwKSB7XG4gICAgICByZXMgPSB0aGlzLm5lZygpLmRpdm1vZChudW0ubmVnKCksIG1vZGUpO1xuXG4gICAgICBpZiAobW9kZSAhPT0gJ2RpdicpIHtcbiAgICAgICAgbW9kID0gcmVzLm1vZC5uZWcoKTtcbiAgICAgICAgaWYgKHBvc2l0aXZlICYmIG1vZC5uZWdhdGl2ZSAhPT0gMCkge1xuICAgICAgICAgIG1vZC5pc3ViKG51bSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGl2OiByZXMuZGl2LFxuICAgICAgICBtb2Q6IG1vZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBCb3RoIG51bWJlcnMgYXJlIHBvc2l0aXZlIGF0IHRoaXMgcG9pbnRcblxuICAgIC8vIFN0cmlwIGJvdGggbnVtYmVycyB0byBhcHByb3hpbWF0ZSBzaGlmdCB2YWx1ZVxuICAgIGlmIChudW0ubGVuZ3RoID4gdGhpcy5sZW5ndGggfHwgdGhpcy5jbXAobnVtKSA8IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpdjogbmV3IEJOKDApLFxuICAgICAgICBtb2Q6IHRoaXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVmVyeSBzaG9ydCByZWR1Y3Rpb25cbiAgICBpZiAobnVtLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKG1vZGUgPT09ICdkaXYnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGl2OiB0aGlzLmRpdm4obnVtLndvcmRzWzBdKSxcbiAgICAgICAgICBtb2Q6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZGUgPT09ICdtb2QnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGl2OiBudWxsLFxuICAgICAgICAgIG1vZDogbmV3IEJOKHRoaXMubW9kbihudW0ud29yZHNbMF0pKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXY6IHRoaXMuZGl2bihudW0ud29yZHNbMF0pLFxuICAgICAgICBtb2Q6IG5ldyBCTih0aGlzLm1vZG4obnVtLndvcmRzWzBdKSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3dvcmREaXYobnVtLCBtb2RlKTtcbiAgfTtcblxuICAvLyBGaW5kIGB0aGlzYCAvIGBudW1gXG4gIEJOLnByb3RvdHlwZS5kaXYgPSBmdW5jdGlvbiBkaXYgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmRpdm1vZChudW0sICdkaXYnLCBmYWxzZSkuZGl2O1xuICB9O1xuXG4gIC8vIEZpbmQgYHRoaXNgICUgYG51bWBcbiAgQk4ucHJvdG90eXBlLm1vZCA9IGZ1bmN0aW9uIG1vZCAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2bW9kKG51bSwgJ21vZCcsIGZhbHNlKS5tb2Q7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnVtb2QgPSBmdW5jdGlvbiB1bW9kIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5kaXZtb2QobnVtLCAnbW9kJywgdHJ1ZSkubW9kO1xuICB9O1xuXG4gIC8vIEZpbmQgUm91bmQoYHRoaXNgIC8gYG51bWApXG4gIEJOLnByb3RvdHlwZS5kaXZSb3VuZCA9IGZ1bmN0aW9uIGRpdlJvdW5kIChudW0pIHtcbiAgICB2YXIgZG0gPSB0aGlzLmRpdm1vZChudW0pO1xuXG4gICAgLy8gRmFzdCBjYXNlIC0gZXhhY3QgZGl2aXNpb25cbiAgICBpZiAoZG0ubW9kLmlzWmVybygpKSByZXR1cm4gZG0uZGl2O1xuXG4gICAgdmFyIG1vZCA9IGRtLmRpdi5uZWdhdGl2ZSAhPT0gMCA/IGRtLm1vZC5pc3ViKG51bSkgOiBkbS5tb2Q7XG5cbiAgICB2YXIgaGFsZiA9IG51bS51c2hybigxKTtcbiAgICB2YXIgcjIgPSBudW0uYW5kbG4oMSk7XG4gICAgdmFyIGNtcCA9IG1vZC5jbXAoaGFsZik7XG5cbiAgICAvLyBSb3VuZCBkb3duXG4gICAgaWYgKGNtcCA8IDAgfHwgcjIgPT09IDEgJiYgY21wID09PSAwKSByZXR1cm4gZG0uZGl2O1xuXG4gICAgLy8gUm91bmQgdXBcbiAgICByZXR1cm4gZG0uZGl2Lm5lZ2F0aXZlICE9PSAwID8gZG0uZGl2LmlzdWJuKDEpIDogZG0uZGl2LmlhZGRuKDEpO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5tb2RuID0gZnVuY3Rpb24gbW9kbiAobnVtKSB7XG4gICAgYXNzZXJ0KG51bSA8PSAweDNmZmZmZmYpO1xuICAgIHZhciBwID0gKDEgPDwgMjYpICUgbnVtO1xuXG4gICAgdmFyIGFjYyA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGFjYyA9IChwICogYWNjICsgKHRoaXMud29yZHNbaV0gfCAwKSkgJSBudW07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfTtcblxuICAvLyBJbi1wbGFjZSBkaXZpc2lvbiBieSBudW1iZXJcbiAgQk4ucHJvdG90eXBlLmlkaXZuID0gZnVuY3Rpb24gaWRpdm4gKG51bSkge1xuICAgIGFzc2VydChudW0gPD0gMHgzZmZmZmZmKTtcblxuICAgIHZhciBjYXJyeSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciB3ID0gKHRoaXMud29yZHNbaV0gfCAwKSArIGNhcnJ5ICogMHg0MDAwMDAwO1xuICAgICAgdGhpcy53b3Jkc1tpXSA9ICh3IC8gbnVtKSB8IDA7XG4gICAgICBjYXJyeSA9IHcgJSBudW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RyaXAoKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZGl2biA9IGZ1bmN0aW9uIGRpdm4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaWRpdm4obnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZWdjZCA9IGZ1bmN0aW9uIGVnY2QgKHApIHtcbiAgICBhc3NlcnQocC5uZWdhdGl2ZSA9PT0gMCk7XG4gICAgYXNzZXJ0KCFwLmlzWmVybygpKTtcblxuICAgIHZhciB4ID0gdGhpcztcbiAgICB2YXIgeSA9IHAuY2xvbmUoKTtcblxuICAgIGlmICh4Lm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICB4ID0geC51bW9kKHApO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0geC5jbG9uZSgpO1xuICAgIH1cblxuICAgIC8vIEEgKiB4ICsgQiAqIHkgPSB4XG4gICAgdmFyIEEgPSBuZXcgQk4oMSk7XG4gICAgdmFyIEIgPSBuZXcgQk4oMCk7XG5cbiAgICAvLyBDICogeCArIEQgKiB5ID0geVxuICAgIHZhciBDID0gbmV3IEJOKDApO1xuICAgIHZhciBEID0gbmV3IEJOKDEpO1xuXG4gICAgdmFyIGcgPSAwO1xuXG4gICAgd2hpbGUgKHguaXNFdmVuKCkgJiYgeS5pc0V2ZW4oKSkge1xuICAgICAgeC5pdXNocm4oMSk7XG4gICAgICB5Lml1c2hybigxKTtcbiAgICAgICsrZztcbiAgICB9XG5cbiAgICB2YXIgeXAgPSB5LmNsb25lKCk7XG4gICAgdmFyIHhwID0geC5jbG9uZSgpO1xuXG4gICAgd2hpbGUgKCF4LmlzWmVybygpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgaW0gPSAxOyAoeC53b3Jkc1swXSAmIGltKSA9PT0gMCAmJiBpIDwgMjY7ICsraSwgaW0gPDw9IDEpO1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIHguaXVzaHJuKGkpO1xuICAgICAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgICAgIGlmIChBLmlzT2RkKCkgfHwgQi5pc09kZCgpKSB7XG4gICAgICAgICAgICBBLmlhZGQoeXApO1xuICAgICAgICAgICAgQi5pc3ViKHhwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBBLml1c2hybigxKTtcbiAgICAgICAgICBCLml1c2hybigxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBqID0gMCwgam0gPSAxOyAoeS53b3Jkc1swXSAmIGptKSA9PT0gMCAmJiBqIDwgMjY7ICsraiwgam0gPDw9IDEpO1xuICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgIHkuaXVzaHJuKGopO1xuICAgICAgICB3aGlsZSAoai0tID4gMCkge1xuICAgICAgICAgIGlmIChDLmlzT2RkKCkgfHwgRC5pc09kZCgpKSB7XG4gICAgICAgICAgICBDLmlhZGQoeXApO1xuICAgICAgICAgICAgRC5pc3ViKHhwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBDLml1c2hybigxKTtcbiAgICAgICAgICBELml1c2hybigxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoeC5jbXAoeSkgPj0gMCkge1xuICAgICAgICB4LmlzdWIoeSk7XG4gICAgICAgIEEuaXN1YihDKTtcbiAgICAgICAgQi5pc3ViKEQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeS5pc3ViKHgpO1xuICAgICAgICBDLmlzdWIoQSk7XG4gICAgICAgIEQuaXN1YihCKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYTogQyxcbiAgICAgIGI6IEQsXG4gICAgICBnY2Q6IHkuaXVzaGxuKGcpXG4gICAgfTtcbiAgfTtcblxuICAvLyBUaGlzIGlzIHJlZHVjZWQgaW5jYXJuYXRpb24gb2YgdGhlIGJpbmFyeSBFRUFcbiAgLy8gYWJvdmUsIGRlc2lnbmF0ZWQgdG8gaW52ZXJ0IG1lbWJlcnMgb2YgdGhlXG4gIC8vIF9wcmltZV8gZmllbGRzIEYocCkgYXQgYSBtYXhpbWFsIHNwZWVkXG4gIEJOLnByb3RvdHlwZS5faW52bXAgPSBmdW5jdGlvbiBfaW52bXAgKHApIHtcbiAgICBhc3NlcnQocC5uZWdhdGl2ZSA9PT0gMCk7XG4gICAgYXNzZXJ0KCFwLmlzWmVybygpKTtcblxuICAgIHZhciBhID0gdGhpcztcbiAgICB2YXIgYiA9IHAuY2xvbmUoKTtcblxuICAgIGlmIChhLm5lZ2F0aXZlICE9PSAwKSB7XG4gICAgICBhID0gYS51bW9kKHApO1xuICAgIH0gZWxzZSB7XG4gICAgICBhID0gYS5jbG9uZSgpO1xuICAgIH1cblxuICAgIHZhciB4MSA9IG5ldyBCTigxKTtcbiAgICB2YXIgeDIgPSBuZXcgQk4oMCk7XG5cbiAgICB2YXIgZGVsdGEgPSBiLmNsb25lKCk7XG5cbiAgICB3aGlsZSAoYS5jbXBuKDEpID4gMCAmJiBiLmNtcG4oMSkgPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgaW0gPSAxOyAoYS53b3Jkc1swXSAmIGltKSA9PT0gMCAmJiBpIDwgMjY7ICsraSwgaW0gPDw9IDEpO1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIGEuaXVzaHJuKGkpO1xuICAgICAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgICAgIGlmICh4MS5pc09kZCgpKSB7XG4gICAgICAgICAgICB4MS5pYWRkKGRlbHRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB4MS5pdXNocm4oMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaiA9IDAsIGptID0gMTsgKGIud29yZHNbMF0gJiBqbSkgPT09IDAgJiYgaiA8IDI2OyArK2osIGptIDw8PSAxKTtcbiAgICAgIGlmIChqID4gMCkge1xuICAgICAgICBiLml1c2hybihqKTtcbiAgICAgICAgd2hpbGUgKGotLSA+IDApIHtcbiAgICAgICAgICBpZiAoeDIuaXNPZGQoKSkge1xuICAgICAgICAgICAgeDIuaWFkZChkZWx0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeDIuaXVzaHJuKDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhLmNtcChiKSA+PSAwKSB7XG4gICAgICAgIGEuaXN1YihiKTtcbiAgICAgICAgeDEuaXN1Yih4Mik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiLmlzdWIoYSk7XG4gICAgICAgIHgyLmlzdWIoeDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXM7XG4gICAgaWYgKGEuY21wbigxKSA9PT0gMCkge1xuICAgICAgcmVzID0geDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IHgyO1xuICAgIH1cblxuICAgIGlmIChyZXMuY21wbigwKSA8IDApIHtcbiAgICAgIHJlcy5pYWRkKHApO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmdjZCA9IGZ1bmN0aW9uIGdjZCAobnVtKSB7XG4gICAgaWYgKHRoaXMuaXNaZXJvKCkpIHJldHVybiBudW0uYWJzKCk7XG4gICAgaWYgKG51bS5pc1plcm8oKSkgcmV0dXJuIHRoaXMuYWJzKCk7XG5cbiAgICB2YXIgYSA9IHRoaXMuY2xvbmUoKTtcbiAgICB2YXIgYiA9IG51bS5jbG9uZSgpO1xuICAgIGEubmVnYXRpdmUgPSAwO1xuICAgIGIubmVnYXRpdmUgPSAwO1xuXG4gICAgLy8gUmVtb3ZlIGNvbW1vbiBmYWN0b3Igb2YgdHdvXG4gICAgZm9yICh2YXIgc2hpZnQgPSAwOyBhLmlzRXZlbigpICYmIGIuaXNFdmVuKCk7IHNoaWZ0KyspIHtcbiAgICAgIGEuaXVzaHJuKDEpO1xuICAgICAgYi5pdXNocm4oMSk7XG4gICAgfVxuXG4gICAgZG8ge1xuICAgICAgd2hpbGUgKGEuaXNFdmVuKCkpIHtcbiAgICAgICAgYS5pdXNocm4oMSk7XG4gICAgICB9XG4gICAgICB3aGlsZSAoYi5pc0V2ZW4oKSkge1xuICAgICAgICBiLml1c2hybigxKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHIgPSBhLmNtcChiKTtcbiAgICAgIGlmIChyIDwgMCkge1xuICAgICAgICAvLyBTd2FwIGBhYCBhbmQgYGJgIHRvIG1ha2UgYGFgIGFsd2F5cyBiaWdnZXIgdGhhbiBgYmBcbiAgICAgICAgdmFyIHQgPSBhO1xuICAgICAgICBhID0gYjtcbiAgICAgICAgYiA9IHQ7XG4gICAgICB9IGVsc2UgaWYgKHIgPT09IDAgfHwgYi5jbXBuKDEpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBhLmlzdWIoYik7XG4gICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICByZXR1cm4gYi5pdXNobG4oc2hpZnQpO1xuICB9O1xuXG4gIC8vIEludmVydCBudW1iZXIgaW4gdGhlIGZpZWxkIEYobnVtKVxuICBCTi5wcm90b3R5cGUuaW52bSA9IGZ1bmN0aW9uIGludm0gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmVnY2QobnVtKS5hLnVtb2QobnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaXNFdmVuID0gZnVuY3Rpb24gaXNFdmVuICgpIHtcbiAgICByZXR1cm4gKHRoaXMud29yZHNbMF0gJiAxKSA9PT0gMDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbiBpc09kZCAoKSB7XG4gICAgcmV0dXJuICh0aGlzLndvcmRzWzBdICYgMSkgPT09IDE7XG4gIH07XG5cbiAgLy8gQW5kIGZpcnN0IHdvcmQgYW5kIG51bVxuICBCTi5wcm90b3R5cGUuYW5kbG4gPSBmdW5jdGlvbiBhbmRsbiAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMud29yZHNbMF0gJiBudW07XG4gIH07XG5cbiAgLy8gSW5jcmVtZW50IGF0IHRoZSBiaXQgcG9zaXRpb24gaW4tbGluZVxuICBCTi5wcm90b3R5cGUuYmluY24gPSBmdW5jdGlvbiBiaW5jbiAoYml0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiaXQgPT09ICdudW1iZXInKTtcbiAgICB2YXIgciA9IGJpdCAlIDI2O1xuICAgIHZhciBzID0gKGJpdCAtIHIpIC8gMjY7XG4gICAgdmFyIHEgPSAxIDw8IHI7XG5cbiAgICAvLyBGYXN0IGNhc2U6IGJpdCBpcyBtdWNoIGhpZ2hlciB0aGFuIGFsbCBleGlzdGluZyB3b3Jkc1xuICAgIGlmICh0aGlzLmxlbmd0aCA8PSBzKSB7XG4gICAgICB0aGlzLl9leHBhbmQocyArIDEpO1xuICAgICAgdGhpcy53b3Jkc1tzXSB8PSBxO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQWRkIGJpdCBhbmQgcHJvcGFnYXRlLCBpZiBuZWVkZWRcbiAgICB2YXIgY2FycnkgPSBxO1xuICAgIGZvciAodmFyIGkgPSBzOyBjYXJyeSAhPT0gMCAmJiBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHcgPSB0aGlzLndvcmRzW2ldIHwgMDtcbiAgICAgIHcgKz0gY2Fycnk7XG4gICAgICBjYXJyeSA9IHcgPj4+IDI2O1xuICAgICAgdyAmPSAweDNmZmZmZmY7XG4gICAgICB0aGlzLndvcmRzW2ldID0gdztcbiAgICB9XG4gICAgaWYgKGNhcnJ5ICE9PSAwKSB7XG4gICAgICB0aGlzLndvcmRzW2ldID0gY2Fycnk7XG4gICAgICB0aGlzLmxlbmd0aCsrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24gaXNaZXJvICgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDEgJiYgdGhpcy53b3Jkc1swXSA9PT0gMDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuY21wbiA9IGZ1bmN0aW9uIGNtcG4gKG51bSkge1xuICAgIHZhciBuZWdhdGl2ZSA9IG51bSA8IDA7XG5cbiAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCAmJiAhbmVnYXRpdmUpIHJldHVybiAtMTtcbiAgICBpZiAodGhpcy5uZWdhdGl2ZSA9PT0gMCAmJiBuZWdhdGl2ZSkgcmV0dXJuIDE7XG5cbiAgICB0aGlzLnN0cmlwKCk7XG5cbiAgICB2YXIgcmVzO1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJlcyA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZWdhdGl2ZSkge1xuICAgICAgICBudW0gPSAtbnVtO1xuICAgICAgfVxuXG4gICAgICBhc3NlcnQobnVtIDw9IDB4M2ZmZmZmZiwgJ051bWJlciBpcyB0b28gYmlnJyk7XG5cbiAgICAgIHZhciB3ID0gdGhpcy53b3Jkc1swXSB8IDA7XG4gICAgICByZXMgPSB3ID09PSBudW0gPyAwIDogdyA8IG51bSA/IC0xIDogMTtcbiAgICB9XG4gICAgaWYgKHRoaXMubmVnYXRpdmUgIT09IDApIHJldHVybiAtcmVzIHwgMDtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIC8vIENvbXBhcmUgdHdvIG51bWJlcnMgYW5kIHJldHVybjpcbiAgLy8gMSAtIGlmIGB0aGlzYCA+IGBudW1gXG4gIC8vIDAgLSBpZiBgdGhpc2AgPT0gYG51bWBcbiAgLy8gLTEgLSBpZiBgdGhpc2AgPCBgbnVtYFxuICBCTi5wcm90b3R5cGUuY21wID0gZnVuY3Rpb24gY21wIChudW0pIHtcbiAgICBpZiAodGhpcy5uZWdhdGl2ZSAhPT0gMCAmJiBudW0ubmVnYXRpdmUgPT09IDApIHJldHVybiAtMTtcbiAgICBpZiAodGhpcy5uZWdhdGl2ZSA9PT0gMCAmJiBudW0ubmVnYXRpdmUgIT09IDApIHJldHVybiAxO1xuXG4gICAgdmFyIHJlcyA9IHRoaXMudWNtcChudW0pO1xuICAgIGlmICh0aGlzLm5lZ2F0aXZlICE9PSAwKSByZXR1cm4gLXJlcyB8IDA7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICAvLyBVbnNpZ25lZCBjb21wYXJpc29uXG4gIEJOLnByb3RvdHlwZS51Y21wID0gZnVuY3Rpb24gdWNtcCAobnVtKSB7XG4gICAgLy8gQXQgdGhpcyBwb2ludCBib3RoIG51bWJlcnMgaGF2ZSB0aGUgc2FtZSBzaWduXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbnVtLmxlbmd0aCkgcmV0dXJuIDE7XG4gICAgaWYgKHRoaXMubGVuZ3RoIDwgbnVtLmxlbmd0aCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIHJlcyA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBhID0gdGhpcy53b3Jkc1tpXSB8IDA7XG4gICAgICB2YXIgYiA9IG51bS53b3Jkc1tpXSB8IDA7XG5cbiAgICAgIGlmIChhID09PSBiKSBjb250aW51ZTtcbiAgICAgIGlmIChhIDwgYikge1xuICAgICAgICByZXMgPSAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmVzID0gMTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5ndG4gPSBmdW5jdGlvbiBndG4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcG4obnVtKSA9PT0gMTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZ3QgPSBmdW5jdGlvbiBndCAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wKG51bSkgPT09IDE7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmd0ZW4gPSBmdW5jdGlvbiBndGVuIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXBuKG51bSkgPj0gMDtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZ3RlID0gZnVuY3Rpb24gZ3RlIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXAobnVtKSA+PSAwO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5sdG4gPSBmdW5jdGlvbiBsdG4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcG4obnVtKSA9PT0gLTE7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmx0ID0gZnVuY3Rpb24gbHQgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcChudW0pID09PSAtMTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUubHRlbiA9IGZ1bmN0aW9uIGx0ZW4gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcG4obnVtKSA8PSAwO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5sdGUgPSBmdW5jdGlvbiBsdGUgKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNtcChudW0pIDw9IDA7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmVxbiA9IGZ1bmN0aW9uIGVxbiAobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuY21wbihudW0pID09PSAwO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5lcSA9IGZ1bmN0aW9uIGVxIChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbXAobnVtKSA9PT0gMDtcbiAgfTtcblxuICAvL1xuICAvLyBBIHJlZHVjZSBjb250ZXh0LCBjb3VsZCBiZSB1c2luZyBtb250Z29tZXJ5IG9yIHNvbWV0aGluZyBiZXR0ZXIsIGRlcGVuZGluZ1xuICAvLyBvbiB0aGUgYG1gIGl0c2VsZi5cbiAgLy9cbiAgQk4ucmVkID0gZnVuY3Rpb24gcmVkIChudW0pIHtcbiAgICByZXR1cm4gbmV3IFJlZChudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS50b1JlZCA9IGZ1bmN0aW9uIHRvUmVkIChjdHgpIHtcbiAgICBhc3NlcnQoIXRoaXMucmVkLCAnQWxyZWFkeSBhIG51bWJlciBpbiByZWR1Y3Rpb24gY29udGV4dCcpO1xuICAgIGFzc2VydCh0aGlzLm5lZ2F0aXZlID09PSAwLCAncmVkIHdvcmtzIG9ubHkgd2l0aCBwb3NpdGl2ZXMnKTtcbiAgICByZXR1cm4gY3R4LmNvbnZlcnRUbyh0aGlzKS5fZm9yY2VSZWQoY3R4KTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUuZnJvbVJlZCA9IGZ1bmN0aW9uIGZyb21SZWQgKCkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ2Zyb21SZWQgd29ya3Mgb25seSB3aXRoIG51bWJlcnMgaW4gcmVkdWN0aW9uIGNvbnRleHQnKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuY29udmVydEZyb20odGhpcyk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLl9mb3JjZVJlZCA9IGZ1bmN0aW9uIF9mb3JjZVJlZCAoY3R4KSB7XG4gICAgdGhpcy5yZWQgPSBjdHg7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLmZvcmNlUmVkID0gZnVuY3Rpb24gZm9yY2VSZWQgKGN0eCkge1xuICAgIGFzc2VydCghdGhpcy5yZWQsICdBbHJlYWR5IGEgbnVtYmVyIGluIHJlZHVjdGlvbiBjb250ZXh0Jyk7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlUmVkKGN0eCk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZEFkZCA9IGZ1bmN0aW9uIHJlZEFkZCAobnVtKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkQWRkIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHJldHVybiB0aGlzLnJlZC5hZGQodGhpcywgbnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkSUFkZCA9IGZ1bmN0aW9uIHJlZElBZGQgKG51bSkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZElBZGQgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLmlhZGQodGhpcywgbnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkU3ViID0gZnVuY3Rpb24gcmVkU3ViIChudW0pIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRTdWIgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLnN1Yih0aGlzLCBudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRJU3ViID0gZnVuY3Rpb24gcmVkSVN1YiAobnVtKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkSVN1YiB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuaXN1Yih0aGlzLCBudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRTaGwgPSBmdW5jdGlvbiByZWRTaGwgKG51bSkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZFNobCB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuc2hsKHRoaXMsIG51bSk7XG4gIH07XG5cbiAgQk4ucHJvdG90eXBlLnJlZE11bCA9IGZ1bmN0aW9uIHJlZE11bCAobnVtKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkTXVsIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHRoaXMucmVkLl92ZXJpZnkyKHRoaXMsIG51bSk7XG4gICAgcmV0dXJuIHRoaXMucmVkLm11bCh0aGlzLCBudW0pO1xuICB9O1xuXG4gIEJOLnByb3RvdHlwZS5yZWRJTXVsID0gZnVuY3Rpb24gcmVkSU11bCAobnVtKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkTXVsIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICAgIHRoaXMucmVkLl92ZXJpZnkyKHRoaXMsIG51bSk7XG4gICAgcmV0dXJuIHRoaXMucmVkLmltdWwodGhpcywgbnVtKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkU3FyID0gZnVuY3Rpb24gcmVkU3FyICgpIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWRTcXIgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgdGhpcy5yZWQuX3ZlcmlmeTEodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLnNxcih0aGlzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkSVNxciA9IGZ1bmN0aW9uIHJlZElTcXIgKCkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZElTcXIgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgdGhpcy5yZWQuX3ZlcmlmeTEodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLmlzcXIodGhpcyk7XG4gIH07XG5cbiAgLy8gU3F1YXJlIHJvb3Qgb3ZlciBwXG4gIEJOLnByb3RvdHlwZS5yZWRTcXJ0ID0gZnVuY3Rpb24gcmVkU3FydCAoKSB7XG4gICAgYXNzZXJ0KHRoaXMucmVkLCAncmVkU3FydCB3b3JrcyBvbmx5IHdpdGggcmVkIG51bWJlcnMnKTtcbiAgICB0aGlzLnJlZC5fdmVyaWZ5MSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5yZWQuc3FydCh0aGlzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkSW52bSA9IGZ1bmN0aW9uIHJlZEludm0gKCkge1xuICAgIGFzc2VydCh0aGlzLnJlZCwgJ3JlZEludm0gd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgdGhpcy5yZWQuX3ZlcmlmeTEodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLmludm0odGhpcyk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIG5lZ2F0aXZlIGNsb25lIG9mIGB0aGlzYCAlIGByZWQgbW9kdWxvYFxuICBCTi5wcm90b3R5cGUucmVkTmVnID0gZnVuY3Rpb24gcmVkTmVnICgpIHtcbiAgICBhc3NlcnQodGhpcy5yZWQsICdyZWROZWcgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gICAgdGhpcy5yZWQuX3ZlcmlmeTEodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMucmVkLm5lZyh0aGlzKTtcbiAgfTtcblxuICBCTi5wcm90b3R5cGUucmVkUG93ID0gZnVuY3Rpb24gcmVkUG93IChudW0pIHtcbiAgICBhc3NlcnQodGhpcy5yZWQgJiYgIW51bS5yZWQsICdyZWRQb3cobm9ybWFsTnVtKScpO1xuICAgIHRoaXMucmVkLl92ZXJpZnkxKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnJlZC5wb3codGhpcywgbnVtKTtcbiAgfTtcblxuICAvLyBQcmltZSBudW1iZXJzIHdpdGggZWZmaWNpZW50IHJlZHVjdGlvblxuICB2YXIgcHJpbWVzID0ge1xuICAgIGsyNTY6IG51bGwsXG4gICAgcDIyNDogbnVsbCxcbiAgICBwMTkyOiBudWxsLFxuICAgIHAyNTUxOTogbnVsbFxuICB9O1xuXG4gIC8vIFBzZXVkby1NZXJzZW5uZSBwcmltZVxuICBmdW5jdGlvbiBNUHJpbWUgKG5hbWUsIHApIHtcbiAgICAvLyBQID0gMiBeIE4gLSBLXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnAgPSBuZXcgQk4ocCwgMTYpO1xuICAgIHRoaXMubiA9IHRoaXMucC5iaXRMZW5ndGgoKTtcbiAgICB0aGlzLmsgPSBuZXcgQk4oMSkuaXVzaGxuKHRoaXMubikuaXN1Yih0aGlzLnApO1xuXG4gICAgdGhpcy50bXAgPSB0aGlzLl90bXAoKTtcbiAgfVxuXG4gIE1QcmltZS5wcm90b3R5cGUuX3RtcCA9IGZ1bmN0aW9uIF90bXAgKCkge1xuICAgIHZhciB0bXAgPSBuZXcgQk4obnVsbCk7XG4gICAgdG1wLndvcmRzID0gbmV3IEFycmF5KE1hdGguY2VpbCh0aGlzLm4gLyAxMykpO1xuICAgIHJldHVybiB0bXA7XG4gIH07XG5cbiAgTVByaW1lLnByb3RvdHlwZS5pcmVkdWNlID0gZnVuY3Rpb24gaXJlZHVjZSAobnVtKSB7XG4gICAgLy8gQXNzdW1lcyB0aGF0IGBudW1gIGlzIGxlc3MgdGhhbiBgUF4yYFxuICAgIC8vIG51bSA9IEhJICogKDIgXiBOIC0gSykgKyBISSAqIEsgKyBMTyA9IEhJICogSyArIExPIChtb2QgUClcbiAgICB2YXIgciA9IG51bTtcbiAgICB2YXIgcmxlbjtcblxuICAgIGRvIHtcbiAgICAgIHRoaXMuc3BsaXQociwgdGhpcy50bXApO1xuICAgICAgciA9IHRoaXMuaW11bEsocik7XG4gICAgICByID0gci5pYWRkKHRoaXMudG1wKTtcbiAgICAgIHJsZW4gPSByLmJpdExlbmd0aCgpO1xuICAgIH0gd2hpbGUgKHJsZW4gPiB0aGlzLm4pO1xuXG4gICAgdmFyIGNtcCA9IHJsZW4gPCB0aGlzLm4gPyAtMSA6IHIudWNtcCh0aGlzLnApO1xuICAgIGlmIChjbXAgPT09IDApIHtcbiAgICAgIHIud29yZHNbMF0gPSAwO1xuICAgICAgci5sZW5ndGggPSAxO1xuICAgIH0gZWxzZSBpZiAoY21wID4gMCkge1xuICAgICAgci5pc3ViKHRoaXMucCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyLnN0cmlwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gciBpcyBCTiB2NCBpbnN0YW5jZVxuICAgICAgICByLnN0cmlwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByIGlzIEJOIHY1IGluc3RhbmNlXG4gICAgICAgIHIuX3N0cmlwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgTVByaW1lLnByb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uIHNwbGl0IChpbnB1dCwgb3V0KSB7XG4gICAgaW5wdXQuaXVzaHJuKHRoaXMubiwgMCwgb3V0KTtcbiAgfTtcblxuICBNUHJpbWUucHJvdG90eXBlLmltdWxLID0gZnVuY3Rpb24gaW11bEsgKG51bSkge1xuICAgIHJldHVybiBudW0uaW11bCh0aGlzLmspO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEsyNTYgKCkge1xuICAgIE1QcmltZS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgICdrMjU2JyxcbiAgICAgICdmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZSBmZmZmZmMyZicpO1xuICB9XG4gIGluaGVyaXRzKEsyNTYsIE1QcmltZSk7XG5cbiAgSzI1Ni5wcm90b3R5cGUuc3BsaXQgPSBmdW5jdGlvbiBzcGxpdCAoaW5wdXQsIG91dHB1dCkge1xuICAgIC8vIDI1NiA9IDkgKiAyNiArIDIyXG4gICAgdmFyIG1hc2sgPSAweDNmZmZmZjtcblxuICAgIHZhciBvdXRMZW4gPSBNYXRoLm1pbihpbnB1dC5sZW5ndGgsIDkpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3V0TGVuOyBpKyspIHtcbiAgICAgIG91dHB1dC53b3Jkc1tpXSA9IGlucHV0LndvcmRzW2ldO1xuICAgIH1cbiAgICBvdXRwdXQubGVuZ3RoID0gb3V0TGVuO1xuXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA8PSA5KSB7XG4gICAgICBpbnB1dC53b3Jkc1swXSA9IDA7XG4gICAgICBpbnB1dC5sZW5ndGggPSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNoaWZ0IGJ5IDkgbGltYnNcbiAgICB2YXIgcHJldiA9IGlucHV0LndvcmRzWzldO1xuICAgIG91dHB1dC53b3Jkc1tvdXRwdXQubGVuZ3RoKytdID0gcHJldiAmIG1hc2s7XG5cbiAgICBmb3IgKGkgPSAxMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbmV4dCA9IGlucHV0LndvcmRzW2ldIHwgMDtcbiAgICAgIGlucHV0LndvcmRzW2kgLSAxMF0gPSAoKG5leHQgJiBtYXNrKSA8PCA0KSB8IChwcmV2ID4+PiAyMik7XG4gICAgICBwcmV2ID0gbmV4dDtcbiAgICB9XG4gICAgcHJldiA+Pj49IDIyO1xuICAgIGlucHV0LndvcmRzW2kgLSAxMF0gPSBwcmV2O1xuICAgIGlmIChwcmV2ID09PSAwICYmIGlucHV0Lmxlbmd0aCA+IDEwKSB7XG4gICAgICBpbnB1dC5sZW5ndGggLT0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0Lmxlbmd0aCAtPSA5O1xuICAgIH1cbiAgfTtcblxuICBLMjU2LnByb3RvdHlwZS5pbXVsSyA9IGZ1bmN0aW9uIGltdWxLIChudW0pIHtcbiAgICAvLyBLID0gMHgxMDAwMDAzZDEgPSBbIDB4NDAsIDB4M2QxIF1cbiAgICBudW0ud29yZHNbbnVtLmxlbmd0aF0gPSAwO1xuICAgIG51bS53b3Jkc1tudW0ubGVuZ3RoICsgMV0gPSAwO1xuICAgIG51bS5sZW5ndGggKz0gMjtcblxuICAgIC8vIGJvdW5kZWQgYXQ6IDB4NDAgKiAweDNmZmZmZmYgKyAweDNkMCA9IDB4MTAwMDAwMzkwXG4gICAgdmFyIGxvID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHcgPSBudW0ud29yZHNbaV0gfCAwO1xuICAgICAgbG8gKz0gdyAqIDB4M2QxO1xuICAgICAgbnVtLndvcmRzW2ldID0gbG8gJiAweDNmZmZmZmY7XG4gICAgICBsbyA9IHcgKiAweDQwICsgKChsbyAvIDB4NDAwMDAwMCkgfCAwKTtcbiAgICB9XG5cbiAgICAvLyBGYXN0IGxlbmd0aCByZWR1Y3Rpb25cbiAgICBpZiAobnVtLndvcmRzW251bS5sZW5ndGggLSAxXSA9PT0gMCkge1xuICAgICAgbnVtLmxlbmd0aC0tO1xuICAgICAgaWYgKG51bS53b3Jkc1tudW0ubGVuZ3RoIC0gMV0gPT09IDApIHtcbiAgICAgICAgbnVtLmxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVtO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFAyMjQgKCkge1xuICAgIE1QcmltZS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgICdwMjI0JyxcbiAgICAgICdmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiBmZmZmZmZmZiAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMScpO1xuICB9XG4gIGluaGVyaXRzKFAyMjQsIE1QcmltZSk7XG5cbiAgZnVuY3Rpb24gUDE5MiAoKSB7XG4gICAgTVByaW1lLmNhbGwoXG4gICAgICB0aGlzLFxuICAgICAgJ3AxOTInLFxuICAgICAgJ2ZmZmZmZmZmIGZmZmZmZmZmIGZmZmZmZmZmIGZmZmZmZmZlIGZmZmZmZmZmIGZmZmZmZmZmJyk7XG4gIH1cbiAgaW5oZXJpdHMoUDE5MiwgTVByaW1lKTtcblxuICBmdW5jdGlvbiBQMjU1MTkgKCkge1xuICAgIC8vIDIgXiAyNTUgLSAxOVxuICAgIE1QcmltZS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgICcyNTUxOScsXG4gICAgICAnN2ZmZmZmZmZmZmZmZmZmZiBmZmZmZmZmZmZmZmZmZmZmIGZmZmZmZmZmZmZmZmZmZmYgZmZmZmZmZmZmZmZmZmZlZCcpO1xuICB9XG4gIGluaGVyaXRzKFAyNTUxOSwgTVByaW1lKTtcblxuICBQMjU1MTkucHJvdG90eXBlLmltdWxLID0gZnVuY3Rpb24gaW11bEsgKG51bSkge1xuICAgIC8vIEsgPSAweDEzXG4gICAgdmFyIGNhcnJ5ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhpID0gKG51bS53b3Jkc1tpXSB8IDApICogMHgxMyArIGNhcnJ5O1xuICAgICAgdmFyIGxvID0gaGkgJiAweDNmZmZmZmY7XG4gICAgICBoaSA+Pj49IDI2O1xuXG4gICAgICBudW0ud29yZHNbaV0gPSBsbztcbiAgICAgIGNhcnJ5ID0gaGk7XG4gICAgfVxuICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgbnVtLndvcmRzW251bS5sZW5ndGgrK10gPSBjYXJyeTtcbiAgICB9XG4gICAgcmV0dXJuIG51bTtcbiAgfTtcblxuICAvLyBFeHBvcnRlZCBtb3N0bHkgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHVzZSBwbGFpbiBuYW1lIGluc3RlYWRcbiAgQk4uX3ByaW1lID0gZnVuY3Rpb24gcHJpbWUgKG5hbWUpIHtcbiAgICAvLyBDYWNoZWQgdmVyc2lvbiBvZiBwcmltZVxuICAgIGlmIChwcmltZXNbbmFtZV0pIHJldHVybiBwcmltZXNbbmFtZV07XG5cbiAgICB2YXIgcHJpbWU7XG4gICAgaWYgKG5hbWUgPT09ICdrMjU2Jykge1xuICAgICAgcHJpbWUgPSBuZXcgSzI1NigpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3AyMjQnKSB7XG4gICAgICBwcmltZSA9IG5ldyBQMjI0KCk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAncDE5MicpIHtcbiAgICAgIHByaW1lID0gbmV3IFAxOTIoKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdwMjU1MTknKSB7XG4gICAgICBwcmltZSA9IG5ldyBQMjU1MTkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHByaW1lICcgKyBuYW1lKTtcbiAgICB9XG4gICAgcHJpbWVzW25hbWVdID0gcHJpbWU7XG5cbiAgICByZXR1cm4gcHJpbWU7XG4gIH07XG5cbiAgLy9cbiAgLy8gQmFzZSByZWR1Y3Rpb24gZW5naW5lXG4gIC8vXG4gIGZ1bmN0aW9uIFJlZCAobSkge1xuICAgIGlmICh0eXBlb2YgbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcmltZSA9IEJOLl9wcmltZShtKTtcbiAgICAgIHRoaXMubSA9IHByaW1lLnA7XG4gICAgICB0aGlzLnByaW1lID0gcHJpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2VydChtLmd0bigxKSwgJ21vZHVsdXMgbXVzdCBiZSBncmVhdGVyIHRoYW4gMScpO1xuICAgICAgdGhpcy5tID0gbTtcbiAgICAgIHRoaXMucHJpbWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIFJlZC5wcm90b3R5cGUuX3ZlcmlmeTEgPSBmdW5jdGlvbiBfdmVyaWZ5MSAoYSkge1xuICAgIGFzc2VydChhLm5lZ2F0aXZlID09PSAwLCAncmVkIHdvcmtzIG9ubHkgd2l0aCBwb3NpdGl2ZXMnKTtcbiAgICBhc3NlcnQoYS5yZWQsICdyZWQgd29ya3Mgb25seSB3aXRoIHJlZCBudW1iZXJzJyk7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5fdmVyaWZ5MiA9IGZ1bmN0aW9uIF92ZXJpZnkyIChhLCBiKSB7XG4gICAgYXNzZXJ0KChhLm5lZ2F0aXZlIHwgYi5uZWdhdGl2ZSkgPT09IDAsICdyZWQgd29ya3Mgb25seSB3aXRoIHBvc2l0aXZlcycpO1xuICAgIGFzc2VydChhLnJlZCAmJiBhLnJlZCA9PT0gYi5yZWQsXG4gICAgICAncmVkIHdvcmtzIG9ubHkgd2l0aCByZWQgbnVtYmVycycpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuaW1vZCA9IGZ1bmN0aW9uIGltb2QgKGEpIHtcbiAgICBpZiAodGhpcy5wcmltZSkgcmV0dXJuIHRoaXMucHJpbWUuaXJlZHVjZShhKS5fZm9yY2VSZWQodGhpcyk7XG4gICAgcmV0dXJuIGEudW1vZCh0aGlzLm0pLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLm5lZyA9IGZ1bmN0aW9uIG5lZyAoYSkge1xuICAgIGlmIChhLmlzWmVybygpKSB7XG4gICAgICByZXR1cm4gYS5jbG9uZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm0uc3ViKGEpLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoYSwgYikge1xuICAgIHRoaXMuX3ZlcmlmeTIoYSwgYik7XG5cbiAgICB2YXIgcmVzID0gYS5hZGQoYik7XG4gICAgaWYgKHJlcy5jbXAodGhpcy5tKSA+PSAwKSB7XG4gICAgICByZXMuaXN1Yih0aGlzLm0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmlhZGQgPSBmdW5jdGlvbiBpYWRkIChhLCBiKSB7XG4gICAgdGhpcy5fdmVyaWZ5MihhLCBiKTtcblxuICAgIHZhciByZXMgPSBhLmlhZGQoYik7XG4gICAgaWYgKHJlcy5jbXAodGhpcy5tKSA+PSAwKSB7XG4gICAgICByZXMuaXN1Yih0aGlzLm0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24gc3ViIChhLCBiKSB7XG4gICAgdGhpcy5fdmVyaWZ5MihhLCBiKTtcblxuICAgIHZhciByZXMgPSBhLnN1YihiKTtcbiAgICBpZiAocmVzLmNtcG4oMCkgPCAwKSB7XG4gICAgICByZXMuaWFkZCh0aGlzLm0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLl9mb3JjZVJlZCh0aGlzKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmlzdWIgPSBmdW5jdGlvbiBpc3ViIChhLCBiKSB7XG4gICAgdGhpcy5fdmVyaWZ5MihhLCBiKTtcblxuICAgIHZhciByZXMgPSBhLmlzdWIoYik7XG4gICAgaWYgKHJlcy5jbXBuKDApIDwgMCkge1xuICAgICAgcmVzLmlhZGQodGhpcy5tKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLnNobCA9IGZ1bmN0aW9uIHNobCAoYSwgbnVtKSB7XG4gICAgdGhpcy5fdmVyaWZ5MShhKTtcbiAgICByZXR1cm4gdGhpcy5pbW9kKGEudXNobG4obnVtKSk7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5pbXVsID0gZnVuY3Rpb24gaW11bCAoYSwgYikge1xuICAgIHRoaXMuX3ZlcmlmeTIoYSwgYik7XG4gICAgcmV0dXJuIHRoaXMuaW1vZChhLmltdWwoYikpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUubXVsID0gZnVuY3Rpb24gbXVsIChhLCBiKSB7XG4gICAgdGhpcy5fdmVyaWZ5MihhLCBiKTtcbiAgICByZXR1cm4gdGhpcy5pbW9kKGEubXVsKGIpKTtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmlzcXIgPSBmdW5jdGlvbiBpc3FyIChhKSB7XG4gICAgcmV0dXJuIHRoaXMuaW11bChhLCBhLmNsb25lKCkpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuc3FyID0gZnVuY3Rpb24gc3FyIChhKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsKGEsIGEpO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuc3FydCA9IGZ1bmN0aW9uIHNxcnQgKGEpIHtcbiAgICBpZiAoYS5pc1plcm8oKSkgcmV0dXJuIGEuY2xvbmUoKTtcblxuICAgIHZhciBtb2QzID0gdGhpcy5tLmFuZGxuKDMpO1xuICAgIGFzc2VydChtb2QzICUgMiA9PT0gMSk7XG5cbiAgICAvLyBGYXN0IGNhc2VcbiAgICBpZiAobW9kMyA9PT0gMykge1xuICAgICAgdmFyIHBvdyA9IHRoaXMubS5hZGQobmV3IEJOKDEpKS5pdXNocm4oMik7XG4gICAgICByZXR1cm4gdGhpcy5wb3coYSwgcG93KTtcbiAgICB9XG5cbiAgICAvLyBUb25lbGxpLVNoYW5rcyBhbGdvcml0aG0gKFRvdGFsbHkgdW5vcHRpbWl6ZWQgYW5kIHNsb3cpXG4gICAgLy9cbiAgICAvLyBGaW5kIFEgYW5kIFMsIHRoYXQgUSAqIDIgXiBTID0gKFAgLSAxKVxuICAgIHZhciBxID0gdGhpcy5tLnN1Ym4oMSk7XG4gICAgdmFyIHMgPSAwO1xuICAgIHdoaWxlICghcS5pc1plcm8oKSAmJiBxLmFuZGxuKDEpID09PSAwKSB7XG4gICAgICBzKys7XG4gICAgICBxLml1c2hybigxKTtcbiAgICB9XG4gICAgYXNzZXJ0KCFxLmlzWmVybygpKTtcblxuICAgIHZhciBvbmUgPSBuZXcgQk4oMSkudG9SZWQodGhpcyk7XG4gICAgdmFyIG5PbmUgPSBvbmUucmVkTmVnKCk7XG5cbiAgICAvLyBGaW5kIHF1YWRyYXRpYyBub24tcmVzaWR1ZVxuICAgIC8vIE5PVEU6IE1heCBpcyBzdWNoIGJlY2F1c2Ugb2YgZ2VuZXJhbGl6ZWQgUmllbWFubiBoeXBvdGhlc2lzLlxuICAgIHZhciBscG93ID0gdGhpcy5tLnN1Ym4oMSkuaXVzaHJuKDEpO1xuICAgIHZhciB6ID0gdGhpcy5tLmJpdExlbmd0aCgpO1xuICAgIHogPSBuZXcgQk4oMiAqIHogKiB6KS50b1JlZCh0aGlzKTtcblxuICAgIHdoaWxlICh0aGlzLnBvdyh6LCBscG93KS5jbXAobk9uZSkgIT09IDApIHtcbiAgICAgIHoucmVkSUFkZChuT25lKTtcbiAgICB9XG5cbiAgICB2YXIgYyA9IHRoaXMucG93KHosIHEpO1xuICAgIHZhciByID0gdGhpcy5wb3coYSwgcS5hZGRuKDEpLml1c2hybigxKSk7XG4gICAgdmFyIHQgPSB0aGlzLnBvdyhhLCBxKTtcbiAgICB2YXIgbSA9IHM7XG4gICAgd2hpbGUgKHQuY21wKG9uZSkgIT09IDApIHtcbiAgICAgIHZhciB0bXAgPSB0O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IHRtcC5jbXAob25lKSAhPT0gMDsgaSsrKSB7XG4gICAgICAgIHRtcCA9IHRtcC5yZWRTcXIoKTtcbiAgICAgIH1cbiAgICAgIGFzc2VydChpIDwgbSk7XG4gICAgICB2YXIgYiA9IHRoaXMucG93KGMsIG5ldyBCTigxKS5pdXNobG4obSAtIGkgLSAxKSk7XG5cbiAgICAgIHIgPSByLnJlZE11bChiKTtcbiAgICAgIGMgPSBiLnJlZFNxcigpO1xuICAgICAgdCA9IHQucmVkTXVsKGMpO1xuICAgICAgbSA9IGk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5pbnZtID0gZnVuY3Rpb24gaW52bSAoYSkge1xuICAgIHZhciBpbnYgPSBhLl9pbnZtcCh0aGlzLm0pO1xuICAgIGlmIChpbnYubmVnYXRpdmUgIT09IDApIHtcbiAgICAgIGludi5uZWdhdGl2ZSA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5pbW9kKGludikucmVkTmVnKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmltb2QoaW52KTtcbiAgICB9XG4gIH07XG5cbiAgUmVkLnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiBwb3cgKGEsIG51bSkge1xuICAgIGlmIChudW0uaXNaZXJvKCkpIHJldHVybiBuZXcgQk4oMSkudG9SZWQodGhpcyk7XG4gICAgaWYgKG51bS5jbXBuKDEpID09PSAwKSByZXR1cm4gYS5jbG9uZSgpO1xuXG4gICAgdmFyIHdpbmRvd1NpemUgPSA0O1xuICAgIHZhciB3bmQgPSBuZXcgQXJyYXkoMSA8PCB3aW5kb3dTaXplKTtcbiAgICB3bmRbMF0gPSBuZXcgQk4oMSkudG9SZWQodGhpcyk7XG4gICAgd25kWzFdID0gYTtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IHduZC5sZW5ndGg7IGkrKykge1xuICAgICAgd25kW2ldID0gdGhpcy5tdWwod25kW2kgLSAxXSwgYSk7XG4gICAgfVxuXG4gICAgdmFyIHJlcyA9IHduZFswXTtcbiAgICB2YXIgY3VycmVudCA9IDA7XG4gICAgdmFyIGN1cnJlbnRMZW4gPSAwO1xuICAgIHZhciBzdGFydCA9IG51bS5iaXRMZW5ndGgoKSAlIDI2O1xuICAgIGlmIChzdGFydCA9PT0gMCkge1xuICAgICAgc3RhcnQgPSAyNjtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBudW0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciB3b3JkID0gbnVtLndvcmRzW2ldO1xuICAgICAgZm9yICh2YXIgaiA9IHN0YXJ0IC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgdmFyIGJpdCA9ICh3b3JkID4+IGopICYgMTtcbiAgICAgICAgaWYgKHJlcyAhPT0gd25kWzBdKSB7XG4gICAgICAgICAgcmVzID0gdGhpcy5zcXIocmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiaXQgPT09IDAgJiYgY3VycmVudCA9PT0gMCkge1xuICAgICAgICAgIGN1cnJlbnRMZW4gPSAwO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudCA8PD0gMTtcbiAgICAgICAgY3VycmVudCB8PSBiaXQ7XG4gICAgICAgIGN1cnJlbnRMZW4rKztcbiAgICAgICAgaWYgKGN1cnJlbnRMZW4gIT09IHdpbmRvd1NpemUgJiYgKGkgIT09IDAgfHwgaiAhPT0gMCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIHJlcyA9IHRoaXMubXVsKHJlcywgd25kW2N1cnJlbnRdKTtcbiAgICAgICAgY3VycmVudExlbiA9IDA7XG4gICAgICAgIGN1cnJlbnQgPSAwO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAyNjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIFJlZC5wcm90b3R5cGUuY29udmVydFRvID0gZnVuY3Rpb24gY29udmVydFRvIChudW0pIHtcbiAgICB2YXIgciA9IG51bS51bW9kKHRoaXMubSk7XG5cbiAgICByZXR1cm4gciA9PT0gbnVtID8gci5jbG9uZSgpIDogcjtcbiAgfTtcblxuICBSZWQucHJvdG90eXBlLmNvbnZlcnRGcm9tID0gZnVuY3Rpb24gY29udmVydEZyb20gKG51bSkge1xuICAgIHZhciByZXMgPSBudW0uY2xvbmUoKTtcbiAgICByZXMucmVkID0gbnVsbDtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIC8vXG4gIC8vIE1vbnRnb21lcnkgbWV0aG9kIGVuZ2luZVxuICAvL1xuXG4gIEJOLm1vbnQgPSBmdW5jdGlvbiBtb250IChudW0pIHtcbiAgICByZXR1cm4gbmV3IE1vbnQobnVtKTtcbiAgfTtcblxuICBmdW5jdGlvbiBNb250IChtKSB7XG4gICAgUmVkLmNhbGwodGhpcywgbSk7XG5cbiAgICB0aGlzLnNoaWZ0ID0gdGhpcy5tLmJpdExlbmd0aCgpO1xuICAgIGlmICh0aGlzLnNoaWZ0ICUgMjYgIT09IDApIHtcbiAgICAgIHRoaXMuc2hpZnQgKz0gMjYgLSAodGhpcy5zaGlmdCAlIDI2KTtcbiAgICB9XG5cbiAgICB0aGlzLnIgPSBuZXcgQk4oMSkuaXVzaGxuKHRoaXMuc2hpZnQpO1xuICAgIHRoaXMucjIgPSB0aGlzLmltb2QodGhpcy5yLnNxcigpKTtcbiAgICB0aGlzLnJpbnYgPSB0aGlzLnIuX2ludm1wKHRoaXMubSk7XG5cbiAgICB0aGlzLm1pbnYgPSB0aGlzLnJpbnYubXVsKHRoaXMucikuaXN1Ym4oMSkuZGl2KHRoaXMubSk7XG4gICAgdGhpcy5taW52ID0gdGhpcy5taW52LnVtb2QodGhpcy5yKTtcbiAgICB0aGlzLm1pbnYgPSB0aGlzLnIuc3ViKHRoaXMubWludik7XG4gIH1cbiAgaW5oZXJpdHMoTW9udCwgUmVkKTtcblxuICBNb250LnByb3RvdHlwZS5jb252ZXJ0VG8gPSBmdW5jdGlvbiBjb252ZXJ0VG8gKG51bSkge1xuICAgIHJldHVybiB0aGlzLmltb2QobnVtLnVzaGxuKHRoaXMuc2hpZnQpKTtcbiAgfTtcblxuICBNb250LnByb3RvdHlwZS5jb252ZXJ0RnJvbSA9IGZ1bmN0aW9uIGNvbnZlcnRGcm9tIChudW0pIHtcbiAgICB2YXIgciA9IHRoaXMuaW1vZChudW0ubXVsKHRoaXMucmludikpO1xuICAgIHIucmVkID0gbnVsbDtcbiAgICByZXR1cm4gcjtcbiAgfTtcblxuICBNb250LnByb3RvdHlwZS5pbXVsID0gZnVuY3Rpb24gaW11bCAoYSwgYikge1xuICAgIGlmIChhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpIHtcbiAgICAgIGEud29yZHNbMF0gPSAwO1xuICAgICAgYS5sZW5ndGggPSAxO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgdmFyIHQgPSBhLmltdWwoYik7XG4gICAgdmFyIGMgPSB0Lm1hc2tuKHRoaXMuc2hpZnQpLm11bCh0aGlzLm1pbnYpLmltYXNrbih0aGlzLnNoaWZ0KS5tdWwodGhpcy5tKTtcbiAgICB2YXIgdSA9IHQuaXN1YihjKS5pdXNocm4odGhpcy5zaGlmdCk7XG4gICAgdmFyIHJlcyA9IHU7XG5cbiAgICBpZiAodS5jbXAodGhpcy5tKSA+PSAwKSB7XG4gICAgICByZXMgPSB1LmlzdWIodGhpcy5tKTtcbiAgICB9IGVsc2UgaWYgKHUuY21wbigwKSA8IDApIHtcbiAgICAgIHJlcyA9IHUuaWFkZCh0aGlzLm0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuX2ZvcmNlUmVkKHRoaXMpO1xuICB9O1xuXG4gIE1vbnQucHJvdG90eXBlLm11bCA9IGZ1bmN0aW9uIG11bCAoYSwgYikge1xuICAgIGlmIChhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpIHJldHVybiBuZXcgQk4oMCkuX2ZvcmNlUmVkKHRoaXMpO1xuXG4gICAgdmFyIHQgPSBhLm11bChiKTtcbiAgICB2YXIgYyA9IHQubWFza24odGhpcy5zaGlmdCkubXVsKHRoaXMubWludikuaW1hc2tuKHRoaXMuc2hpZnQpLm11bCh0aGlzLm0pO1xuICAgIHZhciB1ID0gdC5pc3ViKGMpLml1c2hybih0aGlzLnNoaWZ0KTtcbiAgICB2YXIgcmVzID0gdTtcbiAgICBpZiAodS5jbXAodGhpcy5tKSA+PSAwKSB7XG4gICAgICByZXMgPSB1LmlzdWIodGhpcy5tKTtcbiAgICB9IGVsc2UgaWYgKHUuY21wbigwKSA8IDApIHtcbiAgICAgIHJlcyA9IHUuaWFkZCh0aGlzLm0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuX2ZvcmNlUmVkKHRoaXMpO1xuICB9O1xuXG4gIE1vbnQucHJvdG90eXBlLmludm0gPSBmdW5jdGlvbiBpbnZtIChhKSB7XG4gICAgLy8gKEFSKV4tMSAqIFJeMiA9IChBXi0xICogUl4tMSkgKiBSXjIgPSBBXi0xICogUlxuICAgIHZhciByZXMgPSB0aGlzLmltb2QoYS5faW52bXAodGhpcy5tKS5tdWwodGhpcy5yMikpO1xuICAgIHJldHVybiByZXMuX2ZvcmNlUmVkKHRoaXMpO1xuICB9O1xufSkodHlwZW9mIG1vZHVsZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbW9kdWxlLCB0aGlzKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHsgZnJvbVdlaSwgVW5pdHMsIFVuaXQgfSBmcm9tICdAaGFybW9ueS1qcy91dGlscyc7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlkTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGNvbnRyYWN0LFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0b2tlbklkLFxuXHRldmVudElkLFxuXHR0b0FkZHJlc3MsXG5cdHR5cGUsXG5cdEhpZ2hlc3RiaWRcblxufSkge1xuXHRjb25zdCBbQWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblxuXHRjb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIilcblx0Y29uc3QgQ29udHJhY3RLaXQgPSByZXF1aXJlKCdAY2Vsby9jb250cmFjdGtpdCcpXG5cdGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXG5cdGNvbnN0IGtpdCA9IENvbnRyYWN0S2l0Lm5ld0tpdEZyb21XZWIzKHdlYjMpXG4gIFxuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoKSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoYEFtb3VudCBjYW5ub3QgYmUgdW5kZXIgJHtIaWdoZXN0YmlkfSBDRUxPIERvbGxhciAoQ1VTRClgKVxuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVCgpIHtcblx0XHRcblx0XHRpZiAoQW1vdW50IDwgSGlnaGVzdGJpZCkge1xuXHRcdFx0YWN0aXZhdGVXYXJuaW5nTW9kYWwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGNVU0R0b2tlbiA9IGF3YWl0IGtpdC5jb250cmFjdHMuZ2V0U3RhYmxlVG9rZW4oKVxuXG5cdFx0bGV0IGNVU0R0eCA9IGF3YWl0IGNVU0R0b2tlbi50cmFuc2Zlcih0b0FkZHJlc3MsIEFtb3VudCkuc2VuZCh7ZnJvbTogc2VuZGVyQWRkcmVzcywgZmVlQ3VycmVuY3k6IGNVU0R0b2tlbi5hZGRyZXNzfSlcblxuXG5cdFx0Ly8gY29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSSh0b2tlbklkKTtcblx0XHQvLyB2YXIgcGFyc2VkID0gYXdhaXQgSlNPTi5wYXJzZSh0b2tlblVyaSk7XG5cdFx0Ly8gaWYgKE51bWJlcihwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSkgPCBOdW1iZXIoQW1vdW50KSkge1xuXHRcdC8vIFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10gPSBBbW91bnQ7XG5cdFx0Ly8gXHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsnaGlnaGVyYmlkYWRkJ11bJ2Rlc2NyaXB0aW9uJ10gPSBzZW5kZXJBZGRyZXNzO1xuXG5cdFx0Ly8gfVxuXHRcdC8vIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0Ly8gY29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHQvLyBcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEgQmlkcycsXG5cdFx0Ly8gXHR0eXBlOiAnb2JqZWN0Jyxcblx0XHQvLyBcdHByb3BlcnRpZXM6IHtcblx0XHQvLyBcdFx0dXNlcm5hbWU6IHtcblx0XHQvLyBcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHQvLyBcdFx0XHRkZXNjcmlwdGlvbjogc2VuZGVyQWRkcmVzc1xuXHRcdC8vIFx0XHR9LFxuXHRcdC8vIFx0XHRiaWQ6IHtcblx0XHQvLyBcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHQvLyBcdFx0XHRkZXNjcmlwdGlvbjogQW1vdW50XG5cdFx0Ly8gXHRcdH0sXG5cdFx0Ly8gXHRcdHRpbWU6IHtcblx0XHQvLyBcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHQvLyBcdFx0XHRkZXNjcmlwdGlvbjogY3VycmVudERhdGVcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIH07XG5cdFx0Ly8gbGV0IENVU0RpbkZ1bGwgPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblx0XHQvLyBsZXQgY1VTRGNvbnRyYWN0RGF0YSA9ICcweDg3NDA2OUZhMUViMTZENDRkNjIyRjJlMENhMjVlZUExNzIzNjliQzEnXG5cblxuXG5cdFx0Ly8gY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlQmlkKHRva2VuSWQsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpLCBKU09OLnN0cmluZ2lmeShwYXJzZWQpLCBldmVudElkLCB7XG5cdFx0Ly8gXHRmcm9tOiBzZW5kZXJBZGRyZXNzLFxuXHRcdC8vIFx0Z2FzUHJpY2U6IDEwMDAwMDAwMDAwMCwgdmFsdWU6IENVU0RpbkZ1bGxcblx0XHQvLyB9KTtcblxuXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pIDogKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0KX1cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdDxkaXYgaWQ9J2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIGZvbnRTaXplOlwiMzBweFwiIH19IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5CaWQgQW1vdW50IGluIENFTE8gRG9sbGFyIChDVVNEKTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtiaWRORlR9PlxuXHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHQ8L01vZGFsPlxuXG5cdCk7XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOGEwYzRkYjY3NzQ4N2ZhNDhlMzJcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwiZnJvbVdlaSIsIlVuaXRzIiwiVW5pdCIsIlVzZUZvcm1JbnB1dCIsIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInRva2VuSWQiLCJldmVudElkIiwidG9BZGRyZXNzIiwidHlwZSIsIkhpZ2hlc3RiaWQiLCJBbGVydCIsInNldEFsZXJ0IiwiV2ViMyIsInJlcXVpcmUiLCJDb250cmFjdEtpdCIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImtpdCIsIm5ld0tpdEZyb21XZWIzIiwicGxhY2Vob2xkZXIiLCJBbW91bnQiLCJBbW91bnRJbnB1dCIsImFjdGl2YXRlV2FybmluZ01vZGFsIiwiYWxlcnRFTE0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiaWRORlQiLCJjb250cmFjdHMiLCJnZXRTdGFibGVUb2tlbiIsImNVU0R0b2tlbiIsInRyYW5zZmVyIiwic2VuZCIsImZyb20iLCJmZWVDdXJyZW5jeSIsImFkZHJlc3MiLCJjVVNEdHgiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXNwbGF5IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9