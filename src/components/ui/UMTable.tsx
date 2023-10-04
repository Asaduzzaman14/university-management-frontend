"use client";

import React from "react";
import { Button, Space, Table, Tag } from "antd";

const UMTable = () => {
  interface DataType {
    key: string;
    name: string;
    age: number;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      // sorter: true,
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type='primary' danger>
            X
          </Button>
        );
      },
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 33,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
    },
  ];
  const onPaginagionChange = (page: number, pageSize: number) => {
    console.log(page, pageSize);
  };

  const paginationConfig = {
    pageSize: 5,
    total: 10,
    pageSizeOptions: [5, 10, 20],
    showSizeChanger: true,
    onChange: onPaginagionChange,
  };
  const onTableChange = (pagination, filter, shorter) => {
    const { order, field } = shorter;
    console.log(order, field);
  };

  return (
    <div>
      <Table
        columns={columns}
        loading={false}
        dataSource={data}
        pagination={paginationConfig}
        onChange={onTableChange}
      />
    </div>
  );
};

export default UMTable;
