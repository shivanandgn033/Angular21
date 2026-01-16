import { Component } from '@angular/core';
import { User } from '../user';
import { OnInit } from '../../../node_modules/@angular/core/types/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test  implements OnInit {

   userList :any;
  constructor(private _user:User) {}

  ngOnInit():void{
    this.userData();
  
  }
  userData(){
this._user.getData().subscribe(data=>{
  this.userList=data;
  console.log(this.userList);
  });
}
}
