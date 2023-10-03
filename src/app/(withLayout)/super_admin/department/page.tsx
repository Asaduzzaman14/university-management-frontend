import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Department = () => {
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
    </>
  );
};

export default Department;
