import { State, Action, Selector } from '@ngxs/store';
import { Menu } from '../models/Menu';

export class ToggleMenu {
  static readonly type = '[Layout] Toggle Menu';
}

@State<Menu>({
  name: 'menu',
  defaults: {
    full: false,
    items: [
      { title: 'Videos', link: '#header', icon: 'video_library' },
      { title: 'Contact', link: '#contact', icon: 'contact_mail' },
      { title: 'Projects', link: '#projects', icon: 'dynamic_feed' },
    ],
  },
})
export class MenuState {
  @Selector()
  static full(state: Menu) {
    return state.full;
  }

  @Selector()
  static items(state: Menu) {
    return state.items;
  }

  @Action(ToggleMenu)
  toggle({ getState, patchState }) {
    const state = getState();
    patchState({ full: !state.full });
  }
}
