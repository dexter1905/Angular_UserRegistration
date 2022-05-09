import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(
    private router:Router,
    private studentService: StudentService
    ) {}

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    tnc: new FormControl(''),
  });

  submitRegistrationForm(){
    this.router.navigate(['dashboard']);
    this.studentService.name=this.registrationForm.value.name;
    this.studentService.age=this.registrationForm.value.age;
    this.studentService.gender=this.registrationForm.value.gender;
    this.studentService.email=this.registrationForm.value.email;
    this.studentService.phone=this.registrationForm.value.phone;
  }

  clearForm(){
    this.registrationForm.reset();
  }

}
