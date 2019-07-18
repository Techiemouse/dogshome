import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dogs Home';
  walkerId='';
  setId(newId: string) {
    this.walkerId = newId;
    console.log('id entered', newId)
  }
}
