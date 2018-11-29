import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AudioComponent } from './audio/audio.component';
import { CoursesService } from './courses.service';

@NgModule({
  //All components are added
  declarations: [
    AppComponent,
    CoursesComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
