import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';

const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $email: String!
    $username: String!
    $password: String!
  ) {
    createAccount(
      createAccountDto: {
        email: $email
        username: $username
        password: $password
      }
    ) {
      email
      username
      avatarPath
      role
      active
      createdAt
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = apolloProvider.use('accountsApi');
  }

  createAccount(email: string, username: string, password: string) {
    return this.apollo.mutate({
      mutation: CREATE_ACCOUNT,
      variables: {
        email: email,
        username: username,
        password: password,
      },
    });
  }
}