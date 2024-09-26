import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';



  list:any[] = [];

  addTask(item:string){

    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);
  }

  // userData:any={}

  // getData(data:NgForm){
  //   console.warn(data)
  //   this.userData=data

  // }

  // show=false;

  // toggle(){
  //   this.show=!this.show;
  // }



  // Nested Loop
  // users = [
  //   {name:'jay',phone : '8817',socialAccounts:['insta','fb','gmail']},
  //   {name : 'yash',phone:'9399',socialAccounts:['linkedin','yahoo','gmail']}
  // ]

  // num:any = [4,5,9,8,5,2,4

  // ]

  // style binding

  // color="red";
  // bgColor="yellow";

  // updateColor(){
  //   this.color="blue";
  //   this.bgColor="green";
  // }

  // divn = "blue";
  // bgdivn ="red"
  // changeColor(){
  //   this.divn="red";
  //   this.bgdivn="blue"
  // }



}
