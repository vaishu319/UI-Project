import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentDataComponent } from './student-data.component';
import { StudentFormComponent } from './student-form.component';




@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [StudentDataComponent, StudentFormComponent],

  declarations: [StudentDataComponent, StudentFormComponent]
})
export class StudentModule { }
