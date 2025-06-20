// API URLs and configuration
export const API_BASE_URL = 'https://api.example.com';
export const ENDPOINTS = {
  properties: '/properties',
  users: '/users',
  bookings: '/bookings'
};

// UI Text and Messages
export const UI_TEXT = {
  buttons: {
    bookNow: 'Book Now',
    viewDetails: 'View Details',
    loadMore: 'Load More',
    search: 'Search'
  },
  messages: {
    loading: 'Loading...',
    error: 'Something went wrong. Please try again.',
    noResults: 'No properties found.',
    success: 'Operation completed successfully!'
  },
  placeholders: {
    search: 'Search for properties...',
    location: 'Enter location'
  }
};

// Application Settings
export const APP_CONFIG = {
  itemsPerPage: 12,
  maxPrice: 10000,
  minPrice: 0,
  currency: 'USD'
};

// Sample data for development
export const SAMPLE_PROPERTIES = [
  {
    id: '1',
    title: 'Cozy Downtown Apartment',
    description: 'A beautiful apartment in the heart of the city',
    price: 120,
    image: '/assets/property1.jpg',
    location: 'Downtown',
    rating: 4.5,
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning']
  },
  {
    id: '2',
    title: 'Luxury Beach House',
    description: 'Stunning beachfront property with ocean views',
    price: 350,
    image: '/assets/property2.jpg',
    location: 'Beachfront',
    rating: 4.8,
    amenities: ['Pool', 'Beach Access', 'WiFi', 'Kitchen']
  }
];