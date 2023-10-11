"use client";
import React from "react";
import { Table } from "antd";

type UMTableProps = {
  loading?: boolean;
  dataSource: any;
  columns: any;
  pageSize?: number;
  total?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, shorter: any) => void;
  showPagination?: boolean;
};

const UMTable = ({
  loading = false,
  dataSource,

  columns,
  pageSize,
  total,
  showSizeChanger,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: UMTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: total,

        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;
  return (
    <div>
      <Table
        columns={columns}
        loading={loading}
        dataSource={dataSource}
        pagination={paginationConfig}
        onChange={onTableChange}
      />
    </div>
  );
};

export default UMTable;
