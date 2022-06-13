const USERNAME = "ToddLCarter";

function getGithubRepo(){
    fetch(`https://api.github.com/users/${USERNAME}/repos`)
    .then(response => response.json())
    .then(data => {
        data.reverse(); //reverse the array so the most recent repos are at the top
        
        var i = 0;

        data.forEach(repo => {
            if(i >= 4) return
            
            let card = document.querySelectorAll(`div.card-content`)[i];
            card.querySelector("h2.card-title").innerHTML = repo.name;
            card.querySelector("p.card-text").innerHTML = repo.description;
            card.querySelector("a.card-link").innerHTML = `<i class="fa-brands fa-github"></i> View Project`;
            card.querySelector("a.card-link").href = repo.html_url;

            let cardImage = document.querySelectorAll(`div.card-image`)[i];
            cardImage.classList.add("active");
            i++;
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

// animations
const updateViewport = () => {
    // get all elements
    let elements = document.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      // get element's top and bottom position
      let element = elements[i];
  
      //skip svg to not break icons
      if (element.tagName == 'svg') continue;
  
      let rect = element.getBoundingClientRect();
      let top = rect.top;
      let bottom = rect.bottom;
  
      // check if element is in viewport
      if (top < window.innerHeight && bottom > 0) {
        element.classList.add('in-viewport');
      } else {
        element.classList.remove('in-viewport');
      }
    }
  };
  
  updateViewport();
  document.addEventListener('scroll', updateViewport);