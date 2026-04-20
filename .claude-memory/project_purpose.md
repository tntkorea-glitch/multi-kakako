---
name: multi-kakako 프로젝트 목적
description: KakaoTalk PC 클라이언트를 한 PC에서 2개 이상 동시 실행 (다중 계정 로그인)
type: project
originSessionId: 63c0d593-f440-4a4b-8a03-eaaa10d69b31
---
**무엇:** Sandboxie 처럼 카카오톡 데스크탑 앱을 한 PC 에서 2개 / 3개 / 4개 이상 동시에 실행시켜 각각 다른 카카오 계정으로 로그인하게 하는 도구.

**Why:** 카카오톡 PC 클라이언트는 기본적으로 단일 인스턴스 락(mutex) 때문에 PC당 1계정만 가능. 사용자는 여러 계정을 동시에 쓰고 싶어함. 현재 Sandboxie 사용 중이지만 자체 구현 원함.

**How to apply:**
- 목표는 **웹 OAuth 로그인**이 아니다. 기존 `src/app/login/page.tsx` 의 Google 로그인 UI 는 /new 스킬이 깔아둔 스캐폴드일 뿐, 프로젝트 본 목적과 무관.
- 핵심 기술 과제: (1) 카카오톡 named mutex 우회 (2) 인스턴스별 AppData/레지스트리 격리 (3) 여러 인스턴스 실행 관리 UI.
- 현재 스택(Next.js)으로 데스크탑 앱 프로세스 제어는 못 함 → **아키텍처 재검토 필요**. 후보: Tauri (Rust + Next.js UI), Electron, 또는 Next.js UI + 로컬 Windows 서비스/CLI.
- 최소 MVP 2개 인스턴스, 스트레치 3~4개+.
