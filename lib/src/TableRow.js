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
exports.TableRow = void 0;
var renderer_1 = require("@react-pdf/renderer");
var React = require("react");
var Utils_1 = require("./Utils");
var TableRow = function (props) {
    var rowCells = React.Children.toArray(props.children);
    var _a = (0, Utils_1.getDefaultBorderIncludes)(props), includeLeftBorder = _a.includeLeftBorder, includeBottomBorder = _a.includeBottomBorder, includeRightBorder = _a.includeRightBorder, includeTopBorder = _a.includeTopBorder;
    var _b = rowCells.reduce(function (result, child) {
        return React.isValidElement(child) && child.props.weighting !== undefined
            ? {
                numberOfWeightingsDefined: result.numberOfWeightingsDefined + 1,
                remainingWeighting: result.remainingWeighting - child.props.weighting,
            }
            : result;
    }, {
        numberOfWeightingsDefined: 0,
        remainingWeighting: 1,
    }), numberOfWeightingsDefined = _b.numberOfWeightingsDefined, remainingWeighting = _b.remainingWeighting;
    var weightingsPerNotSpecified = Math.ceil(remainingWeighting / (rowCells.length - numberOfWeightingsDefined));
    var rowColor = (props.zebra || props.evenRowColor) && props.even ? props.evenRowColor || 'lightgray' : props.oddRowColor || '';
    return (React.createElement(renderer_1.View, { style: {
            borderBottom: includeBottomBorder && '1pt solid black',
            borderRight: includeRightBorder && '1pt solid black',
            borderLeft: includeLeftBorder && '1pt solid black',
            borderTop: includeTopBorder && '1pt solid black',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: rowColor,
            marginTop: -1,
        } }, React.Children.map(props.children, function (rc, columnIndex) {
        var _a;
        return React.isValidElement(rc)
            ? React.cloneElement(rc, __assign(__assign({ weighting: (_a = rc.props.weighting) !== null && _a !== void 0 ? _a : weightingsPerNotSpecified }, (props.data && { data: props.data })), { key: columnIndex, fontSize: props.fontSize, textAlign: props.textAlign, includeLeftBorder: includeLeftBorder && columnIndex === 0, includeRightBorder: includeRightBorder && columnIndex !== rowCells.length - 1 }))
            : null;
    })));
};
exports.TableRow = TableRow;
//# sourceMappingURL=TableRow.js.map