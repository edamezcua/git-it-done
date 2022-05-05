var getRepoName = function() {
    // grab repo name from url query string
    var queryString = document.location.search;
    var repoName = queryString.split("=")[1];
  
    if (repoName) {
      // display repo name on the page
      repoNameEl.textContent = repoName;
  
      getRepoIssues(repoName);
    } else {
      // if no repo was given, redirect to the homepage
      document.location.replace("./index.html");
    }
  };
  // make a get request to url
fetch(apiUrl).then(function(response) {
    // request was successful
    if (response.ok) {
      response.json().then(function(data) {
        displayIssues(data);
  
        // check if api has paginated issues
        if (response.headers.get("Link")) {
          displayWarning(repo);
        }
      });
    } else {
      // if not successful, redirect to homepage
      document.location.replace("./index.html");
    }
  });