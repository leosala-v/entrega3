import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent {
  userForm: FormGroup;


  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      ID: ['', [Validators.required]],
    })
  }

  get emailContro(){
    return this.userForm.controls['email'] 
  }

  get emailInvalid(){
    return this.emailContro.invalid && this.emailContro.touched;
  }

  get paswordControl(){
    return this.userForm.controls['password']
  }
  get paswordControlInvalid(){
    return this.paswordControl.invalid && this.paswordControl.touched;
  }
  get nameControl(){
    return this.userForm.controls['name']
  }
  get nameControlInvalid(){
    return this.nameControl.invalid && this.nameControl.touched;
  }


  onSubmit(): void{
    if(this.userForm.invalid){
      alert('formulario invalido')
    }else{
      console.log(this.userForm.value);
    }
  }
}
