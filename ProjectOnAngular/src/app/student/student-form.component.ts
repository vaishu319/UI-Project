import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from './Student';
import { Programs } from './Programs';
import { studentService } from './studentService';
import { Profile } from 'selenium-webdriver/firefox';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-form',
  template: `
         
     <div class="container">
     <h1>Student Details </h1> 
         <div class="form-group">
         <label for="firstName">FirstName:</label>
         <input type="text" name = "firstName"  [(ngModel)]="firstName" class="form-control" id="firstName" placeholder = "Enter your FirstName">
       </div>
                     
       <div class="form-group">
           <label for="middleName">Middle:</label>
           <input type="text" name="middleName" [(ngModel)]="middleName" class="form-control" id="middleName" placeholder = "Enter your MiddleName">
         </div>
 
       <div class="form-group">
           <label for="lastName">LastName:</label>
           <input type="text"  name="lastName" [(ngModel)]="lastName" class="form-control" id="lastName" placeholder = "Enter your lastName">
         </div>
 
        <!--  <div class="form-group">
            <label for="id">Student_ID:</label>
            <input type="id"   name="id" [(ngModel)]="id" class="form-control"  id="id" placeholder = "Enter your FirstName" placeholder = "Enter your ID">
           </div> -->
 
       
          <div class="form-group">
          <label for="Programs">Programs:</label>
          <select class="form-control" id="Programs" name="Programs" [(ngModel)]="Programs">
          <option>MIS</option>
          <option>CS</option>
          <option>EM</option>
          <option>SWEN</option>
          </select>
          </div>
             <button type="submit" class="btn btn-primary"  (click)="addStudent()">Submit</button>
      </div>
       `,
  styles: [ ]

})
export class StudentFormComponent implements OnInit {


  public firstName;
  public middleName;
  public lastName;
  public Programs: Programs;

  students: Student = null;


  //  @Output()
  //  newStudentAdded:EventEmitter<Student> = new EventEmitter<Student>();


  constructor(private ServiceClass: studentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.firstName = this.activatedRoute.snapshot.params['firstName'];

    this.students = this.ServiceClass. getStudentDetailsToCompareStudentElements(this.firstName);

    if (this.students) {

      this.firstName = this.students.firstName;
      this.middleName = this.students.middleName;
      this.lastName = this.students.lastName;
      this.Programs = this.students.Programs;
      
     }
  }


  addStudent() {

       if (this.students) {

      // updating details of an existing student

      this.students.firstName = this.firstName;
      this.students.middleName = this.middleName;
      this.students.lastName = this.lastName;
      this.students.Programs = this.Programs;
      this.ServiceClass.updateStatement(this.students);

    } else {

      // creating a new student
      this.ServiceClass.addStudent(new Student(this.firstName, this.middleName, this.lastName, this.Programs));

    }

    this.firstName = null;
    this.middleName = null;
    this.lastName = null;
    this.Programs = null;

    this.router.navigate(['\DataComponent']);

  }


}

// nav(click){

//   if (click != null) {
//     this.ServiceClass.addStudent(this.students);
//   } else {

//     this.router.navigateByUrl('\DataComponent');
//   }










