import { NgModule } from '@angular/core';
import {
  ApolloModule,
  APOLLO_NAMED_OPTIONS,
  NamedOptions,
} from 'apollo-angular';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { setContext } from '@apollo/client/link/context';
import { HttpClientModule } from '@angular/common/http';

export function createApollo(httpLink: HttpLink): NamedOptions {
  const basic = setContext(() => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));

  return {
    accountsApi: {
      link: ApolloLink.from([
        basic,
        httpLink.create({ uri: environment.ACCOUNTS_URL + '/graphql' }),
      ]),
      cache: new InMemoryCache(),
    },
  };
}

@NgModule({
  exports: [HttpClientModule, ApolloModule],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
