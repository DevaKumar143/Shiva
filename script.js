
function fetchRepositories() {
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(repositories => displayRepositories(repositories))
        .catch(error => console.error('Error fetching repositories:', error));
}

function displayRepositories(repositories) {
    const repositoriesDiv = document.getElementById('repositories');
    repositoriesDiv.innerHTML = '';

    if (repositories.length === 0) {
        repositoriesDiv.innerHTML = '<p>No repositories found.</p>';
        return;
    }

    const list = document.createElement('ul');
    repositories.forEach(repo => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        list.appendChild(listItem);
    });

    repositoriesDiv.appendChild(list);
}



