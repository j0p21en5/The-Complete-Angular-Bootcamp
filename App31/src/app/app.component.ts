import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App31';

  //Template refrence variable
  // getVal(item:HTMLInputElement){
  //   console.warn(item);

  // }

  // user={
  //   name: "Jay",
  //   email: "jay@gmail.com",
  // }

  // ng driven forms

  // userLogin(item: any){
  //   console.warn(item);
  // }

  //Reactive forms


  loginForm = new FormGroup({
    user: new FormControl(),
    password: new FormControl('')
  })

  loginUser()
  {
    console.warn(this.loginForm.value);
  }

}
