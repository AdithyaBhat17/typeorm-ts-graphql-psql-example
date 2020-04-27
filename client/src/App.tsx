import React, { FormEvent, useState } from "react";
import "./App.css";
import {
  useUsersQuery,
  useCreateUserMutation,
  UsersDocument,
  useRemoveUserMutation,
} from "./generated/graphql";

function App() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const { data, error } = useUsersQuery({ fetchPolicy: "network-only" });

  const [createUser] = useCreateUserMutation();

  const [removeUser] = useRemoveUserMutation();

  const onRemoveUser = (id: number) => {
    removeUser({
      variables: {
        id,
      },
      update: (cache, { data }) => {
        if (!data) return null;
        //@ts-ignore
        let { users } = cache.readQuery({ query: UsersDocument });
        cache.writeQuery({
          query: UsersDocument,
          data: {
            users: users.filter((user: any) => user.id !== id),
          },
        });
      },
    });
  };

  const onSubmitUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser({
      variables: {
        fullname,
        email,
      },
      update: (cache, { data }) => {
        if (!data) return null;
        //@ts-ignore
        let { users } = cache.readQuery({ query: UsersDocument });
        cache.writeQuery({
          query: UsersDocument,
          data: {
            users: users.concat([data.createUser.user]),
          },
        });
      },
    });
    setEmail("");
    setFullname("");
  };

  return (
    <div className="App">
      {error ? "Error" : null}
      {data?.users?.map((user) => (
        <li key={user.id} onClick={() => onRemoveUser(user.id)}>
          {user.fullname} - {user.email}
        </li>
      ))}
      <form onSubmit={onSubmitUser}>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            value={fullname}
            name="fullname"
            id="fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input type="submit" value="Create user" />
      </form>
    </div>
  );
}

export default App;
