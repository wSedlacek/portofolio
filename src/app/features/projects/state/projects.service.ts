import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments';
import { extractMetadata } from '../../../utils';

import { Project, ProjectDTO } from './project.model';
import { ProjectsStore } from './projects.store';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(
    private readonly store: ProjectsStore,
    private readonly http: HttpClient
  ) {}

  public get(): Observable<ProjectDTO[]> {
    this.store.setError(undefined);
    this.store.setLoading(true);

    return this.http
      .get<Project[]>(
        `${environment.gitlabAPI}/users/${environment.userId}/projects`
      )
      .pipe(
        map((projects) =>
          projects.map((project) => {
            const [
              { Stack: stack, Link: links, Members: members },
              description,
            ] = extractMetadata(project.description);

            return {
              ...project,
              description,
              stack,
              members,
              link: links ? links[0] : undefined,
            };
          })
        ),
        tap((entities) => {
          this.store.setLoading(false);
          this.store.set(entities);
        }),
        catchError((e) => {
          this.store.setLoading(false);
          this.store.setError(e);
          throw e;
        })
      );
  }
}
