import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title: 'BlaBla',
    isFavorite: true
  }

  tweet = {
    body: 'Here is my tweet',
    isLiked: true,
    likesCount: 10
  }

  onFavoriteChange(isSelected) {
    console.log('Fired', isSelected);
  }
}
