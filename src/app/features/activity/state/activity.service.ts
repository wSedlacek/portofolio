import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { extractMetadata } from '../../../utils';
import { ContentfulService } from '../../contentful/contentful.service';

import { Activity } from './activity.model';
import { ActivityStore } from './activity.store';

@Injectable({ providedIn: 'root' })
export class ActivityService {
  constructor(
    private readonly store: ActivityStore,
    private readonly contentful: ContentfulService
  ) {}

  public get(): Observable<Activity[]> {
    this.store.setLoading(true);
    this.store.setError(undefined);

    return this.contentful.getActivities().pipe(
      map((activities) =>
        activities.map((activity) => {
          const [
            { YouTube: videos, Link: links, Image: images },
          ] = extractMetadata(activity.metadata);

          return {
            ...activity,
            videos,
            links,
            images,
            paragraphs: activity.story.split('\n\n'),
          };
        })
      ),
      tap((activities) => {
        this.store.set(activities);
        this.store.setLoading(false);
      }),
      catchError((e) => {
        this.store.setError(e);
        this.store.setLoading(false);
        throw e;
      })
    );
  }
}
