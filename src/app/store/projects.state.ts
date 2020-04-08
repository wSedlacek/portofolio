import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State, Action } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { map, tap } from 'rxjs/operators';

import { Project } from '../models/Project';
import { Loaded } from './splash.state';

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
    return this.http
      .get<Project[]>('https://gitlab.com/api/v4/users/4406562/projects')
      .pipe(
        map((projects) =>
          projects.map((project) => ({
            ...project,
            description: project.description.split(/http\S+/)[0],
            link: project.description?.match(/http\S+/),
          }))
        ),
        tap((projects) => {
          this.loaded();
          setState(projects);
        })
      );
  }
}
