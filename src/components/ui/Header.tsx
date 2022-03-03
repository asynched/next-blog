export default function Header() {
  return (
    <header>
      <div className="mx-auto mt-8 mb-16 flex w-[90%] max-w-screen-xl items-center justify-between text-gray-600">
        <a href="/">Home</a>
        <h1 className="text-4xl font-bold tracking-tighter text-pink-600">
          Async
        </h1>
        <a href="/">GitHub</a>
      </div>
    </header>
  )
}
