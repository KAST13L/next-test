"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useActions } from "@/redux/hooks/useActions";
import { counterActions } from "@/redux/features/counterSlice";

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const { reset, increment, decrement } = useActions(counterActions);
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h1 style={{ marginBottom: 16 }}>{count}</h1>
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => decrement()} style={{ marginInline: 16 }}>
          decrement
        </button>
        <button onClick={() => reset()}>reset</button>
      </div>

      <>
        {error ? (
          <p>Oh no, there was an error</p>
        ) : isLoading || isFetching ? (
          <p>Loading...</p>
        ) : data ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              gap: 20,
            }}
          >
            {data.map((user) => (
              <div
                key={user.id}
                style={{ border: "1px solid #ccc", textAlign: "center" }}
              >
                <img
                  src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                  alt={user.name}
                  style={{ height: 180, width: 180 }}
                />
                <h3>{user.name}</h3>
              </div>
            ))}
          </div>
        ) : null}
      </>
    </main>
  );
};
