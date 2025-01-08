"use client";

import { useState } from "react";

export default function MemoModal({
  isOpen,
  onClose,
  studentName,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  onSave: (memo: string, isVisitRequested: boolean) => void;
}) {
  const [memo, setMemo] = useState("");
  const [isVisitRequested, setIsVisitRequested] = useState(false);

  const handleSave = () => {
    onSave(memo, isVisitRequested);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* 모달 제목 */}
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          2학년 3반 /{" "}
          <span className="text-blue-600">
            {studentName} <span className="text-red-500">!</span>
          </span>
        </h2>

        {/* 메모 입력 */}
        <textarea
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="내용을 작성해 주세요."
          className="mb-4 h-36 w-full resize-none rounded border border-gray-300 p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* 심방 요청 체크박스 */}
        <div className="mb-6 flex items-center justify-between rounded border border-gray-300 px-4 py-3">
          <span className="text-sm font-medium text-gray-800">심방요청</span>
          <input
            type="checkbox"
            checked={isVisitRequested}
            onChange={() => setIsVisitRequested((prev) => !prev)}
            className="h-6 w-6 cursor-pointer rounded border-gray-400 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSave}
            className="w-24 rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600"
          >
            저장
          </button>
          <button
            onClick={onClose}
            className="w-24 rounded bg-gray-400 px-4 py-2 text-sm font-bold text-white hover:bg-gray-500"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
