const projectsArr = document.querySelectorAll('.project');
const projectDataEl = document.querySelector('#project-data');

const projectData = [
  {
    title: 'DevForum',
    about:
      "DevForum is a complete web-application, I built the front-end using React that receives data from the back-end, a REST API built with Node.js, I chose MongoDB as the database due to the facility of integrating it with Node.js and managing it with Mongoose, for more technical information access the <a href='https://github.com/TiagoSansao/DevForum' target='_blank'>GitHub reposity.</a>",
    techs: {
      'Front-end': [
        ['React', 'https://reactjs.org/'],
        ['Axios', 'https://github.com/axios/axios'],
      ],
      'Back-end': [
        ['Node.js', 'https://nodejs.org/en/'],
        ['Express', 'https://expressjs.com/'],
        ['Bcrypt.js', 'https://www.npmjs.com/package/bcrypt'],
        ['Cors', 'https://www.npmjs.com/package/cors'],
        ['Dotenv', 'https://www.npmjs.com/package/dotenv'],
        ['JsonWebToken', 'https://www.npmjs.com/package/jsonwebtoken'],
        ['Multer', 'https://www.npmjs.com/package/multer'],
        ['Mongoose', 'https://mongoosejs.com/'],
      ],
    },
    showing: 'Very cool',
    github: 'https://github.com/TiagoSansao/DevForum',
    site: '',
  },
  {
    name: '',
    about: '',
    techs: '',
    showing: '',
    github: '',
    site: '',
  },
  {
    name: '',
    about: '',
    techs: '',
    showing: '',
    github: '',
    site: '',
  },
  {
    name: '',
    about: '',
    techs: '',
    showing: '',
    github: '',
    site: '',
  },
];

function getProjectHTML({ title, about, techs, showing, github, site }) {
  return `
    <h3>${title}</h3>
    <p>${about}</p>
    <p>${techs}</p>
    <div>${showing}</div>
    ${site ? `<a target="_blank" href="${site}">Visit Site</a>` : ''}
    ${github ? `<a target="_blank" href="${github}">Visit GitHub</a>` : ''}
  `;
}

projectsArr.forEach((project, index) => {
  project.addEventListener('click', () => {
    projectDataEl.innerHTML = getProjectHTML(projectData[index]);
    document.body.classList.add('shadowed');
    projectDataEl.style.display = 'block';
  });
});
