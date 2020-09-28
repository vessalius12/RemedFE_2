import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./Post";
import { UserList } from "./users";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="users" list={UserList} />
  </Admin>
);
export default App;
