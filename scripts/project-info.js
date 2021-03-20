const projectsArr = document.querySelectorAll('.project');
const projectDataEl = document.querySelector('#project-data');

const projectData = [
  {
    title: 'DevForum',
    about:
      "DevForum is a complete web-application, I built the front-end using React that receives data from the back-end, a REST API built with Node.js, I chose MongoDB as the database due to the facility of integrating it with Node.js and managing it with Mongoose, for more technical information access the <a class='project-data-el' href='https://github.com/TiagoSansao/DevForum' target='_blank'>GitHub repository.</a>",
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
        ['MongoDB', 'https://www.mongodb.com/'],
      ],
    },
    showing:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/qFEeZjIMKWI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    github: 'https://github.com/TiagoSansao/DevForum',
    site: '',
  },
  {
    title: 'Case Converter',
    about:
      "Case Converter is a cross-platform mobile application, its purpose is very simple and more than seventy people have downloaded it so far from the Google Play Store. I built it using React Native and Expo and you can download it in Android devices from <a class='project-data-el' href='https://play.google.com/store/apps/details?id=com.tiagosansao.convertcase' target='_blank'>Play Store.</a> ",
    techs: {
      Mobile: [
        ['React', 'https://reactjs.org/'],
        ['React Native', 'https://reactnative.dev/'],
        ['Expo', 'https://expo.io/'],
      ],
    },
    showing:
      ' <div class="project-data-el img-container"> <img class="project-data-el" src="./assets/projects/case-converter/1.jpeg" alt="Case Converter 1" /> <img class="project-data-el" src="./assets/projects/case-converter/3.jpeg" alt="Case Converter 3" />  </div>',
    github: 'https://github.com/TiagoSansao/Case-Converter',
    site:
      'https://play.google.com/store/apps/details?id=com.tiagosansao.convertcase',
  },
  {
    title: 'Heimerdinger Bot',
    about:
      'Heimerdinger Bot is League of Legends for Discord, it gets data from the official Riot Games API and websites that are web crawled, it supports two languages so far (English and Brazilian-Portuguese), I built it using Express and Discord.js.',
    techs: {
      'Back-end': [
        ['node-html-parser', 'https://www.npmjs.com/package/node-html-parser'],
        ['Discord.js', 'https://discord.js.org/#/'],
        ['Axios', 'https://github.com/axios/axios'],
        ['Mongoose', 'https://mongoosejs.com/'],
        ['MongoDB', 'https://www.mongodb.com/'],
      ],
    },
    showing:
      '<div class="project-data-el img-container"> <img class="project-data-el" src="./assets/projects/heimerdinger-bot/1.png" alt="Heimerdinger-Bot 1" /> <img class="project-data-el" src="./assets/projects/heimerdinger-bot/2.png" alt="Heimerdinger - Bot 2" />  </div>',
    github: 'https://github.com/TiagoSansao/heimerdinger-discord-bot/',
    site: 'https://heimerdingerbot.github.io/',
  },
  {
    title: 'Você não Sabia',
    about:
      "Você não Sabia can be translated to You didn't Know, it's a curiosity progressive-web-application site developed with TypeScript, Next.js and deployed at Vercel, unfortunately this project is only available in Brazilian Portuguese.",
    techs: {
      'Front-end': [
        ['React', 'https://reactjs.org/'],
        ['Next.js', 'https://nextjs.org/'],
        ['Font Awesome', 'https://fontawesome.com/'],
        ['TypeScript', 'https://www.typescriptlang.org/'],
      ],
    },
    showing:
      '<div class="project-data-el img-container"> <img class="project-data-el" src="./assets/projects/vocenaosabia/1.png" alt="Heimerdinger-Bot 1" /> </div>',
    github: 'https://github.com/TiagoSansao/voce-nao-sabia',
    site: 'https://vocenaosabia.vercel.app/',
  },
  {
    title: '',
    about: '',
    techs: {
      '': [
        ['', ''],
        ['', ''],
      ],
      '': [
        ['', ''],
        ['', ''],
      ],
    },
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
            <li class="project-data-el"><a target="_blank" class="project-data-el" href="${item[1]}">${item[0]}</a></li>
          `;
          })
          .join('')}
      </ul>
    `;
  }

  techHTML += '</ul>';

  return `
    <header class="project-data-el">
      <h3 class="project-data-el" >${title}</h3> <button class="closeButton closeProject">
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
    <section>
      <main class="project-data-el">
        <h4 class="project-data-el">About</h4>
        <p class="project-data-el" >${about}</p>
        <h4 class="project-data-el">Used technologies</h4>
        <p class="project-data-el" >${techHTML}</p>
      </main>
      <aside class="project-data-el">
        ${
          site
            ? `<a class="project-data-el _2"  target="_blank" href="${site}">
              <svg class="i-svg" height="25" version="1.1" width="25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,"><path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#ffffff"></path></svg>
              Visit Site
            </a>`
            : ''
        }
        ${
          github
            ? `<a class="project-data-el  _1"  target="_blank" href="${github}"> 
              <svg class="i-svg" height="25" version="1.1" width="25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,"><path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#ffffff"></path></svg>
              Visit GitHub</a>`
            : ''
        }
      </aside>
      
    </section>
    <div class="showcaseContainer">
      <h4 class="project-data-el">Showcase</h4>
      <div class="project-data-el showcase"> ${showing} </div>
    </div>
  `;
}

projectsArr.forEach((project, index) => {
  project.addEventListener('click', () => {
    projectDataEl.innerHTML = getProjectHTML(projectData[index]);
    document.body.classList.add('shadowed');
    projectDataEl.style.display = 'flex';
  });
});
