import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpolation';

  data = 'Jay is here';

  getValue(){
    return 'get Function data';
  }
}
