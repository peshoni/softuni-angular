import { inject, Injectable } from '@angular/core';
import { Exact, GetProjectsGQL, GetProjectsQuery, InputMaybe, Projects_Bool_Exp, Projects_Order_By, Scalars } from '../../../generated/graphql';
import { QueryRef } from 'apollo-angular';

@Injectable()
export class ProjectsService {
  private readonly getProjectsGQL: GetProjectsGQL = inject(GetProjectsGQL);

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
}
