import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-travesal',
  templateUrl: 'safe-travesal.component.html'
})
export class SafeTravesalComponent {
  // task = {
  //   title: 'Review applications',
  //   assignee: {
  //     name: 'John Smith'
  //   }
  // };
  task = {
    title: 'Review applications',
    assignee: null
  };
}
