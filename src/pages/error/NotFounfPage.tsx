export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700">
      <h1 className="text-5xl font-bold mb-3">404</h1>
      <p className="text-lg mb-6">The page you are looking for could not be found.</p>
      <a href="/" className="text-blue-600 hover:underline">Back to Home</a>
    </div>
  );
}
