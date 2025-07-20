# Build stage
FROM node:20-slim as builder
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the frontend
RUN npm run build

# Serve stage
FROM node:20-slim
WORKDIR /app

# Copy frontend build and all backend code
COPY --from=builder /app/dist ./dist
COPY . .

# Install backend dependencies (Express, etc.)
RUN npm install

# Expose Cloud Run's default port
EXPOSE 8080

# Start the Express server (which also serves the frontend)
CMD ["node", "api/index.js"]
