import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FailingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
