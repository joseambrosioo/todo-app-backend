@echo off
echo Setting up Todo App Backend...
echo.

echo Installing dependencies...
npm install

echo.
echo Creating .env file...
if not exist .env (
    echo DATABASE_URL=mysql://root:password@localhost:3306/todo_app > .env
    echo PORT=3001 >> .env
    echo FRONTEND_URL=http://localhost:3000 >> .env
    echo .env file created! Please update with your actual MySQL values.
) else (
    echo .env file already exists.
)

echo.
echo Setup complete! To start the backend:
echo npm run dev
echo.
pause
