const questionElement = document.querySelectorAll('.question');

for(let i = 0; i< questionElement.length; i++){
    questionElement[i].addEventListener('click', function(){
        this.classList.toggle('active');

         const answerElement = this.nextElementSibling;
         if(answerElement.style.height){
            answerElement.style.height = null;
          }else{
            answerElement.style.height = answerElement.scrollHeight + 'px';
          }
    });
}