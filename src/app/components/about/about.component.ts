import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() loaded:boolean = false

  constructor() { }

  ngOnInit(): void {
    this.loaded = true;
  }

}
