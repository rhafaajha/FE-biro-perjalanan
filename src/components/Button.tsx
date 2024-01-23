import '../style/global.css';

interface MyButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
}

export default function Button({ title, disabled }: MyButtonProps) {
  return <button className='button' disabled={disabled}>{title}</button>;
}
