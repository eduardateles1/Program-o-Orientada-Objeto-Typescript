//omit
interface Pessoa {
  nome: string;
  idade: number;
  email: string;
  telefone: string;
}
//Isso cria um novo tipo chamado "PessoaSimplificada", que contém apenas as propriedades "nome" e "idade" do tipo original "Pessoa".
type PessoaSimplificada = Omit<Pessoa, "email" | "telefone">;


//Pick
type localGitHubUser = Pick<GitHubUserResponse, 'id' | 'login' |'name'>

//Outro exemplo de Pick
interface Person {
    nome: string;
    idade: number;
    email: string;
    telefone: string;
  }
//Isso cria um novo tipo chamado "PessoaSimplificada", que contém apenas as propriedades "nome" e "email" do tipo original "Person". Note que as propriedades "idade" e "telefone" foram omitidas do novo tipo.
  type newPerson = Pick<Person, "nome" | "email">;

  