import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { ProfileQuery } from './state/profile.query';
import { ProfileService } from './state/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public loading$ = this.query.selectLoading();
  public profile$ = this.query.select();

  constructor(
    private readonly service: ProfileService,
    private readonly query: ProfileQuery
  ) {}

  @Override()
  public ngOnInit(): void {
    this.service.get().pipe(untilDestroyed(this)).subscribe();
  }

  @Override()
  public ngOnDestroy(): void {}
}
