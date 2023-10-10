import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDownloadURL, ref } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "../db.js";
import { deleteMember } from "./deleteMember.js";

export const showMembers = async () => {
  const docs = await getDocs(collection(db, "members"));
  
  docs.forEach((document) => {
    const row = document.data();

    const id = document.id;
    const imageUrl = row["imageUrl"];
    const position = row["position"];
    const name = row["name"];
    const dropdown = row["name"];

    getDownloadURL(ref(storage, imageUrl))
        .then((url) => {
            const html = `
                <div class="team-member">
                    <div  class="dropmenu">
                        <ul id="dm_ul">
                          <li id=${dropdown} >
                            <a id="test" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" color="white" overflow:"hidden" width="40" height="40" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                              </svg>
                          </a>
                            <ul >
                              <li><a href="#" id=${id} >삭제</a></li>
                              <li><a href="edit.html?id=${id}">수정</a></li>
                            </ul>
                          </li>
                          </ul>
                      </div>
                    <a href="intro.html?id=${id}">
                        <img src=${url} alt=${position} style="width: 230px; height: 300px;">
                    </a>
                    <h3>${name}</h3>
                    <p>${position}</p>
                </div>
            `;

            $('#wrapper').append(html);
            
            $(`#${dropdown}`).click(function(e){
                $(this).find("ul").stop().fadeToggle(300); 
            });

            $(`#${id}`).click(() => {deleteMember(id, imageUrl)});
        });
    });
}