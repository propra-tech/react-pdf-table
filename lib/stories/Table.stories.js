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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWithoutBorder = exports.SimpleTableWithWeighting = exports.NestedTables = exports.SimpleTable = void 0;
var faker_1 = require("@faker-js/faker");
var renderer_1 = require("@react-pdf/renderer");
var react_1 = require("react");
var src_1 = require("../src");
var pageSize = ['A2', 'A3', 'A4', 'A5', 'A6', 'LEGAL', 'LETTER', 'TABLOID'];
var Template = function (_a) {
    var getLastContent = _a.getLastContent, orientation = _a.orientation, pageSize = _a.pageSize, fontSize = _a.fontSize, textAlign = _a.textAlign, firstColumnWeighting = _a.firstColumnWeighting, secondColumnWeighting = _a.secondColumnWeighting, includeTopBorder = _a.includeTopBorder, includeBottomBorder = _a.includeBottomBorder, includeLeftBorder = _a.includeLeftBorder, includeRightBorder = _a.includeRightBorder, _b = _a.showHeader, showHeader = _b === void 0 ? true : _b, customHeader = _a.customHeader, args = __rest(_a, ["getLastContent", "orientation", "pageSize", "fontSize", "textAlign", "firstColumnWeighting", "secondColumnWeighting", "includeTopBorder", "includeBottomBorder", "includeLeftBorder", "includeRightBorder", "showHeader", "customHeader"]);
    var bodyProps = {
        fontSize: fontSize,
        textAlign: textAlign,
        includeTopBorder: includeTopBorder,
        includeBottomBorder: includeBottomBorder,
        includeLeftBorder: includeLeftBorder,
        includeRightBorder: includeRightBorder,
    };
    return (react_1.default.createElement(renderer_1.PDFViewer, { style: { width: '100%', height: '90vh' } },
        react_1.default.createElement(renderer_1.Document, null,
            react_1.default.createElement(renderer_1.Page, { orientation: orientation, size: pageSize !== null && pageSize !== void 0 ? pageSize : 'A4', style: { margin: 20, paddingRight: 40 } },
                react_1.default.createElement(src_1.Table, __assign({}, args),
                    customHeader,
                    showHeader && !customHeader && (react_1.default.createElement(src_1.TableHeader, __assign({}, bodyProps),
                        react_1.default.createElement(src_1.TableCell, { weighting: firstColumnWeighting }, "First Name"),
                        react_1.default.createElement(src_1.TableCell, { weighting: secondColumnWeighting }, "Last Name"),
                        react_1.default.createElement(src_1.TableCell, null, "DOB"),
                        react_1.default.createElement(src_1.TableCell, null, "Country"),
                        react_1.default.createElement(src_1.TableCell, null, "Phone Number"))),
                    react_1.default.createElement(src_1.TableBody, __assign({}, bodyProps),
                        react_1.default.createElement(src_1.DataTableCell, { weighting: firstColumnWeighting, getContent: function (r) { return r.firstName; } }),
                        react_1.default.createElement(src_1.DataTableCell, { weighting: secondColumnWeighting, getContent: function (r) { return r.lastName; } }),
                        react_1.default.createElement(src_1.DataTableCell, { getContent: function (r) { return r.dob; } }),
                        react_1.default.createElement(src_1.DataTableCell, { getContent: function (r) { return r.country; } }),
                        react_1.default.createElement(src_1.DataTableCell, { getContent: getLastContent })))))));
};
var meta = {
    title: 'Table',
    component: Template,
    parameters: {
        controls: {
            expanded: true,
            exclude: ['children', 'getLastContent', 'customHeader'],
        },
    },
    args: {
        zebra: false,
        pageSize: 'A4',
        orientation: 'portrait',
        fontSize: 11,
        textAlign: 'left',
    },
    argTypes: {
        textAlign: { control: 'select', options: ['left', 'center', 'right'], description: 'Text alignment for table data.' },
        fontSize: { description: 'Font size used to render table data.' },
        zebra: { description: 'Applies alternating row shading when set.' },
        evenRowColor: { control: 'color', description: 'Shading applied to even rows. Overrides `zebra`.' },
        oddRowColor: { control: 'color', description: 'Shading applied to odd rows. Overrides `zebra`.' },
        pageSize: { control: 'select', options: pageSize, description: 'A property of the ReactPDF `Page` component.' },
        orientation: { control: 'select', options: ['portrait', 'landscape'], description: 'A property of the ReactPDF `Page` component.' },
        data: { control: false, description: 'The data associated with the table.' },
    },
};
exports.default = meta;
exports.SimpleTable = Template.bind({});
exports.SimpleTable.args = {
    data: Array(20)
        .fill(0)
        .map(function () { return ({
        firstName: faker_1.faker.name.firstName(),
        lastName: faker_1.faker.name.lastName(),
        dob: faker_1.faker.date.past(100).toISOString().substring(0, 10),
        country: faker_1.faker.address.country(),
        city: faker_1.faker.address.city(),
        phoneNumber: faker_1.faker.phone.number(),
    }); }),
    getLastContent: function (r) { return r.phoneNumber; },
};
exports.NestedTables = Template.bind({});
exports.NestedTables.args = {
    data: Array(20)
        .fill(0)
        .map(function () { return ({
        firstName: faker_1.faker.name.firstName(),
        lastName: faker_1.faker.name.lastName(),
        dob: faker_1.faker.date.past(100).toISOString().substring(0, 10),
        country: faker_1.faker.address.country(),
        city: faker_1.faker.address.city(),
        randomValues: {
            one: Math.ceil(Math.random() * 100),
            two: Math.ceil(Math.random() * 100),
            three: Math.ceil(Math.random() * 100),
            four: Math.ceil(Math.random() * 100),
        },
    }); }),
    customHeader: (react_1.default.createElement(src_1.TableHeader, null,
        react_1.default.createElement(src_1.TableCell, null, "First Name"),
        react_1.default.createElement(src_1.TableCell, null, "Last Name"),
        react_1.default.createElement(src_1.TableCell, null, "DOB"),
        react_1.default.createElement(src_1.TableCell, null, "Country"),
        react_1.default.createElement(src_1.TableCell, null,
            react_1.default.createElement(src_1.TableHeader, { fontSize: 8, textAlign: 'center', includeTopBorder: false, includeBottomBorder: false, includeLeftBorder: false, includeRightBorder: false },
                react_1.default.createElement(src_1.TableCell, null, "One"),
                react_1.default.createElement(src_1.TableCell, null, "Two"),
                react_1.default.createElement(src_1.TableCell, null, "Three"),
                react_1.default.createElement(src_1.TableCell, null, "Four"))))),
    getLastContent: function (r) { return (react_1.default.createElement(src_1.Table, { data: [r], topBorderWhenNoHeader: false },
        react_1.default.createElement(src_1.TableBody, { textAlign: 'center', includeTopBorder: false, includeBottomBorder: false, includeLeftBorder: false, includeRightBorder: false },
            react_1.default.createElement(src_1.DataTableCell, { getContent: function (r) { var _a; return (_a = r.randomValues) === null || _a === void 0 ? void 0 : _a.one; } }),
            react_1.default.createElement(src_1.DataTableCell, { getContent: function (r) { var _a; return (_a = r.randomValues) === null || _a === void 0 ? void 0 : _a.two; } }),
            react_1.default.createElement(src_1.DataTableCell, { getContent: function (r) { var _a; return (_a = r.randomValues) === null || _a === void 0 ? void 0 : _a.three; } }),
            react_1.default.createElement(src_1.DataTableCell, { getContent: function (r) { var _a; return (_a = r.randomValues) === null || _a === void 0 ? void 0 : _a.four; } })))); },
};
exports.SimpleTableWithWeighting = Template.bind({});
exports.SimpleTableWithWeighting.args = {
    data: Array(20)
        .fill(0)
        .map(function () { return ({
        firstName: faker_1.faker.name.firstName(),
        lastName: faker_1.faker.name.lastName(),
        dob: faker_1.faker.date.past(100).toISOString().substring(0, 10),
        country: faker_1.faker.address.country(),
        city: faker_1.faker.address.city(),
        phoneNumber: faker_1.faker.phone.number(),
    }); }),
    getLastContent: function (r) { return r.phoneNumber; },
    firstColumnWeighting: 0.3,
    secondColumnWeighting: 0.3,
};
exports.SimpleTableWithWeighting.argTypes = {
    firstColumnWeighting: {
        control: { type: 'range', min: 0.1, max: 0.9, step: 0.05 },
        description: 'Set the `weighting` prop on the first `TableCell` and `DataTableCell`.',
    },
    secondColumnWeighting: {
        control: { type: 'range', min: 0.1, max: 0.9, step: 0.05 },
        description: 'Set the `weighting` prop on the first `TableCell` and `DataTableCell`.',
    },
};
exports.SimpleTableWithWeighting.parameters = {
    controls: {
        expanded: true,
        include: ['pageSize', 'orientation', 'firstColumnWeighting', 'secondColumnWeighting'],
    },
};
exports.TableWithoutBorder = Template.bind({});
exports.TableWithoutBorder.args = {
    data: Array(20)
        .fill(0)
        .map(function () { return ({
        firstName: faker_1.faker.name.firstName(),
        lastName: faker_1.faker.name.lastName(),
        dob: faker_1.faker.date.past(100).toISOString().substring(0, 10),
        country: faker_1.faker.address.country(),
        city: faker_1.faker.address.city(),
        phoneNumber: faker_1.faker.phone.number(),
    }); }),
    getLastContent: function (r) { return r.phoneNumber; },
    showHeader: false,
    includeTopBorder: false,
    includeBottomBorder: false,
    includeLeftBorder: false,
    includeRightBorder: false,
    topBorderWhenNoHeader: false,
};
exports.TableWithoutBorder.parameters = {
    controls: {
        expanded: true,
        include: [
            'pageSize',
            'orientation',
            'showHeader',
            'includeTopBorder',
            'includeBottomBorder',
            'includeLeftBorder',
            'includeRightBorder',
            'topBorderWhenNoHeader',
        ],
    },
};
//# sourceMappingURL=Table.stories.js.map