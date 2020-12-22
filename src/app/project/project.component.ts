import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService:ProjectsService) { }

 

  projectsList:any;

  ngOnInit(): void {

   
    this.projectService.getProjects().subscribe(data=>{
      this.projectsList=data;
   
    })
    

 }
}
