import { Component, OnInit } from '@angular/core';

declare const contact:any
@Component({
  selector: 'app-heroimage',
  templateUrl: './heroimage.component.html',
  styleUrls: ['./heroimage.component.scss']
})
export class HeroimageComponent implements OnInit {

  constructor() { }

  firstFun(){
    contact();
  }
  ngOnInit(): void {

    
  }

   

 

}
