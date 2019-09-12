import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkAccordionModule } from '@angular/cdk/accordion';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faTwitter,
  faGitlab,
  faLinkedin,
  faGitAlt,
  faHtml5,
  faCss3,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faCircleNotch, faFireAlt } from '@fortawesome/free-solid-svg-icons';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { StoreModule } from './store/store.module';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { BarComponent } from './components/bar/bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';

import { ScrollSpyDirective } from './helpers/directives';
import { IsOpenPipe, IsClosedPipe } from './helpers/pipes';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    BarComponent,
    MenuComponent,
    HeaderComponent,
    CardComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent,
    IsOpenPipe,
    IsClosedPipe,
    ScrollSpyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    FontAwesomeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    ScrollToModule.forRoot(),
    StoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTwitter,
      faGitlab,
      faLinkedin,
      faGitAlt,
      faHtml5,
      faCss3,
      faJsSquare,
      faCircleNotch,
      faFireAlt
    );
  }
}
