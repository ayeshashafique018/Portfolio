import { TypeAnimation } from 'react-type-animation';

export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        'Full‑Stack Designer',
        2000,
        'Front-End Developer',
        2000,
        'Creative Coder',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block', fontWeight: 'bold', fontSize: '1.5rem', color: '#63AAFF' }}
      repeat={Infinity}
    />
  );
}
