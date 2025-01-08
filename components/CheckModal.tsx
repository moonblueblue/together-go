"use client";

import { useState } from "react";

export default function CheckModal({
  isOpen,
  onClose,
  students,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  students: { id: number; name: string; isPresent: boolean }[];
  onSave: (
    updatedStudents: { id: number; name: string; isPresent: boolean }[],
  ) => void;
}) {
  const [studentList, setStudentList] = useState(students);

  const toggleAttendance = (id: number) => {
    setStudentList((prevList) =>
      prevList.map((student) =>
        student.id === id
          ? { ...student, isPresent: !student.isPresent }
          : student,
      ),
    );
  };

  const handleSave = () => {
    onSave(studentList);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* 모달 제목 */}
        <h2 className="mb-4 text-center text-lg font-bold text-gray-800">
          2학년 3반 / 문호성
        </h2>

        {/* 학생 출석 체크 리스트 */}
        <div className="mb-6 rounded border border-gray-300">
          {studentList.map((student, index) => (
            <div
              key={student.id}
              className={`flex items-center justify-between px-4 py-3 ${
                index !== studentList.length - 1
                  ? "border-b border-gray-300"
                  : ""
              }`}
            >
              <span className="text-sm font-medium text-gray-800">
                {student.name}
              </span>
              <button
                onClick={() => toggleAttendance(student.id)}
                className={`flex h-6 w-6 items-center justify-center rounded ${
                  student.isPresent ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                {student.isPresent && (
                  <span className="text-lg font-bold text-white">✓</span>
                )}
              </button>
            </div>
          ))}
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
