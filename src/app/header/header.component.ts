import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div><h1>{{texto}}</h1></div>
  `,
  styles: [`
    div{
      text-align: center;
      background-color: #00b894;
    }
  
  `]
})
export class HeaderComponent implements OnInit {
  texto = "Routing & Navigation";
  constructor() { }

  ngOnInit() {
  }

}
