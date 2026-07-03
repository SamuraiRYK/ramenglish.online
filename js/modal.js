const lessonCard = document.getElementById("lesson-card");

const lessonModal = document.getElementById("lesson-modal");

const closeModal = document.getElementById("close-modal");

lessonCard.addEventListener("click", () => {

    lessonModal.classList.add("active");

});

closeModal.addEventListener("click", () => {

    lessonModal.classList.remove("active");

});

lessonModal.addEventListener("click", (e) => {

    if (e.target === lessonModal) {

        lessonModal.classList.remove("active");

    }

});