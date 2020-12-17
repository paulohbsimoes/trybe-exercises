#!/bin/bash

delay=2

# Exercicio 1

echo -e "\nNavegando para o diretorio unix_tests"
cd unix_tests
sleep $delay

# Exercicio 2

echo -e "\nListando permissoes de arquivos com ls -l"
ls -l
sleep $delay

# Exercicio 3

echo -e "\nMudando permissoes do arquivo bunch_of_things.txt"
chmod 666 bunch_of_things.txt
ls -l bunch_of_things.txt
sleep $delay

# Exercicio 4

echo -e "\nRemovendo permissao de escrita bunch_of_things.txt"
chmod a-w bunch_of_things.txt
ls -l bunch_of_things.txt
sleep $delay

# Exercicio 5

echo -e "\nVoltando permissoes de bunch_of_things.txt para a listada inicialmente"
chmod 644 bunch_of_things.txt
ls -l bunch_of_things.txt
sleep $delay
