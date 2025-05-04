export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietaryInfo: string[];
  allergens: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
}

export interface RestaurantLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: {
    day: string;
    hours: string;
  }[];
  coordinates: {
    lat: number;
    lng: number;
  };
}