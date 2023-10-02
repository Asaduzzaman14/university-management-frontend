"use client";

import React, { useState } from 'react';
import { Layout, Menu, } from 'antd';
const { Sider } = Layout;
import sidebarItems from '@/constants/sidebarItems';
import { USER_ROLE } from '@/constants/role';
import { getUserInfo } from '@/services/authService';

const Sidebar = () => {

    // const role = USER_ROLE.ADMIN
    // const role = USER_ROLE.STUDENT;
    const { role } = getUserInfo() as any;


    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Sider collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                width={200}
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: 'static',
                    left: 0,
                    top: 0,
                    bottom: 0
                }}
            >
                <div className="demo-logo-vertical" />
                <div
                    style={{
                        color: "white",
                        padding: '.2rem',
                        fontSize: "1.5rem",
                        textAlign: "center",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                    }}
                >
                    Global University
                </div>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
            </Sider>
        </>
    );
};

export default Sidebar;