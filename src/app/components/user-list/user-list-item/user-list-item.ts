import { Component, input, signal } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-list-item',
  imports: [],
  templateUrl: './user-list-item.html',
  styleUrl: './user-list-item.scss',
})
export class UserListItem {
removeUser() {
throw new Error('Method not implemented.');
}
  userInputSignal = input<User>();
}
