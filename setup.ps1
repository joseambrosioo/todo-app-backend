Write-Host "Setting up Todo App Backend..." -ForegroundColor Green
Write-Host ""

Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "Creating .env file..." -ForegroundColor Yellow
if (-not (Test-Path ".env")) {
    @"
# MySQL Database Configuration
DATABASE_URL=mysql://username:password@hostname:3306/database_name

# API Configuration
PORT=3001
FRONTEND_URL=http://localhost:3000
"@ | Out-File -FilePath ".env" -Encoding UTF8
    Write-Host ".env file created! Please update with your actual MySQL database values." -ForegroundColor Green
} else {
    Write-Host ".env file already exists." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Setup complete! To start the backend:" -ForegroundColor Green
Write-Host "npm run dev" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to continue"
