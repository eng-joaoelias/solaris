# **Documentação do Projeto: Solaris**

## **Visão Geral**

Este projeto é um aplicativo de previsão do tempo, desenvolvido com **React** e **TypeScript**, usando bibliotecas populares como **Tailwind CSS** para o design, **React Router** para navegação, **Lucide Icons** para ícones e **Recharts** para gráficos. O aplicativo oferece aos usuários uma experiência fluida de consulta do clima atual e previsão para os próximos dias, incluindo temperatura, umidade, vento, nascer e pôr do sol.

### **Funcionalidades**

- **Exibição do clima atual**: Mostra a temperatura, umidade, sensação térmica e condições meteorológicas do momento.
- **Previsão para os próximos dias**: Apresenta uma previsão detalhada de temperatura máxima e mínima, umidade, vento e condição climática.
- **Gráficos de temperatura**: Exibe gráficos interativos da temperatura ao longo das próximas horas.
- **Troca de tema (Dark Mode/Light Mode)**: Permite alternar entre o tema claro e o tema escuro.
- **Busca por cidade**: Os usuários podem pesquisar o clima para diferentes cidades.

## **Estrutura do Projeto**

O projeto segue uma arquitetura baseada em **componentes reutilizáveis** e utiliza um **contexto de tema** global para gerenciar a alternância entre temas escuro e claro.

A estrutura de diretórios do projeto é a seguinte:

```
/src
  /api
    - types.ts                  # Tipos TypeScript para a API de clima
  /components
    - CitySearch.tsx             # Componente de busca de cidade
    - Header.tsx                 # Cabeçalho com logo e alternador de tema
    - Layout.tsx                 # Layout base do aplicativo (contém Header e Footer)
    - WeatherDetails.tsx         # Componente para exibir detalhes do clima atual
    - WeatherForecast.tsx        # Componente para previsão dos próximos dias
    - HourlyTemperature.tsx      # Componente para gráfico de temperaturas horárias
    - WeatherSkeleton.tsx        # Componente de esqueleto de carregamento
  /context
    - theme-provider.tsx         # Contexto para gerenciar o tema claro e escuro
  /pages
    - Home.tsx                   # Página principal do aplicativo
  /ui
    - card.tsx                   # Componentes de UI para Card
    - skeleton.tsx               # Componente de skeleton para carregamento
  - App.tsx                      # Componente principal do aplicativo
  - index.tsx                    # Arquivo de entrada do React
  - tailwind.config.js           # Configuração do Tailwind CSS
  - tsconfig.json                # Configuração do TypeScript
```

## **Tecnologias Utilizadas**



### 1. **React**
Já mencionado, mas vale destacar que **React** é a principal biblioteca JavaScript para a construção da interface de usuário (UI), promovendo o desenvolvimento de componentes reutilizáveis e interativos. 

#### Características Relevantes:
- **Componentização**: A aplicação é construída por meio de componentes React que são responsáveis por diferentes partes da UI, como a exibição de previsões de tempo e a troca de tema.
- **Hooks**: São usados hooks como `useState`, `useEffect` e `useContext` para gerenciar o estado local, efeitos colaterais e contexto global (tema).
- **Declaratividade**: React permite descrever a interface de forma declarativa, ou seja, você descreve o que a interface deve mostrar e o React se encarrega de atualizar a UI quando o estado muda.

### 2. **TypeScript**
O **TypeScript** é uma extensão do JavaScript que adiciona tipagem estática. Ele oferece uma série de vantagens, como a detecção precoce de erros, autocompletar no editor e melhor leitura do código.

#### Características Relevantes:
- **Tipos e Interfaces**: São usados tipos e interfaces em toda a aplicação para garantir que os dados recebidos da API e passados entre componentes estejam formatados corretamente. Isso previne erros comuns que podem ocorrer com dados inesperados.
- **Compilação para JavaScript**: O TypeScript é compilado para JavaScript durante o build da aplicação, mas com a vantagem de estar tipado durante o desenvolvimento.

### 3. **Tailwind CSS**
**Tailwind CSS** é um framework CSS baseado em utilitários que permite criar interfaces modernas e responsivas sem escrever CSS tradicional.

#### Características Relevantes:
- **Classes Utilitárias**: As classes de utilitários do Tailwind são usadas diretamente nos componentes React. Isso inclui classes como `bg-background`, `text-muted-foreground`, `p-4`, entre outras, que permitem estilizar rapidamente os elementos.
- **Responsividade**: O Tailwind facilita a criação de layouts responsivos com a utilização de breakpoints, como `md:grid-cols-2`, que faz com que o layout se adapte a diferentes tamanhos de tela.

### 4. **React Router**
**React Router** é uma biblioteca para gerenciar navegação em aplicações React de uma maneira declarativa. 

#### Características Relevantes:
- **Roteamento entre páginas**: Embora o projeto seja uma **Single Page Application (SPA)**, a configuração do React Router é preparada para navegação futura entre diferentes páginas (como uma página de detalhes ou configurações de usuário).
- **Componentes de Navegação**: O uso do `Link` no React Router permite a navegação entre páginas sem recarregar a página inteira, proporcionando uma experiência mais fluída.

### 5. **Recharts**
**Recharts** é uma biblioteca de gráficos para React, que permite criar gráficos interativos de maneira simples e eficaz.

#### Características Relevantes:
- **Gráficos Interativos**: No projeto, é usado para exibir gráficos de temperatura e sensação térmica de forma dinâmica. A configuração do gráfico é feita com componentes como `LineChart`, `Line`, `XAxis`, `YAxis`, e `Tooltip`.
- **Responsividade**: A integração com o **ResponsiveContainer** permite que os gráficos sejam responsivos e ajustem automaticamente seu tamanho com base na largura e altura da tela.

### 6. **Lucide Icons**
**Lucide** oferece ícones de código aberto que são leves, escaláveis e podem ser facilmente integrados em aplicações React.

#### Características Relevantes:
- **Ícones Interativos**: O projeto usa ícones como `Sun`, `Moon`, `Wind`, `Compass`, `Droplets`, `ArrowUp`, `ArrowDown`, etc., para representar informações sobre o clima de maneira visual.
- **Customização**: É fácil ajustar o tamanho e a cor dos ícones, como mostrado com o uso de classes Tailwind (`text-blue-500`, `text-green-500`, etc.).

### 7. **Date-fns**
**Date-fns** é uma biblioteca moderna para manipulação de datas e horas no JavaScript. 

#### Características Relevantes:
- **Formatando Datas**: O `format` é usado para converter timestamps (como o horário de nascer e pôr do sol) em formatos legíveis para o usuário. 
- **Localização**: Com `ptBR` da biblioteca, as datas podem ser exibidas conforme o formato utilizado no Brasil, como a formatação de meses e dias da semana.

### 8. **React Context API**
A **React Context API** é usada para criar uma maneira de compartilhar dados entre componentes sem ter que passar props manualmente entre cada nível de componente.

#### Características Relevantes:
- **Gerenciamento de Tema**: A aplicação utiliza o contexto para gerenciar o tema global (modo claro ou escuro), permitindo que qualquer componente acesse e altere o estado do tema sem necessidade de prop drilling.

### 9. **Axios**
Embora não tenha sido especificamente detalhado nos códigos que você enviou, é comum em projetos como esse utilizar o **Axios** para fazer requisições HTTP. 

#### Características Relevantes:
- **Requisições à API de Clima**: A API do clima (presumivelmente de algum serviço como OpenWeatherMap ou WeatherAPI) seria acessada via **Axios** para obter as previsões e os dados meteorológicos.
- **Gerenciamento de Respostas**: O Axios facilita a manipulação de respostas e erros de requisição, como a resposta da previsão do tempo, e também pode ser integrado com **React Query** ou outros gerenciadores de estado para otimizar o consumo da API.


### 10. **Vite**
**Vite** é uma ferramenta de build de próxima geração que substitui o Webpack em muitos projetos. Ele oferece tempo de build significativamente mais rápido e melhor performance de desenvolvimento.

#### Características Relevantes:
- **Desenvolvimento Rápido**: Vite melhora o tempo de recarga do navegador ao fazer atualizações incrementais de módulo, melhorando a experiência de desenvolvimento.
- **Suporte ao TypeScript**: Vite suporta **TypeScript** nativamente, permitindo que o código seja compilado de forma eficiente.

### 11. **ESLint e Prettier**
- **ESLint** é uma ferramenta para garantir a qualidade do código, ajudando a encontrar e corrigir problemas no JavaScript (ou TypeScript).
- **Prettier** é uma ferramenta de formatação de código que garante que todo o código siga um padrão de estilo.

#### Características Relevantes:
- **Qualidade de Código**: Essas ferramentas ajudam a manter o código limpo, consistente e livre de erros, além de aumentar a produtividade da equipe.
- **Integração com IDEs**: Ferramentas como ESLint e Prettier são integradas a editores de código (como VSCode) para detectar e corrigir problemas de estilo e erros no momento da escrita.

  
## **Explicação Detalhada dos Componentes**

### 1. **CitySearch.tsx**

Este componente permite aos usuários buscar o clima de uma cidade. Ele exibe uma barra de pesquisa onde o usuário pode digitar o nome da cidade e, ao fazer a busca, o clima dessa cidade é exibido.

- **Props**: Não possui propriedades, pois está conectado ao contexto global ou a uma API.
- **Funcionalidade**:
  - Realiza uma consulta à API para buscar as condições climáticas de uma cidade.
  - Exibe um campo de entrada e, ao submeter, faz a consulta para buscar os dados da cidade.

### 2. **Header.tsx**

O cabeçalho contém o logo do aplicativo e o botão de alternância de tema (Dark Mode/Light Mode).

- **Componentes**:
  - `Link` (do React Router): Permite que o usuário clique e volte à página inicial.
  - `useTheme`: Hook de contexto para gerenciar o estado do tema (claro ou escuro).
  - `Moon` e `Sun` (Lucide Icons): Ícones representando o modo escuro e claro, respectivamente.
- **Funcionalidade**:
  - Alterna entre o tema claro e escuro quando o ícone é clicado.

### 3. **Layout.tsx**

Este é o layout principal que envolve o conteúdo da página com um cabeçalho, o conteúdo principal e o rodapé. Ele também gerencia a estrutura geral do layout.

- **Componentes**:
  - `Header`: Exibe o cabeçalho no topo.
  - `Footer`: Contém a informação de rodapé do site.
- **Funcionalidade**:
  - Exibe o conteúdo dentro de uma estrutura com `min-h-screen`, ou seja, a altura mínima da tela.

### 4. **WeatherDetails.tsx**

Componente responsável por exibir os detalhes climáticos, como a direção do vento, pressão atmosférica, nascer e pôr do sol.

- **Props**:
  - Recebe os dados climáticos através da prop `data`, que contém informações sobre o clima atual.
- **Funcionalidade**:
  - Exibe dados como nascer e pôr do sol (usando `Sunrise` e `Sunset`).
  - Exibe a direção do vento (usando a função `getWindDirection`).
  - Exibe a pressão atmosférica.
  
### 5. **WeatherForecast.tsx**

Componente que exibe a previsão do tempo para os próximos dias (até 5 dias). Exibe a temperatura mínima, máxima, umidade e a direção do vento.

- **Props**:
  - Recebe dados meteorológicos detalhados através da prop `data`.
- **Funcionalidade**:
  - Agrupa as previsões diárias e exibe uma lista de previsões para os próximos dias.
  - Cada previsão inclui temperatura mínima e máxima, umidade e vento.

### 6. **HourlyTemperature.tsx**

Componente para exibir um gráfico de temperaturas ao longo das próximas horas.

- **Props**:
  - Recebe os dados meteorológicos da cidade atual.
- **Funcionalidade**:
  - Usa a biblioteca `Recharts` para renderizar um gráfico de linhas mostrando a temperatura e sensação térmica ao longo das próximas horas.

### 7. **WeatherSkeleton.tsx**

Componente de esqueleto (Skeleton), exibido enquanto os dados climáticos estão sendo carregados.

- **Funcionalidade**:
  - Exibe caixas de carregamento com o estilo `Skeleton`, simulando o carregamento de dados antes que o conteúdo real seja exibido.

### 8. **Card.tsx**

Componente básico de UI para cartões, usado para exibir as informações de clima e gráficos. Este componente é utilizado em `WeatherDetails`, `WeatherForecast`, `HourlyTemperature` e outros componentes.

- **Funcionalidade**:
  - Serve como um contêiner para exibir as informações de forma estruturada e estilizada.

### 9. **ThemeProvider.tsx**

Componente de contexto responsável por armazenar o estado do tema (claro ou escuro). Permite que qualquer componente dentro do `ThemeProvider` tenha acesso ao estado do tema e possa atualizá-lo.

- **Funcionalidade**:
  - Gerencia o estado global do tema (claro ou escuro).
  - Permite alternar entre os temas usando a função `setTheme`.

### **Fluxo de Navegação**

- **Home.tsx**: Página inicial do aplicativo, onde é exibido o clima atual, a previsão para os próximos dias e o gráfico de temperatura.
- O **Header** contém links de navegação, mas atualmente o projeto está configurado para uma página única, sem navegação entre várias páginas.
- **Layout** envolve a estrutura de cada página com o cabeçalho e rodapé, mantendo uma aparência consistente.

## **Como Rodar o Projeto**

### 1. **Instalação das Dependências**

Certifique-se de ter o **Node.js** instalado. Em seguida, instale as dependências do projeto executando:

```bash
npm install
```

### 2. **Rodar o Servidor de Desenvolvimento**

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento na URL: `http://localhost:3000`.

### 3. **Variáveis de Ambiente**

As variáveis de ambiente necessárias (como a chave da API para o serviço de clima) devem ser configuradas no arquivo `.env`. Exemplo:

```env
VITE_API_KEY=YOUR_API_KEY
```

Substitua `YOUR_API_KEY` pela chave da API que você obteve de um serviço de previsão do tempo (exemplo: OpenWeatherMap).

---

## **Conclusão**

Este projeto fornece uma interface limpa e funcional para consultar o clima em tempo real e as previsões futuras. Ele é projetado para ser intuitivo e fácil de usar, com uma navegação simples e interatividade rica, como gráficos e troca de tema.

O código é modular e baseado em componentes reutilizáveis, o que facilita a manutenção e a escalabilidade do projeto.
