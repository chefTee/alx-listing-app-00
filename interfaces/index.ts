// Interface for Card component props
export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

// Interface for Button component props
export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

// Interface for Property listing (for future use)
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  rating: number;
  amenities: string[];
}