import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  console.log(import.meta.env.VITE_TEST_VARIABLE);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
