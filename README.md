This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
# 로컬 PC에서 프로젝트 실행
pnpm dev
```

프로젝트 기본 구조

```shell
project-root/
├── app/                # Next.js의 라우팅 및 페이지 관리
│   ├── layout.tsx      # 공통 레이아웃
│   ├── page.tsx        # 홈 페이지
│   └── class/          # /class 경로 관련 파일
│       ├── page.tsx    # /class 페이지
│       └── detail/     # /class/detail 경로
│           ├── page.tsx
│
├── components/         # 재사용 가능한 컴포넌트
│   ├── Modal.tsx       # 모달 컴포넌트
│   └── Header.tsx      # 헤더 컴포넌트
│
├── pages/              # 백엔드 파일
├── public/             # 정적 파일
├── styles/             # 전역 스타일
└── package.json        # 패키지 파일
```
