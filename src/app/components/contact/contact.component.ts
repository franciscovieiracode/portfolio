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
  mobile: boolean;

  constructor(private clipboardApi: ClipboardService) {
    this.copied=false
    this.mobile=false
   }

  ngOnInit(): void {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
  }
}

  copy(){
    this.clipboardApi.copyFromContent("franciscovieiracode@gmail.com")
    this.copied=true
    
    setTimeout(()=>{this.copied=false},1000)
  }


}
