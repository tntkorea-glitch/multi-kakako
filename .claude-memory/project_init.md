---
name: Project init
description: multi-kakako 프로젝트 초기 셋업 정보 및 스택
type: project
originSessionId: 12947b47-2f63-41bd-a63f-6cca84f31226
---
- 프로젝트명: multi-kakako
- 생성일: 2026-04-14
- 경로: D:/dev/multi-kakako
- GitHub: https://github.com/tntkorea-glitch/multi-kakako (public)
- 스택: Next.js (App Router) + TypeScript + Tailwind + ESLint, src-dir 구조
- 배포: Vercel (vercel.json 기본 설정)
- **개발 포트: 3201 고정** (npm run dev / start 모두 -p 3201) — 다른 프로젝트와 충돌 방지. Google OAuth 리디렉션도 localhost:3201 사용
- 기본 가드: 인앱 브라우저 가드 (public/inapp-guard.js, layout.tsx beforeInteractive)
- 자동화: setup.sh (gitleaks + pre-commit hook + npm install + vercel env pull), .claude/settings.json (SessionStart pull, Stop auto commit/push)

**Why:** /new 스킬로 기존 프로젝트들과 동일한 환경 통일.
**How to apply:** 이 프로젝트 내 작업 시 해당 스택/자동화가 기본 전제. 프로젝트명에서 "카카오 다중 로그인/연동"과 관련된 주제가 예상됨(확정 아님).
