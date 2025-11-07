import type { Program, Event, ProgramCategory } from './types';

export const programs: Program[] = [
  {
    slug: 'sports-club',
    title: 'Sports Club',
    description: 'Engage in various sports, promoting teamwork and physical fitness.',
    longDescription: 'Our Sports Club offers professional coaching in soccer, basketball, and athletics. It is designed to develop physical skills, sportsmanship, and a healthy lifestyle in a fun and supportive environment.',
    imageId: 'sports-club',
  },
  {
    slug: 'summer-school-abroad',
    title: 'Summer School Abroad',
    description: 'Experience new cultures and learning environments with our international summer school program.',
    longDescription: 'A unique opportunity for children to travel, learn, and grow. Our Summer School Abroad program includes academic courses, cultural excursions, and leadership workshops in partnership with institutions in the UK and USA.',
    imageId: 'summer-school',
  },
  {
    slug: 'talent-festival',
    title: 'Talent Festival',
    description: 'A platform for children to showcase their God-given talents in music, drama, and arts.',
    longDescription: 'The annual Talent Festival is a highlight of the UAC calendar. It encourages children to explore their creative abilities and share them with the community, building confidence and performance skills.',
    imageId: 'talent-festival',
  },
  {
    slug: 'leadership-training',
    title: 'Leadership Training',
    description: 'Equipping the next generation with essential leadership skills and a heart for service.',
    longDescription: 'Our leadership training program focuses on practical skills such as public speaking, project management, and conflict resolution, all grounded in biblical principles of servant leadership.',
    imageId: 'leadership-training',
  },
];

export const programCategories: ProgramCategory[] = [
  {
    slug: 'faith-character-development',
    title: 'Faith and Character Development',
    description: 'Instilling a strong moral compass and spiritual foundation.',
    imageId: 'faith-development',
    items: [
      'Weekly and monthly fellowship gatherings',
      'Leadership and mentorship camps',
      'Moral and life-skills training grounded in biblical principles',
    ],
  },
  {
    slug: 'creativity-culture-expression',
    title: 'Creativity, Culture, and Expression',
    description: 'Nurturing artistic talents and cultural appreciation.',
    imageId: 'creativity-expression',
    items: [
      'Arts, music, storytelling, and talent development',
      'Annual Ambassadors Talent Festival',
      'Children’s Leadership Summit and creative workshops',
    ],
  },
  {
    slug: 'community-global-impact',
    title: 'Community and Global Impact',
    description: 'Empowering children to become agents of positive change.',
    imageId: 'community-impact',
    items: [
      'Children-led outreach and charity programs',
      'Environmental and peace-building projects',
      'Service-learning activities that teach responsibility and compassion',
    ],
  },
  {
    slug: 'uac-sports-club',
    title: 'UAC SPORTS CLUB 🏅',
    description: 'The UAC Sports Club builds discipline, teamwork, and resilience through structured sporting activities. It helps children discover their talents, stay active, and develop leadership skills through competitive and recreational sports.',
    imageId: 'sports-club',
    items: [
      'Football, Basketball & Athletics',
      'Table Tennis & Chess',
      'Creative Fitness, Dance & Games',
      'Team Challenges and Mini Tournaments',
    ],
  },
  {
    slug: 'uac-summer-school-abroad',
    title: 'UAC SUMMER SCHOOL ABROAD ✈',
    description: 'The UAC Summer School Abroad Program offers children the opportunity to travel, learn, and interact with other young leaders across nations. This international learning experience combines education, cultural exchange, and adventure — helping children broaden their worldview, improve communication skills, and grow in confidence.',
    imageId: 'summer-school',
    items: [
      'Cultural immersion and study tours',
      'Leadership and etiquette training',
      'International exchange with partner schools and youth groups',
      'Visits to educational and heritage sites',
    ],
    quote: 'The Summer School Abroad Program prepares our children to become global citizens with strong Kingdom values.',
  },
  {
    slug: 'special-international-initiatives',
    title: 'SPECIAL & INTERNATIONAL INITIATIVES',
    description: 'Fostering a global perspective and a spirit of innovation.',
    imageId: 'international-initiatives',
    items: [
      'African Teenpreneurs Initiative: Encouraging innovation and entrepreneurship among African children.',
      'Nigerian Children Conference and Awards: Celebrating excellence, creativity, and purpose among Nigerian children.',
      'African Children Talkshop: A continental platform for children’s dialogue, unity, and vision-building.',
      'UAC International Children’s Conferences: Bringing together young ambassadors from across the world to discuss leadership, culture, and global faith.',
    ],
  },
];


export const events: Event[] = [
  {
    id: 'weekly-fellowship',
    title: 'Weekly Fellowship',
    date: 'Every Sunday, 10:00 AM - 12:00 PM',
    description: 'A time of worship, learning, and fun for all ages. Join us for inspiring messages, interactive activities, and community building.',
    imageId: 'weekly-fellowship',
  },
  {
    id: 'talent-festival-annual',
    title: 'Annual Talent Festival',
    date: 'August 15, 2024',
    description: 'Come and witness the incredible talents of our UAC members in music, dance, drama, and more. A spectacular event for the whole family.',
    imageId: 'talent-festival',
  },
  {
    id: 'international-conference',
    title: 'International Youth Conference',
    date: 'December 20-23, 2024',
    description: 'An inspiring gathering of young ambassadors from around the world, featuring international speakers, workshops, and worship sessions.',
    imageId: 'international-conference',
  },
];
