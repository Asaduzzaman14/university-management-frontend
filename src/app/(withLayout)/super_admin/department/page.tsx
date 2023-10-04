"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const Department = () => {
  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(10);
  query["limit"] = size;
  query["page"] = page;

  const { data, isLoading } = useDepartmentsQuery({ ...query });

  const { data: departments, meta } = data;
  console.log(departments);

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

  const onTableChange = (pagination: any, filter: any, shorter: any) => {
    const { order, field } = shorter;
    console.log(order, field);
  };
  interface DataType {
    key: string;
    name: string;
    age: number;
  }

  const datas: DataType[] = [
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
  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `admin`,
            link: `/super_admin/admin`,
          },
        ]}
      />
      <h2>Department List</h2>
      <Link href={"/super_admin/department/create"}>
        <Button>Create</Button>
      </Link>

      <UMTable
        loading={isLoading}
        dataSource={datas}
        pagination={paginationConfig}
        columns={columns}
        pageSize={5}
        total={10}
        showSizeChanger={true}
        onPaginagionChange={onPaginagionChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </>
  );
};

export default Department;
