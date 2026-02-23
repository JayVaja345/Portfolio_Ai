export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Jay Vaja</h1>
        <div className="space-x-6 text-gray-400">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#chat" className="hover:text-white">
            AI Chat
          </a>
        </div>
      </div>
    </nav>
  );
}
