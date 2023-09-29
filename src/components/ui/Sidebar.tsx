"use client"

import React, { useState } from 'react';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import type { MenuProps } from 'antd';

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import sidebarItems from '@/constants/sidebarItems';
import { USER_ROLE } from '@/constants/role';

const Sidebar = () => {

    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
    ];

    const role = USER_ROLE.ADMIN
    const [collapsed, setCollapsed] = useState(false);

    return (
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
    );
};

export default Sidebar;