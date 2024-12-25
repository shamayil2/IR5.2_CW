import { useState } from 'react';
import useFetch from './useFetch';
export default function App() {
  const [showData, setShowData] = useState(false);

  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  return (
    <>
      <h1>Todo API</h1>
      <button onClick={() => setShowData(true)}>Get Todo</button>
      {showData && (
        <>
          {data ? (
            <p>{JSON.stringify(data)}</p>
          ) : (
            <p>An error occured while fetching todos</p>
          )}
        </>
      )}
    </>
  );
}
