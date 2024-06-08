import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FailingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Zip" source="zip" />
      </SimpleForm>
    </Create>
  );
};
