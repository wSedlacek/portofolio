import { State, Action } from '@ngxs/store';

export class ToogleMenu {
  static readonly type = '[Layout] Toggle Menu';
}

@State<boolean>({
  name: 'menu',
  defaults: false,
})
export class LayoutState {
  @Action(ToogleMenu)
  add({ getState, setState }) {
    const state = getState();
    setState(!state);
  }
}
