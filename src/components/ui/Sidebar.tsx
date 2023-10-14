"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { getUserInfo } from "@/services/authService";
import { sidebarItems } from "@/constants/sidebarItems";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // const { role } = getUserInfo() as any;
  const role = "student";

  console.log(role);

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={200}
        style={{
          overflow: "auto",
          minHeight: "100vh",
          position: "static",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {/* <div className='demo-logo-vertical' /> */}
        <div
          style={{
            color: "white",
            padding: ".2rem",
            fontSize: "1.5rem",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Global University
        </div>
        <Menu
          theme='dark'
          defaultSelectedKeys={["1"]}
          mode='inline'
          items={sidebarItems(role ? role : "")}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
