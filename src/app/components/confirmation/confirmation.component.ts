import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: String;
  age: String;
  email: String;
  phone: String;
  course: String;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.name=this.studentService.name;
    this.age=this.studentService.age;
    this.email=this.studentService.email;
    this.phone=this.studentService.phone;
    this.course=this.studentService.course;
 }

}
