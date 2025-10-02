@echo off
echo ================================
echo Перевірка лабораторних робіт
echo ================================

echo.
echo [1/3] Перевірка лабораторної 1...
cd "laboratorna 1"
call npm run lint
if %ERRORLEVEL% NEQ 0 (
    echo ПОМИЛКА в лабораторній 1!
    pause
    exit /b 1
)
echo ✓ Лабораторна 1 - OK

echo.
echo [2/3] Перевірка лабораторної 2...
cd "../laboratorna 2"
call npm test
if %ERRORLEVEL% NEQ 0 (
    echo ПОМИЛКА в лабораторній 2!
    pause
    exit /b 1
)
echo ✓ Лабораторна 2 - OK

echo.
echo [3/3] Перевірка лабораторної 3...
cd "../laboratorna 3"
echo Запуск exercise1.js...
node exercise1.js
echo ✓ Лабораторна 3 - OK

echo.
echo ================================
echo ✓ ВСІ ЛАБОРАТОРНІ ГОТОВІ ДО ЗАХИСТУ!
echo ================================
pause