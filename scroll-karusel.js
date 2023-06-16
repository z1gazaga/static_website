/* Функция "Scroll-Indicator": */
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/* Ниже описывается функция для карусели-изображений: */

let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
        showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
        function nextSlide() {
           showSlides(slideIndex += 1);
        }

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
        function previousSlide() {
           showSlides(slideIndex -= 1);  
        }

/* Устанавливаем текущий слайд: */
        function currentSlide(n) {
           showSlides(slideIndex = n);
        }

/* Функция перелистывания: */
        function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
           let slides = document.getElementsByClassName("item");
    
    /* Проверяем количество слайдов: */
            if (n > slides.length) {
               slideIndex = 1
            }
            if (n < 1) {
               slideIndex = slides.length
            }
  
    /* Проходим по каждому слайду в цикле for: */
            for (let slide of slides) {
               slide.style.display = "none";
            }
    /* Делаем элемент блочным: */
            slides[slideIndex - 1].style.display = "flex";    
        }

        window.onscroll = function() {myFunction()};