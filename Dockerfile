FROM node:lts as dependencies
WORKDIR /web-studio
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /web-studio

COPY . .

COPY tsconfig.json .
COPY --from=dependencies /web-studio/node_modules ./node_modules
RUN npm run build


FROM node:lts as runner
WORKDIR /web-studio
ENV NODE_ENV production

COPY --from=builder /web-studio/public ./public
COPY --from=builder /web-studio/package.json ./package.json
COPY --from=builder /web-studio/.next ./.next
COPY --from=builder /web-studio/node_modules ./node_modules
COPY --from=builder /web-studio/next.config.js ./next.config.js

EXPOSE 3000
CMD ["npm","run", "start"]
