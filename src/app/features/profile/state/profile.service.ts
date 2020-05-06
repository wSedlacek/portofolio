import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../../environments';
import { extractMetadata } from '../../../utils';
import { ContentfulService } from '../../contentful/contentful.service';
import { Profile, ProfileDTO } from './profile.model';
import { ProfileStore } from './profile.store';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(
    private readonly store: ProfileStore,
    private readonly http: HttpClient,
    private readonly contentful: ContentfulService
  ) {}

  public get(): Observable<Profile> {
    this.store.setError(undefined);
    this.store.setLoading(true);

    return combineLatest([
      this.http.get<ProfileDTO>(
        `${environment.gitlabAPI}/users/${environment.userId}`
      ),
      this.contentful.getResume(),
    ]).pipe(
      map(([profile, resume]) => {
        const [
          {
            Availability: availabilities,
            Github: githubLinks,
            Tagline: taglines,
          },
          bio,
        ] = extractMetadata(profile.bio);

        return {
          ...profile,
          bio,
          resume,
          availability: availabilities ? availabilities[0] : undefined,
          github: githubLinks ? githubLinks[0] : undefined,
          tagline: taglines ? taglines[0] : undefined,
        };
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
