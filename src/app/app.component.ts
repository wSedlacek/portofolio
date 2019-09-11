import { Component } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { resizeMain } from './helpers/animations';

import { MenuState } from './store/menu.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [resizeMain],
})
export class AppComponent {
  title = 'portofolio';
  @Select(MenuState.full) menuFull: Observable<boolean>;
}
