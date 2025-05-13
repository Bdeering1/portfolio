import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  IconType,
  SiGithub,
  SiLinkedin,
  SiRust,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; name: string, href: string }[] = [
    {
      icon: SiGithub,
      name: 'github',
      href: 'https://github.com/Bdeering1',
    },
    {
      icon: SiLinkedin,
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/bryn-deering/',
    },
    {
      icon: SiRust,
      name: 'crates.io',
      href: 'https://crates.io/users/Bdeering1',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <TooltipProvider key={id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <link.icon title="" />
                </TooltipTrigger>
                <TooltipContent>{link.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        )
      })}
    </div>
  )
}
