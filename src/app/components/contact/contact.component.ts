import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { delay } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  copied:boolean

  constructor(private clipboardApi: ClipboardService) {
    this.copied=false
   }

  ngOnInit(): void {
  }

  copy(){
    this.clipboardApi.copyFromContent("franciscovieiracode@gmail.com")
    this.copied=true
    
    setTimeout(()=>{this.copied=false},3000)
  }


}
