import Certifications from '@/components/sections/certifications'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I'm a CS graduate with experience building backend services, developer tooling, and infrastructure. I'm experienced with Go, Rust, C, C#, and Python including containerizing applications and deploying to cloud-based Linux environments.
        </p>
      </div>

      <Skills />
      <Experience />
      <Certifications />
    </div>
  )
}
