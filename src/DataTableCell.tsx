import * as React from 'react';
import { TableCell, TableCellProps } from './TableCell';

export interface DataTableCellProps<TData> extends TableCellProps {
  /**
   * The data associated with the cell.
   */
  data?: TData;

  /**
   * The content to display for this cell.
   * @param data the data passed in.
   */
  getContent: (data: TData) => React.ReactNode | JSX.Element | string | number;
}

/**
 * This component is used to display data in the the {@see TableRow} component.
 */
export const DataTableCell = <TData = unknown>(props: DataTableCellProps<TData>) => {
  return <TableCell {...props}>{props.getContent(props.data)}</TableCell>;
};
