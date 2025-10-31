import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Technology from './models/Technology.js';
import User from './models/User.js';

dotenv.config();

const technologies = [
  {
    title: 'React',
    slug: 'react',
    description: 'JavaScript library for building user interfaces',
    category: 'Frontend',
    color: '#61DAFB',
    icon: '/icons/react.svg',
    link: 'https://react.dev',
  },
  {
    title: 'Vue.js',
    slug: 'vue',
    description: 'Progressive JavaScript framework',
    category: 'Frontend',
    color: '#42B883',
    icon: '/icons/vue.svg',
    link: 'https://vuejs.org',
  },
  {
    title: 'Angular',
    slug: 'angular',
    description: 'TypeScript-based web framework',
    category: 'Frontend',
    color: '#DD0031',
    icon: '/icons/angular.svg',
    link: 'https://angular.io',
  },
  {
    title: 'Node.js',
    slug: 'nodejs',
    description: 'JavaScript runtime environment',
    category: 'Backend',
    color: '#339933',
    icon: '/icons/nodejs.svg',
    link: 'https://nodejs.org',
  },
  {
    title: 'Express.js',
    slug: 'express',
    description: 'Fast, minimalist web framework for Node.js',
    category: 'Backend',
    color: '#000000',
    icon: '/icons/express.svg',
    link: 'https://expressjs.com',
  },
  {
    title: 'MongoDB',
    slug: 'mongodb',
    description: 'NoSQL document database',
    category: 'Database',
    color: '#47A248',
    icon: '/icons/mongodb.svg',
    link: 'https://mongodb.com',
  },
  {
    title: 'PostgreSQL',
    slug: 'postgresql',
    description: 'Advanced open source relational database',
    category: 'Database',
    color: '#336791',
    icon: '/icons/postgresql.svg',
    link: 'https://postgresql.org',
  },
  {
    title: 'Python',
    slug: 'python',
    description: 'High-level programming language',
    category: 'Backend',
    color: '#3776AB',
    icon: '/icons/python.svg',
    link: 'https://python.org',
  },
  {
    title: 'Django',
    slug: 'django',
    description: 'High-level Python web framework',
    category: 'Backend',
    color: '#092E20',
    icon: '/icons/django.svg',
    link: 'https://djangoproject.com',
  },
  {
    title: 'Next.js',
    slug: 'nextjs',
    description: 'React framework with SSR and SSG',
    category: 'Frontend',
    color: '#000000',
    icon: '/icons/nextjs.svg',
    link: 'https://nextjs.org',
  },
  {
    title: 'Tailwind CSS',
    slug: 'tailwind',
    description: 'Utility-first CSS framework',
    category: 'Frontend',
    color: '#06B6D4',
    icon: '/icons/tailwind.svg',
    link: 'https://tailwindcss.com',
  },
  {
    title: 'MySQL',
    slug: 'mysql',
    description: 'Popular open source relational database',
    category: 'Database',
    color: '#4479A1',
    icon: '/icons/mysql.svg',
    link: 'https://mysql.com',
  },
  {
    title: 'Redis',
    slug: 'redis',
    description: 'In-memory data structure store',
    category: 'Database',
    color: '#DC382D',
    icon: '/icons/redis.svg',
    link: 'https://redis.io',
  },
  {
    title: 'Ubuntu',
    slug: 'ubuntu',
    description: 'Popular Linux distribution',
    category: 'Linux',
    color: '#E95420',
    icon: '/icons/ubuntu.svg',
    link: 'https://ubuntu.com',
  },
  {
    title: 'Docker',
    slug: 'docker',
    description: 'Containerization platform',
    category: 'Linux',
    color: '#2496ED',
    icon: '/icons/docker.svg',
    link: 'https://docker.com',
  },
  {
    title: 'Nginx',
    slug: 'nginx',
    description: 'Web server and reverse proxy',
    category: 'Linux',
    color: '#009639',
    icon: '/icons/nginx.svg',
    link: 'https://nginx.org',
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Clear existing data
    await Technology.deleteMany({});
    console.log('Cleared existing technologies');

    // Insert technologies
    await Technology.insertMany(technologies);
    console.log('Technologies seeded successfully');

    // Create admin user if not exists
    const adminExists = await User.findOne({ email: 'admin@devhub.com' });
    if (!adminExists) {
      await User.create({
        username: 'admin',
        email: 'admin@devhub.com',
        password: 'admin123',
        role: 'admin',
      });
      console.log('Admin user created: admin@devhub.com / admin123');
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
