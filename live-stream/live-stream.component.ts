import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent {
[x: string]: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  onSubmit(){
    alert("Your live stream event is scheduled successfully")
  }

  liveStreamForm=new FormGroup({
    title:new FormControl('',[Validators.required,Validators.maxLength(100)]),
    startDate:new FormControl('',[Validators.required]),
    starttime:new  FormControl('',[Validators.required]),
    endtime:new FormControl('',Validators.required),
    endDate:new FormControl('',[Validators.required]),
    comments:new FormControl(''),
    guests:new FormControl('')
  });


  get title()
  {
    return this.liveStreamForm.get('fname');
  }

  submitForm(){
    alert("Your live stream event is scheduled successfully")
  }

 
}
