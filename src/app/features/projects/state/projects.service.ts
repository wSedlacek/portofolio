import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments';
import {
  byCreatedDate,
  byStars,
  extractMetadata,
  firstItem,
} from '../../../utils';

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
              { Stack: stack, Link: links, Members: members, Date: dates },
              description,
            ] = extractMetadata(project.description);

            return {
              ...project,
              description,
              stack,
              members,
              link: firstItem(links),
              created_at: firstItem(dates) ?? project.created_at,
            };
          })
        ),
        map((projects) => [...projects].sort(byCreatedDate).sort(byStars)),
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
