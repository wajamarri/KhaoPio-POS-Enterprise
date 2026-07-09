$projectRoot = Split-Path $PSScriptRoot -Parent
$clientPath = Join-Path $projectRoot "client"

Set-Location $clientPath

Write-Host ""
Write-Host "Starting KhaoPio Client..." -ForegroundColor Green
Write-Host ""

npm run dev