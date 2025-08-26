import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  templateUrl: './badge.html',
  styleUrl: './badge.css'
})
export class Badge {
  @Input() text: string = '';
  @Input() color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
}
