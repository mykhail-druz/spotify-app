import { server } from 'react/server';

const Time = server(async function Time() {
  const hours = new Date().getHours();

  const response = await fetch(`/api/time?hours=${hours}`);
  const { greeting } = await response.json();

  return (
    <div>{greeting}</div>
  );
});

export default Time;
