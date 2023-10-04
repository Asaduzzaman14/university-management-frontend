import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/authService";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const AdminPage = () => {

  
  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        
          items={[
            { label: `${base}`, link: `/${base}` },
            { label: "department", link: `/${base}/department` },
          ]}
 
      />

      <ActionBar title='Admin List'>
        <Link href={"/super_admin/admin/create"}>
          <Button>Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default AdminPage;
