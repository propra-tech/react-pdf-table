[@propra/react-pdf-table](../README.md) / [Exports](../modules.md) / TableBodyProps

# Interface: TableBodyProps<TData\>

## Type parameters

| Name |
| :------ |
| `TData` |

## Hierarchy

- `Omit`<`TableRowProps`<`TData`\>, ``"data"``\>

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

• `Optional` **children**: [`TypedReactNode`](../modules.md#typedreactnode)<[`DataTableCellProps`](DataTableCellProps.md)<`TData`\>\>

#### Overrides

Omit.children

#### Defined in

[src/TableBody.tsx:13](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableBody.tsx#L13)

___

### data

• `Optional` **data**: `TData`[]

The data associated with the table.

#### Defined in

[src/TableBody.tsx:11](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableBody.tsx#L11)

___

### even

• `Optional` **even**: `boolean`

Whether this row is even (true) or odd (false)

#### Inherited from

Omit.even

#### Defined in

[src/TableRow.tsx:32](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableRow.tsx#L32)

___

### evenRowColor

• `Optional` **evenRowColor**: `string`

Specify the color of even rows

#### Inherited from

Omit.evenRowColor

#### Defined in

[src/TableRow.tsx:37](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableRow.tsx#L37)

___

### fontSize

• `Optional` **fontSize**: `string` \| `number`

The font size as a valid unit defined in react-pdf.

#### Inherited from

Omit.fontSize

#### Defined in

[src/TableRow.tsx:12](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableRow.tsx#L12)

___

### includeBottomBorder

• `Optional` **includeBottomBorder**: `boolean`

Include the bottom border. Default true.

#### Inherited from

Omit.includeBottomBorder

#### Defined in

[src/TableCell.tsx:23](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableCell.tsx#L23)

___

### includeLeftBorder

• `Optional` **includeLeftBorder**: `boolean`

Include the left border. Default true.

#### Inherited from

Omit.includeLeftBorder

#### Defined in

[src/TableCell.tsx:28](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableCell.tsx#L28)

___

### includeRightBorder

• `Optional` **includeRightBorder**: `boolean`

Include the right border. Default true.

#### Inherited from

Omit.includeRightBorder

#### Defined in

[src/TableCell.tsx:18](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableCell.tsx#L18)

___

### includeTopBorder

• `Optional` **includeTopBorder**: `boolean`

Include the top border. Default true.

#### Inherited from

Omit.includeTopBorder

#### Defined in

[src/TableCell.tsx:13](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableCell.tsx#L13)

___

### oddRowColor

• `Optional` **oddRowColor**: `string`

Specify the color of odd rows

#### Inherited from

Omit.oddRowColor

#### Defined in

[src/TableRow.tsx:42](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableRow.tsx#L42)

___

### textAlign

• `Optional` **textAlign**: ``"center"`` \| ``"left"`` \| ``"right"``

Whether to align the text. Defaults to left.

#### Inherited from

Omit.textAlign

#### Defined in

[src/TableRow.tsx:17](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableRow.tsx#L17)

___

### zebra

• `Optional` **zebra**: `boolean`

#### Overrides

Omit.zebra

#### Defined in

[src/TableBody.tsx:12](https://github.com/propra-tech/react-pdf-table/blob/f4d2620/src/TableBody.tsx#L12)
