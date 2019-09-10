import { Component, OnInit } from '@angular/core';

import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Observable } from 'rxjs';

import { Project } from '../../models/Project';
import { ProjectsState, FindProjects } from '../../store/projects.state';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @Select(ProjectsState) projects: Observable<Project[]>;
  @Dispatch() findProjects = () => new FindProjects();

  ngOnInit() {
    this.findProjects();
  }
}
