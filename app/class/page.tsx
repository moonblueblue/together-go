"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClassPage() {
  // state
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "소재혁",
      school: "과천 고등학교",
      attendance: Array(6).fill(true).concat(Array(4).fill(false)),
      memo: "",
    },
    {
      id: 2,
      name: "유호승",
      school: "의왕 고등학교",
      attendance: Array(5).fill(true).concat(Array(5).fill(false)),
      memo: "",
    },
    {
      id: 3,
      name: "신하람",
      school: "태안 고등학교",
      attendance: Array(8).fill(true).concat(Array(2).fill(false)),
      memo: "",
    },
    {
      id: 4,
      name: "000",
      school: "000 고등학교",
      attendance: Array(10).fill(false),
      memo: "",
    },
    {
      id: 5,
      name: "000",
      school: "000 고등학교",
      attendance: Array(10).fill(false),
      memo: "",
    },
  ]);

  // router
  const router = useRouter();

  // event handlers
  const handleNavigation = () => {
    router.push("/class/detail");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-3">
      <div className="mx-auto max-w-4xl rounded-md border border-gray-300 bg-white shadow-sm">
        {/* 상단 헤더 */}
        <div className="flex items-center justify-between border-b border-gray-300 px-4 py-2">
          <h1 className="text-base font-bold">2학년 3반 / 문호성</h1>
          <button className="rounded bg-blue-500 px-6 py-3 text-sm text-white hover:bg-blue-600">
            출석체크
          </button>
        </div>

        {/* 학생 목록 */}
        {students.map((student, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-300 px-4 py-2.5 last:border-0"
          >
            {/* 프로필 사진 */}
            <div
              className="flex cursor-pointer items-center"
              onClick={handleNavigation}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-gray-400 bg-gray-100">
                <span className="text-sm text-gray-500">사진</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-bold">
                  {student.name} / {student.school}
                </p>
                <div className="mt-3 flex gap-1">
                  {student.attendance.map((attended, i) => (
                    <div
                      key={i}
                      className={`h-4 w-4 rounded ${
                        attended ? "bg-green-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* 메모 버튼 */}
            <button className="rounded bg-gray-300 px-5 py-3 text-sm font-bold hover:bg-gray-400">
              메모
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
