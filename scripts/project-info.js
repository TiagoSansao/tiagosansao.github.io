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
    showing:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/qFEeZjIMKWI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
  {
    /* <ul>
  <li>Front-end</li>
    <ul>
      <li><a href="https://reactjs.org/">React</a></li>
      <li><a href='https://reactrouter.com/web/guides/quick-start'>React-router-dom</a></li>
      <li><a href='https://github.com/axios/axios'>Axios</a></li>
    </ul>
  <li>Back-end</li>
  <ul>
    <li><a href='https://expressjs.com/'>Express</a></li>
    <li><a href='https://www.npmjs.com/package/bcrypt'>Bcrypt.js</a></li>
    <li><a href='https://www.npmjs.com/package/cors'>Cors</a></li>
    <li><a href='https://www.npmjs.com/package/dotenv'>Dotenv</a></li>
    <li><a href='https://www.npmjs.com/package/jsonwebtoken'>JsonWebToken</a></li>
    <li><a href='https://www.npmjs.com/package/multer'>Multer</a></li>
    <li><a href='https://mongoosejs.com/'>Mongoose</a></li>
  </ul>
</ul> */
  }

  let techHTML = '<ul>';

  for (let tech in techs) {
    techHTML += `
      <li class="project-data-el"><h4 class="project-data-el">${tech}<h4></li>
      <ul>
        ${techs[tech]
          .map((item) => {
            return `
            <li class="project-data-el"><a class="project-data-el" href="${item[1]}">${item[0]}</a></li>
          `;
          })
          .join('')}
      </ul>
    `;
  }

  techHTML += '</ul>';

  return `
    <h3 class="project-data-el" >${title}</h3>
    <p class="project-data-el" >${about}</p>
    <p class="project-data-el" >${techHTML}</p>
    <div class="project-data-el> " ${showing}</div>
    ${
      site
        ? `<a class="project-data-el"  target="_blank" href="${site}">Visit Site</a>`
        : ''
    }
    ${
      github
        ? `<a class="project-data-el"  target="_blank" href="${github}">Visit GitHub</a>`
        : ''
    }
  `;
}

projectsArr.forEach((project, index) => {
  project.addEventListener('click', () => {
    projectDataEl.innerHTML = getProjectHTML(projectData[index]);
    document.body.classList.add('shadowed');
    projectDataEl.style.display = 'flex';
  });
});
