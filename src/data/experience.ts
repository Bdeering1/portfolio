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
      'Research mobile device management solutions, propose a solution and facilitate the migration of company devices to the new service.',
      'Configure workstations and mobile devices for employees and manage a variety of other technical resources.',
      'Manage Microsoft Active Directory and Office 365 accounts and licenses.',
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
        'Researched cloud-based and open-source learning management system solutions to replace existing platform.',
        'Implemented a new training platform, including configuration of hosting and deployment and integrate with the organization’s existing infrastructure.',
        'Migrated existing courses materials and digital assets to the newly implemented training platform.',
    ],
    startDate: 'June 2025',
    endDate: 'December 2025',
    important: true,
  },
  {
    company: 'Genrep Limited',
    role: 'Information Technology Technical Support',
    description: [
      'Modified HTML, CSS, and PHP code to fix bugs and create a more responsive experience for users of the company’s customer facing Wordpress site.',
      'Researched and analyzed help desk solutions to facilitate internal IT support, presented findings and configured a new help desk system including Microsoft SSO and Teams integrations.',
      'Created Microsoft Exchange mailboxes to better organize emails and configured spam filtration rules leading to a significant reduction in phishing emails received by employees.',
      'Set up accounts through Microsoft Active Directory and assigned licenses for Office 365 services.',
    ],
    startDate: 'July 2023',
    endDate: 'September 2023',
    important: true,
  },
  {
    company: 'Bastian Solutions',
    role: 'Student Software Developer (Co-op)',
    description: [
      'Developed a scalable metrics microservice and REST API using C# and ASP.NET to facilitate database access and handle metric aggregations, ensuring adherence to the SOLID principles of object oriented design. This also involved migrating a LiteDB repository to MongoDB.',
      'Designed and implemented complex data aggregation logic to turn raw metrics into useful data, which contributed to several bugs being found and fixed in the production system.',
      'Implemented custom object pools in order to adhere to the dependency inversion principle, resulting in a more maintainable solution for managing the lifecycle of high volume objects while mitigating the effects of garbage collection on performance.',
      'Created various data visualizations to view metrics data using Blazor Web Assembly.',
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
