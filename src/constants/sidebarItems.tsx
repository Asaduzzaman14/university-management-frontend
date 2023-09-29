import { MenuProps } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Link from "next/link";

const sidebarItems = (role: string) => {
    const defaultSidebarItems: MenuProps["items"] = [
        {
            label: "Profile",
            key: "Profile",
            icon: <UserOutlined />,
            children: [{
                label: "Acount Profile",
                key: "Profile",
            },
            {
                label: "Change Password",
                key: "change-password",
            }
            ]
        }
    ]

    const commonAdminSidebarItemas: MenuProps["items"] = [
        {
            label: <Link href={`/${role}/manage-students`}>Manage Student</Link>,
            key: "manage-student",
        }
    ]

    if (role === 'student') return defaultSidebarItems
    else if (role === 'admin') return commonAdminSidebarItemas

};

export default sidebarItems;