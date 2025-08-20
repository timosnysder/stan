// src/config/projects.js
// Zentrale Konfiguration für Projekt-Bilder

/**
 * Liste der Projekte die eigene Bilder haben
 * Format: ['projekt-ordner-name', 'anderes-projekt']
 */
export const projectsWithImages = [

        'antrifttaler-kunststoff-vertrieb',
        'akquinet', 
        'auconet',
        'berlingeschwister',
        'bundesarbeitsgemeinschaft-kirche-rechtsextremismus',
        'dianafrankovic',
        'familiarfacades',
        'fensterdirektvertrieb',
        'haus-fuerstenberg',
        'herbitt-cars',
        'jahresbericht-haus-der-kleinen-forscher',
        'lebenshilfe-2',
        'limeflavour',
        'los-das-magazin-fuer-mobilitaet',
        'research-drawing',
        'sens-media',
        'supersport-fitnessgeraete',
        'wendelburg',
        'zia-gestalte-unsere-zukunft',
        'peperoni',
        'sichtachsen', 
        // '',
        // '',
        // '',
        // '',
        // '',
        // '',
        // '',
        // Hier weitere Projekte hinzufügen, die eigene Bilder haben
      ]
      
      /**
       * Fallback-Bilder aus /public/projects/
       */
      export const fallbackImages = [
        '/projects/project-image-1.png',
        '/projects/project-image-2.png', 
        '/projects/project-image-3.png',
        '/projects/project-image-4.png',
        '/projects/project-image-5.png',
        '/projects/project-image-6.png'
      ]
      
      /**
       * Standard-Namen für Projekt-Bilder (in Prioritäts-Reihenfolge)
       */
      export const imageFileNames = [
        'main.png',
        'main.jpg', 
        'index.png',
        'index.jpg',
        'hero.png',
        'hero.jpg',
        '01.png',
        '01.jpg',
        '1.png',
        '1.jpg'
      ]
      
      /**
       * Hilfsfunktion um ein konsistentes Fallback-Bild für ein Projekt zu bekommen
       * @param {string} projectName - Der bereinigte Projekt-Name
       * @returns {string} - Pfad zum Fallback-Bild
       */
      export function getFallbackImage(projectName) {
        // Konsistente Zuordnung basierend auf Projekt-Name
        const hash = projectName.split('').reduce((a, b) => {
          a = ((a << 5) - a) + b.charCodeAt(0)
          return a & a
        }, 0)
        const imageIndex = Math.abs(hash) % fallbackImages.length
        return fallbackImages[imageIndex]
      }