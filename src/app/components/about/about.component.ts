import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() loaded:boolean = false

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loaded = true;
  }

  insta(){
    this.router.navigateByUrl("/123")
}

}
