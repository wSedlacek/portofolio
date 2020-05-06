import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../../environments';
import { extractMetadata } from '../../../utils/metadata.util';
import { Profile, ProfileDTO } from './profile.model';
import { ProfileStore } from './profile.store';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(
    private readonly store: ProfileStore,
    private readonly http: HttpClient
  ) {}

  public get(): Observable<Profile> {
    this.store.setError(undefined);
    this.store.setLoading(true);

    return this.http
      .get<ProfileDTO>(`${environment.gitlabAPI}/users/${environment.userId}`)
      .pipe(
        map((profile) => {
          const [
            { Availability: availability, Github: github, Tagline: tagline },
            bio,
          ] = extractMetadata(profile.bio);

          return { ...profile, bio, availability, github, tagline };
        }),
        tap((profile) => {
          this.store.setLoading(false);
          this.store.update(profile);
        }),
        catchError((e) => {
          this.store.setLoading(false);
          this.store.setError(e);
          throw e;
        })
      );
  }
}
