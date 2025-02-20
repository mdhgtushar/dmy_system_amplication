import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="finance" source="finance" />
        <TextField label="fullname" source="fullname" />
        <TextField label="ID" source="id" />
        <TextField label="phone" source="phone" />
        <ReferenceField label="tasks" source="task.id" reference="Task">
          <TextField source={TASK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vision" source="vision" />
        <ReferenceManyField
          reference="Dailydatum"
          target="userId"
          label="dailydata"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="daydata" source="daydata" />
            <TextField label="finance" source="finance" />
            <TextField label="ID" source="id" />
            <TextField label="note" source="note" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
