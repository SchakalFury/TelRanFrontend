"use strict"


//"- Откуда у тебя такой код?"
//"- Я его украл :)"©

/**
 * Описание занятия: - Создать квадратный div средствами JS и при наведении курсора на него цвет div-а меняется на введенный пользователем через prompt (вариант со * - цвет рандомно меняется, без пользовательского ввода, для этого можно посмотреть в сторону нового метода Math.random())
 */



// const div = document.createElement('div');
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.border = "1px solid black"
// const mainElem = document.querySelector('main')
// mainElem.append(div);
// const color = prompt('Enter color name (red, yellow, green)')

// if(color.length === 0){
//     div.onmouseover = function() {
//         this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
//       }
// }else{
// div.onmouseover = function() {
//     this.style.backgroundColor = color
//   }
// }


/**
 * Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами. При повторном нажатии класс active удаляется.
 */

// const mainElement = document.querySelector('main');
// for(let i = 0; i <= 9; i++){
//     const div = document.createElement('div');
//     div.textContent = i;
//     div.classList.add("default");
//     div.addEventListener('click', () => {
//         if(div.className == "default"){
//             div.classList.add("active")
//         }
//        else{
//         div.classList.remove("active")
//        }
//      })
//     mainElement.append(div)
// }

/**
 * Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно. 
Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на карточку один параграф получает класс с display none а второй с display block.
 */


// const peoples = [{
//     en: 'Stepankov Dmitry Petrovich',
//     ru: 'Степанков Дмитрий Петрович'
// }, 
// {
//     en: 'Golubov Maxim Ignatievich',
//     ru: 'Голубов Максим Игнатьевич'
// }, {
//     en: 'Shchedrin Valentin Sebastyanovich',
//     ru: 'Щедрин Валентин Себастьянович'
// }, {
//     en: 'Grebenshchikova Milana Timofeevna',
//     ru: 'Гребенщикова Милана Тимофеевна'
// }]

//  const mainElement = document.querySelector('main');
//  for(let i = 0; i < peoples.length; i++){
//      const div = document.createElement('div');

//      var elem1 = document.createElement('p');
//      var elem2 = document.createElement('p');

//      div.appendChild(elem1).innerHTML = peoples[i].en;
//      div.appendChild(elem2).innerHTML = peoples[i].ru;

//      div.addEventListener('click', () => {

        
//      var first = div.getElementsByTagName("p")[0];
//      var second = div.getElementsByTagName("p")[1];
  
  
        

//       if(first.className !== "none"){
//         first.classList.add("none");
//         first.classList.remove("block")
//         second.classList.add("block");
//         second.classList.remove("none")
      
        
//       }else if(first.className == "none"){
//         first.classList.add("block");
//         first.classList.remove("none");
//         second.classList.add("none");
//         second.classList.add("block");
       
//       }
      
      
//              })
//     div.classList.add("def");
//      mainElement.append(div)
//  }


/**
 * Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на парагараф текст должен меняться на звездочки. При повторном клике мы должны вновь увидеть текст.
 */

const strings = ["  1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, magnam expedita. Eius ut, cumque non beatae eaque consectetur aliquid, commodi dolorem suscipit veritatis repudiandae reprehenderit ad pariatur iste labore ipsam hic? Modi consectetur repudiandae molestias voluptatum eum cupiditate accusantium sit libero, quis odit quos repellat, sed magni vitae velit nesciunt!", 
"   2.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, magnam expedita. Eius ut, cumque non beatae eaque consectetur aliquid, commodi dolorem suscipit veritatis repudiandae reprehenderit ad pariatur iste labore ipsam hic? Modi consectetur repudiandae molestias voluptatum eum cupiditate accusantium sit libero, quis odit quos repellat, sed magni vitae velit nesciunt!",
"   3.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, magnam expedita. Eius ut, cumque non beatae eaque consectetur aliquid, commodi dolorem suscipit veritatis repudiandae reprehenderit ad pariatur iste labore ipsam hic? Modi consectetur repudiandae molestias voluptatum eum cupiditate accusantium sit libero, quis odit quos repellat, sed magni vitae velit nesciunt!", 
"   4.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, magnam expedita. Eius ut, cumque non beatae eaque consectetur aliquid, commodi dolorem suscipit veritatis repudiandae reprehenderit ad pariatur iste labore ipsam hic? Modi consectetur repudiandae molestias voluptatum eum cupiditate accusantium sit libero, quis odit quos repellat, sed magni vitae velit nesciunt!",
"   5.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, magnam expedita. Eius ut, cumque non beatae eaque consectetur aliquid, commodi dolorem suscipit veritatis repudiandae reprehenderit ad pariatur iste labore ipsam hic? Modi consectetur repudiandae molestias voluptatum eum cupiditate accusantium sit libero, quis odit quos repellat, sed magni vitae velit nesciunt!"]



//   const mainElement = document.querySelector('main');
//  for(let i = 0; i < strings.length; i++){
//      const div = document.createElement('div');

//      var elem1 = document.createElement('p');
//      var elem2 = document.createElement('p');

//      div.appendChild(elem1).innerHTML = strings[i];
//      div.appendChild(elem2).innerHTML = strings[i].replace(/./g, '*');
     

//      div.addEventListener('click', () => {

        
//      var first = div.getElementsByTagName("p")[0];
//      var second = div.getElementsByTagName("p")[1];
  
  
        

//       if(first.className !== "none"){
//         first.classList.add("none");
//         first.classList.remove("block")
//         second.classList.add("block");
//         second.classList.remove("none")
      
        
//       }else if(first.className == "none"){
//         first.classList.add("block");
//         first.classList.remove("none");
//         second.classList.add("none");
//         second.classList.add("block");
       
//       }
      
      
//              })
    
//      mainElement.append(div)
//  }

/**
 * В js объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь нажимая на маленькие картинки видит их отображение в большем размере.
 */
const images = ["https://housaqua.com/uploads/posts/2015-09/1443115892_tropicheskiy-akvarium-1.jpg",
                "https://fullhdoboi.ru/wp-content/uploads/_ph/3/361047914.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6K3aClJ0VC2i6kBQqX7UfayplydRxkLS9BVExcH8VKnQU7xT_UqtmCFKzbkcMXormQQ&usqp=CAU", "https://moyaokruga.ru/img/image_big/9bb6c674-5259-4abb-ac75-8585bcee498c.jpg"]

  const mainElement = document.querySelector('main');
 for(let i = 0; i < images.length; i++){
     const div = document.createElement('div');
     var elem1 = document.createElement('img');
     div.appendChild(elem1).innerHTML = images[i];
     div.classList.add("def");
     mainElement.append(div)
}