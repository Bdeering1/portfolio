"use client"

import CERTIFICATIONS from '@/data/certifications'

import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Certifications() {
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    if (openId === null) return;
    const timer = setTimeout(() => setOpenId(null), 1800);
    return () => clearTimeout(timer);
  }, [openId]);

  return (
    <div className="mb-16">
      <h2 className="mb-6 text-xl font-heading sm:text-2xl">Certifications</h2>

      {CERTIFICATIONS.map((cert, id) => {
        return (

          <div className="mb-6" key={id}>
            <TooltipProvider>
              <Tooltip
                open={openId === id}
                onOpenChange={(isOpen) => setOpenId(isOpen ? id : null)}
                delayDuration={400}>
                <TooltipContent side="right" sideOffset={24} className="duration-600">
                  &larr; click to view
                </TooltipContent>
                <TooltipTrigger asChild>
                  <a
                    className=""
                    href={cert.link}
                    target="_blank"
                    rel="noopener"
                  >
                    <div className="flex justify-between gap-4 group py-2">
                      <h3 className="text-md sm:text-lg md:text-xl font-heading">
                        {cert.name}
                      </h3>
                      <div className="flex-none">

                        <h3 className="text-md sm:text:lg md:text-xl font-heading">
                          {cert.institution}
                        </h3>
                        <div className="bg-foreground h-0.5 md:h-0.75 md:w-0 -translate-y-0.5 group-hover:w-full transition-all duration-400"/>
                      </div>
                    </div>
                  </a>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
            <p className="text-sm -translate-y-1.5">
              {cert.date}
            </p>
          </div>
        )
      })}
    </div>
  )
}
