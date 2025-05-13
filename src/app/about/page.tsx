import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I am a developer with experience across the full development stack, and an interest in developer tooling!
          I pride myself in being proficient with a variety of languages and frameworks, but I'm most experienced within the NodeJS, .NET, and Rust ecosystems.
        </p>
      </div>

      <Skills />
      <Experience />
    </div>
  )
}
