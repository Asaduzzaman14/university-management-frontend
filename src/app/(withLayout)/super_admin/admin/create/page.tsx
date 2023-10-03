"use client";

import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import Form from "@/components/Forms/form";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UplodeImage";
import {
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/constants/global";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateAdminPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data, "form data");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `admin`,
            link: `/super_admin/admin`,
          },
        ]}
      />
      <h2>Create Admin</h2>

      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type='text'
                  name='admin.name.firstName'
                  size='large'
                  label='First name'
                />
              </Col>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                {" "}
                <FormInput
                  type='text'
                  name='admin.name.middlename'
                  size='large'
                  label='Middle Name'
                />
              </Col>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                {" "}
                <FormInput
                  type='text'
                  name='admin.name.lastName'
                  size='large'
                  label='last Name'
                />
              </Col>

              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type='password'
                  name='password'
                  size='large'
                  label='Password'
                />
              </Col>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size='large'
                  name='admin.gender'
                  options={genderOptions}
                  label='Gender'
                  placeholder='Select'
                />
              </Col>

              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size='large'
                  name='admin.managementDepartment'
                  options={departmentOptions}
                  label='Department'
                  placeholder='Select'
                />
              </Col>

              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage />
              </Col>
            </Row>
          </div>
          {/* ***************** */}
          {/*  Basic Information */}
          {/* ***************** */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type='email'
                  name='admin.email'
                  size='large'
                  label='Email address'
                />
              </Col>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type='text'
                  name='admin.contactNo'
                  size='large'
                  label='Contact No.'
                />
              </Col>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type='text'
                  name='admin.emergencyContactNo'
                  size='large'
                  label='Emergency Contact No.'
                />
              </Col>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker
                  name='admin.dateOfBirth'
                  label='Date of birth'
                  size='large'
                />
              </Col>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size='large'
                  name='admin.bloodGroup'
                  options={bloodGroupOptions}
                  label='Blood group'
                  placeholder='Select'
                />
              </Col>
              <Col
                className='gutter-row'
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type='text'
                  name='admin.designation'
                  size='large'
                  label='Designation'
                />
              </Col>
              <Col
                span={12}
                style={{ margin: "10px 0" }}
              >
                <FormTextArea
                  name='admin.presentAddress'
                  label='Present address'
                  rows={4}
                />
              </Col>

              <Col
                span={12}
                style={{ margin: "10px 0" }}
              >
                <FormTextArea
                  name='admin.permanentAddress'
                  label='Permanent address'
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button
            htmlType='submit'
            type='primary'
          >
            Create
          </Button>{" "}
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;