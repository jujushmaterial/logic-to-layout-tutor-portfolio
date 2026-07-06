# Logic-to-Layout AI Tutor

Truth Table에서 CMOS Layout까지 이어지는 AI 기반 인터랙티브 논리회로 학습 웹앱입니다.

> An AI-powered interactive web tutor that connects truth tables, gate circuits, CMOS schematics, and layout-level learning into one continuous logic-to-layout workflow.

## Links

| Link | URL |
|---|---|
| Main Portfolio | https://jujushmaterial.github.io/ |
| Live Web App | https://logic-to-layout-tutor.vercel.app/ |
| Demo Video | https://www.youtube.com/watch?v=6UpYdEnMlKQ |
| Original Implementation Repository | https://github.com/jujushmaterial/logic-to-layout-tutor |
| Shared AX Repository | https://github.com/minho031207/AX |

## Project Summary

Logic-to-Layout AI Tutor는 디지털 논리식이 실제 회로와 반도체 구조로 이어지는 과정을 하나의 웹 기반 학습 흐름으로 연결한 프로젝트입니다. 사용자는 진리표를 직접 구성하고, 게이트 회로를 연결하고, pMOS/nMOS 기반 CMOS 동작을 입력 조합별로 확인하며, 최종적으로 Layout 레이어를 배치하고 전기적 추출 검사를 통해 연결 오류를 확인할 수 있습니다.

이 프로젝트의 핵심은 단순히 웹앱을 제작한 것이 아니라, 디지털 논리회로 학습과 반도체 CMOS/Layout 학습 사이의 단절을 직접 조작형 콘텐츠로 연결한 데 있습니다. 또한 OpenAI API 기반 AI Tutor, Supabase 기반 점수/랭킹, 학습 리포트 기능을 결합하여 개인 맞춤형 자기주도 학습 플랫폼으로 확장했습니다.

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

## Detailed Documentation

- [Project Overview](docs/01_overview.md)
- [Features](docs/02_features.md)
- [Development Process](docs/03_development_process.md)
- [AI Usage](docs/04_ai_usage.md)
- [Deployment Architecture](docs/05_deployment.md)
- [Demo Guide](docs/06_demo_guide.md)
- [Code Structure Overview](docs/07_code_structure.md)
