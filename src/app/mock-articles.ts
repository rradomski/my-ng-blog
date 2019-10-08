import {Article} from './Article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My first article',
    content: '',
    description: 'This is my first mocked article. Don\'t read it. It\'s just mock. :P',
    key: 'my-first-mock-article',
    date: new Date(),
    imageUrl: 'https://cdn-images-1.medium.com/max/184/1*nbJ41jD1-r2Oe6FsLjKaOg@2x.png'
  },
  {
    id: 2,
    title: 'Second article of mine',
    content: '',
    description: 'Another mocked article. Read it. It\'s just mock. :P',
    key: 'second-mock-article',
    date: new Date(),
    imageUrl: 'https://cdn-images-1.medium.com/max/184/1*nbJ41jD1-r2Oe6FsLjKaOg@2x.png'
  }
];
