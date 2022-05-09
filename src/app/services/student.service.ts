import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  name: String;
  age: String;
  gender: String;
  email: String;
  phone: String;
  course : String;
  constructor() { }
}
