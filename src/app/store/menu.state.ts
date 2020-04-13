import { Injectable } from '@angular/core';
import { State, Action, Selector } from '@ngxs/store';
import { Menu } from '../models/Menu';

export class ToggleMenu {
  static readonly type = '[Layout] Toggle Menu';
}

export class SelectSection {
  static readonly type = '[Layout] SelectSection';
  constructor(public selected: string) {}
}

@State<Menu>({
  name: 'menu',
  defaults: {
    full: false,
    items: [
      { title: 'Header', link: 'videos', icon: 'video_library' },
      { title: 'Contact', link: 'contact', icon: 'contact_mail' },
      { title: 'Experience', link: 'experience', icon: 'work' },
      { title: 'Projects', link: 'projects', icon: 'dynamic_feed' },
    ],
    selected: 'videos',
  },
})
@Injectable()
export class MenuState {
  @Selector()
  static full(state: Menu) {
    return state.full;
  }

  @Selector()
  static items(state: Menu) {
    return state.items;
  }

  @Selector()
  static selected(state: Menu) {
    return state.selected;
  }

  @Action(ToggleMenu)
  toggle({ getState, patchState }) {
    const state = getState();
    patchState({ full: !state.full });
  }

  @Action(SelectSection)
  select({ patchState }, action: SelectSection) {
    patchState({ selected: action.selected });
  }
}
