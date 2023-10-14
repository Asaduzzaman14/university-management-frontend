"use client";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/authService";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type='text' danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <>
      <AntHeader
        style={{
          background: "#ffff",
        }}
      >
        <Row justify={"end"} align={"middle"} style={{ height: "100%" }}>
          <span style={{ paddingRight: "5px" }}>{role ? role : " "}</span>

          <Dropdown menu={{ items }}>
            <Space wrap size={16}>
              <Avatar size='large' icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </Row>
      </AntHeader>
    </>
  );
};

export default Header;
