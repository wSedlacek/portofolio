import { Component } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SplashState } from '../../store/splash.state';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent {
  @Select(SplashState) loading: Observable<boolean>;
}
