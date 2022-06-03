import { NgModule } from '@angular/core';
import {
  ApolloModule,
  APOLLO_NAMED_OPTIONS,
  NamedOptions,
} from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          accountsApi: {
            link: httpLink.create({
              uri: environment.ACCOUNTS_URL + '/graphql',
            }),
            cache: new InMemoryCache(),
          },
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
