import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { catchError, map, Observable, of } from 'rxjs';
import { Account } from '../models/account.model';

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
      updatedAt
    }
  }
`;

const CHECK_USERNAME = gql`
  query CheckUsername($username: String!) {
    checkUsername(username: $username)
  }
`;

const ACTIVATE_ACCOUNT = gql`
  mutation ActivateAccount($id: String!, $token: String!) {
    activateAccount(activateAccountDto: { id: $id, token: $token }) {
      email
      username
      avatarPath
      role
      active
      createdAt
      updatedAt
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
    return this.apollo.mutate<{ createAccount: Account }>({
      mutation: CREATE_ACCOUNT,
      variables: {
        email: email,
        username: username,
        password: password,
      },
    });
  }

  checkUsername(username: string) {
    return this.apollo.query<{ checkUsername: boolean }>({
      query: CHECK_USERNAME,
      variables: { username: username },
    });
  }

  checkUsernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkUsername(control.value).pipe(
        map(({ data }) =>
          data.checkUsername ? { checkUsername: true } : null,
        ),
        catchError(() => of(null)),
      );
    };
  }

  activateAccount(id: string, token: string) {
    return this.apollo.mutate<{ activateAccount: Account }>({
      mutation: ACTIVATE_ACCOUNT,
      variables: { id: id, token: token },
    });
  }
}
