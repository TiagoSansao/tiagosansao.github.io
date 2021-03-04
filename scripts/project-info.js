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
  let techHTML = '<ul>';

  for (let tech in techs) {
    techHTML += `
      <li class="project-data-el"><h5 class="project-data-el">${tech}<h5></li>
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
    <header>
      <h3 class="project-data-el" >${title}</h3> <button class="closeButton">
      <svg class="close" version="1.1" fill="white" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 511.995 511.995"
        style="enable-background:new 0 0 511.995 511.995;" xml:space="preserve">
        <g>
          <g>
            <path d="M437.126,74.939c-99.826-99.826-262.307-99.826-362.133,0C26.637,123.314,0,187.617,0,256.005
  s26.637,132.691,74.993,181.047c49.923,49.923,115.495,74.874,181.066,74.874s131.144-24.951,181.066-74.874
  C536.951,337.226,536.951,174.784,437.126,74.939z M409.08,409.006c-84.375,84.375-221.667,84.375-306.042,0
  c-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143,63.37-153.021c84.375-84.375,221.667-84.355,306.042,0
  C493.435,187.359,493.435,324.651,409.08,409.006z" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M341.525,310.827l-56.151-56.071l56.151-56.071c7.735-7.735,7.735-20.29,0.02-28.046
  c-7.755-7.775-20.31-7.755-28.065-0.02l-56.19,56.111l-56.19-56.111c-7.755-7.735-20.31-7.755-28.065,0.02
  c-7.735,7.755-7.735,20.31,0.02,28.046l56.151,56.071l-56.151,56.071c-7.755,7.735-7.755,20.29-0.02,28.046
  c3.868,3.887,8.965,5.811,14.043,5.811s10.155-1.944,14.023-5.792l56.19-56.111l56.19,56.111
  c3.868,3.868,8.945,5.792,14.023,5.792c5.078,0,10.175-1.944,14.043-5.811C349.28,331.117,349.28,318.562,341.525,310.827z" />
          </g>
        </g>
      </svg>
    </button>
    </header>
    <main>
      <h4>About</h4>
      <p class="project-data-el" >${about}</p>
      <h4>Used technologies</h4>
      <p class="project-data-el" >${techHTML}</p>
      <h4>Showcase</h4>
      <div class="project-data-el"> ${showing} </div>
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
    </main>
  `;
}

projectsArr.forEach((project, index) => {
  project.addEventListener('click', () => {
    projectDataEl.innerHTML = getProjectHTML(projectData[index]);
    document.body.classList.add('shadowed');
    projectDataEl.style.display = 'flex';
  });
});
