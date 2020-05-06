import { Injectable } from '@angular/core';

import { QueryEntity } from '@datorama/akita';
import { ProjectsState, ProjectsStore } from './projects.store';

@Injectable({ providedIn: 'root' })
export class ProjectsQuery extends QueryEntity<ProjectsState> {
  constructor(protected store: ProjectsStore) {
    super(store);
  }
}
