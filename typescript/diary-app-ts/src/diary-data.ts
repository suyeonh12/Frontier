export interface Diary {
  id: string;
  date: string;
  content: string;
}

// LocalStorage에서 diary 불러오기
const savedData = localStorage.getItem("diaryData");
export const diaryData: Diary[] = savedData ? JSON.parse(savedData) : [];

// 저장 함수 추가
export function saveDiaryData() {
  localStorage.setItem("diaryData", JSON.stringify(diaryData));
}
