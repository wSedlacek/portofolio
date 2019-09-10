import { State, Action } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

import { Project } from '../models/Project';

export class AddProject {
  static readonly type = '[Projects] Add';
  constructor(public projectToAdd: Project) {}
}

export class FindProjects {
  static readonly type = '[Projects] Find';
}

@State<Project[]>({
  name: 'projects',
  defaults: [],
})
export class ProjectsState {
  constructor(private http: HttpClient) {}

  @Action(AddProject)
  add({ getState, setState }, action: AddProject) {
    const state = getState();
    setState([...state, action.projectToAdd]);
  }

  @Action(FindProjects)
  find({ setState }) {
    this.http
      .get<Project[]>('https://gitlab.com/api/v4/users/4406562/projects')
      .subscribe(setState);
  }
}
