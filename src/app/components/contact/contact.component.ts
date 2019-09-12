import { Component, OnInit } from '@angular/core';

import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Observable } from 'rxjs';

import { MeState, FetchMe } from '../../store/me.state';
import { User } from '../../models/User';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Select(MeState) me: Observable<User>;
  @Dispatch() fetchMe = () => new FetchMe();

  ngOnInit() {
    this.fetchMe();
  }
}
