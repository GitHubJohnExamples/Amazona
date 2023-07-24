import { Product } from './types/Product'

export const sampleProducts: Product[] = [
  {
    name: 'Choco Guyl',
    slug: 'choco-guyl',
    image: '../images/p1.jpg',
    category: 'bombons',
    brand: 'Guyl',
    price: 12,
    countInStock: 10,
    description: 'hight quality choco',
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Choco Milka',
    slug: 'choco-milka',
    image: '../images/p2.jpg',
    category: 'Choco',
    brand: 'Milka',
    price: 78,
    countInStock: 8,
    description: 'hight quality choco',
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: 'Unicorn Plushies',
    slug: 'unicorn-plushies',
    image: '../images/p3.jpg',
    category: 'Plushies',
    brand: 'Big plushies',
    price: 38,
    countInStock: 12,
    description: 'hight quality plushies',
    rating: 4.5,
    numReviews: 12,
  },
]