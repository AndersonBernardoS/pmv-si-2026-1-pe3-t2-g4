# 4. PROJETO DO DESIGN DE INTERAÇÃO

## 4.1 Personas

![Persona - Pedro Paulo](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/Persona-Pedro-Paulo.jpg)

![Persona - Nathalia](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/persona-nathalia-enfermeira.jpg)

![Persona - Rafael Costa](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/image.png)

![Persona - Lucas Ferreira](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/PersonaLucasFerreira.png)

![persona patricia](https://github.com/user-attachments/assets/478056ba-5026-4bcc-9b71-69349d44c7fc)


## 4.2 Mapa de Empatia
Mapa da Empatia é um material utilizado para conhecer melhor o seu cliente. A partir do mapa da empatia é possível detalhar a personalidade do cliente e compreendê-la melhor. O objetivo é obter um nível mais profundo de compreensão de uma persona. A seguir um exemplo de template que pode ser usado para o mapa de empatia. Para cada persona deverá ser apresentado o seu respectivo mapa de empatia. Sugere-se a utilização do template apresentado em https://www.rdstation.com/blog/marketing/mapa-da-empatia/.

![Mapa de empatia - Pedro Paulo](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/Mapa-de-empatia-Paulo.jpeg)

![Mapa de empatia - Nathalia](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/mapa-empatia-nathalia-enfermeira.png)

![Mapa de empatia - Rafael Costa](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/rafael-costa0.png)

![Mapa de empatia - Lucas Ferreira](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/MapaEmpatiaLucasFerreira.png)

<img width="4705" height="4921" alt="Mapa de empatia - Patricia" src="https://github.com/user-attachments/assets/835683b6-c642-437f-9630-ccae508c6e8d" />


## 4.3 Protótipos das Interfaces
Apresente nesta seção os protótipos de alta fidelidade do sistema proposto. A fidelidade do protótipo refere-se ao nível de detalhes e funcionalidades incorporadas a ele. Assim, um protótipo de alta fidelidade é uma representação interativa do produto, baseada no computador ou em dispositivos móveis. Esse protótipo já apresenta maior semelhança com o design final em termos de detalhes e funcionalidades. No desenvolvimento dos protótipos, devem ser considerados os princípios gestálticos, as recomendações ergonômicas e as regras de design (como as 8 regras de ouro). É importante descrever no texto do relatório como os princípios gestálticos e as regras de ouro foram seguidas no projeto das interfaces. Nesta etapa deve-se dar uma ênfase na implementação do software de modo que possam ser realizados os testes com usuários na etapa seguinte.

### 4.3.1 Login

#### 4.3.1.1 Objetivo da tela

A tela apresenta um formulário de autenticação contendo os campos de e-mail e senha, destinados para usuário já cadastrados anteriormente no sistema.
Ao clicar no botão "Entrar", o sistema valida as credencias informadas. Caso os dados sejam válidos, o usuário é autenticado e redirecionado para o ambiente interno.
A interface também disponibiliza a opção "Manter conectado?", que permite que a sessão do usuário seja preservada, evitando a necessidade de um novo login em acessos futuros.
Além disso, está disponível o link "Ainda não se cadastrou? Cadastre-se" que redireciona o usuário para a tela de cadastro.

#### 4.3.1.2 Princípios Gestálticos

**Proximidade, Região comum e Boa continuidade:** Os campos de e-mail e senha estão posicionados próximos e dentro do mesmo container, fazendo referência a único grupo funcional relacionado à autenticação. O checkbox "Manter conectado" e o botão "Entrar" aparecem logo abaixo, passando a sensação de sequência natural das ações do usuário.

**Similaridade:** Os campos compartilham o mesmo estilo visual, facilitando o reconhecimento de sua função pelo usuário.

#### 4.3.1.3 Recomendações Ergonômicas

**Feedback imediato:** Os campos e botões são destacados quando focados.

**Localização do usuário:** A tela deixa claro em que ponto o usuário se encontra no sistema.

**Legibilidade:** Os textos tem tamanho, espaçamento e contraste com o fundo, o que proporciona boa legibilidade.

**Agrupamento/Distinção de Itens:** Os itens semelhantes estão agrupados e devidamente diferenciados dos demais elementos da interface.

#### 4.3.1.4 Regras de Ouro

**Perseguir a Consistência:** A interface segue padrões visuais.

**Feedbacks Informativos:** Os campos e botões são destacados quando focados.

**Fornecer Controle de Iniciativa do Usuário:** O usuário tem liberdade para concluir ações de autenticação ou navegar entre as telas.

**Carga de Memória de Trabalho:** Por seguir padrões e fluxos intuitivos a memorização não se torna necessária por parte do usuário.

![Tela de Login](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/Tela%20de%20Login.png)

### 4.3.2 Tela Inicial (Homepage)

#### 4.3.2.1 Objetivo da tela

A tela inicial (homepage) tem como objetivo atrair e orientar o usuário na utilização do sistema. Ela possui um campo de busca rápida, possibilitando ao usuário encontrar serviços automotivos de forma simples. Além disso, ela contém um fluxo explicativo ("Como funciona?"), que orienta o uso da plataforma tanto para clientes quanto para prestadores de serviços.

#### 4.3.2.2 Princípios Gestálticos

**Proximidade**: Os blocos como funciona, tanto para clientes quanto para profissional, estão agrupados e mesmo separados estão próximos, os passos dentro de cada bloco estão bem organizados.

**Similaridade**: Botões laranja seguem o mesmo padrão. Os ícones circulares dos passos têm o mesmo estilo e tipografia consistente.

**Boa Continuidade (alinhamento)**: O passo a passo segue um fluxo que guia o usuário naturalmente.

#### 4.3.2.3 Recomendações Ergonômicas

**Legibilidade**: Contraste adequado e fontes legíveis.

**Condução**: O fluxo explicativo ("Como funciona?") orienta o usuário, proporcionando rápido aprendizado e facilidade na utilização.

**Agrupamento/Distinção de itens**: Os campos semelhantes estão agrupados e diferenciados.

#### 4.3.2.4 Regras de Ouro

**Perseguir a consistência**: A interface possui padrões visuais.

**Fornecer Feedbacks Informativos**: O Botão buscar sugere uma ação clara e o passo a passo mostra o que acontece depois.

**Reduzir a Carga de Memória de Trabalho**: O fluxo explicativo ("Como funciona?") explica tudo na tela, não é necessário lembrar etapas.

![Tela inicial (homepage)](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/Homepage.png)




### 4.3.3 Telas de Cadastro (Usuário / Serviços)

#### 4.3.2.1 Objetivo da tela

A tela de cadastro de usuário tem por finalidade permitir que qualquer usuário, seja ele cliente ou prestador(a) de serviços insira suas informações no sistema para acessar as funcionalidades que exigem login (solicitar orçamentos, realizar agendamentos e avaliar prestadores).

Por sua vez, a tela de cadastro de serviços é disponibilizada apenas para prestadores, onde podem inserir informações que irão compor seu catálogo de serviços junto ao sistema, ficando disponíveis para que os clientes possam conhecer o prestador antes de solicitar orçamento ou agendar atendimentos.

#### 4.3.2.2 Princípios Gestálticos

**Proximidade**: Na tela de cadastro de usuário, a caixa de seleção centralizada na parte superior do formulário conduz o novo usuário a selecionar seu perfil (cliente ou prestador(a) de serviços). Abaixo, os campos de formulário apresentam junto às caixas de texto um título exibindo a informação solicitada. Ainda no centro da página, uma lista com botões selecionáveis sugere ao usuário os tipos de serviços que ele busca ou oferece. Na tela de cadastro de serviços, disponível apenas para prestadores, as caixas de texto centralizadas na página exibem títulos para demonstrar quais informações devem ser preenchidas. Em ambas as telas, os elementos foram dispostos próximos, cercados por linhas delimitadores, denotando um aspecto de formulário estruturado.

**Similaridade**: Os botões dispostos no cabeçalho da página seguem o padrão de cores definido no layout, e o corpo da página apresenta fundo claro, com tipografia em bom contraste no formulário, facilitando a visualização.

**Boa Continuidade (alinhamento)**: Os campos de formulário seguem uma sequencia lógica, conduzindo o preenchimento das informações necessárias.

#### 4.3.2.3 Recomendações Ergonômicas

**Legibilidade**: Contraste adequado e fontes legíveis.

**Condução**: O fluxo de informações solicitadas segue uma lógica orientada ao usuário, proporcionando rápido aprendizado e clareza no preenchimento.

**Agrupamento/Distinção de itens**: Os campos semelhantes estão agrupados e diferenciados.

#### 4.3.2.4 Regras de Ouro

**Perseguir a consistência**: A interface possui padrões visuais.

**Fornecer Feedbacks Informativos**: As caixas de texto dos formulários apresentam títulos que descrevem quais informações devem ser preenchidas respectivamente. Um pré-texto inserido dentro das caixas também demonstra o formato esperado para a informação.

**Reduzir a Carga de Memória de Trabalho**: Os títulos sobre as caixas de texto combinados com o pré-texto inserido nas caixas facilitam a compreensão e reduz a carga de trabalho em identificar o que deve ser preenchido pelo usuário.

<img width="1129" height="801" alt="tela_cadastro_usuarios" src="https://github.com/user-attachments/assets/fbed3bb8-85dd-4bd5-ba2d-e6c9e839840a" />


<img width="1128" height="803" alt="tela_cadastro_servicos" src="https://github.com/user-attachments/assets/9459ef65-733b-4fb2-b4a4-6de1180ba61c" />














## 4.4 Testes com Protótipos
Nesta seção você deve apresentar os testes realizados com usuários utilizando os protótipos de alta fidelidade desenvolvidos na seção anterior. O objetivo é avaliar a usabilidade, a clareza das informações e a adequação do design às necessidades das personas definidas no projeto.

Cada integrante do grupo deverá aplicar o teste com um usuário distinto, preferencialmente alinhado ao perfil das personas criadas. Devem ser definidas previamente as tarefas que o usuário deverá executar no protótipo (por exemplo: realizar um cadastro, buscar um produto, concluir uma compra).

Durante a aplicação do teste, registre observações sobre comportamentos, dúvidas, erros e comentários feitos pelo usuário, bem como o tempo necessário para a execução de cada tarefa. Ao final, colete o feedback do participante, destacando pontos positivos e aspectos a serem melhorados.

Os resultados obtidos por todos os integrantes devem ser consolidados, apresentando uma análise geral com os principais problemas encontrados, oportunidades de melhoria e as ações previstas para o projeto final. 
