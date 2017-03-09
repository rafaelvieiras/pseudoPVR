# PseudoPVR
# Estrutura
Descrição da estrutura básica do servidor.

## Canais
Canais contem programas que podem conter filmes ou episodio de series.

### Regras
Regras podem conter informações pré formadas para gerar uma grade de programação diária.

#### Regras de Importação
Regras de importação são usadas para buscar arquivos pré registrados no banco de dados. Veja os exemplos:
- Filmes antes de 1980
- Filmes entre 1980 e 1995
- Filmes do estúdio Fox
- Filmes de estúdio que começa com as letras Fox
- Series do estúdio Warner
- Series com o nome começando em "Batman"
- Filmes que contem a palavra "natal" na Descrição

#### Regras de execução
Regras de execução não obrigatórias servem para determinar quais programas serão executados e em qual momento. Veja os exemplos:
- Filmes andes de 1980 serão exibidos as 18:00 da noite.
- Filmes que contem a palavra "natal" serão executados apenas a partir do dia 15 de dezembro.
- Nenhum filme deve ser exibidos em um intervalo menor de 5 dias da ultima exibição.
- Series com nome começando em "Batman" devem ser exibidos entre 10:00 e 13:00 e não deve ser exibidos mais de 3 episódios.

### Programas
Programas são gerados automaticamente pelas regras pré listadas para um canal.
Um programa contem um horario para iniciar e um para terminar.


### Logica
#### Montagem da grade de programação

- Execute uma listagem dos itens que poderão ser exibidos no dia, levando em conta as Regras de Importação.
- Verifica se tem alguma regra de execução para horario fixo de exibição de um programa.
    - Caso tenha essa regra, é calculado o intervalo antes e depois que ficará vazio, iniciando ou terminando as 00:00, ou em outro horario fixo. 
        ex: Se Programa 1 começa as 10:00 e Programa 2 começa as 15:00, deve calcular o tempo entre o fim do programa que começa as 10:00 até o inicio do próximo, as 15:00.
- Calcula o tempo total de todas as regras de execução que não são de horário fixo.
- Divida entre os 1440 minutos do dia (24 Horas) os programas.