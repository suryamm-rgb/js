import { useState, useCallback, memo } from 'react';

const Child = memo(({ onClick }) => {
  console.log('Child re-rendered!');
  return <button onClick={onClick}>Click Me</button>;
});

export default function PreventChildrenRender() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <p>Current theme: {theme}</p>
      <Child onClick={handleClick} />
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </>
  );
}
