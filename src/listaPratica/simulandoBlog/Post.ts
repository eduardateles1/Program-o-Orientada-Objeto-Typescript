/*
Crie uma aplicação Typescript que simule um funcionamento básico de blog utilizando classes e associações.

Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários. 
As instâncias de Post também devem ter um método específico para adição de comentários nelas.

Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author, 
que é o autor do post. Além disso, os objetos da classe Author também devem possuir um array de posts 
(objetos da classe Post) e um método específico para criação de posts, que deverá criar uma instância utilizando 
aquele próprio autor, incluir o post no array e então retornar o post criado.
*/

class Author {
    name: string;
    posts: Post[];
  
    constructor(name: string) {
      this.name = name;
      this.posts = [];
    }
  
    createPost(title: string, content: string): Post {
      const post = new Post(title, content, this);
      this.posts.push(post);
      return post;
    }
  }
  
  class Post {
    title: string;
    content: string;
    author: Author;
    comments: Comment[];
  
    constructor(title: string, content: string, author: Author) {
      this.title = title;
      this.content = content;
      this.author = author;
      this.comments = [];
    }
  
    addComment(comment: Comment): void {
      this.comments.push(comment);
    }
  }
  
  class Commentt {
    content: string;
    post: Post;
  
    constructor(content: string, post: Post) {
      this.content = content;
      this.post = post;
    }
  }
  
  // Exemplo de uso
  const author1 = new Author("João");
  const post1 = author1.createPost("Título do Post 1", "Conteúdo do Post 1");
  const com1 = new Commentt("Comentário 1 do Post 1", post1);
  const com2 = new Commentt("Comentário 2 do Post 1", post1);
  
 
  console.log(post1);
  