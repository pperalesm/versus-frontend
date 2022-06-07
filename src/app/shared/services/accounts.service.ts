import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { catchError, map, Observable, of, tap } from 'rxjs';
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
      username
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
      username
    }
  }
`;

const LOG_IN = gql`
  query Login($user: String!, $password: String!) {
    login(loginDto: { user: $user, password: $password }) {
      token
      account {
        email
        username
        avatarPath
        role
        active
        createdAt
        updatedAt
      }
    }
  }
`;

const RESET_PASSWORD = gql`
  mutation ResetPassword($id: String!, $token: String!, $password: String!) {
    resetPassword(
      resetPasswordDto: { id: $id, token: $token, password: $password }
    ) {
      username
    }
  }
`;

const FORGOT_PASSWORD = gql`
  query ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  apollo: ApolloBase;
  authUser?: Account;

  constructor(private apolloProvider: Apollo, private router: Router) {
    this.apollo = apolloProvider.use('accountsApi');
    const authUserString = localStorage.getItem('authUser');
    if (authUserString) {
      this.authUser = JSON.parse(authUserString);
    }
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

  login(user: string, password: string) {
    return this.apollo
      .query<{ login: { token: string; account: Account } }>({
        query: LOG_IN,
        variables: { user: user, password: password },
      })
      .pipe(
        tap(({ data }) => {
          this.authUser = data.login.account;
          localStorage.setItem('token', data.login.token);
          localStorage.setItem('authUser', JSON.stringify(data.login.account));
        }),
      );
  }

  logout() {
    this.authUser = undefined;
    localStorage.removeItem('token');
    localStorage.removeItem('authUser');
    this.router.navigate(['/auth/login']);
  }

  resetPassword(id: string, token: string, password: string) {
    return this.apollo.mutate<{ resetPassword: Account }>({
      mutation: RESET_PASSWORD,
      variables: { id: id, token: token, password: password },
    });
  }

  forgotPassword(email: string) {
    return this.apollo.query<{ forgotPassword: boolean }>({
      query: FORGOT_PASSWORD,
      variables: { email: email },
    });
  }
}
