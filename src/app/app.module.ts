import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CourseService } from 'courses.service';
import { SummmaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummmaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
