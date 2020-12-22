import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [

  { path: 'content' ,

  children:[
    { path:'about', component:AboutComponent},
    { path:'projects', component:ProjectComponent},
    { path:'trainings', component:TrainingComponent},
    { path:'experience', component:ExperienceComponent},
    { path:'contact', component:ContactComponent}

  ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
