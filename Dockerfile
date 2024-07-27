# Usa una imagen base oficial de Python
FROM python:3.9-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de requisitos
COPY requirements.txt requirements.txt

# Instala las dependencias
RUN pip install -r requirements.txt

# Copia el código de la aplicación
COPY . .

# Expone el puerto en el que la aplicación correrá
EXPOSE 8080

# Ejecuta la aplicación
CMD ["python", "app.py"]
