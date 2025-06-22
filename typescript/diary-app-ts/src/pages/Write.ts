import { diaryData, saveDiaryData } from "../diary-data";

export default function Write(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>("main");

  if (!main) {
    throw new Error("Main element not found");
  }

  const date = new Date().toISOString().split("T")[0]; // "2025-06-22" 형식

  main.innerHTML = `
        <form class="diary-form bg-gray-200 p-4 rounded-lg mb-5">
          <textarea id="diary-content" class="w-full h-[200px] rounded-lg" placeholder="일기를 작성하세요.."></textarea>
          <input type="text" id="diary-date" class="text-gray-400 text-sm" value="${date}" disabled /> 
        </form>
    `;
}

export function handleSubmit(event: Event) {
  event.preventDefault();

  const content = (
    document.getElementById("diary-content") as HTMLTextAreaElement
  ).value;
  const date = (document.getElementById("diary-date") as HTMLInputElement)
    .value;

  if (!content) {
    alert("일기를 작성해주세요.");
    return;
  }

  const newDiary = {
    id: crypto.randomUUID(),
    content,
    date,
  };

  diaryData.push(newDiary);
  saveDiaryData(); // localStorage에 저장

  console.log("New diary added:", newDiary);

  location.hash = "#/";
}
