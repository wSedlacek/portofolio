import { Injectable } from '@angular/core';
import { State, Action } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

import { HttpClient } from '@angular/common/http';

import { Loaded } from './splash.state';

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
@Injectable()
export class ProjectsState {
  constructor(private http: HttpClient) {}

  @Dispatch() private loaded = () => new Loaded();

  @Action(AddProject)
  public add({ getState, setState }, action: AddProject) {
    const state = getState();
    setState([...state, action.projectToAdd]);
  }

  @Action(FindProjects)
  public find({ setState }) {
    const completed = (val: Project[]) => {
      this.loaded();
      setState(val);
    };

    this.http
      .get<Project[]>('https://gitlab.com/api/v4/users/4406562/projects')
      .subscribe(completed);
  }
}
