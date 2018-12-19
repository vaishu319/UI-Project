import { Student } from "./Student";
import { Programs } from "./Programs";
import { Injectable } from "@angular/core";

@Injectable()
export class studentService{
    
    students: Array<Student> = [new Student('Vishnavi','Reddy','Bhavanam',Programs.CS)];



    getStudentDetailsToCompareStudentElements(firstName: string): Student{

       return this.students.find( stud => stud.firstName === firstName)
           
       }
       
              
     

     getStudents(firstName){

        return this.students;
     }

     addStudent(students){
        console.log("This is Service");
        this.students.push(students);
        console.log(this.students);
        
      }

      updateStatement(students: Student){

          const temp  =  this.students.findIndex(function(tempStudent) {
            return tempStudent.firstName === students.firstName;
            
          });
          this.students[temp] = students;

      }


  deleteValue(i){

    this.students.splice(i);
  }
}

