import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DestinyListComponent } from './pages/destiny-list/destiny-list.component';

@Component({
  selector: 'app-destiny',
  imports: [
    DestinyListComponent,
    MatButtonModule,
  ],
  templateUrl: './destiny.component.html',
})
export class DestinyComponent { }
