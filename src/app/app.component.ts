import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFirstCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-crach-course';
}
