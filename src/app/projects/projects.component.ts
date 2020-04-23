import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ProjectsQuery } from './state/projects.query';
import { ProjectsService } from './state/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public loading$ = this.query.selectLoading();
  public projects$ = this.query.selectAll();

  constructor(
    private readonly query: ProjectsQuery,
    private readonly service: ProjectsService
  ) {}

  @Override()
  public ngOnInit(): void {
    this.service.get().pipe(untilDestroyed(this)).subscribe();
  }

  @Override()
  public ngOnDestroy(): void {}
}
