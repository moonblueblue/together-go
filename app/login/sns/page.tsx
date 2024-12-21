"use client";

export default function SNSLogin() {
  const handleKakaoLogin = () => {
    const REST_API_KEY = "YOUR_KAKAO_REST_API_KEY"; // 카카오 앱 REST API 키
    const REDIRECT_URI = "YOUR_REDIRECT_URI"; // 로그인 후 리다이렉트될 URL
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    // 카카오 로그인 페이지로 리다이렉트
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      {/* 로고 */}
      <div className="mb-8 flex flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-md bg-gradient-to-r from-blue-400 to-purple-500">
          <span className="text-2xl font-bold text-white">Logo</span>
        </div>
        <h1 className="mt-4 text-xl font-medium text-gray-500">모이자고</h1>
      </div>

      {/* 설명 */}
      <p className="mb-4 text-sm text-gray-500">
        SNS로 간편하게 로그인 하세요 :)
      </p>

      {/* 카카오 로그인 버튼 */}
      <button
        onClick={handleKakaoLogin}
        className="flex w-80 items-center justify-center rounded-md bg-yellow-400 px-4 py-3 font-bold text-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      >
        <img
          src="/kakao-icon.png" // public 디렉토리에 있는 카카오 이미지 경로를 입력
          alt="Kakao Logo"
          className="mr-2 h-5 w-5"
        />
        카카오로 로그인하기
      </button>
    </div>
  );
}
