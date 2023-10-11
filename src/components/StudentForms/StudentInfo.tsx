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
import ACDepartmentField from "../Forms/ACDepartmentField";
import ACFacultyField from "../Forms/ACFacultyField";
import ACSemesterField from "../Forms/ACSemesterField";

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
            <ACDepartmentField
              name='student.academicDepartment'
              label='Academic Department'
            />
          </Col>

          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <ACFacultyField
              name='student.academicFaculty'
              label='Academic Faculty'
            />
          </Col>
          <Col
            className='gutter-row'
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <ACSemesterField
              name='student.academicSemester'
              label='Academic Semester'
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
            <UploadImage name='file' />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
