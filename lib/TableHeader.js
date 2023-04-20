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
exports.TableHeader = void 0;
var React = require("react");
var TableRow_1 = require("./TableRow");
var Utils_1 = require("./Utils");
var TableHeader = function (props) {
    var _a = (0, Utils_1.getDefaultBorderIncludes)(props), includeLeftBorder = _a.includeLeftBorder, includeBottomBorder = _a.includeBottomBorder, includeRightBorder = _a.includeRightBorder, includeTopBorder = _a.includeTopBorder;
    var childrenCount = React.Children.count(props.children);
    return (React.createElement(TableRow_1.TableRow, __assign({}, props, { key: 'header', includeLeftBorder: includeLeftBorder, includeBottomBorder: includeBottomBorder, includeRightBorder: includeRightBorder, includeTopBorder: includeTopBorder }), React.Children.map(props.children, function (rc, columnIndex) {
        return React.isValidElement(rc)
            ? React.cloneElement(rc, {
                key: columnIndex,
                isHeader: true,
                fontSize: props.fontSize,
                textAlign: props.textAlign,
                includeLeftBorder: columnIndex === 0,
                includeRightBorder: columnIndex !== childrenCount - 1,
            })
            : null;
    })));
};
exports.TableHeader = TableHeader;
//# sourceMappingURL=TableHeader.js.map