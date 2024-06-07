#!/bin/bash

# List of package names to be uninstalled
packages=(
  # "@cdlab996/prettier-config"
  # "@cdlab996/eslint-config-basic"
  # "@cdlab996/eslint-config-ts"
  # "@cdlab996/eslint-config-vue"
  # "@cdlab996/eslint-config-vue2"
  # "@cdlab996/eslint-config-react"
  # "@cdlab996/eslint-config-next"
  # "@cdlab996/eslint-config"
)

# Range of versions to be uninstalled
versions=("0.0.11" "0.0.10" "0.0.9" "0.0.8" "0.0.7")

for package in "${packages[@]}"; do
  for version in "${versions[@]}"; do
    echo "Attempting to uninstall ${package}@${version} ..."
    npm unpublish "${package}@${version}"
    if [ $? -eq 0 ]; then
      echo "Successfully uninstalled ${package}@${version}"
    else
      echo "Unable to uninstall ${package}@${version}"
    fi
  done
done
