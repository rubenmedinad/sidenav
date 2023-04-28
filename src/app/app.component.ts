import { Component } from '@angular/core';
import { RutasService } from './rutas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sidebar';
  menuItems: any[];

  constructor(private menuService: RutasService) {
    this.menuItems = menuService.menuItems;
  }
}
