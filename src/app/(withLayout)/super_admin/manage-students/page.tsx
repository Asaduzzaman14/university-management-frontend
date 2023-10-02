"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/authService";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageStudents = () => {
  const { role } = getUserInfo() as any;

  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />

      <h2>Manage student</h2>

      <Link href={"/super_admin/manage-students/create"}>
        <Button>Create student</Button>
      </Link>
    </>
  );
};

export default ManageStudents;
