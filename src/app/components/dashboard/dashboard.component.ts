import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  courses : any[];
  searchText = '';


  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
   this.courses=[ "Computer Sc.",
                  "Electronics and Comm.",
                  "Applier ELectronics and Inst.",
                  "Chemical",
                  "Civil",
                  "Mechanical",
                  "BioChemical",
                  "Production",
                  "Artificial Intelligence",
                  "Machine Learning",
                  "BigData",
                  "Springboot",
                  "Food Technology",
                  "Social Engg."
                ];
  }

  selectCourse(course: String){
    this.studentService.course = course;
    console.log(this.studentService.course);
    this.router.navigate(['confirmation']);
  }

}
