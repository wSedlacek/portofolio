import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Profile } from './profile.model';
import { ProfileStore } from './profile.store';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(
    private readonly profileStore: ProfileStore,
    private readonly http: HttpClient
  ) {}

  public get(): Observable<Profile> {
    this.profileStore.setError(undefined);
    this.profileStore.setLoading(true);

    return this.http
      .get<Profile>(`${environment.api}/users/${environment.userId}`)
      .pipe(
        tap((profile) => {
          this.profileStore.setLoading(false);
          this.profileStore.update(profile);
        }),
        catchError((e) => {
          this.profileStore.setError(e);
          throw e;
        })
      );
  }
}
