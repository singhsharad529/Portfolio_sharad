import { Component, OnInit } from '@angular/core';
import { TraininginfoService } from '../traininginfo.service';

declare var $:any
 
 
declare const imageModelFind:any
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor(private trainingInfo:TraininginfoService) { }
  

  trainingList:any;

  ngOnInit(): void {

   
    this.trainingInfo.getTrainings().subscribe(data=>{
      this.trainingList=data;
   
    })
    

    // $(document).ready(function(){

    //   // Underneath all I design lies the solid belief that beauty is a positive force.”  -Barbara Barry

    //   $("button").click(function(){
    //             $("p").slideToggle("slow");
    //         });

            // $(".heading2").click(function(){
            //     $(".image-tag2").slideToggle("slow");
            // });

            // $(".heading3").click(function(){
            //     $(".image-tag3").slideToggle("slow");
            // });

            // $(".heading4").click(function(){
            //     $(".image-tag4").slideToggle("slow");
            // });

            // $(".heading5").click(function(){
            //     $(".image-tag5").slideToggle("slow");
            // });

            // $(".heading6").click(function(){
            //     $(".image-tag6").slideToggle("slow");
            // });

     
   
      // });
           


 
    
  }

  
  
 
  
   
  
  
}
