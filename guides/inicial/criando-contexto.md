# Criando Contexto

Cloud Serpro usa o portal do Horizon para prover IaaS e será nela que criaremos uma rede que se comunicará com o nosso roteador ligado à internet, um grupo de segurança com filtros necessários para o acesso remoto via ssh e iremos disparar uma instância que estará pronta para o acesso remoto e será o nosso passo inicial de uma experiência em Cloud de Governo.

Quando se fala de contexto de uma instância especificam aquilo que é necessário para que uma Instância exista e funcione bem em seu projeto. Fala-se também sobre redes, roteadores e uma coleção de filtros de ips que serão para nós as regras de firewall baseados no escopo do projeto.

O painel do Horizon nos oferece de forma intuitiva tudo que precisamos para criar nossa rede, como estaremos nos guiando a partir de exemplos, nesse [link](../redes/README.md) você poderá entender melhor os passos necessários para criar uma rede, roteador e o grupo de segurança.

Com o Horizon podemos prover diversos cenários de rede para o escopo do nosso projeto, como:

* Uma rede totalmente isolada que só permite a comunicação de instâncias dentro desta rede;
* Compartilhada com outras redes através de um roteador;
* Com o roteador ligado à internet que permite a comunicação com a mesma e com a permissão de acesso externo como SSH, HTTP etc.

Visando esses cenários possíveis iremos combinar a comunicação com a internet através de um roteador e permitindo então o acesso externo via ssh.

Como citado antes, o contexto se trata de todo o ecossistema ligado àquela instância que iremos criar, que para atender o escopo do nosso projeto, devem estar funcionando. Vamos então criar um rede, para que a mesma esteja disponível para a nossa instância.

## Rede

No painel do Horizon, em **Rede**, temos a opção de **Criar Rede** dentro do menu **Redes**. Essa opção nos traz os seguintes campos referentes ao nome descritivos da rede, sua sub-rede e os detalhes da sub-rede. Preenchemos da seguinte forma:

(img-rede1)

Perceba que os campos de **“Ativar Estado Administrativo”** e **“Criar Sub-Rede”** foram selecionados, isso se dá pelo fato que poderemos ter mais liberdade para expandir ou escalar nosso projeto quando se falar de rede. Já teremos uma sub-rede base e também a possibilidade de configuração do Estado Administrativo. 

(img-rede2)

O endereço da rede deve ser gerado no formato Classless Inter-Domain Routing (CIDR), deve ser observado também se não há nenhuma rede com esse mesmo endereço de IP para evitar possíveis conflitos. O IP de Gateway, se for usar o padrão, pode deixar em branco como eu fiz.

(img-rede3)

Tenha certeza que o **“Habilitar DHCP”** estará marcado nesse passo e também confira se o já tem um servidor de DNS cadastrado, caso não, use o IP de DNS do Serpro como fiz. 

Nossa rede agora está criada com uma sub-rede já cadastrada, um servidor de nome cadastrado, DHCP habilitado e pronta para a conexão com um roteador que iremos criar agora.

## Roteador

Para a criação do roteador, basta procurar no painel do Horizon, em **Redes** a funcionalidade de **Roteadores**, para enfim criar o nosso roteador.

(img-router1)

Lembre-se sempre de selecionar o **“Ativar o Estado Administrativo”** para garantir a escalabilidade do seu projeto sem antes ficar sempre se perguntando: *“Será que eu Ativei o Estado Administrativo?”* Por fim, só clicar em **“Criar Roteador”** que teremos um roteador ligado à internet, basta agora ligá-lo à nossa rede. 

Clicando no nome do nosso roteador, teremos a **“Visão Geral”** dele, as **“Interfaces”** que podem ser adicionadas e as **“Rotas Estáticas”**. Precisamos adicionar a interface de rede que acabamos de criar.

(img-router2)

Só clicar em **“Enviar”** que estará pronto a nosso canal de comunicação com a internet. Para confirmar, acessaremos no Painel do Horizon a **“Topologia de Redes”** e podemos verificar no **“Gráfico”** se está tudo ligado e funcionando.

(img-topologia)

Tudo já está pronto e configurado! Mas por segurança, todo e qualquer acesso às instâncias na Cloud Serpro é fechado. Precisamos criar regras para o grupo de segurança associado à essa rede. Em específico, queremos abrir a porta 22 para o acesso via ssh que é o escopo do nosso projeto.

## Grupos de Segurança

Grupo de segurança é uma coleção de filtros de IP que funcionam como regras de firewall. Toda instância é associada a pelo menos um grupo de segurança.

No Painel do Horizon, ainda em **Rede** temos a funcionalidade de **Grupos de Segurança** que nos dá a possibilidade de **Administrar Regras** de algum grupo, ou de **Criar Grupo de Segurança** que é aonde iremos clicar agora. 

(img-secgroup1)

Adicionei uma **Descrição** para que pessoas que venham posteriormente criar um novo grupo, possam ver se as regras do meu grupo as atende e não criem grupos de segurança iguais ou redundantes, tendo em vista que isso ocupa espaço do nosso projeto. Por fim, vou **Criar Grupo de Segurança**.

Nosso grupo de segurança ainda está vazio, nenhuma regra foi adicionada e esse é o passo que iremos realizar agora. Ao lado direito do nosso grupo, temos a opção de **Administrar Regras**. 

(img-secgroup2)

Vamos então adicionar as regras que precisamos: SSH, TCP Customizada aberto para todas as portas (conexão garantida devido seu processo de conexão) e a regra de Tudo ICMP para controle de conexões pela internet. Assim garantimos o standard de um grupo de segurança. Ficamos assim então: 

(img-secgroup3)

Agora o contexto está criado! Nesse cenário podemos fazer diversos testes e provisionamentos em uma instância, entendemos também sobre a questão de segurança do nosso projeto, quais as possibilidades de uso de uma rede e de um roteador. Agora o próximo passo é o [Disparo de uma Instância](./disparando-instancia.md).


