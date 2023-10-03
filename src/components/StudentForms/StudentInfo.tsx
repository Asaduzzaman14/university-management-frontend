"use client";
import React from "react";
import FormSelectField from "../Forms/FormSelectField";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import {
  acDepartmentOptions,
  acSemesterOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/UplodeImage";

const StudentInfo = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          Student Information
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type='text'
              name='student.name.firstName'
              size='large'
              label='First name'
            />
          </Col>
          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            {" "}
            <FormInput
              type='text'
              name='student.name.middlename'
              size='large'
              label='Middle Name'
            />
          </Col>
          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            {" "}
            <FormInput
              type='text'
              name='student.name.lastName'
              size='large'
              label='last Name'
            />
          </Col>

          <Col
            className='gutter-row'
            span={6}
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
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size='large'
              name='student.academicDepartment'
              options={acDepartmentOptions}
              label='Academic Department'
              placeholder='Select'
            />
          </Col>

          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size='large'
              name='student.academicFaculty'
              options={facultyOptions}
              label='Academic Faculty'
              placeholder='Select'
            />
          </Col>
          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size='large'
              name='student.academicSemester'
              options={acSemesterOptions}
              label='Academic Semester'
              placeholder='Select'
            />
          </Col>

          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size='large'
              name='student.managementDepartment'
              options={departmentOptions}
              label='Department'
              placeholder='Select'
            />
          </Col>

          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size='large'
              name='student.gender'
              options={genderOptions}
              label='Gender'
              placeholder='Select'
            />
          </Col>

          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <UploadImage />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
