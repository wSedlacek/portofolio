import { Component } from '@angular/core';

import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Observable } from 'rxjs';

import { MeState } from 'src/app/store/me.state';
import { User } from 'src/app/models/User';

import { ToggleMenu } from '../../store/menu.state';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  @Select(MeState) me: Observable<User>;
  @Dispatch() toggleMenu = () => new ToggleMenu();
}
