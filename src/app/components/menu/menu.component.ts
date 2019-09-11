import { Component } from '@angular/core';

import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Observable } from 'rxjs';

import { MenuState, ToggleMenu } from '../../store/menu.state';
import { Section } from '../../models/Section';

import { resizeMenu } from '../../helpers/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [resizeMenu],
})
export class MenuComponent {
  @Select(MenuState.full) menuFull: Observable<boolean>;
  @Select(MenuState.items) menuItems: Observable<Section[]>;
  @Select(MenuState.selected) selected: Observable<string>;
  @Dispatch() toggleMenu = () => new ToggleMenu();
}
