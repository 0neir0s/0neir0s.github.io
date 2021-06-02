// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Frameworks', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Data Science', 'Machine Learning', 'Languages'],
  },
  {
    title: 'D3',
    competency: 4,
    category: ['Web Development', 'Frameworks', 'Design', 'Javascript'],
  },
  {
    title: 'Data Analysis',
    competency: 3,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'Tensorflow',
    competency: 3,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'HTML',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages', 'Java'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Keras',
    competency: 3,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Visualization',
    competency: 4,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotib',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Scikit-Lean',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Pylint',
    competency: 3,
    category: ['Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
