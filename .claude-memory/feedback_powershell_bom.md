---
name: PowerShell .ps1 Korean strings require UTF-8 BOM
description: Windows PowerShell 5.1 에서 한글 문자열 쓸 땐 파일이 UTF-8 with BOM 이어야 한다
type: feedback
originSessionId: 63c0d593-f440-4a4b-8a03-eaaa10d69b31
---
한글(또는 non-ASCII)이 들어간 `.ps1` 파일은 반드시 **UTF-8 with BOM** (EF BB BF) 으로 저장.

**Why:** Windows PowerShell 5.1 은 BOM 없는 UTF-8 `.ps1` 을 한국어 로케일에서 CP949 로 오독. 한글이 `?맥붕?맥붕?` 식으로 깨지면서 문자열 quote 가 풀려 `TerminatorExpectedAtEndOfString` 파서 에러 발생. 2026-04-20 `setup-windows.ps1` 에서 실제로 터짐 (claude-config commit `166f785` 에서 수정).

**How to apply:** `.ps1` 를 새로 만들거나 편집해서 한글 문자열을 추가할 때, 저장 직후 `head -c 3 file.ps1 | xxd` 로 첫 3바이트가 `ef bb bf` 인지 확인. 없으면 `[IO.File]::WriteAllBytes($p, [byte[]](0xEF,0xBB,0xBF) + [IO.File]::ReadAllBytes($p))` 같은 식으로 BOM 추가. PowerShell 7 (pwsh) 은 BOM 없어도 UTF-8 로 읽지만 호환성 위해 BOM 붙여두는 게 안전.
