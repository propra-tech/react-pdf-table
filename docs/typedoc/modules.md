[@propra/react-pdf-table](README.md) / Exports

# @propra/react-pdf-table

## Table of contents

### Interfaces

- [DataTableCellProps](interfaces/DataTableCellProps.md)
- [TableBodyProps](interfaces/TableBodyProps.md)
- [TableBorder](interfaces/TableBorder.md)
- [TableCellProps](interfaces/TableCellProps.md)
- [TableHeaderProps](interfaces/TableHeaderProps.md)
- [TableProps](interfaces/TableProps.md)

### Type Aliases

- [Style](modules.md#style)
- [TypedReactNode](modules.md#typedreactnode)

### Functions

- [DataTableCell](modules.md#datatablecell)
- [Table](modules.md#table)
- [TableBody](modules.md#tablebody)
- [TableCell](modules.md#tablecell)
- [TableHeader](modules.md#tableheader)
- [getDefaultBorderIncludes](modules.md#getdefaultborderincludes)
- [transformToArray](modules.md#transformtoarray)

## Type Aliases

### Style

Ƭ **Style**: `ReactPDF.Styles`[`string`]

Re-exported here to avoid adding a peer dependency on @react-pdf/types

#### Defined in

[src/Types.ts:6](https://github.com/propra-tech/react-pdf-table/blob/65981e2/src/Types.ts#L6)

___

### TypedReactNode

Ƭ **TypedReactNode**<`T`\>: `React.ReactElement`<`T`\> \| [`TypedReactNode`](modules.md#typedreactnode)<`T`\>[] \| ``null`` \| `undefined`

Allows stricter typing for child elements

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/Types.ts:11](https://github.com/propra-tech/react-pdf-table/blob/65981e2/src/Types.ts#L11)

## Functions

### DataTableCell

▸ **DataTableCell**<`TData`\>(`props`): `Element`

This component is used to display data in the the {@see TableRow} component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DataTableCellProps`](interfaces/DataTableCellProps.md)<`TData`\> |

#### Returns

`Element`

#### Defined in

[src/DataTableCell.tsx:20](https://github.com/propra-tech/react-pdf-table/blob/65981e2/src/DataTableCell.tsx#L20)

___

### Table

▸ **Table**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TableProps`](interfaces/TableProps.md) |

#### Returns

`Element`

#### Defined in

[src/Table.tsx:16](https://github.com/propra-tech/react-pdf-table/blob/65981e2/src/Table.tsx#L16)

___

### TableBody

▸ **TableBody**<`TData`\>(`props`): `Element`

This component displays the data as {@see TableRow}s.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `InternalBodyProps`<`TData`\> |

#### Returns

`Element`

#### Defined in

[src/TableBody.tsx:26](https://github.com/propra-tech/react-pdf-table/blob/65981e2/src/TableBody.tsx#L26)

___

### TableCell

▸ **TableCell**(`props`, `context?`): `ReactElement`<`any`, `any`\>

This component displays the associated content of it's children.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TableCellProps`](interfaces/TableCellProps.md) |
| `context?` | `any` |

#### Returns

`ReactElement`<`any`, `any`\>

#### Defined in

node_modules/.pnpm/@types+react@18.0.37/node_modules/@types/react/ts5.0/index.d.ts:499

___

### TableHeader

▸ **TableHeader**(`props`, `context?`): `ReactElement`<`any`, `any`\>

This component displays the titles for the rows.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TableHeaderProps`](interfaces/TableHeaderProps.md) |
| `context?` | `any` |

#### Returns

`ReactElement`<`any`, `any`\>

#### Defined in

node_modules/.pnpm/@types+react@18.0.37/node_modules/@types/react/ts5.0/index.d.ts:499

___

### getDefaultBorderIncludes

▸ **getDefaultBorderIncludes**(`border`): [`TableBorder`](interfaces/TableBorder.md)

Return whether particular borders need to be included.
If the value is undefined then return true for that border.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `border` | [`TableBorder`](interfaces/TableBorder.md) | the border item to parse. |

#### Returns

[`TableBorder`](interfaces/TableBorder.md)

#### Defined in

[src/Utils.ts:9](https://github.com/propra-tech/react-pdf-table/blob/65981e2/src/Utils.ts#L9)

___

### transformToArray

▸ **transformToArray**<`T`\>(`items?`): `T`[]

Transform a single item to an array (with one element).
Or return the array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items?` | `T` \| `T`[] | the item or items to transform to an array. |

#### Returns

`T`[]

an array of items or an empty array.

#### Defined in

[src/Utils.ts:25](https://github.com/propra-tech/react-pdf-table/blob/65981e2/src/Utils.ts#L25)
