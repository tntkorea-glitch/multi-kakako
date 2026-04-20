---
name: claude-config bootstrap pending verification on a0109 PC
description: a0109 PC에서 BOM 수정 후 재클론 + setup 실행 결과 확인 필요
type: project
originSessionId: 63c0d593-f440-4a4b-8a03-eaaa10d69b31
---
claude-config repo 의 `setup-windows.ps1` + PowerShell 프로필에 UTF-8 BOM 붙이고 README 의 one-liner 를 "기존 .claude 백업 후 재클론" 방식으로 고쳐 푸시함 (commit `166f785`, 2026-04-20). a0109 PC 에서 이 수정본으로 재실행 시 한글 깨짐 / 파서 에러 안 나는지 사용자가 직접 확인 예정.

**Why:** 기존 BOM 없는 UTF-8 `.ps1` 가 Windows PowerShell 5.1 한국어 로케일에서 CP949 로 오독돼 `TerminatorExpectedAtEndOfString` 로 터졌음. 사용자가 새 PC 셋업을 못 끝낸 상태로 세션 종료.

**How to apply:** 다음 세션에서 사용자가 a0109 PC 상태 물으면, 아래 명령으로 재시도 안내:
```powershell
$c="$env:USERPROFILE\.claude"; if (Test-Path $c) { Remove-Item -Recurse -Force $c }; gh repo clone tntkorea-glitch/claude-config $c; powershell -ExecutionPolicy Bypass -File "$c\setup-windows.ps1"
```
성공 확인되면 이 메모리 삭제.
