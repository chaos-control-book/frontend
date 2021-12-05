# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/frontend

COPY package.json yarn.lock ./

RUN rm -rf node_modules

RUN yarn install --pure-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /usr/src/frontend

COPY . .

COPY --from=deps /usr/src/frontend/node_modules ./node_modules

RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner

WORKDIR /usr/src/frontend

RUN npm install --global pm2

RUN addgroup -g 1001 -S nodejs

RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /usr/src/frontend/next.config.js ./

COPY --from=builder /usr/src/frontend/public ./public

COPY --from=builder --chown=nextjs:nodejs /usr/src/frontend/.next ./.next

RUN chown -R nextjs:nodejs ./.next

COPY --from=builder /usr/src/frontend/node_modules ./node_modules

COPY --from=builder /usr/src/frontend/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD pm2-runtime "yarn start"
