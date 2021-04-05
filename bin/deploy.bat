@REM load settings
call bin\settings.bat
echo "Deploy Directory - " %deploy_dir%

@REM Clean
rmdir /S /Q build
del /Q ov_components.zip

@REM @REM build and package
call npm run build
call npm run package

@REM copy
copy /Y ov_components.zip %deploy_dir%\_SupportFiles

@REM expand
unzip -o -qq %deploy_dir%\_SupportFiles\ov_components.zip -d %deploy_dir%\_SupportFiles\ov_components

