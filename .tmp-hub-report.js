const cfg = require('C:/Users/미르/.claude/hub-config.json');

const today_work = `- 프로젝트 본 목적 확정: 카카오톡 PC 앱 다중 인스턴스 실행기 (Sandboxie 대체 자체 구현). 기존 Next.js 스캐폴드의 OAuth 로그인 UI 는 목적과 무관.
- claude-config 전역 레포에서 PowerShell 한글 깨짐 버그 수정 (UTF-8 BOM 추가 + README one-liner 개선). commit 166f785 로 푸시.
- 사용자의 Sandboxie 고장 상황 대응: Classic → Plus v1.17.4 로 마이그레이션 설치 안내. 설치 자체는 성공했으나 카톡 실행 시 "파일 손상" 에러로 막힘.
- 세 개 프로젝트 메모리 생성: feedback_powershell_bom, project_claude_config_bootstrap, project_purpose.`;

const remaining_work = `- [미해결·진행중] Sandboxie-Plus 에서 카카오톡 "파일 손상" 에러 해결 (박스 내용 삭제 → 새 박스 생성 → 직접 액세스 허용 순서 안내 중)
- [미정] multi-kakako 자체 구현 스택 결정: Tauri / Electron / 순수 PowerShell 런처 중 택 1
- [미구현] 실현성 테스트 (카카오톡 named mutex 이름 확인 + 별도 경로 설치본 2번째 실행 가능 여부)
- [미구현] MVP: multi-kakako.ps1 PowerShell 런처 (프로필 격리 + 환경변수 세팅 + N개 실행)
- [미구현] 런처 UI (트레이 아이콘 또는 바탕화면 단축키)
- [정리 필요] Next.js 스캐폴드 코드 방향 결정 — 재사용 (Tauri UI) vs 폐기
- [검증 대기] a0109 PC 에서 claude-config BOM 수정본으로 재클론 성공 여부`;

const next_work = `1. Sandboxie-Plus 에서 카톡 "파일 손상" 해결 — 박스 비우기/재생성/직접 액세스 허용 단계적 시도 후 해결되면 현상 메모리에 기록
2. multi-kakako 스택 결정 (Tauri vs PowerShell-only 가 현실적 양대 후보) — 결정 후 실현성 테스트 (mutex 이름 확인)
3. 실현성 테스트 통과 시 MVP 런처 스크립트 1 차 구현`;

const raw_markdown = `# multi-kakako 세션 종료 보고 (2026-04-21)

## 이번 세션 요약
- **중요 발견**: 이 프로젝트는 카카오톡 OAuth 웹앱이 아니라 **카카오톡 PC 데스크탑 앱을 한 PC 에서 N 개 동시 실행하는 런처**. Sandboxie 가 윈도우 업데이트 후 깨져서 자체 솔루션이 필요한 상황.
- **기존 Next.js 스캐폴드 (login/page.tsx 등) 는 /new 스킬 기본 셋업일 뿐 본 목적과 무관** — 추후 Tauri 로 전환하면 UI 재활용, 아니면 폐기 예정.
- **사이드 퀘스트**: 사용자 PC 의 Sandboxie Classic 이 업데이트로 깨짐 → Plus v1.17.4 로 교체 설치 성공, 그러나 카톡 실행 시 "파일 손상" 에러로 아직 미해결.
- **claude-config 버그 수정**: PowerShell 5.1 한국어 로케일에서 BOM 없는 UTF-8 .ps1 이 CP949 로 오독되는 문제 발견, setup-windows.ps1 + PowerShell 프로필에 BOM 추가, README 의 bootstrap one-liner 개선 (.claude 이미 있으면 백업 후 재클론). 별도 레포 (claude-config) commit 166f785 로 푸시.
- **메모리 업데이트 3 개**: 프로젝트 실체 (project_purpose), PowerShell BOM 규칙 (feedback_powershell_bom), a0109 PC 검증 대기 (project_claude_config_bootstrap).

## 커밋/배포
- multi-kakako 레포 자체에는 코드 변경 없음. auto-commit hook 이 .claude-memory/ 하위 메모리 md 파일만 4 개 추가해 푸시함.
- Vercel 재배포 불필요 (코드 변경 0). 강제 트리거 생략.
- 별개로 claude-config 레포에 BOM 수정 commit 166f785 푸시 완료.

## 진행률: 5%
**근거**: 프로젝트 본 목적은 이번 세션에 비로소 확정. 코드는 /new 스캐폴드 상태 그대로이며 실현성 테스트 / 스택 결정 / MVP 구현 전부 미착수. 실질적 코드 진척은 없지만 "목적/방향 확정" 이 끝난 시작 단계 수준.

## 다음 세션에 이어서 할 일
1. Sandboxie-Plus 카톡 "파일 손상" 에러 해결 (단기, 시스템 이슈)
2. multi-kakako 스택 결정 → 실현성 테스트 (mutex 확인)
3. 결정된 스택에서 MVP 런처 프로토타입

## 블로커 / 대기
- Sandboxie 카톡 실행 문제 — 사용자 테스트 대기
- a0109 PC BOM 수정본 검증 — 사용자 테스트 대기`;

fetch(cfg.hub_url + '/api/reports', {
  method: 'POST',
  headers: { 'x-report-secret': cfg.ingest_secret, 'content-type': 'application/json' },
  body: JSON.stringify({
    project_slug: 'multi-kakako',
    project_name: 'multi-kakako',
    project_description: '카카오톡 PC 데스크탑 앱을 한 PC 에서 N 개 동시 실행하는 런처 (Sandboxie 대체 자체 구현)',
    status: 'active',
    progress_percent: 5,
    today_work,
    remaining_work,
    next_work,
    raw_markdown
  })
}).then(r => r.json()).then(j => console.log('hub:', JSON.stringify(j))).catch(e => console.error('hub error:', e.message));
