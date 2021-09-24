# IBM INTENTS GENERATOR

Gera arquivo de botões do IBM Watson.

## Requerimentos

É necessário que você tenha o Node JS em seu ambiente de trabalho para que possa instalar as bibliotecas necessárias do script.

### Como instalar as dependências?

Você pode usar o npm ou yarn para instalar as dependências. Utilize um terminal (em ambiente Unix) ou prompt de comandos (em ambiente Windows):

```bash
yarn install ou npm install
```

### Como funciona?

O script gera um JSON de botões, no formato esperado pelo IBM Watson. Para isso basta rodar o script **ibm-buttons** (em ambiente Unix) ou **ibm-buttons** (em ambiente Windows) na raiz do projeto.

```bash
./ibm-buttons --file=/full/path/of/buttons.txt
```

O seu arquivo de botões deve conter uma inteção por linha, pode ser um arquivo simples de texto. Ex.:

```text
Botão 1
Botão 2
Botão 3
Botão X
```

No argumento **--file** passe o caminho completo do arquivo de botões.

O arquivo de saída é gerado na pasta **/storage** da raíz do projeto.
