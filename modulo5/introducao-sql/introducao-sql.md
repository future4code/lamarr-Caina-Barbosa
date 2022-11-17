### Exercício 1
a) Create Table cria uma tabela, com uuma coluna para um ID que será uma key primária, uma coluna name que suporta até 255 caracteres e que nunca será nula, uma coluna ibrht_date onde que suporta o formato de datas e nunca será nula, assim como ouma coluna gender que suporta até 6 caracteres.
b) Um mostra os schemas, enquanto o outro mostra a tables dentro dos schemas.
c) Este comando mostra todas as propriedades das colunas da table criada no passo 1.

### Exercício 2
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires, ",
  1200000,
  "1963-08-23", 
  "female"
);
b)Entrada duplicada para a key primária. Porque a primary key tem que ser UNIQUE. 
c) Erro contagem de colunas nao bate com o valor da conta na row 1. Acontece pq tá faltando duas colunas na expressão. 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) Campo nome não tem um valor padrão. Apareceu pq n tem o nome, que não pode ser nulo.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

e)Valor incorreto para data de nascimento. Tem que ser string. 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercício 3
a) SELECT * FROM Actor
WHERE gender = "female"
b) SELECT salary FROM Actor
WHERE name = "Tony Ramos"
c)SELECT * FROM Actor
WHERE gender = "invalid"

Não retornou nada.
d)SELECT id, name, salary FROM Actor
WHERE salary < 500000

e) Coluna nome não existe, tem que ser name. 

SELECT id, name from Actor WHERE id = "002"

### Exercício 4

a) Ela seleciona todas as colunas da tabela Actor, aonde apenas nomes que comecem com A ou J (o operador LIke combinado com o símbolo de porcentagem após as letras faz essa função), e o salário maior que 300 mil 
b)

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000


c)

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%")

d) SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000
