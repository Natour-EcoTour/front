# Guia de Inicialização do Projeto Natour-EcoTour Frontend

## Como iniciar o aplicativo para desenvolvimento

1. **Pré-requisitos**
   - Node.js (recomendado versão 18 ou superior)
   - npm ou yarn

2. **Instalação das dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Rodar o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   O aplicativo estará disponível em `http://localhost:3000`.

---

## Estrutura de Diretórios

```
├── public/
├── src/
│   ├── app/
│   │   ├── hooks/
│   │   ├── login/
│   │   ├── master/
│   │   ├── terms/
│   ├── components/
│   ├── hooks/
│   ├── mock/
│   ├── services/
│   ├── utils/
│   ├── validations/
├── package.json
├── tsconfig.json
├── ...
```

### Descrição das Pastas

- **public/**: Arquivos estáticos acessíveis pelo navegador (imagens, vídeos, ícones).
- **src/**: Código-fonte principal do projeto.
  - **app/**: Estrutura de rotas e páginas do Next.js.
    - **hooks/**: Hooks customizados usados nas páginas do app.
    - **login/**: Página e lógica de login.
    - **master/**: Páginas e layouts do painel administrativo (ex: avaliações, configurações, usuários, pontos, etc).
    - **terms/**: Páginas de termos de uso e política de privacidade.
  - **components/**: Componentes reutilizáveis da interface (botões, tabelas, modais, inputs, etc).
  - **hooks/**: Hooks customizados globais (ex: debounce).
  - **mock/**: Dados mockados para testes e desenvolvimento.
  - **services/**: Serviços de integração com APIs (autenticação, pontos, usuários, termos, etc).
  - **utils/**: Funções utilitárias e helpers.
  - **validations/**: Schemas de validação (ex: login, recusa, atualização de senha).

---

## Scripts Úteis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera o build de produção
- `npm run lint` — Executa o linter
