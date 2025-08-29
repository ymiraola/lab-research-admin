import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-flab-research',
  standalone: true,
  imports: [NzCardModule, NzGridModule],
  templateUrl: './flab-research.component.html',
  styleUrl: './flab-research.component.scss'
})
export class FlabResearchComponent {

}
