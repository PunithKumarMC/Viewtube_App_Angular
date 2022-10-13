import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LiveStreamComponent } from '../live-stream/live-stream.component';
import { NoteaddService } from '../services/noteadd.service';
import { StudioUploadComponent } from '../studio-upload/studio-upload.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})


export class RegisterPageComponent implements OnInit {
  ngOnInit(): void {
  }
  registerForm: FormGroup;
  constructor(private noteser:NoteaddService,private formbuilder:FormBuilder,private router:Router,) { 

  this.registerForm=this.formbuilder.group({
    myemail:new FormControl(''),
    mypass:new FormControl(''),
    myconfirmpass:new FormControl('')
  })
}


  onSubmit(){
    console.log(this.registerForm);
    
    let arr=this.registerForm.value;
    if(arr.mypass==arr.myconfirmpass)
    {
     let {mypass,...others}=arr
     arr=others;
    this.router.navigateByUrl('/register-login/login')
      const addfun=this.noteser.addReg(arr);
    addfun.subscribe((para:any)=>{
      console.log("Success",para);
    })
    }
  }

}
