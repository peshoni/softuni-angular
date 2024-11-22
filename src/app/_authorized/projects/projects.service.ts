import { inject, Injectable } from '@angular/core';
import { Exact, GetProjectByIdGQL, GetProjectByIdQuery, GetProjectsGQL, GetProjectsOwnedByGQL, GetProjectsQuery, InputMaybe, InsertProjectGQL, InsertProjectMutation, Projects_Bool_Exp, Projects_Insert_Input, Projects_Order_By, Projects_Set_Input, Scalars, UpdateProjectByIdGQL, UpdateProjectByIdMutation } from '../../../generated/graphql';
import { MutationResult, QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {
  private readonly getProjectsGQL: GetProjectsGQL = inject(GetProjectsGQL);
  private readonly getProjectByIdGQL: GetProjectByIdGQL = inject(GetProjectByIdGQL);
  private readonly insertProjectGQL: InsertProjectGQL = inject(InsertProjectGQL);
  private readonly updateProjectByIdGQL: UpdateProjectByIdGQL = inject(UpdateProjectByIdGQL);
  private readonly getProjectsOwnedByGQL: GetProjectsOwnedByGQL = inject(GetProjectsOwnedByGQL);
  /**
   * Gets page with the projects data objects.
   * @param limit page size
   * @param offset from page
   * @param condition { @see Projects_Bool_Exp }
   * @param orderBy { @see Projects_Order_By }
   * @returns Reference of the current Apollo-angular QueryRef instance
   */
  getProjects(limit: number, offset: number, condition: Projects_Bool_Exp, orderBy: Projects_Order_By): QueryRef<GetProjectsQuery, Exact<{
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    condition?: Projects_Bool_Exp;
    orderBy?: InputMaybe<Array<Projects_Order_By> | Projects_Order_By>;
  }>> {
    return this.getProjectsGQL.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 5 * 1000,
      }
    );
  }
  /**
   * Gets project by ID
   * @param id 
   * @returns 
   */
  getProjectById(id: string): Observable<ApolloQueryResult<GetProjectByIdQuery>> {
    return this.getProjectByIdGQL.fetch({ id }, {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
      partialRefetch: true
    });
  }

  insertProject(input: Projects_Insert_Input): Observable<MutationResult<InsertProjectMutation>> {
    return this.insertProjectGQL.mutate({ input });
  }

  updateProjectById(id: string, input: Projects_Set_Input): Observable<MutationResult<UpdateProjectByIdMutation>> {
    return this.updateProjectByIdGQL.mutate({ id, input });
  }

  getProjectsOwnedById(ownerId: string): Observable<ApolloQueryResult<GetProjectByIdQuery>> {
    return this.getProjectsOwnedByGQL.fetch({ ownerId }, {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
      partialRefetch: true
    });
  }
}
