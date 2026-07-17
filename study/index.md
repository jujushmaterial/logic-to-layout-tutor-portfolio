---
layout: default
title: 프로젝트 상세보기
---

# 프로젝트 상세보기

Logic-to-Layout AI Tutor는 Truth Table에서 Gate Circuit, CMOS Schematic, Layout까지 이어지는 학습 과정을 하나의 웹 서비스로 연결한 프로젝트입니다.

<div class="primary-links">
  <a href="https://logic-to-layout-tutor.vercel.app/" target="_blank" rel="noopener">웹 데모 체험</a>
  <a href="https://www.youtube.com/watch?v=6UpYdEnMlKQ" target="_blank" rel="noopener">시연 영상</a>
</div>

## 1. 문제 정의

디지털 논리회로에서는 진리표·논리식·게이트 회로를, 반도체 관련 과목에서는 MOSFET·CMOS·Layout을 각각 학습하는 경우가 많습니다. 이 때문에 논리식이 실제 트랜지스터 네트워크와 물리적 Layout으로 어떻게 이어지는지 한 흐름으로 이해하기 어렵습니다.

이 프로젝트는 그 단절을 직접 조작 가능한 단계형 학습 콘텐츠로 연결했습니다.

## 2. 학습 흐름

```text
Truth Table
→ Gate Circuit
→ CMOS Schematic
→ Layout Lab
→ AI Tutor Feedback
→ Score / Ranking
→ Learning Report
→ Recommended Next Problem
```

각 단계는 이전 단계의 결과를 다음 단계의 입력으로 사용하도록 구성했습니다.

## 3. 핵심 기능

| Stage | Main Interaction | Verification |
|---|---|---|
| Truth Table | 입력 조합별 출력 선택 | 즉시 채점과 오답 피드백 |
| Gate Circuit | 게이트 배치와 연결 | 진리표 기반 논리 검증 |
| CMOS Schematic | pMOS/nMOS 네트워크 확인 | 입력별 ON/OFF와 출력 Y 확인 |
| Layout Lab | 레이어 배치와 연결 | 전기적 연결 검사와 오류 표시 |
| AI Tutor | 힌트·질문·오답 분석 | 현재 문제와 단계 기반 응답 |
| Learning Report | 점수와 이벤트 분석 | 강점·보완 단계와 추천 문제 |

[전체 기능 구성 보기](../docs/02_features.html)

## 4. Layout Lab

Layout Lab은 N-Well, P-Active, N-Active, Poly, Metal1, Contact, 출력 Y 레이어를 격자 위에 직접 배치하는 단계입니다.

- 클릭·드래그 기반 레이어 배치
- 레이어별 지우개
- 정답 가이드와 예시 답안
- Contact·Metal 연결에 대한 전기적 추출 검사
- 연결 삭제 시 오류 확인

현재 검사는 교육 목적의 연결 검증에 초점을 두며, 실제 EDA 수준의 DRC/LVS 전체 기능을 대체하지 않습니다.

## 5. AI Tutor와 학습 리포트

AI Tutor는 현재 문제와 단계에 맞는 힌트, 오답 분석, 다음 행동 추천을 제공합니다. OpenAI API가 연결되지 않은 환경에서도 규칙 기반 fallback 답변을 제공하도록 구성했습니다.

Supabase에는 사용자, 학습 세션, 점수 이벤트, 랭킹, 자동 저장 데이터가 기록됩니다. 이 데이터를 이용해 강한 단계와 보완할 단계를 분석하고 다음 문제를 추천합니다.

[AI 활용 구조 보기](../docs/04_ai_usage.html)

## 6. 개발과 배포

| Area | Technology | Role |
|---|---|---|
| Frontend | HTML, CSS, JavaScript | 인터랙티브 학습 UI |
| Deployment | Vercel | 웹 배포와 serverless API |
| Backend / DB | Supabase | 사용자·세션·점수·랭킹·자동 저장 |
| AI Tutor | OpenAI API | 단계 기반 학습 지원 |
| Version Control | GitHub | 구현과 문서 버전 관리 |

HTML 단일 프로토타입에서 시작해 사용자 계정, 점수, 랭킹, AI Tutor, 학습 리포트가 연결된 배포형 서비스로 확장했습니다.

[개발 과정 보기](../docs/03_development_process.html) · [배포 구조 보기](../docs/05_deployment.html)

## 7. 시연 범위

시연에서는 다음 흐름을 확인할 수 있습니다.

1. 로그인과 대시보드
2. 문제 선택
3. Truth Table 구성
4. Gate Circuit 연결
5. CMOS 입력별 ON/OFF 확인
6. Layout 레이어 배치와 오류 검사
7. AI Tutor 사용
8. 점수·랭킹·학습 리포트 확인

[시연 가이드 보기](../docs/06_demo_guide.html)

## 8. 현재 구현 범위

현재 버전은 교육 목적의 논리·CMOS·Layout 연결 학습과 개인화 피드백을 제공하는 웹 서비스입니다. 더 다양한 논리식과 문제 유형, 좌표 수준 Layout 진단, 관리자 분석 기능과 모바일 사용성은 확장 가능한 영역입니다.

## 9. 상세 문서

<div class="resource-grid">
  <div class="resource-card"><strong>Project Overview</strong><br><a href="../docs/01_overview.html">배경과 목표</a></div>
  <div class="resource-card"><strong>Features</strong><br><a href="../docs/02_features.html">단계별 기능</a></div>
  <div class="resource-card"><strong>Development Process</strong><br><a href="../docs/03_development_process.html">버전과 문제 해결</a></div>
  <div class="resource-card"><strong>AI Usage</strong><br><a href="../docs/04_ai_usage.html">개발 및 튜터 활용</a></div>
  <div class="resource-card"><strong>Deployment</strong><br><a href="../docs/05_deployment.html">서비스 아키텍처</a></div>
  <div class="resource-card"><strong>Demo Guide</strong><br><a href="../docs/06_demo_guide.html">시연 순서</a></div>
  <div class="resource-card"><strong>Code Structure</strong><br><a href="../docs/07_code_structure.html">구현 구조 개요</a></div>
</div>
