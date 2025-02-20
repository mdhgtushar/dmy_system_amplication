import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="vision" source="vision" />{" "}
      </Datagrid>
    </List>
  );
};
