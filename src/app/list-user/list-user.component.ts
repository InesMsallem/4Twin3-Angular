import { Component, OnInit } from '@angular/core';
import users from '../files/users.json'
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  usersList: {
    id: number, name: string, job: string, phone: string, email: string, address: string, picture: string
  }[]= users

  removeUser(id:number): void{ 
    this.usersList = this.usersList.filter(user => user.id !== id)
}

}
