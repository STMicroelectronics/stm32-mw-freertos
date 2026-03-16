@echo off
GOTO :END_COMMENT
/**
  * @file Script called for the code generation
  * @license
  * @attention
  *
  * Copyright (c) 2026 STMicroelectronics.
  * All rights reserved.
  *
  * This software is licensed under terms that can be found in the LICENSE file
  * in the root directory of this software component.
  * If no LICENSE file comes with this software, it is provided AS-IS.
  *
  */
:END_COMMENT

REM Get the absolute path of the batch script
set "script_path=%~dp0"
REM Assign command line arguments to variables
set "dfp_path=%1"
set "device=%2"
set "sw_project_path=%3"
set "cprj_file_path=%4"
set "gpdsctemplateName=%5"
set "generatorid=%6"
set "generatorinputfile=%7"
set "dryRunFlag=%8"
REM Check if cube is installed
where cube >nul 2>nul
if %errorlevel% neq 0 (
    echo [GEN-ERROR] cube wrapper not found: STOP
    exit /b 1
)
REM Check if codegen is installed
cube --list | findstr /i "codegen" >nul
if %errorlevel% neq 0 (
    echo [GEN-ERROR] codegen not found: STOP
    exit /b 2
)

:: GPDSC Generation in stdout (if a generator is dry-run capable)
if "%dryRunFlag%"=="--dry-run" (
cube codegen generategpdsc --path %generatorinputfile% --generatorId "%generatorid%" --templatePath "%script_path%\%gpdsctemplateName%" --dry-run
) else (
:: Code Generation Step
echo [STEP 1/2: CODE-GEN]
cube codegen generatefromlockfile --path %generatorinputfile% --generatorId "%generatorid%"
:: GPDSC Generation Step
echo [STEP 2/2: GPDSC-GEN]
cube codegen generategpdsc --path %generatorinputfile% --generatorId "%generatorid%" --templatePath "%script_path%\%gpdsctemplateName%"
)
