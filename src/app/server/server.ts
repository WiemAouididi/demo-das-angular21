import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.html',
  styleUrl: './server.css',
  imports: [FormsModule],
})
export class Server {
  serverID = 10;
  serverStatus = 'Offline';
  allowServerCreation = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Server 1';
  serverCreation = true;

  getServerStatus() {
    return this.serverStatus;
  }

  onServerCreation() {
    this.serverCreationStatus = 'server was created!!';
    this.serverCreation = false;
  }
}
