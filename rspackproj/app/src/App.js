import React from "react";

const MyButton = React.lazy(() => import("ui/MyButton"));

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to the Major App</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MyButton />
      </React.Suspense>
    </div>
  );
};

export default App;
