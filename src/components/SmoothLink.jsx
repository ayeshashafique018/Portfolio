import { Link } from 'react-scroll';

export default function SmoothLink({ to, children }) {
  return (
    <Link
  to={to}
  smooth={true}
  duration={300}
  offset={-70}
>
  {children}
</Link>

    
  );
}


