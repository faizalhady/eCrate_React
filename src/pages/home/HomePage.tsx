import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Welcome to eST1C API Tester</h1>
      <p className="mb-6 text-center text-gray-600">
        This workspace is designed to test and visualize API connections for the eST1C project.<br />
        Select one of the available API modules below to begin testing.
      </p>

      <div className="space-y-3">
        <Link
          to="/auth-test"
          className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-sm"
        >
          Auth API Tester
        </Link>
        <Link
          to="/crate-test"
          className="block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg shadow-sm"
        >
          Crate API Tester
        </Link>
      </div>

      <footer className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} eST1C | Internal API Playground
      </footer>
    </div>
  );
}
