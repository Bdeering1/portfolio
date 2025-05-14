import { Link } from 'next-view-transitions'
import { FaLink } from 'react-icons/fa'

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
              <div className="flex justify-between group pt-2 pb-0.5">
                <h3 className="text-lg font-heading sm:text-xl">
                  {cert.name}
                </h3>
                <div>
                <h3 className="test-lg font-heading sm:text-xl">
                  {cert.institution}
                </h3>
                <div className="bg-border h-[2px] w-0 group-hover:w-full transition-all duration-200"/>
                </div>
              </div>
            </Link>
            <p className="text-sm">
              {cert.date}
            </p>
          </div>
        )
      })}
    </div>
  )
}
