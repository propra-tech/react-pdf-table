"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var renderer_1 = require("@react-pdf/renderer");
var React = require("react");
var TableBody_1 = require("./TableBody");
var TableHeader_1 = require("./TableHeader");
var Table = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var tableHeader = null;
    var tableBody = null;
    React.Children.forEach(props.children, function (c) {
        if (React.isValidElement(c)) {
            if ((c === null || c === void 0 ? void 0 : c.type) === TableHeader_1.TableHeader) {
                tableHeader = c;
            }
            else if ((c === null || c === void 0 ? void 0 : c.type) === TableBody_1.TableBody) {
                tableBody = c;
            }
        }
    });
    tableBody = React.cloneElement(tableBody, {
        data: (_b = (_a = tableBody.props.data) !== null && _a !== void 0 ? _a : props.data) !== null && _b !== void 0 ? _b : [],
        renderTopBorder: !tableHeader && ((_c = props.topBorderWhenNoHeader) !== null && _c !== void 0 ? _c : true),
        zebra: (_e = (_d = tableBody.props.zebra) !== null && _d !== void 0 ? _d : props.zebra) !== null && _e !== void 0 ? _e : false,
        evenRowColor: (_g = (_f = tableBody.props.evenRowColor) !== null && _f !== void 0 ? _f : props.evenRowColor) !== null && _g !== void 0 ? _g : '',
        oddRowColor: (_j = (_h = tableBody.props.oddRowColor) !== null && _h !== void 0 ? _h : props.oddRowColor) !== null && _j !== void 0 ? _j : '',
    });
    return (React.createElement(renderer_1.View, { style: {
            width: '100%',
        } },
        tableHeader,
        tableBody));
};
exports.Table = Table;
//# sourceMappingURL=Table.js.map