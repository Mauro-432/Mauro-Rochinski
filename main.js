



function getProjects(){
    const urlGithHub = 'https://github.com/Mauro-432?tab=repositories'

    fetch(urlGithHub, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
        })
        .catch((e)=>{
            console.log(e)
        })    
}
    getProjects()