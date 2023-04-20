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
exports.DataTableCell = void 0;
var React = require("react");
var TableCell_1 = require("./TableCell");
var DataTableCell = function (props) {
    return React.createElement(TableCell_1.TableCell, __assign({}, props), props.getContent(props.data));
};
exports.DataTableCell = DataTableCell;
//# sourceMappingURL=DataTableCell.js.map