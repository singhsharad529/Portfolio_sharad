import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactmeService } from '../contactme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactMe:ContactmeService) { }

  ngOnInit(): void {
  }

  addNew(addvisiter:NgForm){
      
     const newFormData ={ name:addvisiter.value.fullname, email:addvisiter.value.email, subject:addvisiter.value.subject, message:addvisiter.value.message};
    this.contactMe.sendMe(newFormData).subscribe(data=>{
      console.log(data);
    })

    alert("Thanks\nI will reach you soon");

  }

}
