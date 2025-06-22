import { diaryData, saveDiaryData } from "../diary-data"; // saveDiaryData도 가져오기

export default function Home(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>("main");

  if (!main) {
    throw new Error("Main element not found");
  }

  // 일기 데이터 표시
  const diaryList = document.createElement("ul");

  // ① 일기 데이터를 최신순으로 정렬하며 저장
  const sortedDiaryData = [...diaryData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  //diaryData.forEach((diary) => {
  sortedDiaryData.forEach((diary) => {
    diaryList.insertAdjacentHTML(
      "afterbegin",
      `
      <li
        onclick="location.href='#/detail?id=${diary.id}'" 
        class="diary-item bg-gray-200 p-4 rounded-lg mb-5" data-id="${diary.id}">
        <p class="mb-5">${diary.content}</p>
        <footer class="flex justify-between">
          <time class="text-sm text-gray-500" datetime="${diary.date}">${diary.date}</time>
          <button class="delete-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#dc3545" d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"/></svg>
          </button>
        </footer>
      </li>
    `
    );
  });

  // 글 추가 버튼
  const addButton = `
    <button class="add-button text-white fixed left-[50%] bottom-4 transform -translate-x-[50%]" onclick="location.href='#/write'">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#007aff" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
    </button>
  `;

  main.insertAdjacentHTML("beforeend", addButton);
  // 글 추가 버튼 클릭 이벤트

  main.appendChild(diaryList);

  // 삭제 버튼 이벤트 리스너 추가
  const deleteButtons = main.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation(); // 클릭 이벤트 전파 방지
      const diaryItem = button.closest(".diary-item") as HTMLElement;
      const id = diaryItem.getAttribute("data-id");

      if (id) {
        const confirmed = confirm("정말 삭제하시겠습니까?");
        if (!confirmed) return;

        const index = diaryData.findIndex((d) => d.id === id);
        if (index !== -1) {
          diaryData.splice(index, 1); // 데이터에서 제거
          saveDiaryData(); // localStorage 반영
          diaryItem.remove(); // 화면에서 제거
          console.log(`Diary with id ${id} deleted`);
        }
      }
    });
  });
}
