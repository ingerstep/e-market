# E-market (в разработке)

E-market — это онлайн-платформа для продажи бытовой техники, дизайн которой вдохновлён эстетикой Apple.

## Описание

Приложение состоит из нескольких экранов:

- **Авторизация**: .
- **Основная страница**: .
- **Страница продуктов категории**: .
- **Страница продукта**: .
- **Корзина**: .
- **Избранное**: .
- **Аккаунт**: .

### Общие элементы приложения

- **-**: .
  - **-**: .
  
### Макет - [Figma](https://www.figma.com/design/aEL4s7qHVNbuQxZmHkvWni/E-Commerce-UI-Kit-(Community)?node-id=113-159&node-type=canvas&t=9S3m8orkpzwUUHEb-0)

## Установить репозиторий

После установки репозитория, нужно инициализировать backend часть приложения, далее frontend.

```bash
$ git clone https://github.com/ingerstep/e-market
$ cd e-market
```

# Backend

## Description

Репозиторий содержит серверную часть приложения c использованием NestJS и PostgreSQL.

Директория - /server.

## Установка зависимостей и инициализация БД

```bash
$ npm install
$ npm run migration:run
```

## Запуск приложения

```bash
# development
$ npm run start
```
## Cборка

```bash
$ npm run build
```

# Frontend

## Description

Этот репозиторий содержит фронтенд часть приложения, использующего Next JS, Redux и TypeScript.

Директория - /client.

## Установка зависимостей

```bash
$ npm install
```

## Запуск приложения

```bash
# development
$ npm run dev
```

## Cборка

```bash
$ npm run build
```
