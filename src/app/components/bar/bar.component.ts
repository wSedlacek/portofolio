import { Component } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { ToggleMenu } from '../../store/menu.state';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  @Dispatch() toggleMenu = () => new ToggleMenu();
}
