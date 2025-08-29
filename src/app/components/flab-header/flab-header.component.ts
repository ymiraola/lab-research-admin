import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-flab-header',
  standalone: true,
  imports: [NzMenuModule, NzButtonModule, NzDrawerModule],
  templateUrl: './flab-header.component.html',
  styleUrl: './flab-header.component.scss'
})
export class FlabHeaderComponent {

  menuDrawerVisible = false;

  closeMenuDrawer() {
    this.menuDrawerVisible = false;
  }

  openMenuDrawer() {
    this.menuDrawerVisible = true;
  }

}
