import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/authService";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div>
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
      <h2>Admin List</h2>

      <ActionBar title='Admin List'>
        <Link href={"/super_admin/admin/create"}>
          <Button>Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default AdminPage;
