import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, phoneNumber, password } = req.body;

    console.log("회원가입 요청 데이터:", { name, phoneNumber, password });

    // 간단한 회원가입 예제 (유효성 검사)
    if (!name || !phoneNumber || !password) {
      res.status(400).json({ message: "모든 필드를 입력해주세요." });
      return;
    }

    // 회원가입 성공
    res
      .status(201)
      .json({ message: "회원가입 성공", user: { name, phoneNumber } });
  } else {
    // 허용되지 않는 메서드
    res.status(405).json({ message: "허용되지 않는 메서드입니다." });
  }
}
