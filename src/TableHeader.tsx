import { TableCellProps } from 'TableCell';
import * as React from 'react';
import { TableRow, TableRowProps } from './TableRow';
import { getDefaultBorderIncludes } from './Utils';

interface TableHeaderProps extends TableRowProps, React.PropsWithChildren {}

/**
 * This component displays the titles for the rows.
 */
export const TableHeader: React.FC<TableHeaderProps> = (props: TableHeaderProps) => {
  let { includeLeftBorder, includeBottomBorder, includeRightBorder, includeTopBorder } = getDefaultBorderIncludes(props);
  const childrenCount = React.Children.count(props.children);

  return (
    <TableRow
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
