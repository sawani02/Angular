import {  Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'app-check',
    template: `
    <h2>{{ "Author:" + author }}</h2>
    <h3>{{ getTitle() }}</h3>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
            </li>

    </ul>
    
    
    `
})

export class CoursesComponent{
    author = "Sawani";
    title = "List of courses";
    courses;
    //imageUrl = "https://www.pexels.com/photo/adorable-animal-breed-canine-356378/";
    getTitle(){
        return this.title;
    }
    constructor(service: CoursesService){
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

}
