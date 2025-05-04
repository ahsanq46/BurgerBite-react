import { Testimonial, RestaurantLocation } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'The burgers are simply amazing! Fresh ingredients and the special sauce is to die for. This has become our family\'s weekend tradition.'
  },
  {
    id: '2',
    name: 'Michael T.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    text: 'Great fast food that doesn\'t taste like typical fast food. The quality of ingredients really shows. Their app makes ordering so convenient.'
  },
  {
    id: '3',
    name: 'Emily R.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'As a vegetarian, I appreciate their plant-based options that actually taste good! The veggie burger is the best I\'ve had anywhere.'
  },
  {
    id: '4',
    name: 'David K.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'The milkshakes are incredible, and the staff is always friendly. I love the modern atmosphere too. Great place to hang out with friends!'
  }
];

export const locations: RestaurantLocation[] = [
  {
    id: '1',
    name: 'Downtown',
    address: '123 Main Street, Cityville, ST 12345',
    phone: '(555) 123-4567',
    hours: [
      { day: 'Monday-Friday', hours: '10:00 AM - 10:00 PM' },
      { day: 'Saturday', hours: '11:00 AM - 11:00 PM' },
      { day: 'Sunday', hours: '11:00 AM - 9:00 PM' }
    ],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: '2',
    name: 'Westside',
    address: '456 West Boulevard, Cityville, ST 12345',
    phone: '(555) 987-6543',
    hours: [
      { day: 'Monday-Friday', hours: '10:00 AM - 10:00 PM' },
      { day: 'Saturday', hours: '11:00 AM - 11:00 PM' },
      { day: 'Sunday', hours: '11:00 AM - 9:00 PM' }
    ],
    coordinates: {
      lat: 40.7418,
      lng: -73.9890
    }
  }
];