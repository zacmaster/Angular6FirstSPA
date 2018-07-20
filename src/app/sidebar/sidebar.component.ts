import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
    <div>{{titulo}}</div>
  `,
  styles: [`
    div{
      border: dotter 1px blue;
      color: white;
      font-weight: bold;
      height: 100%;
      width: auto;
      background-color: brown;
    }
  `]
})
export class SidebarComponent implements OnInit {
  titulo = "SIDEBAR";
  constructor() { }

  ngOnInit() {
  }

}
