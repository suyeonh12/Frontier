import { diaryData, saveDiaryData } from "../diary-data";

export default function Detail(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>("main");

  // query string 에서 id 추출
  const query = new URLSearchParams(window.location.hash.split("?")[1]);
  const id = query.get("id");
  //console.log(id);

  // diaryData에서 해당 id의 일기 찾기
  const diary = diaryData.find((d) => d.id == id);

  if (!main) {
    throw new Error("Main element not found");
  }

  if (!diary) {
    main.innerHTML = `<p class="text-gray-500">일기를 찾을 수 없습니다.</p>`;
    return;
  }

  main.innerHTML = `
      <ul>
        <li class="diary-item bg-gray-200 p-4 rounded-lg mb-5" data-id="${diary?.id}">
          <p class="mb-5">${diary?.content}</p>
          <footer class="flex justify-between">
            <time class="text-sm text-gray-500" datetime="${diary?.date}">${diary?.date}</time>
            <button id="delete-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#dc3545" d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"/></svg>
            </button>
          </footer>
        </li>
      </ul>
    `;

  // 삭제 버튼 이벤트 리스너 추가
  // 삭제 버튼 리스너
  const deleteButton = document.getElementById("delete-button");
  deleteButton?.addEventListener("click", () => {
    const confirmed = confirm("이 일기를 정말 삭제하시겠습니까?");
    if (!confirmed) return;

    const index = diaryData.findIndex((d) => d.id === id);
    if (index !== -1) {
      diaryData.splice(index, 1);
      saveDiaryData();
      alert("일기가 삭제되었습니다.");
      location.hash = "#/"; // 홈으로 이동
    }
  });

  // 삭제 버튼 이벤트 리스너 추가 - 인프런 강사님 코드
  //const deleteButton = main.querySelector('.delete-button');
  //if (deleteButton) {
  //  deleteButton.addEventListener('click', (event) => {
  //    event.stopPropagation(); // 클릭 이벤트 전파 방지
  //    if (id) {
  //      const index = diaryData.findIndex(d => d.id === id);
  //      if (index !== -1) {
  //        diaryData.splice(index, 1); // 일기 데이터에서 삭제
  //        console.log(`Diary with id ${id} deleted`);
  //        // 홈으로 리다이렉트
  //        location.hash = '#/';
  //      }
  //    }
  //  });
  //}
}
