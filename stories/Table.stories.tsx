import { faker } from '@faker-js/faker';
import { Document, PDFViewer, Page } from '@react-pdf/renderer';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DataTableCell, DataTableCellProps, Table, TableBody, TableCell, TableHeader, TableProps } from '../src';

const pageSize = ['A2', 'A3', 'A4', 'A5', 'A6', 'LEGAL', 'LETTER', 'TABLOID'];

type MetaProps = TableProps & {
  getLastContent: DataTableCellProps['getContent'];
  orientation: 'landscape' | 'portrait';
  pageSize: React.ComponentProps<typeof Page>['size'];
  firstColumnWeighting: number;
  secondColumnWeighting: number;
  fontSize: number;
  textAlign: 'left' | 'center' | 'right';
};
type Story = StoryObj<MetaProps>;

const Template = ({
  getLastContent,
  orientation,
  pageSize,
  fontSize,
  textAlign,
  firstColumnWeighting,
  secondColumnWeighting,
  ...args
}: MetaProps) => (
  <PDFViewer style={{ width: '100%', height: '90vh' }}>
    <Document>
      <Page orientation={orientation} size={pageSize ?? 'A4'} style={{ margin: 20, paddingRight: 40 }}>
        <Table {...args}>
          <TableHeader {...{ textAlign, fontSize }}>
            <TableCell weighting={firstColumnWeighting}>First Name</TableCell>
            <TableCell weighting={secondColumnWeighting}>Last Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableHeader>
          <TableBody {...{ textAlign, fontSize }}>
            <DataTableCell weighting={firstColumnWeighting} getContent={(r) => r.firstName} />
            <DataTableCell weighting={secondColumnWeighting} getContent={(r) => r.lastName} />
            <DataTableCell getContent={(r) => r.dob} />
            <DataTableCell getContent={(r) => r.country} />
            <DataTableCell getContent={getLastContent} />
          </TableBody>
        </Table>
      </Page>
    </Document>
  </PDFViewer>
);

const meta: Meta = {
  title: 'Table',
  component: Template,
  parameters: {
    controls: {
      expanded: true,
      exclude: ['children', 'getLastContent'],
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
export default meta;

export const SimpleTable: Story = Template.bind({});
SimpleTable.args = {
  data: Array(20)
    .fill(0)
    .map(() => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dob: faker.date.past(100).toISOString().substring(0, 10),
      country: faker.address.country(),
      city: faker.address.city(),
      phoneNumber: faker.phone.number(),
    })),
  getLastContent: (r) => r.phoneNumber,
};

export const NestedTables: Story = Template.bind({});
NestedTables.args = {
  data: Array(20)
    .fill(0)
    .map(() => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dob: faker.date.past(100).toISOString().substring(0, 10),
      country: faker.address.country(),
      city: faker.address.city(),
      randomValues: {
        one: Math.ceil(Math.random() * 100),
        two: Math.ceil(Math.random() * 100),
        three: Math.ceil(Math.random() * 100),
        four: Math.ceil(Math.random() * 100),
      },
    })),
  getLastContent: (r) => (
    <Table data={[r]}>
      <TableBody
        textAlign={'center'}
        includeTopBorder={false}
        includeBottomBorder={false}
        includeLeftBorder={false}
        includeRightBorder={false}
      >
        <DataTableCell getContent={(r) => r.randomValues.one} />
        <DataTableCell getContent={(r) => r.randomValues.two} />
        <DataTableCell getContent={(r) => r.randomValues.three} />
        <DataTableCell getContent={(r) => r.randomValues.four} />
      </TableBody>
    </Table>
  ),
};

export const SimpleTableWithWeighting: Story = Template.bind({});
SimpleTableWithWeighting.args = {
  data: Array(20)
    .fill(0)
    .map(() => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dob: faker.date.past(100).toISOString().substring(0, 10),
      country: faker.address.country(),
      city: faker.address.city(),
      phoneNumber: faker.phone.number(),
    })),
  getLastContent: (r) => r.phoneNumber,
  firstColumnWeighting: 0.2,
};
SimpleTableWithWeighting.argTypes = {
  firstColumnWeighting: {
    control: { type: 'range', min: 0.1, max: 0.9, step: 0.05 },
    description: 'Set the `weighting` prop on the first `TableCell` and `DataTableCell`.',
  },
  secondColumnWeighting: {
    control: { type: 'range', min: 0.1, max: 0.9, step: 0.05 },
    description: 'Set the `weighting` prop on the first `TableCell` and `DataTableCell`.',
  },
};
SimpleTableWithWeighting.parameters = {
  controls: {
    expanded: true,
    include: ['pageSize', 'orientation', 'firstColumnWeighting', 'secondColumnWeighting'],
  },
};