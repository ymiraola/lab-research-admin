import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FlabHeaderComponent } from './components/flab-header/flab-header.component';
import { FlabHomeComponent } from './components/flab-home/flab-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzLayoutModule, FlabHeaderComponent, FlabHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab-research-admin';
}
