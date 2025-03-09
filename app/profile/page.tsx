"use client";

import Link from "next/link";

export default function Profile() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-white">PlayPal</span>
        <Link href="/" className="text-white hover:text-purple-400 px-4 py-2 rounded-lg border border-white">
          Back to Home
        </Link>
      </nav>

      {/* Profile Section */}
      <div className="container mx-auto px-6 py-12 bg-gray-800 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          <img src="/src.avif" alt="Profile" className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0" />

          {/* Profile Info */}
          <div className="flex-1 text-white">
            <h1 className="text-3xl font-bold">Pro Gamer</h1>
            <p className="text-gray-400">United States • English, Spanish</p>
            <p className="text-gray-400 mt-2">Professional Esports Player & Content Creator</p>

            {/* Stats Cards */}
            <div className="flex gap-4 mt-4">
              <div className="bg-gray-700 p-4 rounded-lg text-center w-[20rem]">
                <img src="/youtube.png" alt="Subscribers" className="w-12 h-12 mx-auto" />
                <p className="text-xl font-bold">1.2M</p>
                <p className="text-gray-400">Subscribers</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center w-[20rem]">
                <img src="/clock.jpeg" alt="Hours Played" className="w-12 h-12 mx-auto" />
                <p className="text-xl font-bold">2.5K</p>
                <p className="text-gray-400">Hours Played</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center w-[20rem]">
                <img src="/insta.jpeg" alt="Reels" className="w-12 h-12 mx-auto" />
                <p className="text-xl font-bold">150+</p>
                <p className="text-gray-400">Reels</p>
              </div>
            </div>

            {/* Game Stats */}
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Valorant</span>
                  <span className="text-purple-500">Diamond II</span>
                </div>
                <div className="h-2 bg-gray-700 w-full">
                  <div className="bg-purple-500 h-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>CS:GO</span>
                  <span className="text-purple-500">Global Elite</span>
                </div>
                <div className="h-2 bg-gray-700 w-full">
                  <div className="bg-purple-500 h-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Apex Legends</span>
                  <span className="text-purple-500">Master</span>
                </div>
                <div className="h-2 bg-gray-700 w-full">
                  <div className="bg-purple-500 h-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Content */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6 text-center">Recent Content</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img src="/1.avif" alt="Content 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-white font-bold mb-2">Epic Gaming Moment #1</h3>
            <p className="text-gray-400 text-sm">1.2K views • 2 days ago</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img src="/2.avif" alt="Content 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-white font-bold mb-2">Epic Gaming Moment #2</h3>
            <p className="text-gray-400 text-sm">900 views • 3 days ago</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img src="/3.avif" alt="Content 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-white font-bold mb-2">Epic Gaming Moment #3</h3>
            <p className="text-gray-400 text-sm">1.5K views • 1 week ago</p>
          </div>
        </div>
      </div>
    </main>
  );
}
