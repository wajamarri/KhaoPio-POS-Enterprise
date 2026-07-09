$projectRoot = Split-Path $PSScriptRoot -Parent
$clientPath = Join-Path $projectRoot "client"

Set-Location $clientPath

Write-Host ""
Write-Host "Building Client..." -ForegroundColor Cyan
Write-Host ""

npm run build