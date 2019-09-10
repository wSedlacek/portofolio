import { State, Action, Selector } from '@ngxs/store';
import { Menu } from '../models/Menu';

export class ToggleMenu {
  static readonly type = '[Layout] Toggle Menu';
}

@State<Menu>({
  name: 'fullMenu',
  defaults: {
    full: false,
    items: [
      { title: 'Videos', link: '#header', icon: 'video_library' },
      { title: 'Projects', link: '#projects', icon: 'dynamic_feed' },
      { title: 'Contact', link: '#footer', icon: 'contact_mail' },
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
