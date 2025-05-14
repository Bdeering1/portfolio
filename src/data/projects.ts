const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl: string
  liveLink: string
}[] = [
  {
    name: 'Polykill',
    description: 'Lightweight utility for removing unwanted dependencies and build artifacts from local projects.',
    liveLink: 'https://crates.io/crates/polykill',
    previewImage: '/polykill.png',
    repoUrl: 'https://github.com/Bdeering1/polykill',
  },
  {
    name: 'Visual Sorting',
    description: 'Visual and interactive demonstration of sorting algorithms.',
    liveLink: 'https://bdeering1.github.io/visual-sorting/',
    previewImage: '/visual-sorting.png',
    repoUrl: 'https://github.com/Bdeering1/visual-sorting',
  },
  {
    name: 'Console Menu',
    description: 'A simple yet powerful library for creating beautiful console menus in rust.',
    liveLink: 'https://crates.io/crates/console-menu',
    previewImage: '/console-menu.png',
    repoUrl: 'https://github.com/Bdeering1/console-menu',
  },
  {
    name: 'Mandelbrot',
    description: 'Render and explore the Mandelbrot fractal.',
    liveLink: '',
    previewImage: '/mandelbrot.png',
    repoUrl: 'https://github.com/Bdeering1/mandelbrot',
  },
  {
    name: 'Engine',
    description: 'UCI compliant chess engine, developed in rust.',
    liveLink: '',
    previewImage: '/engine-crabs.png',
    repoUrl: 'https://github.com/Bdeering1/engine',
  },
]

export default PROJECTS
