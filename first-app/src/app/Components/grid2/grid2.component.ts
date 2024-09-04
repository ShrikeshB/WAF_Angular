import { Component } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import {ColDef} from "ag-grid-community"
import "ag-grid-community/styles/ag-grid.css"
// import "ag-grid-community/styles/ag-theme.css"
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-grid2',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './grid2.component.html',
  styleUrl: './grid2.component.scss'
})
export class Grid2Component {
  rowData =[
    {
      make: 'Tesla',
      model: 'Model Y',
      price: 23143,
      electric: true,
    },
    {
      make: 'Tesla',
      model: 'Model Y',
      price: 23143,
      electric: true,
    },
    {
      make: 'Tesla',
      model: 'Model Y',
      price: 23143,
      electric: true,
    },
  ]

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];
}
