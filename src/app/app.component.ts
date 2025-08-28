import { FlabFooterComponent } from './components/flab-footer/flab-footer.component';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FlabHeaderComponent } from './components/flab-header/flab-header.component';
import { FlabHomeComponent } from './components/flab-home/flab-home.component';
import { FlabResearchComponent } from './components/flab-research/flab-research.component';
import { FlabTeamComponent } from './components/flab-team/flab-team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NzLayoutModule, 
    FlabHeaderComponent, 
    FlabHomeComponent, 
    FlabResearchComponent,
    FlabTeamComponent,
    FlabFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'lab-research-admin';
  scrolled = false;

  ngAfterViewInit() {
    const body = document.querySelector('body');
    if (body) {
      body.addEventListener('scroll', () => {
        this.scrolled = body.scrollTop > 0;
      });
    }
  }

}
