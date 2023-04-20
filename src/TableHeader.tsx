import { TableCellProps } from 'TableCell';
import { TypedReactNode } from 'Types';
import * as React from 'react';
import { TableRow, TableRowProps } from './TableRow';
import { getDefaultBorderIncludes } from './Utils';

export interface TableHeaderProps extends Omit<TableRowProps<never>, 'children' | 'data'> {
  /**
   * Only {@see TableCell} elements are valid children
   */
  children?: TypedReactNode<TableCellProps>;
}

/**
 * This component displays the titles for the rows.
 */
export const TableHeader: React.FC<TableHeaderProps> = (props: TableHeaderProps) => {
  let { includeLeftBorder, includeBottomBorder, includeRightBorder, includeTopBorder } = getDefaultBorderIncludes(props);
  const childrenCount = React.Children.count(props.children);

  return (
    <TableRow<never>
      {...props}
      key={'header'}
      includeLeftBorder={includeLeftBorder}
      includeBottomBorder={includeBottomBorder}
      includeRightBorder={includeRightBorder}
      includeTopBorder={includeTopBorder}
    >
      {React.Children.map(props.children, (rc, columnIndex) =>
        React.isValidElement<TableCellProps>(rc)
          ? React.cloneElement(rc, {
              key: columnIndex,
              isHeader: true,
              fontSize: props.fontSize,
              textAlign: props.textAlign,
              includeLeftBorder: columnIndex === 0,
              includeRightBorder: columnIndex !== childrenCount - 1,
            })
          : null
      )}
    </TableRow>
  );
};
