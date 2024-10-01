import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sendDataToCPC';

  data ='x';

  updateData(item:string){
    console.warn(item);
    this.data = item;
  }

  data1 ='y';

  updateData2(item1:string){
    console.warn(item1);
    this.data1 = item1;
  }
}
