rem 把文件从 G:\project\TRDCGame\Engine\Engine\Binaries 拷贝到 G:\project\TRDCEditor\Engine\Engine\Binaries
@echo off

set rootPath=%~dp0
set copyFrom1=%rootPath%TRDCGame\Engine\Engine\Binaries
set copyTo1=%rootPath%TRDCEditor\Engine\Engine\Binaries

set copyFrom2=%rootPath%TRDCGame\Engine\Engine\Plugins
set copyTo2=%rootPath%TRDCEditor\Engine\Engine\Plugins

set copyFrom3=%rootPath%TRDCGame\TRDCGame\Binaries
set copyTo3=%rootPath%TRDCEditor\TRDCGame\Binaries

set copyFrom4=%rootPath%TRDCGame\TRDCGame\Plugins
set copyTo4=%rootPath%TRDCEditor\TRDCGame\Plugins

call :doCopy %copyFrom1%,%copyTo1%
call :doCopy %copyFrom2%,%copyTo2%
call :doCopy %copyFrom3%,%copyTo3%
call :doCopy %copyFrom4%,%copyTo4%

pause

exit /b 0

:doCopy
	set copyFrom=%1
	set copyTo=%2
	
	echo %copyFrom%
	echo %copyTo%
	
	setlocal enabledelayedexpansion
	for /r %copyTo% %%i in (*) do (
		set toFile=%%i
		echo !toFile!
		set fromFile=!toFile:%copyTo%=%copyFrom%!
		echo !fromFile!
		
		xcopy !fromFile! !toFile! /y
	)
goto:eof
