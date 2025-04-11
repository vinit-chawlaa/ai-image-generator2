export default function NotFound() {
  return (
    <div className="w-full bg-black min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
      <h1 className="text-white text-5xl text-center py-4">404 | <span className="text-3xl text-center"> Oops! Page Not Found</span></h1>
      <a href="/" className="text-white text-xl"><button>Go to home</button></a>
      </div>
    </div>
  );
}
