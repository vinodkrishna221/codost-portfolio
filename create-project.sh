#!/usr/bin/env bash

# ============================================
# create-project.sh
# Creates a new project from this template
# ============================================

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Check if project name was provided
if [ -z "${1:-}" ]; then
  echo -e "${RED}Error: Please provide a project name.${NC}"
  echo ""
  echo "Usage: ./create-project.sh <project-name>"
  echo "Example: ./create-project.sh my-awesome-app"
  exit 1
fi

PROJECT_NAME="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="$(pwd)/$PROJECT_NAME"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
  echo -e "${RED}Error: pnpm is not installed.${NC}"
  echo "Install it with: npm install -g pnpm"
  exit 1
fi

# Check if target directory already exists
if [ -d "$TARGET_DIR" ]; then
  echo -e "${RED}Error: Directory '$PROJECT_NAME' already exists.${NC}"
  exit 1
fi

echo -e "${CYAN}🚀 Creating new project: ${PROJECT_NAME}${NC}"
echo ""

# Step 1: Copy template to new directory
echo -e "${YELLOW}→ Copying template files...${NC}"
cp -r "$SCRIPT_DIR" "$TARGET_DIR"

# Step 2: Remove template's git history
echo -e "${YELLOW}→ Removing template git history...${NC}"
rm -rf "$TARGET_DIR/.git"

# Step 3: Remove this script from the new project
rm -f "$TARGET_DIR/create-project.sh"

# Step 4: Update package.json with the new project name
echo -e "${YELLOW}→ Updating package.json...${NC}"
if command -v sed &> /dev/null; then
  sed -i.bak "s/\"name\": \"nextjs-template\"/\"name\": \"$PROJECT_NAME\"/" "$TARGET_DIR/package.json"
  rm -f "$TARGET_DIR/package.json.bak"
fi

# Step 5: Update layout.tsx title
if command -v sed &> /dev/null; then
  sed -i.bak "s/Next.js Template/$PROJECT_NAME/g" "$TARGET_DIR/src/app/layout.tsx"
  rm -f "$TARGET_DIR/src/app/layout.tsx.bak"
fi

# Step 6: Install dependencies
echo -e "${YELLOW}→ Installing dependencies with pnpm...${NC}"
cd "$TARGET_DIR"
pnpm install

# Step 7: Initialize fresh git repo
echo -e "${YELLOW}→ Initializing git repository...${NC}"
git init
git add -A
git commit -m "feat: initial project setup from nextjs-template"

echo ""
echo -e "${GREEN}✅ Project '$PROJECT_NAME' created successfully!${NC}"
echo ""
echo -e "${CYAN}Next steps:${NC}"
echo "  cd $PROJECT_NAME"
echo "  pnpm dev          # Start development server on port 3000"
echo "  pnpm build        # Build for production"
echo "  pnpm lint         # Run ESLint"
echo "  pnpm format       # Format with Prettier"
echo ""
echo -e "${CYAN}Add shadcn/ui components:${NC}"
echo "  pnpm dlx shadcn@latest add button"
echo "  pnpm dlx shadcn@latest add card"
echo "  pnpm dlx shadcn@latest add input"
echo ""
echo -e "${GREEN}Happy coding! 🎉${NC}"
