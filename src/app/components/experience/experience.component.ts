import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public experiences = [
    {
      name: 'HTML',
      icon: 'html5',
      years: '4 Years',
    },
    {
      name: 'CSS3',
      icon: 'css3',
      years: '4 Years',
    },
    {
      name: 'Javascript',
      icon: 'js-square',
      years: '3 Years',
    },
    {
      name: 'Git',
      icon: 'git-alt',
      years: '7 Years',
    },
  ];
}
