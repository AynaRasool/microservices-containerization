
# Stage 1: Install production dependencies
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev


# Stage 2: Create the production image
FROM node:22-alpine AS production

WORKDIR /app

# Create a non-root user with ID 1001
RUN addgroup -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup

# Copy dependencies and application files
COPY --from=builder --chown=1001:1001 /app/node_modules ./node_modules
COPY --chown=1001:1001 package*.json ./
COPY --chown=1001:1001 src ./src

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

# Run as non-root user
USER 1001

CMD ["npm", "start"]
