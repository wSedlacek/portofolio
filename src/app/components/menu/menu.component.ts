import { Component } from '@angular/core';

import { resizeMenu } from '../../helpers/animations';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { MenuState, ToggleMenu } from '../../store/menu.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Section } from 'src/app/models/Section';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [resizeMenu],
})
export class MenuComponent {
  @Select(MenuState.full) menuFull: Observable<boolean>;
  @Select(MenuState.items) menuItems: Observable<Section[]>;
  @Dispatch() toggleMenu = () => new ToggleMenu();
}
