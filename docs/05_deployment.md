# Deployment Architecture

## Overview

Logic-to-Layout AI Tutor는 초기에는 단일 `index.html` 기반 프로토타입으로 시작했지만, 이후 GitHub, Vercel, Supabase, OpenAI API를 연결한 배포형 웹 서비스 구조로 확장했습니다.

Live Web App: https://logic-to-layout-tutor.vercel.app/

```text
User Browser
  -> Vercel Frontend
  -> Vercel Serverless API
  -> Supabase
  -> OpenAI API
```

## GitHub

GitHub는 소스코드 저장 및 버전 관리에 사용했습니다.

역할:

- `index.html` 및 API 파일 버전 관리
- 수정본 커밋
- Vercel 자동 배포 연동
- 프로젝트 이력 관리

## Vercel

Vercel은 웹앱 배포와 서버리스 API 실행에 사용했습니다.

역할:

- 정적 웹앱 배포
- GitHub 연동 자동 배포
- Serverless API 실행
- 환경변수 관리
- Supabase 및 OpenAI API 연동

주요 환경변수:

```text
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
JOIN_CODE
SESSION_SECRET
```

## Supabase

Supabase는 사용자 계정과 학습 데이터를 저장하는 백엔드로 사용했습니다.

역할:

- 사용자 계정 저장
- 로그인 세션 관리
- 자동 저장 데이터 관리
- 점수 이벤트 저장
- 랭킹 데이터 저장
- 학습 리포트 분석용 데이터 관리

주요 테이블 및 뷰:

```text
app_users
user_sessions
score_events
leaderboard_scores
user_autosaves
leaderboard_ranked
```

## Vercel Serverless API

서버리스 API는 클라이언트와 민감한 key 사이의 중간 계층 역할을 합니다.

목표 파일 구조:

```text
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

파일별 역할:

| File | Role |
|---|---|
| `_utils.js` | Supabase 연결, 공통 함수, 세션, 점수 계산 보조 |
| `register.js` | 회원가입 처리 |
| `login.js` | 로그인 처리 |
| `me.js` | 현재 사용자 확인 |
| `leaderboard.js` | 랭킹 조회 |
| `autosave.js` | 자동 저장/복원 |
| `score.js` | 점수 이벤트 처리 |
| `reset.js` | 기록 초기화 처리 |
| `tutor.js` | OpenAI API 기반 AI Tutor 처리 |
| `report.js` | 학습 리포트/약점 분석 처리 |

Note: 최종 공개 문서에서는 원본 웹앱 저장소의 현재 API 파일 목록과 위 목록을 대조해 최신 상태로 맞추는 것이 좋습니다.

## Security

보안 설계 원칙:

- OpenAI API key는 Vercel 환경변수로 관리
- Supabase service role key는 Vercel 환경변수로 관리
- Vercel 환경변수에서 서버리스 API가 key를 읽음
- API key 미설정 상황에서도 fallback 답변으로 앱 흐름 유지
- 참여 코드 기반 회원가입으로 시연/테스트 참여자 통제

## Deployment Notes

현재 연결된 주요 공개 링크:

- Live Web App: https://logic-to-layout-tutor.vercel.app/
- Demo Video: https://www.youtube.com/watch?v=6UpYdEnMlKQ
- Portfolio Documentation: https://github.com/jujushmaterial/logic-to-layout-tutor-portfolio
- Shared AX Repository: https://github.com/minho031207/AX
