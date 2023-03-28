import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterGuardGuard } from '../register-guard.guard';
import { NoteaddService } from '../services/noteadd.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private note: NoteaddService, private router: Router, private guard: RegisterGuardGuard) { }

  ngOnInit(): void {
    this.note.get().subscribe(data => {
      this.arr = data;
      console.log(this.arr)
    })
  }

  loginForm = new FormGroup({
    myemail: new FormControl(''),
    mypass: new FormControl('')
  })

  onSubmit() {

  }
  arr: any[] = [];

  getfun() {
    this.note.get().subscribe(data => {
      this.arr = data;
      console.log(this.arr)
    })
  }

  verifyingdata() {
    for (var i = 0; i <= this.arr.length; i++) {
      for (var key in this.arr[i]) {
        if (this.loginForm.value.myemail && this.loginForm.value.mypass == this.arr[i][key]) {
          // alert("Data Provided is not Correct")
          this.guard.isvalid = true;

          this.router.navigateByUrl('')
        } else {
          console.log("Wrong data")
        }
        // console.log(this.arr[i][key][1])
      }
    }

  }

}
