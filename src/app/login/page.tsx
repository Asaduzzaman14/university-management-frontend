import LoginPage from "@/components/login/Login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UM | login",
};
const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
