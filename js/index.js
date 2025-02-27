document.addEventListener("DOMContentLoaded", function () {
  // 부드러운 스크롤 기능
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // 댓글 작성 기능
  document.getElementById("submit-comment").addEventListener("click", function () {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();

    if (commentText) {
      const commentList = document.querySelector(".comment-list");
      const newComment = document.createElement("li");
      newComment.innerHTML = `
        <div class="comment-item">
          <div class="comment-author">
            <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
            <span>방문자</span>
          </div>
          <div class="comment-content">${commentText}</div>
        </div>
      `;
      commentList.appendChild(newComment);
      commentInput.value = ""; // 입력 필드 초기화
      alert("댓글이 등록되었습니다.");
    } else {
      alert("댓글을 입력해주세요!");
    }
  });
});
