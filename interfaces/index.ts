// Props for a Card component
export interface CardProps {
  title: string; // The main heading of the card
  description: string; // A short description for the card
  imageUrl: string; // URL for the card image
  children?: React.ReactNode; // Optional: anything extra you want to display inside the card
}

// Props for a Button component
export interface ButtonProps {
  label: string; // The text shown inside the button
  onClick?: () => void; // Optional: what happens when the button is clicked
  type?: "button" | "submit" | "reset"; // Optional: button type
  className?: string; // Optional: extra CSS classes for styling
  disabled?: boolean; // Optional: disables the button if true
}
