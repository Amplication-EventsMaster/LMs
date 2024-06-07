import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EnrollmentTitle } from "../enrollment/EnrollmentTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Credits" source="credits" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndDate" source="endDate" />
        <ReferenceArrayInput
          source="enrollments"
          reference="Enrollment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EnrollmentTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="StartDate" source="startDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
