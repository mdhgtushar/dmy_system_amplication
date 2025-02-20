import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DailydatumTitle } from "../dailydatum/DailydatumTitle";
import { TaskTitle } from "../task/TaskTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="dailydata" reference="Dailydatum">
          <SelectArrayInput
            optionText={DailydatumTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <div />
        <TextInput label="fullname" source="fullname" />
        <TextInput label="phone" source="phone" />
        <ReferenceInput source="task.id" reference="Task" label="tasks">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
        <TextInput label="vision" source="vision" />
      </SimpleForm>
    </Edit>
  );
};
