# 🛒 Lista de Compras

Aplicativo feito em **React Native** para gerenciar listas de compras de forma prática e rápida.  
Com ele, é possível adicionar itens, marcar como comprados, remover ou limpar a lista completa. Tudo isso com persistência de dados local e interface leve.

---

## ✨ Funcionalidades

- Adicionar itens à lista
- Filtrar itens por status: **pendente** ou **comprado**
- Marcar itens como comprados
- Remover itens individuais
- Limpar a lista inteira
- Persistência local com `AsyncStorage`

---

## ⚙️ Stacks utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)
- [Async Storage](https://docs.expo.dev/versions/latest/sdk/async-storage/)

---

## 📦 Instalação e execução

1. **Clone o projeto:**
```
git clone https://github.com/seu-usuario/lista-de-compras
cd lista-de-compras
```
2. Instale as dependências:
```
npm install
```
3. Execute com Expo:
```
npx expo start
```

O app será iniciado e você poderá testar no emulador ou via app Expo no celular.

🧱 Estrutura de Pastas
```
assets/                  # Imagens e ícones
src/
├── app/home             # Tela principal do app
├── components           # Componentes reutilizáveis (Input, Botão, Filtro, Item)
├── storage              # Camada de persistência com AsyncStorage
├── types                # Tipos e enums
index.ts                 # Entry point
package.json             # Dependências e scripts
```

📱 Demonstração

🎬 Gravação de aplicação em funcionamento

[Gravação de tela de 03-06-2025 00:53:36.webm](https://github.com/user-attachments/assets/f70e5d87-9cf8-4018-8427-ccea76809d38)


📌 Observações
- A tipagem foi utilizada com TypeScript para garantir mais segurança e clareza no código.
- Os dados são salvos localmente no dispositivo, permitindo o uso offline.
- O app foi pensado para ser simples, leve e funcional.
  
🧑‍💻 Autor
Feito com 💙 por Gustavo Souza
