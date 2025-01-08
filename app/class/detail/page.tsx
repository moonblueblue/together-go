"use client";

import { useState } from "react";

export default function StudentProfile() {
  const [student] = useState({
    fullName: "000",
    school: "00 고등학교",
    email: "000@gmail.com",
    phone: "010-0000-0000",
    gender: "Female",
    birthDate: "0000-00-00",
    profilePicture: "https://via.placeholder.com/150", // 프로필 사진 URL
  });

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 px-4 py-6">
      {/* 상단 네비게이션 */}
      <div className="flex w-full max-w-sm items-center justify-between">
        <div className="h-6 w-6">
          <div className="mb-1 h-1 w-5 bg-gray-600"></div>
          <div className="mb-1 h-1 w-5 bg-gray-600"></div>
          <div className="mb-1 h-1 w-5 bg-gray-600"></div>
        </div>
        <h1 className="text-sm font-semibold text-blue-600">PROFILE</h1>
        <div className="h-6 w-6"></div>
      </div>

      {/* 프로필 이미지 */}
      <div className="mt-6">
        <div className="h-24 w-24 overflow-hidden rounded-lg shadow-md">
          <img
            src={student.profilePicture}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* 이름과 학교 */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-bold text-gray-800">{student.fullName}</h2>
        <p className="text-sm text-gray-500">{student.school}</p>
      </div>

      {/* 상세 정보 */}
      <div className="mt-6 w-full max-w-sm space-y-4 px-4">
        <div className="text-sm">
          <p className="text-gray-400">Email</p>
          <p className="font-semibold text-gray-700">{student.email}</p>
        </div>
        <div className="text-sm">
          <p className="text-gray-400">Phone</p>
          <p className="font-semibold text-gray-700">{student.phone}</p>
        </div>
        <div className="text-sm">
          <p className="text-gray-400">Gender</p>
          <p className="font-semibold text-gray-700">{student.gender}</p>
        </div>
        <div className="text-sm">
          <p className="text-gray-400">Date of Birth</p>
          <p className="font-semibold text-gray-700">{student.birthDate}</p>
        </div>
      </div>

      {/* 저장 버튼 */}
      <div className="mt-6 w-full max-w-sm px-4">
        <button className="w-full rounded-full bg-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
          SAVE INFORMATION
        </button>
      </div>
    </div>
  );
}
