import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <div>
      <p>employee-list works!</p>
      <table>
        <tr><th>{{tableHeaders[0]}}</th>
        <th>{{tableHeaders[1]}}</th></tr>
        <tr *ngFor = "let empleado of empleados" >
        <td>{{ empleado.id }}</td>
        <td>{{ empleado.name }}</td>
        </tr>
      </table>
    </div>
  `,
  styles: [
    ` 
    div{
      background-color: #ff7675;
      text-align: center;
      height: 100%;
      width: 100%;
      border: solid 1px;
    }
      table{
        margin: auto;
        border-collapse: collapse;
      }
      td, th{
        padding: 10px;
        border: solid 1px black;
      }
    
    `
  ]
})
export class EmployeeListComponent implements OnInit {
  tableHeaders = ['ID','Nombre'];
  empleados = [ 
    { id: 1,
      name: 'Juan'
    },
    { id: 2,
      name: 'Jorge'
    },
    { id: 3,
      name: 'Ana'
    },
    { id: 4,
      name: 'Liz'
    },
    { id: 5,
      name: 'Zac'
    },
    { id: 6,
      name: 'Juan'
    }
  ]

  constructor() { }
  ngOnInit() {
  }

}
