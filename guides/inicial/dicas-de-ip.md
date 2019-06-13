# Dicas sobre IPs

Ao configurar uma rede local, você pode escolher a classe de ips de endereços mais adequada. Os endereços IP foram divididos em classes, denominadas A, B, C, D e E. Destas, apenas as classe A, B e C são realmente usadas, já que as classes D e E são reservadas para recursos experimentais e expansões futuras.

Classe | Faixa de Endereçamento
------ | ---------------------------
A      | 0.0.0.0 a 127.255.255.255
B      | 128.0.0.0 a 191.255.255.255
C      | 192.0.0.0 a 223.255.255.255
D      | 224.0.0.0 a 239.255.255.255
E      | 240.0.0.0 a 247.255.255.255

Para uma  rede de até 254 host, uma faixa de endereços de classe C (como a tradicional 192.168.0.x com máscara 255.255.255.0) é mais apropriada, pois só é necessário se preocupar em configurar apenas o último octeto do endereço ao atribuir os endereços.

A **configuração da máscara de sub-rede**, serve para indicar em que ponto termina a identificação da rede e começa a identificação do host. Ao usar a máscara “255.255.255.0”, por exemplo, indicamos que os três primeiros números (ou octetos) do endereço servem para identificar a rede e apenas o último indica o endereço do host dentro dela.

> **EXEMPLO:** você poderia utilizar os endereços “192.168.1.1”, “192.168.1.2” e “192.168.1.3”, onde o “192.168.1.” é o endereço da rede (e por isso não muda) e o último número (1, 2 e 3) identifica os três hosts que fazem parte dela.

::: warning
Nenhum Host de classe C pode terminar com 0 ou com 255 ( xxx.xxx.xxx.255, xxx.xxx.xxx.0) , pois, um host não pode ser representado apenas por valores 0 ou 255, já que eles são usados para o envio de pacotes de broadcast.
::: 

Em uma rede de maior porte, com mais de 254 host, passa a ser necessário usar um endereço de classe B (com máscara 255.255.0.0), onde podemos usar diferentes combinações de números nos dois últimos octetos, permitindo um total de 65.534 endereços.

::: danger
De maneira nenhuma podemos utilizar os endereços:

0.xxx.xxx.xxx: Nenhum endereço IP pode começar com zero, pois ele é usado para o endereço da rede.

127.xxx.xxx.xxx: Nenhum endereço IP pode começar com o número 127, pois este número é reservado para testes e para a interface de loopback. 

255.xxx.xxx.xxx, xxx.255.255.255, xxx.xxx.255.255: Nenhum identificador de rede pode ser 255 e nenhum identificador de host pode ser composto apenas de endereços 255, seja qual for a classe do endereço, pois estes endereços são usados para enviar pacotes de broadcast

xxx.0.0.0, xxx.xxx.0.0: Nenhum  host pode ser composto apenas de zeros, seja qual for a classe do endereço, pois estes endereços são reservados para o endereço da rede. 
::: 

