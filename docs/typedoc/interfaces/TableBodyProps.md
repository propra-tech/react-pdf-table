[@propra/react-pdf-table](../README.md) / [Exports](../modules.md) / TableBodyProps

# Interface: TableBodyProps

## Hierarchy

- `TableRowProps`

- `PropsWithChildren`

  ↳ **`TableBodyProps`**

## Table of contents

### Properties

- [children](TableBodyProps.md#children)
- [data](TableBodyProps.md#data)
- [even](TableBodyProps.md#even)
- [evenRowColor](TableBodyProps.md#evenrowcolor)
- [fontSize](TableBodyProps.md#fontsize)
- [includeBottomBorder](TableBodyProps.md#includebottomborder)
- [includeLeftBorder](TableBodyProps.md#includeleftborder)
- [includeRightBorder](TableBodyProps.md#includerightborder)
- [includeTopBorder](TableBodyProps.md#includetopborder)
- [oddRowColor](TableBodyProps.md#oddrowcolor)
- [textAlign](TableBodyProps.md#textalign)
- [zebra](TableBodyProps.md#zebra)

## Properties

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

React.PropsWithChildren.children

#### Defined in

node_modules/.pnpm/@types+react@18.0.37/node_modules/@types/react/ts5.0/index.d.ts:778

___

### data

• `Optional` **data**: `any`[]

The data associated with the table.

#### Overrides

TableRowProps.data

#### Defined in

[src/TableBody.tsx:9](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableBody.tsx#L9)

___

### even

• `Optional` **even**: `boolean`

Whether this row is even (true) or odd (false)

#### Inherited from

TableRowProps.even

#### Defined in

[src/TableRow.tsx:32](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableRow.tsx#L32)

___

### evenRowColor

• `Optional` **evenRowColor**: `string`

Specify the color of even rows

#### Inherited from

TableRowProps.evenRowColor

#### Defined in

[src/TableRow.tsx:37](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableRow.tsx#L37)

___

### fontSize

• `Optional` **fontSize**: `string` \| `number`

The font size as a valid unit defined in react-pdf.

#### Inherited from

TableRowProps.fontSize

#### Defined in

[src/TableRow.tsx:12](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableRow.tsx#L12)

___

### includeBottomBorder

• `Optional` **includeBottomBorder**: `boolean`

Include the bottom border. Default true.

#### Inherited from

TableRowProps.includeBottomBorder

#### Defined in

[src/TableCell.tsx:23](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableCell.tsx#L23)

___

### includeLeftBorder

• `Optional` **includeLeftBorder**: `boolean`

Include the left border. Default true.

#### Inherited from

TableRowProps.includeLeftBorder

#### Defined in

[src/TableCell.tsx:28](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableCell.tsx#L28)

___

### includeRightBorder

• `Optional` **includeRightBorder**: `boolean`

Include the right border. Default true.

#### Inherited from

TableRowProps.includeRightBorder

#### Defined in

[src/TableCell.tsx:18](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableCell.tsx#L18)

___

### includeTopBorder

• `Optional` **includeTopBorder**: `boolean`

Include the top border. Default true.

#### Inherited from

TableRowProps.includeTopBorder

#### Defined in

[src/TableCell.tsx:13](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableCell.tsx#L13)

___

### oddRowColor

• `Optional` **oddRowColor**: `string`

Specify the color of odd rows

#### Inherited from

TableRowProps.oddRowColor

#### Defined in

[src/TableRow.tsx:42](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableRow.tsx#L42)

___

### textAlign

• `Optional` **textAlign**: ``"center"`` \| ``"left"`` \| ``"right"``

Whether to align the text. Defaults to left.

#### Inherited from

TableRowProps.textAlign

#### Defined in

[src/TableRow.tsx:17](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableRow.tsx#L17)

___

### zebra

• `Optional` **zebra**: `boolean`

#### Overrides

TableRowProps.zebra

#### Defined in

[src/TableBody.tsx:10](https://github.com/propra-tech/react-pdf-table/blob/2c0f79d/src/TableBody.tsx#L10)
