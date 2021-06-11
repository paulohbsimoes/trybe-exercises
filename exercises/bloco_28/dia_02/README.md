# Exercícios

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

Antes de começar, crie um projeto chamado **multer-exercises** utilizando o comando **npm init @tryber/backend multer-exercises**.

Depois de criar o projeto, instale o **multer** acessando a pasta e executando o comando **npm i multer** dentro dela.

Agora sim! ✅ Tudo pronto para começar os exercícios!

**1 -** Crie o endpoint **POST /upload**

**2 -** O endpoint deve receber apenas um arquivo no campo **file**;

**3 -** O arquivo deve ser armazenado na pasta **uploads**;

**4 -** O arquivo armazenado deve ter o timestamp do upload (obtido com **Date.now()**) seguido do nome original do arquivo.
Exemplo, para o arquivo **profile.png**, o nome armazenado deve ser algo como **1616691266095-profile.png**, já que o timestamp será diferente a cada vez.

**5 -** Retorne status **200 OK** se der tudo certo.

**6 -** Altere o endpoint **POST /upload** para que atenda os seguintes critérios:

**7 -** Apenas aceite arquivos cuja extensão seja **.png**; Caso o arquivo tenha outro tipo de extensão, retorne o status **403 Forbidden** com o JSON a seguir:

```json
{
    "error": { "message": "Extension must be `png`" }
}
```

**8 -** Não aceite um arquivo cujo nome (ignorando o timestamp) já exista na pasta **uploads**. Caso o arquivo já exista, retorne o status **409 Conflict** com o seguinte JSON:

```json
{
  "error": { "mesage": "File already exists" }
}
```

**Dica:** procure sobre **fileFilter** no multer, pode ajudar.

**9 -** Torne a pasta **uploads** pública de forma que seja possível baixar os arquivos enviados anteriormente.

## Bônus

**1 -** Crie o endpoint **POST /multiple**

* Permita o upload de vários arquivos através do campo **files**;

* Salve cada arquivo na pasta **/uploads** com um nome aleatório, que será gerado pelo **multer**;

* Retorne uma lista dos arquivos enviados juntamente com a URL pela qual cada um está acessível. Exemplo:

```json
[
  { "file": "meuArquivo.txt", "url": "http://localhost:3000/c3f20f8a1a72729883b88a96f405bbd0" },
  { "file": "arquivo1.png", "url": "http://localhost:3000/7c76b101fd872f7fc12705eeba2ddd1c" },
  { "file": "profile.jpg", "url": "http://localhost:3000/0ec57a65a9522aa14f9405060089c6f5" },
  { "file": "tcc.docx", "url": "http://localhost:3000/a7de65196a12ce1c53e8e76927099f12" },
  { "file": "CNH.jpg", "url": "http://localhost:3000/78c948b7b737d9a80b13f52bc6968d75" }
]
```

**2 -** Crie o endpoint **POST /profile**

* Receba strings nos campos **name**, **email**, **password** e **bio**;

* Receba um arquivo no campo **profilePic**;

* Armazene o arquivo recebido na pasta **/profilePics** com o nome aleatório do **multer**;

* Utilize o nome gerado pelo **multer** como ID para o perfil criado;

* Armazene as informações do perfil no arquivo **profiles.json**

**3 -** Crie o endpoint **GET /profiles/:id**

* Caso exista um perfil com o **id** informado, retorne as informações desse perfil, conforme salvo no arquivo **profiles.json**

* Caso não exista um perfil com o **id** informado, retorne o status **404 Not Found** com o seguinte corpo:

```json
{
  "error": {
      "message": "Perfil não encontrado"
  }
}
```
