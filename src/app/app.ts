import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Server } from './server/server';
import { Servers } from './servers/servers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Server],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('demo-dasi6');
}
