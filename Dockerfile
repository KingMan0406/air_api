# Используем официальный образ Node.js
FROM node:14

# Создаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Указываем порт, на котором будет работать приложение
EXPOSE 5000

# Запускаем сервер
CMD ["node", "server.js"]
