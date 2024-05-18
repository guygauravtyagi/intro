import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatrixPageComponent } from './pages/matrix-page/matrix-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MatrixPageComponent]
})
export class AppComponent {
  title = 'intro';
}
