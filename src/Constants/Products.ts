import { Product } from '../types/Product';

export default [
  {
    id: 1,
    title: 'SypherPK Classic',
    price: 699,
    description: 'Classic Black T-Shirt of the trap king, SypherPK',
    imagePath: process.env.PUBLIC_URL + '/assets/sypher.png',
  },
  {
    id: 2,
    title: 'Ninja Hoody',
    price: 599,
    description: 'Blue Hoody of the most subscribed gamer on YouTube',
    imagePath: process.env.PUBLIC_URL + '/assets/ninja.jpeg',
  },
  {
    id: 3,
    title: 'Sypher Special',
    price: 999,
    description: 'Special White T-Shirt of the trap king, SypherPK',
    imagePath: process.env.PUBLIC_URL + '/assets/syhper2.png',
  },
  {
    id: 4,
    title: 'Shroud',
    price: 899,
    description:
      'Official T-Shirt of the GOD himself and the guy who hates fortnite, Shroud',
    imagePath: process.env.PUBLIC_URL + '/assets/shroud.jpeg',
  },
  {
    id: 5,
    title: 'World Champ Bugha',
    price: 1099,
    description: 'Winner of the Fortnite Word Championship, Bugha',
    imagePath: process.env.PUBLIC_URL + '/assets/bugha.jpeg',
  },
  {
    id: 6,
    title: 'Tim, The Tatman',
    price: 1099,
    description: 'Player know for how bad he is in the game, Fall damage king',
    imagePath: process.env.PUBLIC_URL + '/assets/tim.png',
  },
  {
    id: 7,
    title: 'Mongral',
    price: 1099,
    description: 'Creator of the majority of playing style in Fortnite',
    imagePath: process.env.PUBLIC_URL + '/assets/mongrol.jpeg',
  },
] as Product[];
