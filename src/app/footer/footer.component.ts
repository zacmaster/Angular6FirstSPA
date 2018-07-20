import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
    <div>
      <h4>{{texto}}</h4>
    </div>
  `,
  styles: [`
    div{
      background-color: #00b894;
    }

  `]
})
export class FooterComponent implements OnInit {
  texto = "Contactenos!"
  constructor() { }

  ngOnInit() {
  }

}
