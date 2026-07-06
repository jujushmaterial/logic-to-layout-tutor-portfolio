# AI Usage

## Overview

이 프로젝트에서 AI는 세 가지 층위에서 활용되었습니다.

1. 개발 과정에서 ChatGPT를 바이브 코딩 파트너로 활용
2. 완성된 웹앱 내부에서 OpenAI API 기반 AI Tutor 제공
3. 점수 및 학습 이벤트 데이터를 바탕으로 학습 리포트와 추천 문제 제공

## ChatGPT as a Development Partner

ChatGPT는 단순 질의응답 도구가 아니라 개발 파트너로 사용했습니다.

활용 분야:

- 아이디어 구체화
- 학습 흐름 설계
- 기능 단위 기획
- HTML/CSS/JavaScript 코드 생성
- 오류 수정 및 디버깅
- UI/UX 개선 방향 도출
- 점수/랭킹/학습 리포트 로직 설계
- Supabase/Vercel/GitHub 연동 과정 안내
- 신청서 및 시연 영상 가이드 문서 작성
- 포트폴리오 정리용 문서 작성

개발 과정에서는 사용자가 자연어로 원하는 기능, 화면 구성, 문제점, 수정 방향을 설명했고, AI가 코드 초안과 구조 제안을 제공했습니다. 이후 사용자가 실제 브라우저에서 실행하고, 오류와 사용성을 검토한 뒤 다시 피드백하는 방식으로 반복 개선했습니다.

## Example Natural-language Prompts

실제 개발 중 사용한 요청은 다음과 같은 형태였습니다.

- Truth Table 버튼을 누르면 0/1이 바뀌고 즉시 채점되게 해줘.
- CMOS Schematic에서 입력 00/01/10/11을 누르면 PMOS/NMOS 상태가 색으로 보이게 해줘.
- PMOS는 Pull-up, NMOS는 Pull-down으로 구분해서 자동 배치되게 해줘.
- 소자 간 직접 연결 방식으로 바꿔줘.
- Layout에서 N-Well을 드래그로 영역 선택할 수 있게 해줘.
- Layout에서 레이어별 지우개를 넣어줘.
- Contact 하나를 지우면 전기적 추출 검사에서 오류가 나게 해줘.
- 점수/랭킹 시스템을 서버에 저장되게 해줘.
- 자유롭게 그리기는 점수에 반영하지 않게 해줘.
- 기록 초기화 시 서버 점수와 최근 도전도 초기화되게 해줘.
- AI Tutor가 CMOS/Layout에서 작업판을 방해하지 않도록 아래로 내려가게 해줘.
- 학습 리포트에서 강한 단계와 보완할 단계를 분석해줘.
- 학습 리포트를 바탕으로 다음 문제를 추천하게 해줘.

## OpenAI API Tutor

웹앱 내부의 AI Tutor는 OpenAI API를 기반으로 설계했습니다.

주요 기능:

- 현재 문제/단계 기반 힌트 제공
- 오답 분석
- 다음 행동 추천
- 직접 질문 응답
- CMOS/Layout 학습 단계별 피드백 생성
- 학습 리포트 기반 추천 문제 안내

단계별 응답 방향:

- Truth Table: 입력 조합과 출력 관계 확인
- Gate Circuit: 게이트 연결과 입출력 연결 확인
- CMOS Schematic: pMOS/nMOS, Pull-up/Pull-down, 직렬/병렬 관계 확인
- Layout: N-Well, Active, Poly, Contact, Metal1, VDD/GND/Y 연결 확인

## Security Design

OpenAI API key는 클라이언트 코드에 직접 삽입하지 않았습니다.

구현 원칙:

- OpenAI API key는 Vercel 환경변수에 저장
- 클라이언트에서는 직접 key에 접근하지 않음
- Vercel Serverless API에서만 OpenAI API 호출
- API key가 없는 환경에서도 앱이 멈추지 않도록 fallback 답변 제공

Supabase service role key 역시 GitHub 코드에 직접 포함하지 않고 Vercel 환경변수로 관리했습니다.

## Transparency

포트폴리오에서 강조할 점은 다음과 같습니다.

- AI가 만든 코드를 그대로 제출한 것이 아닙니다.
- 사용자가 실제 실행, 화면 검수, 기능 테스트를 반복했습니다.
- 전공 개념과 학습적 의미는 사용자가 판단했습니다.
- AI는 구현 속도를 높이고 대안을 제시하는 협업 도구로 활용했습니다.
- 완성된 앱 내부에서도 AI Tutor가 학습 보조 기능으로 사용되었습니다.
