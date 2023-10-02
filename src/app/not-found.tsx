import { Row } from "antd";
import React from "react";

const NotFound = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        height: "100vh",
      }}
    >
      <div>
        <h1>404!! Page Not Found</h1>
      </div>
    </Row>
  );
};

export default NotFound;
