import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-server',
  templateUrl: './server.html',
  styleUrl: './server.css',
  imports: [FormsModule, NgClass, NgStyle],
  standalone: true,
})
export class Server {
  serverID = 10;
  serverStatus = 'Offline';
  allowServerCreation = false;
  serverCreationStatus = 'not created';
  serverName = 'Server 1';
  serverCreation = false;
  servers = ['Server 1', 'Server 2'];

  isActive = true;
  isDisabled = false;

  fontSize = 21;
  textColor = 'blue';

  toggleActive() {
    this.isActive = false;
  }

  toggleDisabled() {
    this.isDisabled = true;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onServerCreation() {
    this.serverCreationStatus = 'created';
    this.serverCreation = true;
    this.servers.push(this.serverName);
  }
}
