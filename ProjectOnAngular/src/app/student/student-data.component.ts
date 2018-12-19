import { Component, OnInit, Output, Input } from '@angular/core';
import { Student } from './Student';
import { Programs } from './Programs';
import { studentService } from './studentService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-data',
  template: `
     <div class="container">
              <p>The .table-striped class adds zebra-stripes to a table:</p>            
                <table class="table table-striped">
                  <thead>
                    <tr>
                    <th scope = "col"> Id:</th> 
                      <th>FirstName: </th>
                      <th>MiddleName: </th>
                      <th>LastName: </th>
                      <th>Programs: </th>
                      </tr>
                  </thead>
                   <tbody>
                  <tr *ngFor = "let std of students;index as i">
                  <th scope= "row">{{i+1}}</th> 
                    <td>{{std.firstName}}</td>
                    <td>{{std.middleName}}</td>
                    <td>{{std.lastName}}</td>
                    <td>{{std.Programs}}</td>
                   <td><button type="submit" class="btn btn-primary"  (click)="deleteValue(i)">Delete</button></td>
                   <td><button type="submit" class="btn btn-secondary" (click)="onEdit(std.firstName)">Edit</button></td>
                </tr> 
                </tbody>
              </table>
              <br/>
                      <button type="submit" class="btn btn-danger" (click)="onClick()">Back</button>
                                        
                      </div> 
            `,
            
                    })
export class StudentDataComponent {

 students: Array<Student> = [];
  //  @Input()
  //  students : Array<Student> = [];

  //    getId(){
  //     let maxid = 0;
  //   for(let c of this.students)
  //   { if(c.id>maxid)
  //     {
  //       maxid=c.id;
  //     }
  //   }
  //  }
  //      return maxid+1;

  constructor(private ServiceClass: studentService, private router: Router) { }

  ngOnInit() {

    this.students = this.ServiceClass.getStudents(this.students);
    }

  deleteValue(i){

    this.ServiceClass.deleteValue(i);
  }
      
  onClick(){

    this.router.navigateByUrl('/FormComponent');
    console.log(this.students);

  }
   
  onEdit(firstName: string) {

    this.router.navigate(['/FormComponent', firstName, 'edit']);
  
  }




}

