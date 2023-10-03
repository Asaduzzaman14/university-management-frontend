import StepperForm from "@/components/StepperForm/StepperForm";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import React from "react";

const CreateStudent = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo></StudentInfo>,
    },
    {
      title: "Basic Information",
      content: <StudentInfo></StudentInfo>,
    },
    {
      title: "Guardian Information",
      content: <StudentInfo></StudentInfo>,
    },
    {
      title: "Local Guardian Information",
      content: <StudentInfo></StudentInfo>,
    },
  ];

  return (
    <div>
      <h2>Create Student</h2>
      <StepperForm steps={steps}></StepperForm>
    </div>
  );
};

export default CreateStudent;
