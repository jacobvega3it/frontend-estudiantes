# Utiliza la imagen base de Nginx
FROM nginx:alpine

# Copia el archivo de configuración personalizado de Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copia los archivos estáticos de la aplicación al directorio de Nginx
COPY ./dist/ /usr/share/nginx/html/

# Expone el puerto 80 para recibir solicitudes HTTP
EXPOSE 8080

# Ejecuta el servicio de Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
