import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from './server/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: Server[] = [];

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
}
