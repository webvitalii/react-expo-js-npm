import { useEffect, useState, useMemo } from "react";
import useFetchRT from "reactive-toolkit";

function TestPage() {
  const { data, isLoading, error } = useFetchRT(
    "https://jsonplaceholder.typicode.com/posts/?_delay=4000&cache=543345434"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default TestPage;
