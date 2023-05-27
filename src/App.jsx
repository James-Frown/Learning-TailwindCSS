import cheatsheet from "./components/cheatsheet";

function App() {
  return (
    <>
      <div className="
      w-screen 
      h-screen 
      bg-red-300
      ">
        <div className="
        flex 
        flex-col 
        justify-center 
        text-center 
        p-4
        gap-4
        ">
          <h1 className="
          text-4xl
          ">
            Welcome to my template TailwindCSS Project
          </h1>
          <p className="
          text-base
          ">
            This is where i have learnt about tailwind...
          </p>
        </div>
        <div>
          <cheatsheet />
        </div>
      </div>
    </>
  )
}

export default App;
