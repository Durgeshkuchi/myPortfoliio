import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import {MatInputModule} from '@angular/material/input';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutChildComponent } from './about/about-child/about-child.component';
import { AboutEducationComponent } from './about/about-education/about-education.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectChildComponent } from './projects/project-child/project-child.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HeaderComponent } from './header/header.component';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactComponent,
    AboutChildComponent,
    AboutEducationComponent,
    FooterComponent,
    ProjectChildComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FontAwesomeModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
