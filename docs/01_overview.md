# Project Overview

## One-line Description

Logic-to-Layout AI Tutor는 디지털 논리식이 Truth Table, Gate Circuit, CMOS Schematic, Layout으로 변환되는 과정을 하나의 흐름으로 학습할 수 있는 AI 기반 인터랙티브 웹앱입니다.

## Project Type

- Web-based interactive learning content
- AI Tutor 기반 자기주도 학습 도구
- 디지털 논리회로와 CMOS/Layout 학습을 연결한 교육용 웹 시뮬레이션
- ChatGPT 기반 바이브 코딩 개발 프로젝트

## Background

디지털논리회로와 반도체 소자/공정 학습은 서로 밀접하게 이어져 있지만, 실제 수업이나 교재에서는 분리되어 다루어지는 경우가 많습니다.

디지털논리회로에서는 진리표, 논리식, 게이트 회로를 중심으로 학습합니다. 반도체 관련 과목에서는 MOSFET, CMOS 구조, Layout, 공정/소자 구조를 별도 단원처럼 학습합니다. 이 때문에 논리식이 어떻게 실제 CMOS 구조와 Layout으로 이어지는지 체감하기 어렵습니다.

이 프로젝트는 그 단절을 하나의 조작 가능한 학습 흐름으로 연결하기 위해 시작했습니다.

## Problem Definition

기존 학습 방식에서 느낀 핵심 문제는 다음과 같습니다.

- 진리표와 게이트 회로는 배우지만, 그것이 CMOS 회로로 이어지는 과정은 직관적으로 보이지 않습니다.
- CMOS 회로와 Layout은 별도 그림처럼 제시되는 경우가 많아, 전기적 연결 구조를 직접 체감하기 어렵습니다.
- 입력 조합에 따라 pMOS/nMOS가 ON/OFF 되고 출력이 결정되는 과정이 정적인 설명에 머무릅니다.
- Layout의 Poly, Active, Contact, Metal1이 실제 연결 구조와 어떤 관계를 갖는지 실습하기 어렵습니다.
- 오답이 발생했을 때 사용자가 어느 단계에서 잘못 이해했는지 파악하기 어렵습니다.

## Project Goals

이 프로젝트에서 설정한 목표는 다음과 같습니다.

1. Truth Table부터 Layout까지 이어지는 하나의 학습 흐름을 만든다.
2. 직접 조작형 학습 경험을 제공한다.
3. 디지털 논리, 게이트 회로, CMOS, Layout의 연결 관계를 시각적으로 보여준다.
4. 현재 단계에 맞는 AI Tutor 힌트와 오답 분석을 제공한다.
5. 점수, 랭킹, 학습 리포트를 통해 반복 학습 동기를 만든다.
6. GitHub, Vercel, Supabase, OpenAI API를 연결해 실제 배포 가능한 서비스 구조로 확장한다.

## Core Learning Flow

```text
1. Truth Table
   입력 조합별 출력 관계를 직접 구성합니다.

2. Gate Circuit
   논리식을 게이트 회로로 구현하고 연결을 검증합니다.

3. CMOS Schematic
   pMOS/nMOS 네트워크와 입력별 ON/OFF 동작을 확인합니다.

4. Layout Lab
   레이어를 직접 배치하고 전기적 연결 오류를 확인합니다.

5. AI Tutor / Report
   힌트, 오답 분석, 약점 분석, 추천 문제로 학습 흐름을 이어갑니다.
```

## Portfolio Message

이 포트폴리오에서는 결과물의 기능, 제작 배경, 구현 과정, 학습적 의미를 함께 보여주는 것을 목표로 합니다.

강조할 메시지는 다음과 같습니다.

- 전공 학습 중 발견한 단절을 직접 문제로 정의했습니다.
- AI를 개발 파트너와 학습 보조 기능으로 활용했습니다.
- HTML 프로토타입에서 시작해 서버, DB, AI API가 연결된 웹 서비스로 확장했습니다.
- 기능 오류와 UI 문제를 직접 검수하며 반복 개선했습니다.
- 최종적으로 학습 콘텐츠, 웹앱, AI Tutor, 학습 분석 기능을 하나의 흐름으로 결합했습니다.
