const PAST_ROLES: {
  company: string
  role: string
  description: string[]
  startDate: string
  endDate: string
  important?: boolean
}[] = [
  {
    company: 'Genrep Limited',
    role: 'Information Technology Specialist',
    description: [
      'Build Power Apps and Office 365 automations replacing manual PDF-based reporting with digital forms and structured data retrieval, integrating with existing enterprise infrastructure.',
      'Lead evaluation and migration of company devices to a new MDM platform, from requirements analysis through full deployment.',
      'Manage Microsoft Active Directory and Microsoft 365 accounts, licenses, and device configurations.'
    ],
    startDate: 'January 2026',
    endDate: 'Now',
    important: true,
  },
  {
    company: 'City of Markham',
    role: 'Backstage Technician III',
    description: [
      'Manage audio for front of house or on-stage monitors and aid handle event setup and teardown tasks at the Flato Markham Theatre.',
    ],
    startDate: 'February 2026',
    endDate: 'Now',
  },
  {
    company: 'Rexdale Alliance Church',
    role: 'Front of House Audio Engineer',
    description: [
        'Patch audio inputs and outputs, set up microphones, monitors, and cables.',
        'Manage audio equalization, dynamics, and levels in house, monitors, and livestream.',
    ],
    startDate: 'December 2024',
    endDate: 'Now',
  },
  {
    company: 'Rexdale Alliance Church',
    role: 'Training Platform Project Developer',
    description: [
        'Researched and selected Moodle as a replacement LMS for the organization’s existing training site.',
        'Wrote a Bash script to provision a production Moodle instance on a Debian VPS from scratch. Included Apache 2, PostgreSQL, SSL, UFW firewall, Fail2Ban, and IPv4/IPv6 dual-stack configuration.',
        'Developed a custom PHP plugin integrating Moodle with Planning Centre People, syncing user accounts and course completion data.',
        'Migrated course materials and established workflows for content creation by installing relevant plugins, building course templates, and writing tailored Moodle documentation for the organization.'
    ],
    startDate: 'June 2025',
    endDate: 'December 2025',
    important: true,
  },
  {
    company: 'Genrep Limited',
    role: 'Information Technology Technical Support',
    description: [
      'Researched help desk solutions, presented findings, and configured a new system with Microsoft SSO and Teams integrations.',
      'Configured Exchange mailboxes and spam filtration rules, reducing phishing emails received by employees.',
      'Fixed bugs and improved responsiveness of the company’s customer-facing WordPress site (HTML, CSS, PHP).'
    ],
    startDate: 'July 2023',
    endDate: 'September 2023',
    important: true,
  },
  {
    company: 'Bastian Solutions',
    role: 'Student Software Developer (Co-op)',
    description: [
      'Built a scalable metrics microservice and REST API in C# and ASP.NET, applying SOLID principles throughout.',
      'Migrated the data layer from LiteDB to MongoDB and designed aggregation logic that exposed several production bugs.',
      'Implemented custom object pools to reduce GC pressure and improve throughput for high-volume objects, using dependency inversion to keep the solution maintainable.',
      'Built Blazor WebAssembly dashboards to display simulation run metrics, used internally and in client demos.'
    ],
    startDate: 'January 2022',
    endDate: 'August 2022',
    important: true,
  },
  {
    company: 'LIV North Incorporated',
    role: 'Lifeguard',
    description: [
        'Ensured the safety of swimmers and performed pool maintenance tasks including cleaning and testing water quality.',
    ],
    startDate: 'June 2021',
    endDate: 'September 2021',
  },
  {
    company: 'University of Guelph',
    role: 'Remove Learning Systems Support (Co-op)',
    description: [
      'Facilitated the transition of university level courses into a remote learning environment by implementing course modules and content using D2L’s Brightspace, ensuring AODA compliance.',
      'Provided professors with technical consultation services and training for Zoom, MS Teams, and Teams Live.',
      'Produced live events, including the Family Relations and Applied Nutrition department’s “grad preview days”.',
    ],
    startDate: 'September 2020',
    endDate: 'December 2020',
  },
  {
    company: 'Guelph Hockeuy Referees Association',
    role: 'Hockey Official',
    description: [
        'Ensured games ran smoothly by enforcing proper regulations and protocol, resolved disputes, communicated professionally with players and coaches.',
    ],
    startDate: 'September 2019',
    endDate: 'March 2020',
  },
  {
    company: 'Olympian Swimming',
    role: 'Administrator, Instructor, and Lifeguard',
    description: [
        'Facilitated swimming lesson sales, managed customer accounts, and handled complaints and inquiries.',
        'Trained new swimming instructors, taught children of various ages, and ensured the safety of swimmers.',
    ],
    startDate: 'September 2015',
    endDate: 'August 2019',
  },
  {
    company: 'Greater Toronto Hockey League',
    role: 'Hockey Official',
    description: [
        'Ensured games ran smoothly by enforcing proper regulations and protocol, resolved disputes, communicated professionally with players and coaches.',
    ],
    startDate: 'September 2015',
    endDate: 'April 2018',
  },
]

export default PAST_ROLES
