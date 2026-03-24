# Use the official Bun image
FROM oven/bun:latest

# Create app directory
WORKDIR /

# Copy manifests first
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy your app code
COPY . .

# Expose app port
EXPOSE 3000

# Start your app
CMD ["bun", "start"]
