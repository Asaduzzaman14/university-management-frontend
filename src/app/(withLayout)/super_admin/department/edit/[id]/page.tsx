"use client";
import FormInput from "@/components/Forms/FormInput";
import Form from "@/components/Forms/form";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

type IdProps = {
  params: {
    id: string;
  };
};

const EditDepartmentPage = ({ params }: IdProps) => {
  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation(data);

  const onSubmit = async (values: { title: string }) => {
    message.loading("Department Updating...");
    try {
      await updateDepartment({ id, body: values });

      message.success("department Updated successfully");
    } catch (err: any) {
      // console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues: any = {
    title: data?.title,
  };
  // console.log(defaultValues);

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />
      <ActionBar title='Update Department'></ActionBar>

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name='title' label='Title' />
          </Col>
        </Row>
        <Button type='primary' htmlType='submit'>
          Update
        </Button>
      </Form>
    </div>
  );
};
export default EditDepartmentPage;
