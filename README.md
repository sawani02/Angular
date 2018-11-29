
# Angular Project

Angular4 tutorial: Simple angular project to understand angular cli, components, directives, binding and services.

Angular: It is a framework to build client applications in HTML, CSS and Javascript/Typescript


## Requirements
- Install [Node.js](https://nodejs.org/en/) or yarn package manager
- Angular CLI

## Installation
Check if npm is installed
```
npm -v
```
Install angular-cli
```
npm install -g @angular/cli
```
Create a new angular project, you can provide any project name
```
ng new learn-angular --style=scss --routing
```
- ng: This is how angular CLI is called
- new: one the many commands we can issue to CLI
- Optional flags: **Saas** enabled: generate a project which is Saas enabled, 
**--routing**: this will help us create routing file.
## Readme file in app
# LearnAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
Launching CLI on browser
```
ng serve -o
```
-o flag tells the CLI to launch your browser with project. It will automatically live reaload!

## Project Structure
<img src="https://github.com/sawani02/Angular/blob/master/images/Screen%20Shot%202018-11-27%20at%207.53.28%20PM.png" width="400">

- e2e(end to end): To write end to end tests for application.
- node modules: Stores all the third party libraries that our application may depend upon.This folder is for development. These third party libraries are put in bundle and deployed within application. Do not deploy this node modules on server.
- src: Source code of the application
- assets: To store static assets of application
Check this link to understand other files(https://angular.io/guide/file-structure)

## Building blocks of Angular
### Component
- It is screen which user sees.
- Component encapsulates data, HTML template and logic for view.

Generating component audio using Angular CLI
```
ng g c audio
```
- g: generate
- c: component
The above command creates and update files as follows
<img src="https://github.com/sawani02/Angular/blob/master/images/Screen%20Shot%202018-11-27%20at%2010.28.25%20PM.png" width="400">

- component.scss: to store the stylesheet
- component.html: to store templates
- component.spec.ts: For writing unit test
- component.ts: component itself
- Updated app.module.ts: Inside declarations array there will be audio component

Open file src/app/app.module.ts and check declarations array. Our components are registered in module.

<img src="https://github.com/sawani02/Angular/blob/master/images/Screen%20Shot%202018-11-27%20at%2010.38.38%20PM.png" width="400">

### Module
- It has group of components
- Every angular app has atleast one app.module.ts under src/app/app.module.ts
- When app grows, we can break the app in modules

### Concept:
### Data Binding
Binding view to the field in the component, whenever the field in the component changes, the view is automatically notified.
Create a file in src/app/course.component.ts and paste the following code
```
import {  Component } from '@angular/core';

@Component({
    selector:'app-check',
    template: `
    <h2>{{ "Author:" + author }}</h2>
    <h3>{{ getTitle() }}</h3>
    
    
    `
})

export class CoursesComponent{
    author = "Sawani";
    title = "List of courses";
    //imageUrl = "https://www.pexels.com/photo/adorable-animal-breed-canine-356378/";
    getTitle(){
        return this.title;
    }
}
```
Add course component in src/app/app.module.ts inside declarations array.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AudioComponent } from './audio/audio.component';

@NgModule({
  //All components are added
  declarations: [
    AppComponent,
    CoursesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
In src/app/app.component.html, check the selector value in src/app/courses.componenet.ts and include in src/app/app.component.html
```
<h1>Angular</h1>
<app-check></app-check>
```
Run the app using ng serve -o

<img src="https://github.com/sawani02/Angular/blob/master/images/Screen%20Shot%202018-11-28%20at%209.52.21%20AM.png" width="400">

## Directive:
Directive is used to manipulate the DOM.
We can use it to add DOM element or remove existing DOM element or change class and style of DOM element.
Whenever you are using directive, which modifies DOM, it should be prefixed with "*"
Now lets says you want to return list of courses
```
import {  Component } from '@angular/core';

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
    courses = ["Data Structures", "Computer Networks", "Algorithms"];
    //imageUrl = "https://www.pexels.com/photo/adorable-animal-breed-canine-356378/";
    getTitle(){
        return this.title;
    }
}


```
- ngFor is a directive, an iteration expression

Check the code in browser

<img src="https://github.com/sawani02/Angular/blob/master/images/Screen%20Shot%202018-11-28%20at%203.28.50%20PM.png" width="400">

In real world applications, we will get courses from server as an object.


### Issues 
- Component should be used only for presentation logic.
- 

We will get the list of courses from HTTP using service class.
Then we can reuse this class on multiple pages
We do not have any decorator for service, like Component() decorator in component.

## Service
Create a new service file in src/app/courses.service.ts
Note: Usually services and components will be generated using Angular CLI commands, however, I'm doing it for better understanding.
```
export class CoursesService{
    getCourse(){
        return ["Data Structures", "Computer Networks", "Algorithms"];
    }
}
```

Update src/app/courses.component.ts
```
import {  Component } from '@angular/core';

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
}

```
## Dependency injection
- Create an instance of courses service in courses.component.ts
- Instruct angular to inject or providing dependencies on class of this component to its constructor.
- Angular has dependency injection framework inside it.

To inject the dependencies:
- Need to register dependencies in module
Go to src/app/app.module.ts
- In providers array, it is empty
- Add CoursesService class in provider.
app/src/courses.component.ts

```
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
```
app/src/app.module.ts
- class dependecy is added in providers, decouple the class from dependency.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AudioComponent } from './audio/audio.component';
import { CoursesService } from './courses.service';


@NgModule({
  //All components are added
  declarations: [
    AppComponent,
    CoursesComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [CoursesService],
  bootstrap: [AppComponent]

})
export class AppModule { }
```
###  Create service email using Angular CLI
```
ng g c email
```
- Service email is created
- It also creates two files
src/app/email.service.spec.ts
src/app/email.service.ts

