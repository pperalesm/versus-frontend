import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';

const CREATE_ACCOUNT = gql`
  mutation {
    createAccount(
      createAccountDto: {
        email: "bla@sfbla.blaaaa"
        username: "blablabasflaaaa"
        password: "blaasfblabla"
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

  createAccount() {
    return this.apollo.mutate({ mutation: CREATE_ACCOUNT });
  }
}
