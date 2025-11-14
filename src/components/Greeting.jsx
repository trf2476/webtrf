import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3>{greeting}！感谢来访！</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        新的欢迎语
      </button>
    </div>
  );
}