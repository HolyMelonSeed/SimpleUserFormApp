import { Component, Input, signal } from '@angular/core';
import { UserListItem } from './user-list-item/user-list-item';

@Component({
  selector: 'app-user-list',
  imports: [UserListItem],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  tempUsers = [
    {id: 0, name: "Joe", phone: 1231231231, joke: "Joke"},
    {id: 1, name: "Joe2", phone: 1231231231, joke: "Joke2"},
    {id: 2, name: "Joe3", phone: 1231231231, joke: "Joke3"},
  ]

  usersSignal = signal(this.tempUsers)
}
