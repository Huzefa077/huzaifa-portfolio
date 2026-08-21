export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    number: 'AZ-900',
    link: 'https://www.credly.com/badges/e0bbe599-9c1d-45f8-85e8-5f2cff30fa85/public_url',
    university: 'Microsoft',
  },
  {
    title: 'Data Structures and Algorithms using Java',
    number: 'NPTEL24CS96',
    link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs96/Course/NPTEL24CS96S45200108704051842.pdf',
    university: 'NPTEL - IIT Kharagpur',
  },
  {
    title: 'Data Analytics using Python',
    number: 'NPTEL24CS20',
    link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs20/Course/NPTEL24CS20S106520110930509104.pdf',
    university: 'NPTEL - IIT Roorkee',
  },
];

export default courses;
