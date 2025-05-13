import {
  type IconType,
  SiAwsamplify,
  SiC,
  SiCsharp,
  SiCss3,
  SiCplusplus,
  SiDocker,
  SiDotnet,
  SiFlask,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNeovim,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRust,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType; color?: string }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'redux', icon: SiRedux },
        { skill: 'sass', icon: SiSass },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'wordpress', icon: SiWordpress },
      ],
    },
    {
      field: 'Backend',
      skills: [
        { skill: 'c', icon: SiC },
        { skill: 'c++', icon: SiCplusplus },
        { skill: 'csharp', icon: SiCsharp },
        { skill: 'go', icon: SiGo },
        { skill: 'rust', icon: SiRust },
        { skill: 'python', icon: SiPython },
        { skill: 'aws amplify', icon: SiAwsamplify },
        { skill: 'nodejs', icon: SiNodedotjs },
        { skill: '.NET', icon: SiDotnet },
        { skill: 'flask', icon: SiFlask },
        { skill: 'mongodb', icon: SiMongodb },
        { skill: 'postgresql', icon: SiPostgresql },
        { skill: 'docker', icon: SiDocker },
      ],
    },
    {
      field: 'Other Tools',
      skills: [
        { skill: 'git', icon: SiGit },
        { skill: 'linux', icon: SiLinux },
        { skill: 'neovim', icon: SiNeovim },
      ]
    }
  ]

export default SKILLS
