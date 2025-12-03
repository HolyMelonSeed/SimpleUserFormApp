import { Component, inject, Input, signal } from '@angular/core';
import { UserListItem } from './user-list-item/user-list-item';
import { UserStorageService } from '../../services/user-storage-service';

@Component({
  selector: 'app-user-list',
  imports: [UserListItem],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  userStorageService = inject(UserStorageService)

  usersSignal = this.userStorageService.getUsers()
}
