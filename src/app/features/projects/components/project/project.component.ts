import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../state/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input()
  public project: Project;

  constructor() {}

  @Override()
  public ngOnInit(): void {}
}
