"use client";

import Link from "next/link";
import { useState } from "react";

export default function Join() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // 간단한 유효성 검사
    if (!name || !phoneNumber || !password || !confirmPassword) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      // 여기에 회원가입 로직(API 호출)을 추가하세요.
      console.log({
        name,
        phoneNumber,
        password,
      });

      setSuccess("회원가입이 완료되었습니다!");
      // 입력값 초기화
      setName("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        {/* 제목 */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-black">회원가입</h1>
        </div>
        {/* 오류 메시지 */}
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        {success && (
          <p className="mb-4 text-center text-green-500">{success}</p>
        )}

        {/* 회원가입 폼 */}
        <form onSubmit={handleJoin}>
          {/* 이름 */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이름을 입력하세요"
              required
            />
          </div>
          {/* 휴대폰번호 */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              휴대폰번호
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="휴대폰번호를 입력하세요"
              required
            />
          </div>
          {/* 비밀번호 */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          {/* 비밀번호 확인 */}
          <div className="mb-10">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="비밀번호를 다시 입력하세요"
              required
            />
          </div>
          {/* 가입 버튼 */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-3 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            가입하기
          </button>
        </form>
        <Link
          href="/login"
          className="mt-4 block w-full rounded-md bg-gray-300 px-4 py-3 text-center font-bold text-black hover:bg-gray-400 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          취소
        </Link>
      </div>
    </div>
  );
}
