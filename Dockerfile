# ---------- Etapa ÚNICA: Nginx para servir la app ----------
    FROM nginx:stable-alpine

    # Eliminamos la página por defecto de Nginx
    RUN rm -rf /usr/share/nginx/html/*
    
    # Copiamos el build ya hecho del pipeline (desde dist/)
    COPY dist/cinema-app/browser /usr/share/nginx/html
    
    # (Opcional) Copiar el archivo nginx.conf si tienes uno personalizado
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]
    