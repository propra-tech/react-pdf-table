"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBody = void 0;
var React = require("react");
var TableRow_1 = require("./TableRow");
var Utils_1 = require("./Utils");
var TableBody = function (props) {
    var _a;
    var rowCells = React.Children.toArray(props.children);
    var _b = (0, Utils_1.getDefaultBorderIncludes)(props), includeLeftBorder = _b.includeLeftBorder, includeBottomBorder = _b.includeBottomBorder, includeRightBorder = _b.includeRightBorder;
    var dataRows = (_a = props.data) !== null && _a !== void 0 ? _a : [];
    return (React.createElement(React.Fragment, null, dataRows.map(function (data, rowIndex) {
        var _a;
        return (React.createElement(TableRow_1.TableRow, __assign({}, props, { key: rowIndex, even: rowIndex % 2 === 0, data: data, includeLeftBorder: includeLeftBorder, includeBottomBorder: includeBottomBorder, includeRightBorder: includeRightBorder, includeTopBorder: (_a = props.renderTopBorder) !== null && _a !== void 0 ? _a : false }), rowCells));
    })));
};
exports.TableBody = TableBody;
//# sourceMappingURL=TableBody.js.map