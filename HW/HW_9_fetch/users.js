fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok){
            throw new Error('Network was not ok');
        }
        return response.json();
    })
    .then(data => {
        let userBlock = document.createElement('div');
        let userList = document.createElement('ul');

        data.forEach(user => {
            let userEl = document.createElement('li');
            userEl.innerHTML = `
                User ID: ${user.id}<br>
                Username: ${user.name}<br>
                <a href="user-details.html?id=${user.id}">Profile link</a>
            `;
            userList.appendChild(userEl);
        });

        userBlock.appendChild(userList);
        document.body.appendChild(userBlock);
    })
    .catch(error => {
        console.error('Issue with fetch operation', error);
    });
