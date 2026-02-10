import { getLogtoContext } from '@logto/next';
import { logtoConfig } from '@/lib/logto';
import Link from 'next/link';

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Logto Next.js App</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            A modern authentication solution powered by Logto
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-4">
                {claims?.picture && (
                  <img
                    src={claims.picture}
                    alt="Profile"
                    className="w-16 h-16 rounded-full"
                  />
                )}
                <div>
                  <h2 className="text-2xl font-semibold">
                    Hello, {claims?.name || claims?.email || 'User'}!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {claims?.email}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Your Information:</h3>
                <div className="bg-gray-50 dark:bg-gray-900 rounded p-4 space-y-2 font-mono text-sm">
                  <div><span className="text-gray-600 dark:text-gray-400">User ID:</span> {claims?.sub}</div>
                  <div><span className="text-gray-600 dark:text-gray-400">Email:</span> {claims?.email}</div>
                  <div><span className="text-gray-600 dark:text-gray-400">Name:</span> {claims?.name}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/dashboard"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                >
                  Go to Dashboard
                </Link>
                <a
                  href="/api/logto/sign-out"
                  className="flex-1 bg-gray-200 dark:bg-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition text-center"
                >
                  Sign Out
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold">Get Started</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Sign in to access your personalized dashboard and manage your account.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="/api/logto/sign-in"
                  className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                >
                  Sign In
                </a>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Don't have an account? Sign up during the sign-in process.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Features:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Email verification code login
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Social login (WeChat, Google, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Secure authentication with Logto
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
