import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
    disable=false;

    formdata:any=[]

    city:any[]=[
      {"city":"Coorg"},
      {"city":"Banglore"},
      {"city":"Mumbai"},
      {"city":"Delhi"}
    ]

    licensedata:any[]=[
      {"value":"Standard Viewtube License"},
      {"value":"Creative Common License"}
    ]

    distributiondata:any[]=[
      {"value":"Everywhere"},
      {"value":"Make this video available only on monetized platforms"}
    ]

    category:any[]=[
      {"value":"Film & Animation"},
      {"value":"Autos & Vehicles"},
      {"value":"Music"},
      {"value":"Pets & Animals"},
      {"value":"Sports"},
      {"value":"Travel & Events"},
      {"value":"Gaming"},
      {"value":"People & Blogs"},
      {"value":"Comedy"},
      {"value":"Entertainment"},
      {"value":"News & Politics"},
      {"value":"Howto & Style"},
      {"value":"Education"},
      {"value":"Science & Technology"},
      {"value":"Nonprofits & Activism"},
    ]

    visibilitydata:any[]=[
      {"value":"private"},
      {"value":"public"}
    ]


    register(){
      console.log(this.formdata)
    }


}
