import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Randomly';

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
      console.log('pepperepe');
  }
}


