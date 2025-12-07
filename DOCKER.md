# 🐳 Docker + Traefik - Exata Bank

Configuração Docker para produção do Exata Bank via Portainer com proxy Traefik.

## 📋 Informações do Projeto

- **Tecnologias**: React 19 + Vite + TypeScript + TailwindCSS
- **Servidor**: Nginx 1.25 (Alpine Linux)
- **Reverse Proxy**: Traefik (gerenciado pelo Portainer)
- **Domínio**: exata-bank.cardosolucas.com

## 🚀 Deploy via Portainer

### 1. Criar Stack no Portainer

1. Acesse o Portainer
2. Vá em **Stacks** → **Add Stack**
3. Nome: `exata-bank`
4. Método: **Git Repository** ou **Upload**

### 2. Configuração

O `docker-compose.yml` já está configurado com as labels do Traefik:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.exata-bank.rule=Host(`exata-bank.cardosolucas.com`)"
  - "traefik.http.routers.exata-bank.entrypoints=websecure"
  - "traefik.http.routers.exata-bank.tls.certresolver=letsencrypt"
  - "traefik.http.services.exata-bank.loadbalancer.server.port=80"
```

### 3. Deploy

- Clique em **Deploy the stack**
- Aguarde o build e inicialização

## 🌐 Acesso

Após o deploy: **https://exata-bank.cardosolucas.com**

## 🔧 Configurações

### Recursos do Container
- **CPU**: 0.25 - 0.5 cores
- **Memória**: 256MB - 512MB

### Health Check
- Intervalo: 30s
- Timeout: 10s
- Retries: 3

## 📦 Estrutura de Build

### Stage 1: Builder (Node 20 Alpine)
- Instala dependências
- Executa build do Vite
- Gera arquivos estáticos em `/dist`

### Stage 2: Production (Nginx Alpine)
- Copia arquivos do build
- Configura Nginx para SPA
- Imagem final ~25MB

## 🛡️ Segurança

O Nginx está configurado com:
- Headers de segurança (X-Frame-Options, X-Content-Type-Options, etc)
- Cache otimizado para assets
- Compressão Gzip
- Suporte completo para SPA (Single Page Application)

## 🔍 Comandos Úteis

```bash
# Rebuild forçado
docker-compose build --no-cache

# Verificar status
docker-compose ps

# Acessar container
docker-compose exec exata-bank-frontend sh

# Ver uso de recursos
docker stats exata-bank-prod
```

## 📊 Monitoramento via Portainer

- Ver logs do container em tempo real
- Verificar uso de recursos (CPU/Memória)
- Restart do container se necessário
- Verificar health checks

## 🔧 Labels do Traefik Configuradas

```yaml
# Roteamento básico
traefik.enable=true
traefik.http.routers.exata-bank.rule=Host(`exata-bank.cardosolucas.com`)
traefik.http.routers.exata-bank.entrypoints=websecure
traefik.http.routers.exata-bank.tls.certresolver=letsencrypt

# Serviço
traefik.http.services.exata-bank.loadbalancer.server.port=80

# Middlewares
traefik.http.routers.exata-bank.middlewares=exata-bank-headers,exata-bank-compress

# Headers de Segurança
traefik.http.middlewares.exata-bank-headers.headers.framedeny=true
traefik.http.middlewares.exata-bank-headers.headers.browserxssfilter=true
traefik.http.middlewares.exata-bank-headers.headers.contenttypenosniff=true
traefik.http.middlewares.exata-bank-headers.headers.stsSeconds=31536000

# Compressão
traefik.http.middlewares.exata-bank-compress.compress=true
```

## ⚙️ Requisitos do Traefik

Certifique-se que seu Traefik tem:
- ✅ Entrypoint `websecure` (porta 443)
- ✅ Certificate resolver `letsencrypt` configurado
- ✅ Provider Docker habilitado
- ✅ Acesso ao socket do Docker
