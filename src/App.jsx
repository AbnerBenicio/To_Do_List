import List from "./components/List";


function App() {
  return (
    <div className="flex w-screen flex-col items-center justify-center tablet:gap-8 tablet:p-5 laptop:gap-5 laptop:p-2" >
      <header className="flex items-center justify-center h-[20vh]">
        <h1 className="text-5xl font-bold text-center tablet:text-6xl laptop:text-7xl">To <span className="text-cyan-400">Do</span><br/> List</h1>
      </header>
      <main className="flex flex-col items-center h-[70vh] w-screen relative gap-2">
        <List />
      </main>
    </div>
  );
}

export default App;
