import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-flab-header',
  standalone: true,
  imports: [NzMenuModule, NzButtonModule],
  templateUrl: './flab-header.component.html',
  styleUrl: './flab-header.component.scss'
})
export class FlabHeaderComponent {

}
