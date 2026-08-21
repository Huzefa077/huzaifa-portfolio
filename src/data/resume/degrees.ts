export interface Degree {
  school: string;
  degree: string;
  link?: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University of Pune',
    degree: 'B.E. Computer Engineering',
    year: 2025,
  },
];

export default degrees;
