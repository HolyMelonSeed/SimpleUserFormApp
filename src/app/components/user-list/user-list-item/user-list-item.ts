import { Component, inject, input, signal } from '@angular/core';
import { User } from '../../../model/user';
import { UserStorageService } from '../../../services/user-storage-service';

@Component({
  selector: 'app-user-list-item',
  imports: [],
  templateUrl: './user-list-item.html',
  styleUrl: './user-list-item.scss',
})
export class UserListItem {
  removeUser() {
    this.userStorageService.deleteUser(this.userInputSignal()!);
  }

  userStorageService = inject(UserStorageService);

  userInputSignal = input<User>();
}
