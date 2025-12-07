# 🚀 Deploy no Portainer - Exata Bank

Guia rápido para subir a aplicação no Portainer.

## Método 1: Git Repository (Recomendado)

### 1. Commit e push do código
```bash
git add .
git commit -m "feat: add docker configuration with traefik"
git push origin main
```

### 2. No Portainer
1. Acesse seu Portainer
2. Selecione o **Environment** (servidor Docker)
3. Menu lateral: **Stacks** → **Add stack**
4. Preencha:
   - **Name**: `exata-bank`
   - **Build method**: `Repository` 
   - **Repository URL**: `https://github.com/cardosolucass96/exata-bank-site-inst`
   - **Repository reference**: `refs/heads/main`
   - **Compose path**: `docker-compose.yml`
5. (Opcional) **Environment variables**: nenhuma necessária
6. Clique em **Deploy the stack**

### 3. Aguarde o build
- O Portainer vai clonar o repo
- Fazer build da imagem (pode demorar 2-3 min)
- Subir o container

---

## Método 2: Upload do docker-compose.yml

### 1. No Portainer
1. **Stacks** → **Add stack**
2. **Name**: `exata-bank`
3. **Build method**: `Web editor`
4. Cole o conteúdo do `docker-compose.yml`:

```yaml
version: '3.8'

services:
  exata-bank-frontend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: exata-bank-prod
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    networks:
      - default
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.exata-bank.rule=Host(`exata-bank.cardosolucas.com`)"
      - "traefik.http.routers.exata-bank.entrypoints=websecure"
      - "traefik.http.routers.exata-bank.tls.certresolver=letsencrypt"
      - "traefik.http.services.exata-bank.loadbalancer.server.port=80"
      - "traefik.http.routers.exata-bank.middlewares=exata-bank-headers,exata-bank-compress"
      - "traefik.http.middlewares.exata-bank-headers.headers.framedeny=true"
      - "traefik.http.middlewares.exata-bank-headers.headers.browserxssfilter=true"
      - "traefik.http.middlewares.exata-bank-headers.headers.contenttypenosniff=true"
      - "traefik.http.middlewares.exata-bank-headers.headers.stsSeconds=31536000"
      - "traefik.http.middlewares.exata-bank-headers.headers.stsIncludeSubdomains=true"
      - "traefik.http.middlewares.exata-bank-headers.headers.stsPreload=true"
      - "traefik.http.middlewares.exata-bank-compress.compress=true"
      - "com.exata-bank.description=Exata Bank - Crédito Consignado Platform"
      - "com.exata-bank.version=1.0.0"
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

5. **Deploy the stack**

**⚠️ ATENÇÃO**: Este método precisa que você faça upload manual dos arquivos do projeto (Dockerfile, código fonte, etc.)

---

## Método 3: Build Local + Push para Registry

### 1. Build local e push
```bash
# Build da imagem
docker build -t seu-registry.com/exata-bank:latest .

# Push para registry
docker push seu-registry.com/exata-bank:latest
```

### 2. No Portainer
Use o docker-compose.yml modificando a linha `build:` para:
```yaml
image: seu-registry.com/exata-bank:latest
```

---

## ✅ Verificações Pós-Deploy

### 1. Verificar container rodando
- **Containers** → procure por `exata-bank-prod`
- Status deve ser **running** (verde)

### 2. Ver logs
- Clique no container
- Aba **Logs**
- Deve aparecer: `Configuration complete; ready for start up`

### 3. Testar acesso
- Abra: https://exata-bank.cardosolucas.com
- Deve carregar a aplicação

### 4. Verificar no Dashboard do Traefik
- Acesse seu dashboard do Traefik
- Procure pelo router `exata-bank`
- Deve aparecer como **active**

---

## 🔧 Troubleshooting

### Container não inicia
```
Logs → verificar erros de build
```

### Traefik não roteia
1. Verifique se o container está na mesma rede do Traefik
2. Confirme o nome do `certresolver` (se não for `letsencrypt`, ajuste no docker-compose)
3. Verifique se o entrypoint `websecure` existe

### Build demora muito
- Normal na primeira vez (2-5 min)
- Build baixa Node, dependências e compila

### Erro 502 Bad Gateway
- Container ainda iniciando (aguarde 30s)
- Verifique health check nos logs

---

## 🔄 Atualizar a Aplicação

1. No Portainer: **Stacks** → `exata-bank`
2. **Editor** (se quiser mudar algo)
3. **Pull and redeploy** (se usando Git)
4. Ou clique em **Update the stack**

---

## 📊 Monitoramento

No Portainer você pode:
- ✅ Ver uso de CPU/RAM em tempo real
- ✅ Ver logs do container
- ✅ Restart do container
- ✅ Acessar shell do container (aba Console)
- ✅ Ver health checks

---

## 🎯 Recomendação

Use o **Método 1 (Git Repository)** - é o mais prático:
- Auto-deploy quando fizer push
- Não precisa fazer build local
- Histórico de deploys
- Fácil rollback
