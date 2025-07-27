import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-blue-800">PEDRIX CONSULTING</h1>
        <p className="text-lg text-gray-600">
          Expertise en Microfinance, Contrôle Interne, Gestion des Risques & Formation Professionnelle
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl space-y-2 shadow">
          <h2 className="text-xl font-semibold text-blue-700">Consultance en Microfinance</h2>
          <p>
            Accompagnement stratégique et opérationnel des IMF : organisation, gouvernance, procédures et outils.
          </p>
        </div>
        <div className="p-6 border rounded-xl space-y-2 shadow">
          <h2 className="text-xl font-semibold text-blue-700">Mise en Place de Dispositif de Contrôle Interne</h2>
          <p>
            Conception, évaluation et renforcement du contrôle interne pour une meilleure maîtrise des opérations.
          </p>
        </div>
        <div className="p-6 border rounded-xl space-y-2 shadow">
          <h2 className="text-xl font-semibold text-blue-700">Gestion des Risques</h2>
          <p>
            Élaboration de cartographies des risques, identification et mise en place de plans de mitigation adaptés.
          </p>
        </div>
        <div className="p-6 border rounded-xl space-y-2 shadow">
          <h2 className="text-xl font-semibold text-blue-700">Formation en Cartographie des Risques</h2>
          <p>
            Modules pratiques pour identifier, évaluer et documenter les risques dans les institutions financières.
          </p>
        </div>
        <div className="p-6 border rounded-xl space-y-2 shadow">
          <h2 className="text-xl font-semibold text-blue-700">Formation en Gestion des Ressources Humaines</h2>
          <p>
            Outils et techniques modernes pour une gestion optimale du capital humain dans les IMF.
          </p>
        </div>
        <div className="p-6 border rounded-xl space-y-2 shadow">
          <h2 className="text-xl font-semibold text-blue-700">Formation en Comptabilité & Logiciels</h2>
          <p>
            Formations sur la comptabilité des IMF et la maîtrise de logiciels tels que SAARI Comptabilité & SAARI Paie.
          </p>
        </div>
      </section>

      <section className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Besoin d’un accompagnement sur mesure ?</h2>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full">
          Contactez-nous
        </button>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16">
        © {new Date().getFullYear()} PEDRIX CONSULTING – Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
