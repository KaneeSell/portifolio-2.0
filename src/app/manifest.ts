import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portifólio Kanee',
    short_name: 'Portifólio Kanee',
    description: 'Progressive Web App do portifólio kanee.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo.ico',
        sizes: '192x192',
        type: 'image/ico',
      },
      {
        src: '/logo.ico',
        sizes: '512x512',
        type: 'image/ico',
      },
    ],
  }
}