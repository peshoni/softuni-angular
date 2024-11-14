import { Injectable } from '@angular/core';
import { GetProjectsGQL, Projects_Bool_Exp, Projects_Order_By } from '../../../generated/graphql';

@Injectable()
export class ProjectsService {
  constructor(private getProjectsGQL: GetProjectsGQL) { }
  getProjects(limit: number, offset: number, condition: Projects_Bool_Exp, orderBy: Projects_Order_By) {
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
