import Header from '@/components/Header';
import PlacesGrid from '@/components/PlacesGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Places to
            <span className="text-blue-600"> Eat & Drink</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From cozy cafes to fine dining restaurants, food trucks to rooftop bars - 
            find your next favorite spot with detailed information and authentic reviews.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍕</span>
              <span>Restaurants</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">☕</span>
              <span>Cafes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span>Food Trucks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🥐</span>
              <span>Bakeries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍸</span>
              <span>Bars</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="places" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PlacesGrid />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">🍽️</span>
              <span className="text-xl font-bold text-gray-900">FoodSpot</span>
            </div>
            <p className="text-gray-600 mb-4">
              Connecting food lovers with amazing places to eat and drink.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
              <a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-gray-900 transition-colors">Terms</a>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                © 2024 FoodSpot. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
