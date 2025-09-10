FROM oven/bun:debian

RUN apt update
RUN apt install -y git curl wget postgresql-client redis-tools build-essential

WORKDIR /app

COPY package.json bun.lock ./

COPY . .
RUN bun install
COPY . .

USER bun

CMD ["sleep", "infinity"]