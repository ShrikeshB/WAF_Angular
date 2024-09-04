import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexComponent } from './Components/flex/flex.component';
import { GridComponent } from './Components/grid/grid.component';
import { Grid2Component } from './Components/grid2/grid2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlexComponent,GridComponent,Grid2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-app';
}
