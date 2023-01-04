#!/bin/bash
TAG="$1"
if test "x$TAG" = x; then
  TAG=$(git describe --tags --abbrev=0)
fi
cd "$(dirname "$0")/.."

./scripts/get-release-message.sh "$TAG" > changes.md
