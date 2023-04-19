"use client"

import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableOptions } from "mui-datatables";

interface TableProps {
  title?: string
  data: (object | number[] | string[])[],
  columns: MUIDataTableColumnDef[],
  options?: MUIDataTableOptions | undefined
}

export function ADATable({ title, data, columns, options }: TableProps) {
  
  return(
  <>
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={options}
    />
  </>
  )
}