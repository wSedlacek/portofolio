import { Injectable } from '@angular/core';
import { State, Action } from '@ngxs/store';

export class Loaded {
  static readonly type = '[Splash] loaded';
}

@State<boolean>({
  name: 'splash',
  defaults: true,
})
@Injectable()
export class SplashState {
  @Action(Loaded)
  loaded({ setState }) {
    setState(false);
  }
}
