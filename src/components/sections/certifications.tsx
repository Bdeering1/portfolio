import { Link } from 'next-view-transitions'

import CERTIFICATIONS from '@/data/certifications'

export default function Certifications() {
  return (
    <div className="mb-16">
      <h2 className="mb-6 text-xl font-heading sm:text-2xl">Certifications</h2>

      {CERTIFICATIONS.map((cert, id) => {
        return (
          <div className="mb-6" key={id}>
            <Link
              className=""
              href={cert.link}
            >
              <div className="flex justify-between group py-2">
                <h3 className="text-lg font-heading sm:text-xl">
                  {cert.name}
                </h3>
                <div>
                <h3 className="test-lg font-heading sm:text-xl">
                  {cert.institution}
                </h3>
                <div className="bg-foreground h-[3px] w-0 group-hover:w-full transition-all duration-300"/>
                </div>
              </div>
            </Link>
            <p className="text-sm -translate-y-1.5">
              {cert.date}
            </p>
          </div>
        )
      })}
    </div>
  )
}
