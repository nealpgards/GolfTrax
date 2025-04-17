export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-6">Welcome to GolfTrax</h1>
        <p className="text-xl mb-4">Track your golf scores, analyze your performance, and improve your game.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Track Scores</h2>
            <p>Record your rounds with detailed hole-by-hole scoring.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Analyze Stats</h2>
            <p>Get insights into your performance with detailed statistics.</p>
          </div>
        </div>
      </div>
    </main>
  );
}