import type { Program, Event } from './types';

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
