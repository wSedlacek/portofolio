import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { Project } from './project.model';
import { ProjectsStore } from './projects.store';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private store: ProjectsStore, private http: HttpClient) {}

  public get(): Observable<Project[]> {
    this.store.setError(undefined);
    this.store.setLoading(true);

    return this.http
      .get<Project[]>(`${environment.api}/users/${environment.userId}/projects`)
      .pipe(
        map((projects) =>
          projects.map((project) => ({
            ...project,
            description: project.description.split(/http\S+/)[0],
            deployed_url: project.description?.match(/http\S+/)?.toString(),
          }))
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
