import { Injectable } from '@angular/core';
import { GetProjectsGQL, Projects_Bool_Exp, Projects_Order_By } from '../../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private getProjectsGQL:GetProjectsGQL) { }
  getProjects(
    limit = 10,
    offset = 0,
    condition: Projects_Bool_Exp = {},
    orderBy: Projects_Order_By
  ) {
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
