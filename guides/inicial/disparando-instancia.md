# Disparando Instância

Na parte anterior falamos sobre o contexto para a criação base de uma instância. 

> *"Quando se fala de contexto de uma instância especificam aquilo que é necessário para que uma Instância exista e funcione bem em seu projeto. Fala-se também sobre redes, roteadores e uma coleção de filtros de ips que serão para nós as regras de firewall baseados no escopo do projeto."*

Aqui falaremos sobre o disparo e também sobre alocação de [IP Flutuante](../redes/ipsFlutuantes.md) que nos permitirá o acesso externo e remoto.

## Disparo

No painel do Horizon temos a possibilidade de disparar uma instância indo em **“Instâncias”** no menu de **“Computação”**. Aqui podemos **“Criar Snapshot”** de uma instância existente, verificar e monitorar o Status das instâncias já criadas, dos endereços de IP (tanto endereços fixos quanto públicos), verificar o par de chaves a qual a instância responderá,  funcionalidades que dependem totalmente do escopo do seu projeto e **“Disparar Instância”** que é o que precisamos para agora.

![Instância](../../img/guides/instancia1.png)

Nessa aba de **“Detalhes”** temos a possibilidade de verificar o espaço alocado para o nosso projeto do lado direito em **“Instâncias Totais”**, nomear nossa instância, inserir uma descrição para criação da mesma, atribuir uma **“Zona de Disponibilidade”** no caso de multi-zonas e o número de instâncias que serão criadas nesse processo em **“Contagem”**.

![Instância](../../img/guides/instancia2.png)

Já em **“Origem”** podemos decidir o modelo que será utilizado para criar nossa instância, iremos selecionar a origem a partir de uma **“Imagem”** e alocar a ela o **“Ubuntu 16.04”** que se encontra disponível. Para realizar esse processo basta clicar na seta para cima que a imagem será alocada. 

![Instância](../../img/guides/instancia3.png)

**“Flavor”s** dimensionam e gerenciam o nosso poder de hardware. Para realizar esse processo basta clicar na seta para cima que o Flavor disponível será alocado para nós. Importante também lembrar que pode haver um sinal de “Warning” como esse que aparece na imagem, isso se dá pelo fato de que o espaço de projeto alocado para você será excedido caso aquela opção queira ser selecionada e isso não pode, pois extrapola as capacidades para o seu projeto. Verifique as instâncias que podem estar sem uso, ou peça aumento de espaço.

![Instância](../../img/guides/instancia4.png)

Em **“Redes”** basta apenas selecionar aquela rede que criamos no contexto anterior. A rede pode ser modificada após a criação da Instância. 

::: danger AVISO
Tome cuidado, pois a opção de Disparo de Instância já deve estar disponível mas não deve ser selecionada sem antes haver um Par de Chaves.
:::

![Instância](../../img/guides/instancia5.png)

O **“Grupo de Segurança”** é o próximo passo para nós. Sempre haverá um grupo default, dependendo do seu projeto você pode deixá-lo ali, no nosso caso iremos retirar ele e apenas selecionar aquele grupo que criamos quando falamos de contexto. Esse que será a coleção de filtro que servirá de regras de firewalls para nossa Instância.

![Instância](../../img/guides/instancia6.png)

**“Par de Chaves”** é um dos passos que mais precisamos ter atenção pois, aqui podemos reutilizar um par de chaves já criado para outro projeto, importar um par de chaves do seu computador ou criar um novo par de chaves. Tudo depende do seu projeto, no nosso caso vamos **“Criar par de chaves”**. Um par de chaves deve ter um nome que seja fácil de atribuir à sua instância, então não tente inventar muito. Não se esqueça de salvar logo o Par de Chaves antes mesmo de clicar fora do modal.

![Instância](../../img/guides/instancia7.png)

Agora sim podemos **“Disparar Instância”** e acompanhar o status de lançamento dela

![Instância](../../img/guides/instancia8.png)

Depois do status mudar de **“Spawning”** para **“Executando”** teremos uma instância totalmente operacional mas ainda sem a possibilidade de acesso remoto via ssh, pois para isso precisamos alocar um IP flutuante (ou IP externo) à ela.

## IP Flutuante

No painel do Horizon, em Rede, temos a funcionalidade de IPs Flutuantes que é o necessário para **“Alocar IP para Projeto”** associando um existente ou criando um novo. 

![IP](../../img/guides/ip.png)

Em **“Alocar IP para Projeto”** poderemos alocar um IP Externo que estará ligado ao acesso pela internet, isso vai nos permitir acessar a Instância remotamente via ssh.

![IP](../../img/guides/ip2.png)

Apenas alocar o IP não o fazer estar ligado à sua instância, para que isso aconteça você precisa associar o IP com a sua Instância clicando em **“Associar”** a direita do IP Externo que você acabou de alocar.

![IP](../../img/guides/ip3.png)

Clique na **“Porta a ser associada”**, que no caso é o IP de Rede da sua Instância, mas não se preocupe, a Instância estará referenciada ao lado do IP. Por fim, só **“Associar”**.

Agora nosso projeto tem, rede, roteador, grupo de segurança, instância e um IP Externo que nos possibilitará o acesso externo via ssh.






