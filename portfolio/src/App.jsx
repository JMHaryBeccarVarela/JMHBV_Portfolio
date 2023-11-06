function App() {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="fixed flex flex-wrap w-screen h-screen80">
        {Array.from({ length: 10000 }, (_, index) => (
          <div
            key={index}
            className="w-3 h-3 bg-gray-100 hover:bg-blue-500 transition duration-0"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
