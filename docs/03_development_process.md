# Development Process

## Development Style

이 프로젝트는 자연어로 원하는 기능과 화면을 설명하고, AI가 제안한 코드를 실행한 뒤, 실제 화면과 오류를 보며 다시 수정하는 반복형 바이브 코딩 방식으로 개발했습니다.

기본 개발 루프는 다음과 같았습니다.

```text
1. 학습 기능 아이디어 설명
2. AI에게 코드 또는 수정 방향 요청
3. HTML/CSS/JavaScript 또는 API 코드 생성
4. 브라우저에서 직접 실행
5. 화면 깨짐, 기능 오류, 사용성 문제 확인
6. 스크린샷과 함께 문제 재설명
7. 수정본 생성
8. 다시 배포 및 테스트
9. 안정화 후 다음 기능으로 이동
```

## User Role and AI Role

사용자는 다음 역할을 맡았습니다.

- 학습 문제 정의자
- 전공 개념 검수자
- UI/UX 판단자
- 기능 우선순위 결정자
- 오류 재현 및 테스트 담당자
- 시연 흐름 기획자
- 결과물 문서화 담당자

AI는 다음 역할을 맡았습니다.

- 코드 초안 작성자
- 디버깅 파트너
- 구조 설계 보조자
- UI 개선 제안자
- 서버 연동 가이드
- 문서 작성 보조자

AI가 제안한 코드는 실제 실행과 검수 과정을 거쳐 수정했고, 기능의 필요성과 학습적 의미는 사용자가 판단했습니다.

## Version History

| Version | Main Work | Meaning |
|---|---|---|
| v1.0~v1.1 | Truth Table, Gate Circuit 초기 구조 | 인터랙티브 학습 흐름 검증 |
| v2.x | 기본 문제 및 Gate Circuit 확장 | 직접 구성형 문제풀이 구현 |
| v3.x | CMOS Schematic 추가 | pMOS/nMOS 동작 시각화 |
| v4.x | Layout Lab 추가 | 레이어 기반 Layout 학습 구현 |
| v5.3 Soongsil Edition 1 | UI 기준 버전 확정 | 이후 기능 확장의 기반 |
| v5.4 Step 1 | 로그인/대시보드 UI | 계정 기반 학습 준비 |
| v5.4 Step 2 | 자동 저장 UI | 학습 상태 저장 기반 |
| v5.5 | Vercel + Supabase 연결 | 실제 배포형 서비스화 |
| v5.6 | 점수 시스템 | 서버 기반 랭킹 구조 |
| v5.6.1 | 점수 오류 수정 | 점수 이벤트 정상화 |
| v5.6.2 | 점수 밸런스 조정 | 난이도별 점수 체계 정리 |
| v5.6.3 | 자유 그리기 점수 제외, 기록 초기화 | 평가/연습 분리 |
| v5.6.4 | 도전 문제 점수 상향 | 심화 문제 동기 강화 |
| v5.7 | AI Tutor 추가 | OpenAI 기반 학습 보조 |
| v5.8 | AI Tutor 품질/위치 개선 | 시연성 및 사용성 향상 |
| v5.8.1 | CMOS/Layout Tutor 아래 배치 | 작업판 UI 보호 |
| v5.9 | 학습 리포트/약점 분석 | 개인 맞춤형 학습 플랫폼화 |

## Major Problems and Fixes

### 1. Truth Table Button Duplication

문제:

- 버튼이 반복 생성되거나 상태가 꼬이는 현상이 있었습니다.

해결:

- 렌더링 로직을 정리했습니다.
- 초기화 버튼 동작을 점검했습니다.
- 상태 저장 방식을 보완했습니다.

### 2. Gate Circuit Connection UX

문제:

- 도형 선택/해제가 불편하고 연결 관계가 직관적이지 않았습니다.

해결:

- 입력/출력 연결 구조를 단순화했습니다.
- 연결 가능한 후보 중심으로 조작 흐름을 개선했습니다.
- 직접 구성형 학습 경험은 유지했습니다.

### 3. CMOS Schematic Complexity

문제:

- 수동 배치와 중간 노드가 많아 화면이 복잡했습니다.
- 4-input 문제에서 소자가 겹치거나 연결이 헷갈렸습니다.

해결:

- 자동 배치 방식을 적용했습니다.
- pMOS 상단, nMOS 하단 구조로 정리했습니다.
- VDD/GND/OUT 라벨을 정렬했습니다.
- 입력 조합별 ON/OFF 색상 변화를 추가했습니다.

### 4. Layout Layer Interaction

문제:

- 레이어가 덮어쓰기처럼 보였습니다.
- 영역 선택이 불편했습니다.
- Contact/Metal 연결 의미가 약했습니다.

해결:

- 레이어별 팔레트를 정리했습니다.
- 드래그/길게 누르기 기반 영역 선택을 추가했습니다.
- 레이어별 지우개를 추가했습니다.
- 전기적 추출 검사를 추가했습니다.

### 5. Supabase Permission Issue

문제:

- 회원가입/로그인 과정에서 app_users permission denied 문제가 발생했습니다.

해결:

- Vercel 환경변수의 Supabase key를 service role key로 교체했습니다.
- Supabase SQL grant로 service_role 권한을 부여했습니다.
- Vercel redeploy 후 정상 작동을 확인했습니다.

### 6. Score and Report Issues

문제:

- 문제 완료 후 점수 반영이 누락되거나 쉬운 문제의 점수가 과도하게 올라가는 문제가 있었습니다.
- 자유 연습 모드가 랭킹에 반영되면 평가 체계가 왜곡될 수 있었습니다.
- 점수/랭킹만으로는 개인별 약점을 파악하기 어려웠습니다.

해결:

- score API의 metadata 처리 순서와 이벤트 중복 처리 로직을 보완했습니다.
- 점수 배점 전체를 하향 조정하고 단계별/난이도별 체계를 다시 설계했습니다.
- 자유롭게 그리기는 점수와 최근 도전에서 제외했습니다.
- 학습 리포트 기능을 추가해 강점, 약점, 추천 문제를 제공했습니다.

### 7. AI Tutor UX and Quality

문제:

- CMOS/Layout 단계에서 AI Tutor가 오른쪽에 배치되어 팔레트와 작업판을 밀어 UI가 깨졌습니다.
- 답변이 장황하거나 정답을 바로 알려줄 가능성이 있었습니다.

해결:

- CMOS/Layout에서는 AI Tutor를 아래 배치했습니다.
- Truth Table/Gate Circuit에서는 오른쪽 배치를 유지했습니다.
- 답변을 3~5줄 중심으로 조정하고 정답 직접 제공보다 확인 순서 중심으로 구성했습니다.

## File Structure Evolution

초기 구조:

```text
index.html
```

중간 구조:

```text
index.html
localStorage-based progress
expanded interactive UI
```

최종 목표 구조:

```text
index.html
package.json
README_DEPLOY.txt
.env.example
api/
  _utils.js
  register.js
  login.js
  me.js
  leaderboard.js
  autosave.js
  score.js
  reset.js
  tutor.js
  report.js
```

Note: 최종 포트폴리오 문서에는 실제 GitHub 저장소의 현재 파일 목록과 일치하는지 한 번 더 확인한 뒤 반영하는 것이 좋습니다.
