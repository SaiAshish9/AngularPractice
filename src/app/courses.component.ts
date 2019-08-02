import {Component} from '@angular/core';
import { CourseService } from 'courses.service';
@Component({
    selector:'courses',
    template:`<h2>{{title|summary}}</h2>
<ul>
<li *ngFor="let course of courses">
{{course}}
</li>
</ul><br/>
{{course.title|uppercase}}<br/>
{{course.price|number:'2.1-1'}}<br/>
{{course.releaseDate|date:shortdate}}<br/>

<button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive?'blue':'red'">save</button>
<input [(ngModel)]="email"  (keyup.enter)="onKeyUp()"/>
    `}) 
export class CourseComponent{
    isActive=false;
email="me@example.com";
    title="list of courses";
    getTitle(){
        return this.title;
    }

course={
    title:"Abc",
    price:1.95,
    releaseDate:new Date(2016,5,1)
}

    courses;
onKeyUp(){
    console.log(this.email);
}
//     onKeyUp($event){
// // if($event.keyCode===13)
// console.log($event.target.value);

    
    constructor(){
        let service=new CourseService();
        this.courses=service.getCourses();
    }
}