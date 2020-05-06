import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ActivityQuery } from './state/activity.query';
import { ActivityService } from './state/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit, OnDestroy {
  constructor(
    private readonly query: ActivityQuery,
    private readonly service: ActivityService
  ) {}
  public readonly loading$ = this.query.selectLoading();
  public readonly activities$ = this.query.selectAll();

  @Override()
  public ngOnInit(): void {
    this.service.get().pipe(untilDestroyed(this)).subscribe();
  }

  @Override()
  public ngOnDestroy(): void {}
}
