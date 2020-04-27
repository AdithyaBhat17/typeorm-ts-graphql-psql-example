import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  user: User;
};

export type QueryUserArgs = {
  id: Scalars["Float"];
};

export type User = {
  __typename?: "User";
  id: Scalars["Int"];
  fullname: Scalars["String"];
  email: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createUser: UserResponse;
  removeUser: Scalars["Boolean"];
};

export type MutationCreateUserArgs = {
  email: Scalars["String"];
  fullname: Scalars["String"];
};

export type MutationRemoveUserArgs = {
  id: Scalars["Float"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  success: Scalars["Boolean"];
  user: User;
};

export type UsersQueryVariables = {};

export type UsersQuery = { __typename?: "Query" } & {
  users: Array<
    { __typename?: "User" } & Pick<User, "id" | "fullname" | "email">
  >;
};

export type UserQueryVariables = {
  id: Scalars["Float"];
};

export type UserQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & Pick<User, "id" | "fullname" | "email">;
};

export type CreateUserMutationVariables = {
  email: Scalars["String"];
  fullname: Scalars["String"];
};

export type CreateUserMutation = { __typename?: "Mutation" } & {
  createUser: { __typename?: "UserResponse" } & Pick<
    UserResponse,
    "success"
  > & {
      user: { __typename?: "User" } & Pick<User, "id" | "fullname" | "email">;
    };
};

export type RemoveUserMutationVariables = {
  id: Scalars["Float"];
};

export type RemoveUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "removeUser"
>;

export const UsersDocument = gql`
  query Users {
    users {
      id
      fullname
      email
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    UsersQuery,
    UsersQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    baseOptions
  );
}
export function useUsersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UsersQuery,
    UsersQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    baseOptions
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const UserDocument = gql`
  query User($id: Float!) {
    user(id: $id) {
      id
      fullname
      email
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  );
}
export function useUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UserQuery,
    UserQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<
  UserQuery,
  UserQueryVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($email: String!, $fullname: String!) {
    createUser(email: $email, fullname: $fullname) {
      user {
        id
        fullname
        email
      }
      success
    }
  }
`;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      fullname: // value for 'fullname'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument, baseOptions);
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<
  CreateUserMutation
>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const RemoveUserDocument = gql`
  mutation RemoveUser($id: Float!) {
    removeUser(id: $id)
  }
`;
export type RemoveUserMutationFn = ApolloReactCommon.MutationFunction<
  RemoveUserMutation,
  RemoveUserMutationVariables
>;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveUserMutation,
    RemoveUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    RemoveUserMutation,
    RemoveUserMutationVariables
  >(RemoveUserDocument, baseOptions);
}
export type RemoveUserMutationHookResult = ReturnType<
  typeof useRemoveUserMutation
>;
export type RemoveUserMutationResult = ApolloReactCommon.MutationResult<
  RemoveUserMutation
>;
export type RemoveUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveUserMutation,
  RemoveUserMutationVariables
>;
