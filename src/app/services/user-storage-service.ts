import { inject, Injectable, signal } from '@angular/core';
import { User } from '../model/user';
import { LocalStorageService } from './local-storage-service';
import { JokeService } from './joke-service';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  userListStorageKey = 'userList';
  localStorageService = inject(LocalStorageService);
  jokeService = inject(JokeService);

  getUsers() {
    return this.usersSignal;
  }

  addUser(name: string, phone: number) {
    this.jokeService.getRandomJoke().subscribe((joke) => {
      this.usersSignal.update((list) => {
        const updatedList = [...list, { id: 1, name, phone, joke }];

        this.localStorageService.setItem(this.userListStorageKey, updatedList);
        return updatedList;
      });
    });
  }

  deleteUser(user: User) {
    this.usersSignal.update((list) => {
      const updatedList = list.filter((index: User) => {
        return index != user;
      });

      this.localStorageService.setItem(this.userListStorageKey, updatedList);
      return updatedList;
    });
  }

  usersSignal = signal(this.localStorageService.getItem(this.userListStorageKey));
}
