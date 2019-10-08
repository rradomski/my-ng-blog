import {Article} from './Article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My first article',
    content: '',
    description: 'This is my first mocked article. Don\'t read it. It\'s just mock. :P',
    key: 'my-first-mock-article',
    date: new Date(),
    imageUrl: 'https://angular.io/assets/images/logos/angular/angualr.png'
  },
  {
    id: 2,
    title: 'Second article of mine',
    content: '',
    description: 'Another mocked article. Read it. It\'s just mock. :P',
    key: 'second-mock-article',
    date: new Date(),
    imageUrl: 'https://angular.io/assets/images/logos/angular/angualr-solidBlack.png'
  }
];
