import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondApp26';

  data =10;
  updateData(){
    this.data=Math.floor( Math.random()*10);

  }
}
