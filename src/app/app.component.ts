import { Component, OnInit } from '@angular/core';

import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Observable } from 'rxjs';

import { ProjectsState, FindProjects } from './store/projects.state';
import { Project } from './models/Project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portofolio';
  @Select(ProjectsState) projects: Observable<Project[]>;
  @Dispatch() findProjects = () => new FindProjects();

  ngOnInit() {
    this.findProjects();
  }
}
