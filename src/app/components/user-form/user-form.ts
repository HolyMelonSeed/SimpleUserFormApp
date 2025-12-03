import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
OnSubmit() {
  throw new Error('Method not implemented.');
}
  userForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl('')
  })
}
