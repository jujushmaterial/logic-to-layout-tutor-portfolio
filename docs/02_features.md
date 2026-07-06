# Features

## 1. Home Dashboard

홈 화면은 사용자가 자신의 학습 상태를 한눈에 확인하는 공간입니다.

주요 기능:

- 내 총점 표시
- 현재 순위 표시
- 완료 문제 수 표시
- 최근 도전 표시
- 최근 결과 표시
- TOP 5 랭킹 표시
- 학습 리포트 표시
- 추천 문제 시작 버튼

의미:

사용자가 문제 풀이 이후에도 자신의 학습 상태와 다음 행동을 확인할 수 있도록 구성했습니다.

## 2. Truth Table

Truth Table 단계에서는 논리식의 입력-출력 관계를 직접 구성합니다.

주요 기능:

- 입력 조합별 출력값 버튼 제공
- 0/1 토글
- 모두 0, 모두 1 설정
- 즉시 채점
- 오답 피드백
- 단계 완료 시 점수 반영

학습 목표:

- 논리식의 입력-출력 관계 이해
- 진리표를 직접 구성하는 경험 제공
- 이후 Gate Circuit 단계의 기준이 되는 논리 동작 확인

## 3. Gate Circuit

Gate Circuit 단계에서는 논리식을 게이트 회로로 구현합니다.

주요 기능:

- 게이트 팔레트
- 입력/출력 포트 연결
- 회로 구성
- 진리표 기반 채점
- 연결 오류 피드백
- 단계 완료 시 점수 반영

학습 목표:

- 논리식을 게이트 단위로 구현하는 방법 이해
- 입력과 출력의 연결 구조 이해
- 직접 구성형 회로 학습 경험 제공

## 4. CMOS Schematic

CMOS Schematic 단계에서는 게이트 회로가 pMOS/nMOS 기반 CMOS 구조로 변환되는 과정을 시각화합니다.

주요 기능:

- pMOS/NMOS 자동 배치
- Pull-up Network와 Pull-down Network 구분
- 입력 조합 버튼
- 00/01/10/11 입력 상태 확인
- 트랜지스터 ON/OFF 색상 변화
- 출력 Y 변화 시각화
- CMOS 정답 구조 확인
- 단계 완료 시 점수 반영

학습 목표:

- 게이트 회로가 CMOS 구조로 변환되는 과정 이해
- pMOS와 nMOS의 동작 차이 이해
- NAND/NOR에서 직렬/병렬 관계 확인
- 입력 조합에 따른 출력 변화 확인

## 5. Layout Lab

Layout Lab 단계에서는 CMOS 구조를 물리적 Layout 레이어로 표현합니다.

주요 기능:

- N-Well 레이어
- P-Active 레이어
- N-Active 레이어
- Poly 레이어
- Metal1 레이어
- Contact 레이어
- Y 출력 레이어
- 격자 기반 Layout 그리기
- 클릭/드래그/길게 누르기 기반 영역 선택
- 레이어별 지우개
- 정답 가이드
- 예시 답안 적용
- 전기적 추출 검사
- Metal1 또는 Contact 삭제 시 오류 확인
- 단계 완료 시 점수 반영

학습 목표:

- CMOS 구조가 Layout으로 변환되는 과정 이해
- 레이어별 의미 이해
- Contact와 Metal 연결의 전기적 의미 이해
- Layout을 전기적 연결 구조로 바라보도록 유도

## 6. Problem Modes

### 처음 배우기

- NAND 예제 기반 단계별 안내
- 추천 행동 제공
- 초심자용 흐름 학습

### 직접 연습하기

- B 계열: Buffer, Inverter, 기본 게이트
- C 계열: CMOS Schematic 및 Layout 중심 문제
- 단계별 점수 반영

### 도전 문제

- NAND-only
- NOR-only
- 자유 게이트 합성
- 심화 문제
- 일반 문제보다 높은 점수 반영

### 자유롭게 그리기

- Layout 자유 실험
- 랭킹 평가와 분리
- 평가와 연습 분리

## 7. Score and Ranking

점수 시스템은 학습 난이도와 사용자의 행동을 반영하도록 설계했습니다.

주요 이벤트:

- stage_completed
- problem_completed
- wrong_attempt
- answer_viewed
- answer_applied
- skip_stage

점수 설계 원칙:

- Truth Table < Gate Circuit < CMOS Schematic < Layout
- B 계열 < C 계열
- 기본 문제 < 도전 문제
- 첫 시도 통과에는 소량 보너스
- 오답, 스킵, 예시 답안 사용은 불리하게 반영
- 자유 연습은 랭킹 평가와 분리

## 8. AI Tutor

AI Tutor는 현재 문제와 단계에 맞는 도움을 제공합니다.

주요 기능:

- 힌트 받기
- 오답 분석
- 다음 행동 추천
- 직접 질문
- 현재 문제/단계 기반 답변
- 학습 리포트 기반 추천
- OpenAI API 연결
- API key 미설정 시 fallback 답변 제공

단계별 안내 방향:

- Truth Table: 입력 조합과 출력 관계 확인
- Gate Circuit: 게이트 연결과 입출력 연결 확인
- CMOS Schematic: pMOS/nMOS, Pull-up/Pull-down, 직렬/병렬 관계 확인
- Layout: N-Well, Active, Poly, Contact, Metal1, VDD/GND/Y 연결 확인

## 9. Learning Report

학습 리포트는 점수 기록과 함께 개인별 학습 상태를 분석합니다.

주요 기능:

- 총점 분석
- 완료 문제 수 확인
- 오답/도움 사용 수 확인
- 강한 단계 표시
- 보완할 단계 표시
- Truth Table/Gate Circuit/CMOS/Layout별 상태 분석
- 추천 다음 문제 제시
- 추천 문제 시작 버튼

의미:

학습 리포트는 사용자가 자신의 약점을 파악하고 다음 문제로 자연스럽게 이동하도록 돕습니다. AI Tutor도 이 리포트 정보를 참고해 다음 행동을 제안할 수 있도록 구성했습니다.
