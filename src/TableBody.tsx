import { DataTableCellProps } from 'DataTableCell';
import { TypedReactNode } from 'Types';
import * as React from 'react';
import { TableRow, TableRowProps } from './TableRow';
import { getDefaultBorderIncludes } from './Utils';

export interface TableBodyProps<TData> extends Omit<TableRowProps<TData>, 'data'> {
  /**
   * The data associated with the table.
   */
  data?: TData[];
  zebra?: boolean;
  children?: TypedReactNode<DataTableCellProps<TData>>;
}

// This interface adds a flag to indicate if we should render the top border,
// thus allowing us to render it in the event that no
// header rows were present in the table.
interface InternalBodyProps<TData> extends TableBodyProps<TData> {
  renderTopBorder?: boolean;
}

/**
 * This component displays the data as {@see TableRow}s.
 */
export const TableBody = <TData = unknown,>(props: InternalBodyProps<TData>) => {
  const rowCells = React.Children.toArray(props.children);
  const { includeLeftBorder, includeBottomBorder, includeRightBorder, includeTopBorder } = getDefaultBorderIncludes(props);
  const dataRows = props.data ?? [];

  return (
    <>
      {dataRows.map((data, rowIndex) => (
        <TableRow<TData>
          {...props}
          key={rowIndex}
          even={rowIndex % 2 === 0}
          data={data}
          includeLeftBorder={includeLeftBorder}
          includeBottomBorder={includeBottomBorder}
          includeRightBorder={includeRightBorder}
          includeTopBorder={rowIndex === 0 ? props.renderTopBorder ?? false : includeTopBorder}
        >
          {props.children}
        </TableRow>
      ))}
    </>
  );
};
