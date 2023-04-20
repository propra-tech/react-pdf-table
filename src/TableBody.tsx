import * as React from 'react';
import { TableRow, TableRowProps } from './TableRow';
import { getDefaultBorderIncludes } from './Utils';

export interface TableBodyProps extends TableRowProps, React.PropsWithChildren {
  /**
   * The data associated with the table.
   */
  data?: any[];
  zebra?: boolean;
}

// This interface adds a flag to indicate if we should render the top border,
// thus allowing us to render it in the event that no
// header rows were present in the table.
interface InternalBodyProps extends TableBodyProps {
  renderTopBorder?: boolean;
}

/**
 * This component displays the data as {@see TableRow}s.
 */
export const TableBody: React.FC<InternalBodyProps> = (props: InternalBodyProps) => {
  const rowCells: any[] = React.Children.toArray(props.children);
  const { includeLeftBorder, includeBottomBorder, includeRightBorder } = getDefaultBorderIncludes(props);
  const dataRows = props.data ?? [];

  return (
    <>
      {dataRows.map((data, rowIndex) => (
        <TableRow
          {...props}
          key={rowIndex}
          even={rowIndex % 2 === 0}
          data={data}
          includeLeftBorder={includeLeftBorder}
          includeBottomBorder={includeBottomBorder}
          includeRightBorder={includeRightBorder}
          includeTopBorder={props.renderTopBorder ?? false}
        >
          {rowCells}
        </TableRow>
      ))}
    </>
  );
};
