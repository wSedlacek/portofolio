import { Component } from '@angular/core';

import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Observable } from 'rxjs';

import { MenuState } from './store/menu.state';
import { SelectSection } from './store/menu.state';

import { resizeMain } from './helpers/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [resizeMain],
})
export class AppComponent {
  @Select(MenuState.full) menuFull: Observable<boolean>;
  @Dispatch() changeSelection = (selected: string) => new SelectSection(selected);
}
