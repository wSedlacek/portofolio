import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AboutQuery } from './state/about.query';
import { AboutService } from './state/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(
    private readonly query: AboutQuery,
    private readonly service: AboutService
  ) {}
  public readonly loading$ = this.query.selectLoading();
  public readonly paragraphs$ = this.query.select('paragraphs');
  public readonly skills$ = this.query.select('skills');

  @Override()
  public ngOnInit(): void {
    this.service.get().pipe(untilDestroyed(this)).subscribe();
  }

  @Override()
  public ngOnDestroy(): void {}
}
