import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';


declare var $:any
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private experienceService:ExperienceService) { }

  experienceList:any;
  ngOnInit(): void {

    this.experienceService.getExperience().subscribe(data=>{
      this.experienceList=data;
    })


    $(document).ready(function(){

      // Underneath all I design lies the solid belief that beauty is a positive force.”  -Barbara Barry

      $(".heading1").click(function(){
                $(".image-tag1").css('color', 'green');
            });
   
      });
  }

}
