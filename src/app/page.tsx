import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Bryn Deering</h1>
      <p className="mt-2 text-lg sm:text-xl">Full-stack Developer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Bryn and I'm a developer based in Toronto.</p>
        <br />
        <p>
          I have experience across the full development stack, and an interest in developer tooling. Please visit the about section to learn more!
        </p>
      </div>

      <Links />
    </div>
  )
}
