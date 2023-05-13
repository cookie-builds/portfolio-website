type Tag = 'Front-end' | 'Back-end' | 'Blazor' | 'React' | 'NodeJS' | '.Net';

export type ProjectProps = {
  title: string,
  description: string,
  tags: Tag[],
  image: string,
};

const projects: ProjectProps[] = [
  {
    'title': 'Mercurius Aalst',
    'description': 'I designed and created the website for the student association of Mercurius Aalst. This is a static website created in Blazor. This website was created because I am the current Webmaster for the association and their previous one needed a serious overhaul.',
    'tags': ['Front-end', 'Blazor'],
    'image': 'https://imgur.com/SbJXaUm.jpg',
  },
  {
    'title': 'Poker Tracker',
    'description': 'A web application to make tracking poker results easier. Created as a school project, with front-end in React and back-end in NodeJS. This is not live anymore, but do please check out the code if you’re interested.',
    'tags': ['Front-end', 'Back-end', 'React', 'NodeJS'],
    'image': 'https://imgur.com/I8lukzH.jpg',
  },
  {
    'title': 'Squads reservation tool',
    'description': 'A reservation tool made for a local fitness in Aalst. Designed and created for a school project, made in .Net. This is not live anymore, but do please check out the code if you’re interested.',
    'tags': ['Front-end', 'Back-end', 'Blazor', '.Net'],
    'image': 'https://imgur.com/JIrPt2i.jpg',
  },
];

export default projects;