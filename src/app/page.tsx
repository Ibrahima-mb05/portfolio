import Navigation from '@/components/Navigation'
import Section from '@/components/Section'
import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  const projects = [
    {
      title: 'Analyse Géographique',
      description: 'Projet d\'analyse spatiale des données géographiques utilisant les SIG (Systèmes d\'Information Géographique)',
      technologies: ['QGIS', 'ArcGIS', 'PostgreSQL', 'PostGIS']
    },
    {
      title: 'Cartographie Web',
      description: 'Développement d\'applications cartographiques interactives pour la visualisation de données géospatiales',
      technologies: ['Leaflet', 'OpenLayers', 'JavaScript', 'GeoJSON']
    },
    {
      title: 'Télédétection',
      description: 'Analyse d\'images satellitaires pour le suivi environnemental et l\'aménagement du territoire',
      technologies: ['ENVI', 'ERDAS', 'Python', 'R']
    }
  ]

  const skills = [
    { name: 'Géomatique', level: 85 },
    { name: 'SIG', level: 90 },
    { name: 'Cartographie', level: 80 },
    { name: 'Télédétection', level: 75 },
    { name: 'Programmation', level: 70 },
    { name: 'Analyse spatiale', level: 85 }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Bonjour, je suis{' '}
                <span className="text-primary-600">MBENGUE IBA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Étudiant passionné en Géographie et Géomatique, spécialisé dans l'analyse spatiale 
                et les technologies géospatiales. Actuellement en Licence 3 de Géographie à l'Université 
                Cheikh Anta Diop de Dakar et en 2ème année de BTS Géomatique au CEDT G15.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-center"
                >
                  Voir mes projets
                </a>
                <a
                  href="#contact"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200 font-medium text-center"
                >
                  Me contacter
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white text-6xl font-bold">MI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="À propos de moi" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mon parcours académique</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Licence 3 en Géographie</h4>
                <p className="text-primary-600 font-medium">Université Cheikh Anta Diop de Dakar</p>
                <p className="text-gray-600 mt-2">
                  Formation approfondie en géographie humaine et physique, analyse spatiale, 
                  et méthodes de recherche géographique.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">BTS Géomatique (2ème année)</h4>
                <p className="text-primary-600 font-medium">CEDT G15</p>
                <p className="text-gray-600 mt-2">
                  Spécialisation en géomatique, systèmes d'information géographique (SIG), 
                  télédétection et cartographie numérique.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mes compétences</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-primary-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Mes projets" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contactez-moi" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Restons en contact</h3>
            <p className="text-gray-600 mb-8">
              Vous avez un projet en géomatique ou géographie ? N'hésitez pas à me contacter. 
              Je serais ravi de discuter de vos besoins et de voir comment je peux vous aider.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">mbengue.iba@email.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Localisation</p>
                  <p className="text-gray-600">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MBENGUE IBA. Tous droits réservés.</p>
          <p className="mt-2 text-gray-400">
            Étudiant en Géographie et Géomatique - Dakar, Sénégal
          </p>
        </div>
      </footer>
    </main>
  )
}


