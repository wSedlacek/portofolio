import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss'],
})
export class PanelsComponent implements OnInit {
  constructor() {}
  public aboutEnabled = Boolean(environment?.contentful?.contentTypeIds?.about);
  public activityEnabled = Boolean(
    environment?.contentful?.contentTypeIds?.activity
  );

  @Override()
  public ngOnInit(): void {}
}
