console.log("Before");

// Getuser method gets called. When the callback gets triggered
// getRepositories gets called with the returned object from the getUser
// Callback as argument.
/*getUser(5, function(user) {
    getRepositories(user.gitHubUsername, function(repo) {
        getCommits(repo, displayCommits);
    });
});*/

// Async / Await approach
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = getCommits(repos[0]);
        console.log(commits);
    } catch(err) {
        console.log('Error', err.message);
    }

}

displayCommits();


console.log("After\n");

// Helper functions //

// Simulate a db query by returning a new user_promise
// In the user_promise we start a timer of 2 seconds
// After the 2 seconds have passed, the callback method
// returns an object by resolving (or rejecting) the user_promise
function getUser(id) {
    // Return a new user_promise which can be resolved or rejected
    return new Promise((resolve, reject) => {
        // Kick off async task
        setTimeout(() => {
            console.log("Reading user from DB");

            resolve({ id: id, gitHubUsername: 'Dzengiz' });
        }, 2000);
    });
}

// Simulate a repository fetch from github by starting a timer of 2 seconds
// After the 2 seconds have passed, the callback method
// returns an array
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching repositories from github");

            reject(new Error("Could not get the repos"));
        }, 2000);
    });
}


// Simulate a repository fetch from github by starting a timer of 2 seconds
// After the 2 seconds have passed, the callback method
// returns an array
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching commits from repository");

            resolve(['commit']);
        }, 2000);
    })
}