import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkAccordionModule } from '@angular/cdk/accordion';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGitlab, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

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
import { BarComponent } from './components/bar/bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SplashComponent } from './components/splash/splash.component';
import { ContactComponent } from './components/contact/contact.component';

import { ScrollSpyDirective } from './helpers/directives';
import { IsOpenPipe, IsClosedPipe } from './helpers/pipes';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BarComponent,
    SplashComponent,
    HeaderComponent,
    ProjectsComponent,
    ContactComponent,
    IsOpenPipe,
    IsClosedPipe,
    ScrollSpyDirective,
    CardComponent,
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
    library.addIcons(faGitlab, faTwitter, faCircleNotch);
  }
}
