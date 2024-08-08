"use client";

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";

const ComponentA = dynamic(
  () =>
    simulateAsyncOperation(3000).then(() => import("../components/ComponentA")),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);
// const ComponentB = dynamic(() => import("../components/ComponentB"));
const ComponentB = dynamic(
  () =>
    simulateAsyncOperation(3000).then(() => import("../components/ComponentB")),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

// const ComponentC = dynamic(() => import("../components/ComponentC"), {
//   ssr: false,
// });
const ComponentC = dynamic(
  () =>
    simulateAsyncOperation(3000).then(() => import("../components/ComponentC")),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="p-10 w-full flex flex-col justify-center items-center gap-3">
      <ComponentA />

      <ComponentC />
      <button
        onClick={() => setShow(!show)}
        className="flex items-center cursor-pointer p-2 bg-blue-500 text-white rounded-md"
      >
        Toggle ComponentB
      </button>
      {show && <ComponentB />}
    </div>
  );
}

async function simulateAsyncOperation(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
