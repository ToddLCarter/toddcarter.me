const USERNAME = "ToddLCarter";

function getGithubRepo(){
    fetch(`https://api.github.com/users/${USERNAME}/repos`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var i = 0;
        data.forEach(repo => {
            let card = document.querySelectorAll(`div.card-content`)[i];
            console.log(card[i]);
            card.querySelector("h2.card-title").innerHTML = repo.name;
            card.querySelector("p.card-text").innerHTML = repo.description;
            card.querySelector("a.card-link").innerHTML = "View Project";
            card.querySelector("a.card-link").href = repo.html_url;
        });
    });
}

getGithubRepo();

document.querySelector("#mode-toggle").addEventListener("click", function(){
    if(document.body.classList.contains("dark-mode")){
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        document.querySelector("#mode-toggle").innerHTML = `<i class="fas fa-moon"></i>`;
    }
    else{
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        document.querySelector("#mode-toggle").innerHTML = `<i class="fas fa-sun"></i>`;
        
    }
});