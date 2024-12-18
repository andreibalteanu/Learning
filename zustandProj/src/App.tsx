// import "./App.css";
// import { create } from "zustand";

// type Store = {
//   apiResponse: any;
//   inputValue: any;
//   inc: () => void;
// };

// const useStore = create<any>()((set) => ({
//   apiResponse: "Waiting for response",
//   inputValue: null,
//   inc: () => set((state: any) => ({ count: state.count + 1 })),
// }));

// const Counter = () => {
//   function manageData() {
//     fetch("http://localhost:3000/api/convert", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify([
//         ["a", 1],
//         ["b", 1],
//         ["c", 1],
//       ]),
//     }).then((data) => console.log(data));
//   }
//   const { apiResponse, inputValue, inc } = useStore();
//   return (
//     <div>
//       <span>{apiResponse}</span>
//       <input type="text" value={inputValue} />
//       <button onClick={manageData}>Submit</button>
//     </div>
//   );
// };

// function App() {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// }

// export default App;

function App() {
  const handlePostRequest = async () => {
    try {
      const response = await fetch("/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Andrei" }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error("Error in post request:", error);
    }
  };

  return (
    <div>
      <button onClick={handlePostRequest}>Send Post Request</button>
    </div>
  );
}

export default App;
