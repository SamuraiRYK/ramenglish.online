const lessonCard = document.getElementById("lessonCard");
const lessonModal = document.getElementById("lessonModal");
const closeModal = document.getElementById("closeModal");

lessonCard.addEventListener("click", () => {

    lessonModal.classList.add("active");

    document.body.style.overflow = "hidden";

});

closeModal.addEventListener("click", closeLessonModal);

lessonModal.addEventListener("click", function(e){

    if(e.target===lessonModal){

        closeLessonModal();

    }

});

document.addEventListener("keydown", function(e){

    if(e.key==="Escape"){

        closeLessonModal();

    }

});

function closeLessonModal(){

    lessonModal.classList.remove("active");

    document.body.style.overflow="";

}