import { DataGrid, DataGridProps, GridColDef } from "@mui/x-data-grid";

type GenericDataTableProps<T> = {
  rows: T[];
  columns: GridColDef[];
} & DataGridProps;

export const GenericDataTable = <T,>({
  rows,
  columns,
  ...dataGridProps
}: GenericDataTableProps<T>) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      disableVirtualization
      {...dataGridProps}
    />
  );
};
