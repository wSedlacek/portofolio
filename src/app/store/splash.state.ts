import { State, Action } from '@ngxs/store';

export class Loaded {
  static readonly type = '[Splash] loaded';
}

@State<boolean>({
  name: 'splash',
  defaults: true,
})
export class SplashState {
  @Action(Loaded)
  loaded({ setState }) {
    setState(false);
  }
}
