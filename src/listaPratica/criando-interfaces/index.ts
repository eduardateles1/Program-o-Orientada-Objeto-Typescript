interface Planett extends CelestialBody{
     population: number
     createSatellite: (name: string) => void
}
interface CelestialBody {
    name:string
    mass: number
}
interface Star extends CelestialBody{
    age:number
    planets:Planet[];
}


//misturando as classes
type Asteroid = CelestialBody & {
    size: number
}
//Classe implementando outra 
class MilkWayPlanet implements Planett{
    name: string
    mass: number
    population: number
    constructor(name:string, mass:number,population:number){
        this.name = name
        this.mass = mass
        this.population =population

    }
    createSatellite: (name: string) => void
}
//resolução 
interface GitHubUserResponse {
    id:number
    login:string
    name: string;
    bio: string;
    public_repos: number;
    repos_url: string;
    message?: 'Not Found!'

}
interface GitHubRepoResponse{
    name:string
    description: string
    fork: boolean
    stargazers_count: number
}
const users: GitHubUserResponse[] = []

async function fetchUser(username:string)  {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user: GitHubUserResponse = await response.json()

    if(user.message){
        console.log(`Usuário não encontrado!`)
    }else{
        users.push(user)

       alert(
        `O usuário ${user.login} foi salvo. \n`+
        `\nid:  ${user.id} \n`+
        `\nlogin ${user.login} \n`+
        `\nNome:${user.name} \n`+
        `\nBio: ${user.bio} \n`+
        `\nRepositórios públicos: ${user.public_repos} \n`
       )
    }
}
//Exibir usuário
async function showUser(username: string) {
    const user = users.find(user => user.login === username)
  
    if (typeof user === 'undefined') {
      alert('Usuário não encontrado!');
    } else {
      const response = await fetch(user.repos_url)
      const repos: GitHubRepoResponse[] = await response.json()
  
      let message = `id: ${user.id}\n` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}`
  
      repos.forEach(repo => {
        message += `\nNome: ${repo.name}` +
          `\nDescrição: ${repo.description}` +
          `\nEstrelas: ${repo.stargazers_count}` +
          `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
      })
  
      alert(message)
    } 
  }
//mostrar todos usuários
function showAlltheUsers() {
    let message = 'Usuários:\n'
  
    users.forEach(user => {
      message += `\n- ${user.login}`
    })
  
    alert(message)
  }
//calcular total de repositórios
  function showReposTotal() {
    const reposTotal = users.reduce((accumulator, user) => ( accumulator + user.public_repos), 0)
  
    alert(`O grupo possui um total de ${reposTotal} repositórios públicos!`)
  }
//mostrar o top5
function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)
  
    let message = 'Top 5 usuários com mais repositórios públicos:\n'
  
    topFive.forEach((user, index) => {
      message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`
    })
  
    alert(message)
  }
//mostrar
async function main() {
    await fetchUser('isaacpontes')
    await fetchUser('julianaconde')
    await fetchUser('pcaldass')
    await fetchUser('lucasqueirogaa')
    await fetchUser('frans203')
    await fetchUser('LeDragoX')
  
    await showUser('isaacpontes')
    await showUser('julianaconde')
  
    showAlltheUsers()
    showReposTotal()
    showTopFive()
  }
  
  main()

  //sort oderna arrays
