import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {initializeApp} from "firebase/app";
import {getDatabase, ref, get, child, onValue} from "firebase/database";
import {LatestNews} from "./features/news/components/LatestNews.tsx";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const app = initializeApp({
        databaseURL: "https://hacker-news.firebaseio.com",
      });
      const db = getDatabase(app);
      const dbRef = ref(db);
      // Listen to Changes
      onValue(child(dbRef, "/v0/topstories"), (snap) => {
        const data = snap.val();
        console.log(data);
      });

      // Fetch Data Once
      get(child(dbRef, "v0/user/jl")).then((snap) => {
        console.log(snap.val());
      });
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <LatestNews />
    </>
  );
}

export default App;
