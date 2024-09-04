import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  theme = 'ag-theme-quartz'; // Use this as a class in the HTML

  rowData: IRow[] = [
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
  ];

  colDefs: ColDef<IRow>[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}
