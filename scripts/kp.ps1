param(
    [Parameter(Mandatory = $true)]
    [string]$Command,

    [string]$Message
)

$projectRoot = Split-Path $PSScriptRoot -Parent
$clientPath = Join-Path $projectRoot "client"

switch ($Command) {

    "dev" {
        Set-Location $clientPath
        npm run dev
    }

    "build" {
        Set-Location $clientPath
        npm run build
    }

    "install" {
        Set-Location $clientPath
        npm install
    }

    "status" {
        Set-Location $projectRoot
        git status
    }

    "branch" {
        Set-Location $projectRoot
        git branch
    }

    "push" {
        Set-Location $projectRoot
        git push
    }

    "commit" {
        if (-not $Message) {
            Write-Host "Usage:"
            Write-Host ".\scripts\kp.ps1 commit `"Your Commit Message`""
            break
        }

        Set-Location $projectRoot

        git add .
        git commit -m $Message
        git push
    }

    "help" {
        Write-Host ""
        Write-Host "====================================="
        Write-Host "      KhaoPio Developer CLI"
        Write-Host "====================================="
        Write-Host ""
        Write-Host "Frontend"
        Write-Host "  dev"
        Write-Host "  build"
        Write-Host "  install"
        Write-Host ""
        Write-Host "Git"
        Write-Host "  status"
        Write-Host "  branch"
        Write-Host "  push"
        Write-Host "  commit `"message`""
        Write-Host ""
    }

    default {
        Write-Host ""
        Write-Host "Unknown command."
        Write-Host "Run:"
        Write-Host ".\scripts\kp.ps1 help"
    }
}