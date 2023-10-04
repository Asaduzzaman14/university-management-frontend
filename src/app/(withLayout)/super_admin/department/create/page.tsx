"use client";
import FormInput from "@/components/Forms/FormInput";
import Form from "@/components/Forms/form";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: string) => {
    message.loading("Department Creating...");
    try {
      console.log(data);
      const res = await addDepartment(data);
      console.log(res, "res");

      message.success("department added successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `department`,
            link: `/${base}/department`,
          },
        ]}
      />
      <h1>Create Department Page</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col
            span={8}
            style={{ margin: "10px 0" }}
          >
            <FormInput
              name='title'
              label='Title'
            />
          </Col>
        </Row>
        <Button
          type='primary'
          htmlType='submit'
        >
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
