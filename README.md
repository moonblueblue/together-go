This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
# 로컬 PC에서 프로젝트 실행
pnpm dev
```

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
