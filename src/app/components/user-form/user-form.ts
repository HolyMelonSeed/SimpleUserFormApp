import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserStorageService } from '../../services/user-storage-service';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
OnSubmit() {
  this.userStorageService.addUser(this.userForm.value.name!, parseInt(this.userForm.value.phone!))
  this.userForm.reset();
}

  userStorageService = inject(UserStorageService)

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")])
  })
}
