import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [ 
{path:'home', component:HomePageComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'about', component:AboutComponent},
{path:'technologies', component:TechnologiesComponent},
{path:'projects', component:ProjectsComponent},
{path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
