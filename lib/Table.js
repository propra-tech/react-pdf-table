"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var renderer_1 = require("@react-pdf/renderer");
var React = require("react");
var TableBody_1 = require("./TableBody");
var TableHeader_1 = require("./TableHeader");
var Table = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var tableHeader = null;
    var tableBody = null;
    React.Children.forEach(props.children, function (c) {
        if ((c === null || c === void 0 ? void 0 : c.type) === TableHeader_1.TableHeader) {
            tableHeader = c;
        }
        else if ((c === null || c === void 0 ? void 0 : c.type) === TableBody_1.TableBody) {
            tableBody = c;
        }
    });
    tableBody = React.cloneElement(tableBody, {
        data: (_b = (_a = tableBody.props.data) !== null && _a !== void 0 ? _a : props.data) !== null && _b !== void 0 ? _b : [],
        renderTopBorder: !tableHeader,
        zebra: (_d = (_c = tableBody.props.zebra) !== null && _c !== void 0 ? _c : props.zebra) !== null && _d !== void 0 ? _d : false,
        evenRowColor: (_f = (_e = tableBody.props.evenRowColor) !== null && _e !== void 0 ? _e : props.evenRowColor) !== null && _f !== void 0 ? _f : '',
        oddRowColor: (_h = (_g = tableBody.props.oddRowColor) !== null && _g !== void 0 ? _g : props.oddRowColor) !== null && _h !== void 0 ? _h : '',
    });
    return (React.createElement(renderer_1.View, { style: {
            width: '100%',
        } },
        tableHeader,
        tableBody));
};
exports.Table = Table;
//# sourceMappingURL=Table.js.map