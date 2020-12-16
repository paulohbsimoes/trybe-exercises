#!/bin/bash

delay=2

# Exercicio 1

echo -e "\nAbrindo diretorio unix_tests"
cd unix_tests
echo -e "\nBaixando arquivo countries.txt"
curl -s -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

# Exercicio 2

echo -e "\nMostrando o conteudo do arquivo countries.txt"
sleep $delay
cat countries.txt
sleep $delay

# Exercicio 3

echo -e "\nMostrando o conteudo do arquivo countries.txt, use /Zambia para fazer a pesquisa, aperte n para a proxima ocorrencia e p para a anterior"
sleep $delay
less countries.txt

# Exercicio 4
# Utilizar teclas n para proximo(next) e p para anterior(previous) para navegar

# Exercicio 5
echo -e "\nBuscando Brazil no arquivo countries.txt"
grep "Brazil" countries.txt || echo "Não encontrado"
sleep $delay

# Exercicio 6

echo -e "\nBuscando brazil (lowercase) no arquivo countries.txt"
grep "brazil" countries.txt || echo "Não encontrado"
sleep $delay


# Criando arquivo que sera usado para os proximos exercicios

echo -e "\nCriando arquivo phrases.txt com frases do Chuck Norris"
for ((i = 0; i < 10; i++))
do
  joke=$(jq .value <(curl -s https://api.chucknorris.io/jokes/random))
  echo $joke
  echo $joke >> phrases.txt
done

# Exercicio 7

echo -e "\nBuscando frases que nao contenham a palavra fox"
grep -v "fox" phrases.txt
sleep $delay

# Exercício 8

echo -e "\nContando o numero de palavras do arquivo phrases"
echo -e "Total de palavras: $(cat phrases.txt | wc -w)"
sleep $delay

# Exercício 9

echo -e "\nContando o numero de linhas do arquivo phrases"
echo -e "Total de linhas: $(cat phrases.txt | wc -l)"
sleep $delay

# Exercício 10

echo -e "\nCriando os arquivos empty.tbt e empty.pdf"
touch empty.tbt empty.pdf
sleep $delay

# Exercício 11

echo -e "\nListando todos os arquivos do diretorio unix_tests"
ls -a
sleep $delay

# Exercício 12

echo -e "\nListando todos os arquivos do diretorio unix_tests que terminem com txt"
ls -a *.txt
sleep $delay

# Exercício 13

echo -e "\nListando todos os arquivos do diretorio unix_tests que terminem com tbt ou txt"
ls -a *.{tbt,txt}
sleep $delay

# Exercício 14

echo -e "\nAcessando manual do comando ls"
man ls
sleep $delay
