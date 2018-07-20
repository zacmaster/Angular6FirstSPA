import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <div>
      <p>
        department-list works!
      </p>
    </div>
    
  `,
  styles: [`
    div{
      background-color: #81ecec;
    }
  `]
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
