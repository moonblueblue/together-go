import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // 간단한 인증 예제
    if (email === "test@example.com" && password === "1234") {
      res.status(200).json({ message: "로그인 성공", user: { email } });
    } else {
      res
        .status(401)
        .json({ message: "이메일 또는 비밀번호가 잘못되었습니다." });
    }
  } else {
    res.status(405).json({ message: "허용되지 않는 메서드입니다." });
  }
}
