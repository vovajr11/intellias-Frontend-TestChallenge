import projectsListItem from '../data/projects.js';

console.log(projectsListItem, 'projectsListItem');

const refs = {
  projectContainer: document.querySelector('.project-list-js'),
};

const makeProjectListMarkup = ({ imgUrl, projectName, projectUrl, stack }) => {
  return `
    <li>
        <img
            class="project-img"
            src="${imgUrl}"
            alt="${projectName}"
            width="200"
        />
        <div>
            <h3 class="project-name">${projectName}</h3>
            <p class="project-stack">${stack}</p>
        </div>
        <a href="${projectUrl}">review</a>
    </li>
    `;
};

const projectListMarkup = projectsListItem.map(makeProjectListMarkup).join('');
refs.projectContainer.innerHTML += projectListMarkup;
