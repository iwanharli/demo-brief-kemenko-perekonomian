#!/bin/bash

# --- Color Definitions ---
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# --- Banner ---
echo -e "${CYAN}"
echo "=========================================================="
echo "          BRIEFING DASHBOARD DEPLOYMENT TOOL              "
echo "=========================================================="
echo -e "${NC}"

# 1. Error handling
set -e

# 2. Check for dependencies
echo -e "${BLUE}[1/4] Checking environment...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed. Please install Node.js.${NC}"
    exit 1
fi

# 3. Clean and Build
echo -e "${BLUE}[2/4] Cleaning previous build...${NC}"
rm -rf dist

echo -e "${BLUE}[3/4] Building application...${NC}"
if npm run build; then
    echo -e "${GREEN}✔ Build successful!${NC}"
else
    echo -e "${RED}✘ Build failed. Please check the logs above.${NC}"
    exit 1
fi

# 4. Deployment Logic
echo -e "${BLUE}[4/4] Finalizing deployment...${NC}"

# --- DEPLOYMENT OPTIONS ---
# Option A: Local Preview
# echo "To preview the build locally, run: npm run preview"

# Option B: GitHub Pages (Uncomment to use)
# echo "Deploying to GitHub Pages..."
# npx gh-pages -d dist

# Option C: Custom Server via SSH (Example)
# SERVER_USER="user"
# SERVER_IP="your-server-ip"
# REMOTE_PATH="/var/www/briefing-dashboard"
# echo -e "${YELLOW}Syncing files to server...${NC}"
# rsync -avz --delete dist/ ${SERVER_USER}@${SERVER_IP}:${REMOTE_PATH}

echo -e "${CYAN}=========================================================="
echo -e "${GREEN}   DONE! Application is ready in the 'dist' folder.       "
echo -e "${CYAN}==========================================================${NC}"
