import React from "react";
import { Link } from 'react-router-dom';
import Logo from "./components/Logo";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 md:px-6 md:py-4 max-w-7xl">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {/* Lewa strona - Logo */}
            <div className="flex items-center">
              <Logo />
              <span className="ml-4 text-2xl md:text-3xl font-bold">DG - SYSTEM</span>
            </div>
            {/* Prawa strona - Przełącznik języka */}
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat text-white py-12 md:py-20"
        style={{ backgroundImage: "url('/images/robot.webp')" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center bg-blue-900 bg-opacity-75 py-8 px-4 md:py-10 rounded-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
              Automatyzacja dla Twojej Firmy
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Profesjonalny montaż i serwis robotów przemysłowych
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Nasze Usługi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                Montaż Robotów
              </h3>
              <p className="text-sm md:text-base">
                Profesjonalna instalacja robotów przemysłowych różnych producentów
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                Serwis
              </h3>
              <p className="text-sm md:text-base">
                Kompleksowa obsługa serwisowa i konserwacja instalacji
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                Programowanie
              </h3>
              <p className="text-sm md:text-base">
                Programowanie robotów i integracja z istniejącymi systemami
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Skontaktuj się z nami
          </h2>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Telefon:</strong> +48 123 456 789
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Email:</strong> kontakt@dgsystem.pl
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Adres:</strong> 67, 21-411 Wola Burzecka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-auto">
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                DG-System Damian Golba
              </h3>
              <p className="text-blue-200 text-sm md:text-base">
                Profesjonalna automatyzacja produkcji
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-2 md:mt-2 pt-2 md:pt-2 text-center">
            <p className="text-sm md:text-base">&copy; 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;