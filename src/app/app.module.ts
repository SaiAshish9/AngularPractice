import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { SafeTravesalComponent } from './directives/safe-travesal/safe-travesal.component';
import { InputFormatDirective } from './directives/custom/input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    NgStyleComponent,
    SafeTravesalComponent,
    InputFormatDirective,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    AuthorsService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
