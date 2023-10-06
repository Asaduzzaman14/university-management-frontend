import { Row, Space, Spin } from "antd";
import React from "react";

const loading = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        height: "100vh",
      }}
    >
      <Space>
        <Spin tip='Loading' size='large'></Spin>
      </Space>
    </Row>
  );
};

export default loading;
