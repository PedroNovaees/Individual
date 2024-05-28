<img src="https://user-images.githubusercontent.com/46379117/192358781-9ca879e4-e55e-4d0d-b876-f9a4a2ed9ae8.png" width="600px">

_Web Data Visualization = Visualização de Dados na Web_

_Implementação de Referência para o seu Projeto de Primeiro Semestre_

<hr>

# Como usar

1. Clone este repositório em sua máquina.


<<<<<<< HEAD
1. Crie, no Banco de Dados, as tabelas necessárias para o funcionamento deste projeto.
- Siga as instruções no arquivo **/src/database/script-tabelas.sql**
=======
SintonizaMente - 🎻

 SintonizaMente tem como objetivo mostrar como a música pode ser uma poderosa aliada no seu desempenho diário. Através de pesquisas e estudos, demonstramos os diversos benefícios que a música pode proporcionar em diferentes aspectos da vida. Oferecemos um quiz interativo que ajuda você a descobrir estilos musicais que mais podem beneficiar seu cotidiano. A partir das suas respostas, oferecemos recomendações personalizadas de playlists e músicas específicas para cada necessidade

Site Institucional - 💻

Bem-vindo ao SintonizaMente, seu portal para explorar como a música pode transformar seu dia a dia. Nosso site institucional apresenta nosso projeto, que visa mostrar os benefícios da música no desempenho e bem-estar diário.

![alt text](<Montagem README/image.png>)

![alt text](<Montagem README/image-1.png>)

![alt text](<Montagem README/image-2.png>)

![alt text](<Montagem README/image-3.png>)
>>>>>>> 1123fa10e3e01ac4d5e2c8831f8ebb58be313cf3


3. Acesse o arquivo **app.js** e parametrize o ambiente.
- Se você estiver utilizando o Ambiente de Produção (remoto), comente a linha 2 e deixe habilitada a linha 1 onde está o valor **var ambiente_processo = 'producao';**
- Se você estiver utilizando o Ambiente de Desenvolvimento (local), comente a linha 1 e deixe habilitada a linha 2 onde está o valor **var ambiente_processo = 'desenvolvimento';**

4. Adicione as credenciais de Banco de Dados no arquivo **.env** ou em **.end.dev**, seguindo as instruções neste.

<<<<<<< HEAD
5. Acesse este repositório no seu terminal (GitBash ou VSCode) e execute os comandos abaixo:

```
npm i
``` 
_O comando acima irá instalar as bibliotecas necessárias para o funcionamento do projeto. As bibliotecas a serem instaladas estão listadas no arquivo **package.json** então é muito importante que este não seja alterado. Será criada uma nova pasta/diretório chamado **node_modules** quando o comando for finalizado, que é onde as bibliotecas estão localizadas. Não altere a pasta/diretório._

```
npm start
``` 

_O comando acima irá iniciar seu projeto e efetuar os comandos de acordo com a sua parametrização feita nos passos anteriores._

6. Para "ver" seu projeto funcionando, acesse em seu navegador o caminho **informado no terminal**.

7. Caso queira parar a execução, tecle **CTRL+C** no terminal em que o projeto está rodando.

## Adicionar novo recurso ao projeto

**"Recurso? O que é?"** Enquanto no Banco de Dados chamamos as tabelas de "entidades", quando tratamos de desenvolvimento WEB usamos a palavra "recurso" para se referir a algo que podemos criar, ler, atualizar ou deletar [1]. Estas ações são conhecidas como CRUD: Create, Read, Update e Delete. Para acessar cada ação, usamos os métodos HTTP: POST, GET, PUT e DELETE [2]. (Há outros verbos, porém com estes já conseguimos efetuar CRUDs). 

**Tabela para ajudar a fazer a associação**

<table>
  <tr>
    <th>C.R.U.D</th>
    <th>Ação</th>
    <th>Tradução</th>
    <th>Verbo HTTP *</th>
    <th>Comando BD</th>
  </tr>
  <tr>
    <td>C</td>
    <td>Create</td>
    <td>Criar</td>
    <td>POST</td>
    <td>INSERT</td>
  </tr>
  <tr>
    <td>R</td>
    <td>Read</td>
    <td>Ler</td>
    <td>GET</td>
    <td>SELECT</td>
  </tr>
  <tr>
    <td>U</td>
    <td>Update</td>
    <td>Atualizar</td>
    <td>PUT</td>
    <td>UPDATE</td>
  </tr>
  <tr>
    <td>D</td>
    <td>Delete</td>
    <td>Deletar</td>
    <td>DELETE</td>
    <td>DELETE</td>
  </tr>
</table>

_* Você verá o verbo HTTP sendo apontado nos arquivos em /routes_

**"E no meu projeto, o que seria um recurso?"** Em web-data-viz manipulamos os recursos **usuário**, **aviso** e **medida**. Podemos conferir isso vendo para quais entidades foram criados os caminhos de inserção e captura de dados, que envolve os diretórios **routes**, **controllers** e **models**.

Abaixo, uma figura que ajuda a compreender o caminho percorrido para, por exemplo, efetuar o cadastro de um usuário:


![image](https://github.com/BandTec/web-data-viz/assets/46379117/e8d63551-6153-4632-93b9-f59a1d2afd3e)


**Entendi o que é um recurso e gostaria de adicionar um novo ao meu projeto! Como faz?**  
- Primeiro, crie a tabela no Banco de Dados referente a este recurso. Exemplos de recursos comuns de serem adicionados ao projeto no primeiro semestre: Silo, Aquário, Sala, Andar, Endereço, Mercado, Prateleira, Unidade, Carro, Caminhão...  
- Assim que criada a tabela, faça todo o caminho de **front-end → routes → controllers → models** replicando o que já existe!  
- Exemplo, se você quiser a funcionalidade de adicionar um novo Aquário, deve criar arquivos referentes ao aquario nos diretórios e replicar também as funções.  
- Dica: A implementação de AVISO já contém o CRUD completo! :wink:
 
### Fontes bibliográficas

[1] https://datatracker.ietf.org/doc/html/rfc2396  
[2] https://datatracker.ietf.org/doc/html/rfc7231
=======
![alt text](<Montagem README/icons8-css-48.png>) ![alt text](<Montagem README/icons8-html-48.png>) ![alt text](<Montagem README/icons8-js-48.png>) ![alt text](<Montagem README/icons8-mysql-48.png>)
>>>>>>> 1123fa10e3e01ac4d5e2c8831f8ebb58be313cf3
