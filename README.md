✔️ How to pacakage
===========
1. electron-forge 사용 (macOS 용)
    
    ```
    npm install --save-dev @electron-forge/cli
    # 중간에 에러 나면 아래 코드도 추가로 실행하여 설치하면 됨
    npm install --save-dev @electron-forge/plugin-fuses
        
    npx electron-forge import
        
    npm run mak
    ```
        
2. **electron-builder** 사용 (window, mac, linux 용. 이때는 yarn 쓰므로 package-lock.json 지우기)
        
   ```
   yarn add electron-builder --dev
   ```
        
   - package.json 추가
            
     ```
     "scripts": {
     "dist": "electron-builder",
     "dist:win": "electron-builder --win",
     },
            
     "build": {
     "extends": null
     },
     ```

      - 실행
            
         ```
         yarn dist:win
         ```
            

        💡 아래와 같은 에러가 나오면 관리자 권한으로 터미널창을 열고 ‘C:\Users\KNH\AppData\Local\electron-builder’에 있는 캐시 파일을 삭제하고 다시 진행해본다
            
            yarn run v1.22.19
            $ electron-builder --windows nsis:x64
            • electron-builder  version=24.13.3 os=10.0.22631
            • loaded configuration  file=package.json ("build" field)
            • writing effective config  file=dist\builder-effective-config.yaml
            • "electron-squirrel-startup" dependency is not required for NSIS
            • packaging       platform=win32 arch=x64 electron=29.1.0 appOutDir=dist\win-unpacked
            • default Electron icon is used  reason=application icon is not set
            • downloading     url=https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z size=5.6 MB parts=1
            • downloaded      url=https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z duration=2.233s
            ⨯ cannot execute  cause=exit status 2
            out=
            7-Zip (a) 21.07 (x64) : Copyright (c) 1999-2021 Igor Pavlov : 2021-12-26
            
            Scanning the drive for archives:
            1 file, 5635384 bytes (5504 KiB)
            
            Extracting archive: C:\Users\KNH\AppData\Local\electron-builder\Cache\winCodeSign\614646747.7z
            --
            Path = C:\Users\KNH\AppData\Local\electron-builder\Cache\winCodeSign\614646747.7z
            Type = 7z
            Physical Size = 5635384
            Headers Size = 1492
            Method = LZMA2:24m LZMA:20 BCJ2
            Solid = +
            Blocks = 2
            
            Sub items Errors: 2
            
            Archives with Errors: 1
            
            Sub items Errors: 2
            
                            errorOut=ERROR: Cannot create symbolic link : Ŭ���̾�Ʈ�� �ʿ��� ������ ������ ���� �ʽ��ϴ�. : C:\Users\KNH\AppData\Local\electron-builder\Cache\winCodeSign\614646747\darwin\10.12\lib\libcrypto.dylib
            ERROR: Cannot create symbolic link : Ŭ���̾�Ʈ�� �ʿ��� ������ ������ ���� �ʽ��ϴ�. : C:\Users\KNH\AppData\Local\electron-builder\Cache\winCodeSign\614646747\darwin\10.12\lib\libssl.dylib
            
                            command='C:\Users\KNH\Desktop\my-app\node_modules\7zip-bin\win\x64\7za.exe' x -bd 'C:\Users\KNH\AppData\Local\electron-builder\Cache\winCodeSign\614646747.7z' '-oC:\Users\KNH\AppData\Local\electron-builder\Cache\winCodeSign\614646747'
                            workingDir=C:\Users\KNH\AppData\Local\electron-builder\Cache\winCodeSign
            • Above command failed, retrying 3 more times
            • downloading     url=https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z size=5.6 MB parts=1
            • downloaded      url=https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z duration=1.839s"
