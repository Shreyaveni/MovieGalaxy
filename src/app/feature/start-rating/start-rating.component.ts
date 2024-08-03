import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-start-rating',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './start-rating.component.html',
  styleUrl: './start-rating.component.scss'
})
export class StartRatingComponent {
  @Input() rating: any;
  @Input() isReadOnly: boolean = false;

  ariaValueText(current: number, max: number): string {
    return `${current} out of ${max} stars`;
  }
}
