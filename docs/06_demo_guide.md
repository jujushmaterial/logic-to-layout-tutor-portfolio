# Demo Guide

## Demo Goal

시연의 핵심은 단순히 버튼을 누르는 것이 아니라, Logic-to-Layout AI Tutor가 다음 흐름을 실제로 연결한다는 점을 보여주는 것입니다.

```text
Truth Table
  -> Gate Circuit
  -> CMOS Schematic
  -> Layout Lab
  -> Electrical Extraction Check
  -> AI Tutor / Learning Report
```

## Recommended Recording Style

- 무음 시연 영상
- 발표 멘트 없이 클릭과 화면 흐름 중심
- 마우스 움직임으로 기능 위치 강조
- 필요한 경우 짧은 자막만 사용
- Layout과 CMOS 장면에 충분한 시간 배분

## Full Demo Flow

1. 앱 첫 화면 접속
2. 회원가입 또는 로그인
3. 홈 화면에서 내 점수/랭킹 확인
4. 직접 연습하기 진입
5. B-01 또는 B-02 Truth Table 풀이
6. Gate Circuit 구성
7. C-02 CMOS Schematic 진입
8. 00 / 01 / 10 / 11 입력 조합 클릭
9. PMOS/NMOS ON/OFF 및 Y 출력 변화 확인
10. AI Tutor 힌트/오답 분석/다음 행동 확인
11. Layout Lab 진입
12. 레이어 팔레트 강조
13. N-Well, Poly, Metal1, Contact 대표 레이어 클릭
14. 드래그/길게 누르기로 영역 선택
15. 정답 Layout 또는 예시 답안 적용
16. 전기적 추출 검사 정상 결과 확인
17. Y Metal1 또는 Contact 일부 삭제
18. 전기적 추출 검사 재실행
19. 오류 결과 확인
20. 홈으로 돌아가 점수/랭킹 반영 확인
21. 학습 리포트/약점 분석 확인
22. 추천 문제 시작 버튼 클릭
23. 마무리 화면

## Layout Lab Focus Demo

Layout Lab은 최소 35~50초 정도 보여주는 것이 좋습니다.

강조할 점:

- 레이어 팔레트가 있다는 점
- N-Well, Poly, Metal1, Contact가 서로 다른 의미를 갖는다는 점
- 단순 그림이 아니라 전기적 연결 검사를 한다는 점
- 정상 Layout과 오류 Layout의 차이를 보여줄 수 있다는 점

추천 연출:

1. 정답 Layout 또는 예시 답안을 적용합니다.
2. 전기적 추출 검사를 실행해 정상 결과를 보여줍니다.
3. Contact 또는 Y Metal1 일부를 삭제합니다.
4. 다시 전기적 추출 검사를 실행합니다.
5. 오류 결과가 나타나는 것을 보여줍니다.

이 장면은 이 프로젝트가 단순 그림판이 아니라 Layout의 전기적 의미를 학습하도록 설계되었다는 점을 가장 잘 보여줍니다.

## CMOS Schematic Focus Demo

CMOS Schematic은 C-02 NAND 문제를 추천합니다.

보여줄 흐름:

- 00 입력에서 출력 Y가 1
- 01 입력에서 출력 Y가 1
- 10 입력에서 출력 Y가 1
- 11 입력에서 출력 Y가 0

이 흐름은 NAND의 동작과 pMOS/nMOS ON/OFF 관계를 직관적으로 보여줍니다.

## AI Tutor Demo

AI Tutor 시연에서는 정답을 바로 말하는 장면보다, 사용자가 다음에 무엇을 확인해야 하는지 안내받는 장면을 보여주는 것이 좋습니다.

추천 버튼:

- 힌트 받기
- 오답 분석
- 다음 행동

강조할 점:

- 현재 문제와 단계에 맞춰 답변한다는 점
- CMOS/Layout 단계에서는 작업판을 방해하지 않도록 아래에 배치된다는 점
- API key가 없는 환경에서도 fallback 답변이 있다는 점

## Learning Report Demo

학습 리포트에서는 다음 흐름을 보여줍니다.

- 총점 확인
- 완료 문제 수 확인
- 강한 단계 확인
- 보완할 단계 확인
- 추천 다음 문제 확인
- 추천 문제 시작 버튼 클릭

시연 포인트:

단순 랭킹 경쟁이 아니라, 사용자의 학습 기록을 바탕으로 다음 학습 행동을 제안하는 구조라는 점을 보여줍니다.
