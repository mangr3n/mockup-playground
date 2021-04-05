@REM load settings
call bin\settings.bat
echo "Deploy Directory - " %deploy_dir%

@REM Clean
rmdir /S /Q build
del /Q ov_components.zip

@REM build and package
npm run build
npm run package

@REM copy
copy ov_components.zip %deploy_dir%\_SupportFiles

@REM expand
unzip %deploy_dir%\_SupportFiles\ov_components.zip -d %deploy_dir%\_SupportFiles\ov_components

