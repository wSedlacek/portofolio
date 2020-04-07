import { Injectable } from '@angular/core';
import { State, Action } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';

export class FetchMe {
  static readonly type = '[Me] Fetch';
}

@State<User>({
  name: 'me',
  defaults: null,
})
@Injectable()
export class MeState {
  constructor(private http: HttpClient) {}

  @Action(FetchMe)
  find({ setState }) {
    this.http
      .get<User>('https://gitlab.com/api/v4/users/4406562')
      .subscribe(setState);
  }
}
