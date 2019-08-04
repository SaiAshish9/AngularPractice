import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  post = {
    title: 'Title',
    isFavorite: true
  };
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  };
  coursesIf = [1, 2];
  viewMode = 'map';
  courses = [];

  onAdd() {
    this.courses.push({ id: 4, name: 'course 4' });
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onFavoriteChange(eventsArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ', eventsArgs);
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course 1' },
      { id: 2, name: 'course 2' },
      { id: 3, name: 'course 3' }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
