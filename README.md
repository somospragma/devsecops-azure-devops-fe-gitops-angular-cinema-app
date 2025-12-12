# 🌍 Cinema App Frontend

**Aplicación Frontend** del sistema Cinema desarrollada en Angular.

## 📋 Descripción

Interfaz de usuario que permite:
- Navegación de cartelera y funciones
- Selección y reserva de asientos
- Pedidos de comida y bebidas
- Gestión de reservas
- Experiencia responsive para móviles y desktop

## 🎬 Arquitectura Completa del Sistema Cinema

### 📁 Estructura de Repositorios

#### 🔧 Repositorios de Aplicación
- **`cinema-food/`** - Microservicio para gestión de comida y bebidas
- **`cinema-seats/`** - Microservicio para gestión de asientos y reservas
- **`cinema-app/`** (ESTE REPO) - Aplicación web frontend del sistema cinema

#### 🚀 Repositorios de Infraestructura
- **`pipeline-templates-helm-argo/`** - Templates de pipelines CI/CD
- **`manifest-k8s/`** - Repositorio GitOps con manifiestos Kubernetes (**ArgoCD monitorea este**)
- **`config-argocd-minikube/`** - Recursos para configurar ArgoCD y Minikube

### 🔄 Flujo GitOps

```
cinema-app (ESTE REPO) 
    ↓ commit/push
Azure Pipeline 
    ↓ usa templates Angular
pipeline-templates-helm-argo/Frontend/Angular/
    ↓ actualiza manifiestos
manifest-k8s/helm-charts/cinema-app/
    ↓ ArgoCD detecta cambios
Kubernetes Deployment
```

**Cada commit aquí activa automáticamente todo el flujo GitOps hasta producción.**

### 🔗 Integración con Backend
Esta aplicación consume APIs de:
- **cinema-food** - Menú y pedidos
- **cinema-seats** - Asientos y reservas

> 📖 **Ver [README Principal](../README.md)** para el diagrama completo y detalles de la arquitectura.

## 🏗️ Arquitectura del Proyecto



## 🚀 Tecnologías

- **Angular 17+**
- **TypeScript**
- **Node.js** (runtime)
- **Nginx** (servidor web en producción)
- **Docker** (containerización)
- **Kubernetes** (orquestación)

## 🛠️ Desarrollo Local

### Prerequisitos
- Node.js 18+
- npm o yarn
- Angular CLI

### Instalación
```bash
# Instalar dependencias
npm install

# Instalar Angular CLI globalmente
npm install -g @angular/cli
```

### Ejecutar localmente
```bash
# Servidor de desarrollo
ng serve
# o
npm start

# Aplicación disponible en http://localhost:4200
```

### Build y Testing
```bash
# Build para producción
ng build --prod

# Ejecutar tests unitarios
ng test

# Ejecutar tests e2e
ng e2e

# Linting
ng lint
```

### Docker
```bash
# Construir imagen
docker build -t cinema-app .

# Ejecutar contenedor
docker run -p 80:80 cinema-app
```

## 🔄 Pipeline CI/CD

Cada commit a este repositorio:
1. **Trigger:** Azure Pipeline se ejecuta automáticamente
2. **Build:** Usa templates de `pipeline-templates-helm-argo/Frontend/Angular/`
3. **Test:** Ejecuta tests unitarios y linting
4. **Build:** Compila aplicación para producción
5. **Docker:** Construye imagen con Nginx
6. **Deploy:** Actualiza `manifest-k8s/helm-charts/cinema-app/values-[env].yml`
7. **GitOps:** ArgoCD detecta cambios y despliega automáticamente

## 📱 Funcionalidades

- **Cartelera:** Visualización de películas y horarios
- **Reservas:** Selección interactiva de asientos
- **Comida:** Catálogo y carrito de compras
- **Usuario:** Gestión de perfil y historial
- **Responsive:** Adaptado para todos los dispositivos

## 🌍 Configuración de Ambientes

- **Development:** `src/environments/environment.ts`
- **Production:** `src/environments/environment.prod.ts`

Configura las URLs de los microservicios backend según el ambiente.

## 🤝 Contribución

1. Fork del repositorio
2. Crear feature branch: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Add nueva funcionalidad'`
4. Push branch: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request
6. **El pipeline CI/CD se encarga del deployment automático**

## 🔗 Repositorios Relacionados

- **[Cinema Food](../cinema-food/)** - Microservicio de comida (Backend)
- **[Cinema Seats](../cinema-seats/)** - Microservicio de asientos (Backend)
- **[Pipeline Templates](../pipeline-templates-helm-argo/)** - Templates CI/CD
- **[Manifest K8s](../manifest-k8s/)** - Manifiestos Kubernetes
- **[Config ArgoCD](../config-argocd-minikube/)** - Configuración ArgoCD