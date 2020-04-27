import React, { FormEvent, useState } from "react";
import "./App.css";
import {
  useUsersQuery,
  useCreateUserMutation,
  UserQuery,
  UserDocument,
  UsersDocument,
} from "./generated/graphql";

function App() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const { data, error } = useUsersQuery();

  const [createUser] = useCreateUserMutation();

  const onSubmitUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser({
      variables: {
        fullname,
        email,
      },
      update: (cache, { data }) => {
        if (!data) return null;
        cache.writeData<UserQuery>({
          data: {
            user: data.createUser.user,
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
        <li key={user.id}>
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
