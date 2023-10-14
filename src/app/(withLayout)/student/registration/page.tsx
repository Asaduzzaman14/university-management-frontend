import { Button } from "antd";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h2>registration</h2>

      <Link href={"/student/pre-registration"}>
        <Button>Registration</Button>
      </Link>
    </div>
  );
};

export default page;
