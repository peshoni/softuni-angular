
import { inject, NgModule } from '@angular/core';
import { provideApollo } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environment';
 
export function createApollo(): ApolloClientOptions<any> {
    const httpLink = inject(HttpLink);

    const headers = new HttpHeaders({
        'Accept': 'charset=utf-8',
        'x-hasura-admin-secret': 'softuniAngularAdminSecret'
    });

    return {
        link: httpLink.create({
            uri: environment.hasuraUrl,
            headers,
            withCredentials: false
        }),
        cache: new InMemoryCache(),
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'cache-and-network',
            },
            query: {
                fetchPolicy: 'network-only',
                errorPolicy: 'all',
            },
        }
    };
}

@NgModule({
    //   exports: [ApolloModule],
    providers: [
        // {
        //   provide: APOLLO_OPTIONS,
        //   useFactory: createApollo,
        //   deps: [HttpLink],
        // },
        provideApollo(createApollo)
    ],
})
export class GraphQLModule { }