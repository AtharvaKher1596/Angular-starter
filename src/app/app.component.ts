import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
    items : WishItem[] = [
      new WishItem('To learn angular'),
      new WishItem('Have a lunch', true),
      new WishItem('Find grass that cuts itself')
    ]
  title = 'wishlist'; 
}
