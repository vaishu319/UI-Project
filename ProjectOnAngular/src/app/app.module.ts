import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { studentService } from './student/studentService';
import {RouterModule,Routes} from '@angular/router';
import { StudentDataComponent } from './student/student-data.component';
import { StudentFormComponent } from './student/student-form.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { StudentAppComponent } from './student-app/student-app.component';

const appRoutes: Routes = [

{ path: 'DataComponent', component: StudentDataComponent },
{ path: 'FormComponent', component: StudentFormComponent },
{ path: 'FormComponent/:firstName/edit', component: StudentFormComponent },
{ path: 'Home', component: StudentAppComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    StudentAppComponent
    
  ],
  imports: [
    BrowserModule, StudentModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [studentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
