# Logic-to-Layout AI Tutor

Truth Table에서 CMOS Layout까지 이어지는 AI 기반 인터랙티브 논리회로 학습 웹앱

> An AI-powered interactive web tutor that connects truth tables, gate circuits, CMOS schematics, and layout-level learning into one continuous logic-to-layout workflow.

## Project Summary

Logic-to-Layout AI Tutor는 디지털 논리식이 실제 회로와 반도체 구조로 이어지는 과정을 하나의 웹 기반 학습 흐름으로 연결한 프로젝트입니다. 사용자는 진리표를 직접 구성하고, 게이트 회로를 연결하고, pMOS/nMOS 기반 CMOS 동작을 입력 조합별로 확인하며, 최종적으로 Layout 레이어를 배치하고 전기적 추출 검사를 통해 연결 오류를 확인할 수 있습니다.

이 프로젝트는 디지털 논리회로 학습과 반도체 CMOS/Layout 학습 사이의 단절을 직접 조작형 콘텐츠로 연결하는 데 초점을 두었습니다. 또한 OpenAI API 기반 AI Tutor, Supabase 기반 점수/랭킹, 학습 리포트 기능을 결합하여 개인 맞춤형 자기주도 학습 플랫폼으로 확장했습니다.

## Learning Flow

```text
Truth Table
  -> Gate Circuit
  -> CMOS Schematic
  -> Layout Lab
  -> AI Tutor Feedback
  -> Score / Ranking
  -> Learning Report
  -> Recommended Next Problem
```

## Why I Built This

디지털논리회로 수업에서는 보통 진리표, 논리식, 게이트 회로를 중심으로 학습합니다. 반면 반도체 관련 과목에서는 MOSFET, CMOS 구조, Layout, 공정/소자 개념을 별도의 단원처럼 학습하는 경우가 많습니다.

그 결과 학생 입장에서는 다음 연결 관계를 직관적으로 이해하기 어렵습니다.

- 논리식이 실제 게이트 회로로 어떻게 구현되는지
- 게이트 회로가 pMOS/nMOS 기반 CMOS 회로로 어떻게 변환되는지
- CMOS 회로가 물리적 Layout 레이어로 어떻게 이어지는지
- 입력 조합에 따라 pMOS/nMOS가 어떻게 ON/OFF 되고 출력이 어떻게 결정되는지
- Poly, Active, Contact, Metal1이 전기적 연결과 어떤 관계를 갖는지

이 문제를 해결하기 위해 Truth Table부터 Layout까지 한 번에 이어지는 인터랙티브 학습 도구를 설계했습니다.

## Key Features

### Truth Table

- 입력 조합별 출력값 직접 선택
- 0/1 토글 기반 진리표 구성
- 즉시 채점 및 오답 피드백
- 단계 완료 시 점수 반영

### Gate Circuit

- 게이트 팔레트 기반 회로 구성
- 입력/출력 포트 연결
- 진리표 기반 논리 검증
- 연결 오류와 동작 오류 피드백

### CMOS Schematic

- pMOS/nMOS 자동 배치
- Pull-up Network와 Pull-down Network 구분
- 00/01/10/11 입력 조합별 트랜지스터 ON/OFF 시각화
- 출력 Y 변화 확인

### Layout Lab

- N-Well, P-Active, N-Active, Poly, Metal1, Contact 레이어 조작
- 격자 기반 Layout 그리기
- 정답 가이드 및 예시 답안 적용
- 전기적 추출 검사
- Contact 또는 Metal 연결 삭제 시 오류 확인

### AI Tutor and Learning Report

- 현재 문제와 단계에 맞는 힌트 제공
- 오답 분석 및 다음 행동 추천
- OpenAI API 미설정 환경에서도 규칙 기반 fallback 답변 제공
- Supabase 기반 점수/랭킹/학습 리포트 제공

## Tech Stack

| Category | Tools / Platform | Role |
|---|---|---|
| Frontend | HTML, CSS, JavaScript | Interactive learning UI |
| Deployment | Vercel | Web deployment and serverless APIs |
| Backend / DB | Supabase | Users, sessions, scores, ranking, autosave |
| AI Tutor | OpenAI API | Stage-aware tutoring responses |
| Source Control | GitHub | Version control and deployment integration |
| Development Partner | ChatGPT | Planning, prototyping, debugging, documentation |

## Repository Role

This repository is intended as a portfolio documentation repository.

The original implementation repository is a web deployment repository for the actual Logic-to-Layout AI Tutor app. This portfolio repository explains the motivation, learning design, technical structure, development process, AI usage, and demo flow.

## Documentation

- [Project Overview](docs/01_overview.md)
- [Features](docs/02_features.md)
- [Development Process](docs/03_development_process.md)
- [AI Usage](docs/04_ai_usage.md)
- [Deployment Architecture](docs/05_deployment.md)
- [Demo Guide](docs/06_demo_guide.md)
- [Code Structure Overview](docs/07_code_structure.md)

## Project Links

| Link | URL |
|---|---|
| Main Portfolio | https://jujushmaterial.github.io/ |
| Live Web App | https://logic-to-layout-tutor.vercel.app/ |
| Demo Video | https://www.youtube.com/watch?v=6UpYdEnMlKQ |
| Original Implementation Repository | https://github.com/jujushmaterial/logic-to-layout-tutor |
| Shared AX Repository | https://github.com/minho031207/AX |

## Key Outcomes

1. Built a step-by-step learning flow from Truth Table to Layout.
2. Implemented direct manipulation through gate placement, wiring, and layout editing.
3. Visualized CMOS pMOS/nMOS behavior for each input combination.
4. Implemented layer-based Layout practice and electrical extraction checks.
5. Connected GitHub, Vercel, Supabase, and OpenAI API into a deployable service structure.
6. Added score, ranking, AI Tutor, and learning report features for personalized learning.
7. Used ChatGPT as a vibe-coding partner while repeatedly testing, reviewing, and refining the actual app.

## Limitations and Future Work

- The Layout checker currently focuses on educational connection checks; full EDA-grade verification remains future work.
- AI Tutor currently provides stage-level guidance; finer coordinate-level Layout diagnosis remains future work.
- More logic families and problem types can be added.
- Admin dashboard and deeper user analytics can be expanded later.
- Mobile UI can be further improved.
