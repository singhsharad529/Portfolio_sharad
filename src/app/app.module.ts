import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
 
import { FooterComponent } from './footer/footer.component';
import { HeroimageComponent } from './heroimage/heroimage.component';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent,
    HeroimageComponent,
    AboutComponent,
    TrainingComponent,
    ProjectComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
