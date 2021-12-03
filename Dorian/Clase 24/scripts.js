/* 
document.getElementById('id') - Acceder a un elemento a través de su id

document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

//acceso a id = "title"
const title = document.getElementById('title');
console.log(title);
//leer contenido
console.log(title.textContent);
//escribir contenido de forma dinámica
title.textContent = 'Accediendo a Nodos';
console.log(title.textContent);


//class = "paragraph"
const paragraph1 = document.querySelector('.paragraph:nth-child(1)');
console.log(paragraph1.textContent);
const paragraph2 = document.querySelector('.paragraph:nth-child(2)');
console.log(paragraph2.textContent);
const paragraph3 = document.querySelector('.paragraph:nth-child(3)');
console.log(paragraph3.textContent);
const span = document.getElementById('title').querySelector("span")

//también se puede acceder desde un elemento
const paragraph = document.querySelector('.paragraph');
const span2 = paragraph.querySelector("span");
console.log(span2);
console.log(span2.textContent);

//const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

//const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

//paragraphs[0].style.color = 'red'

//paragraphs.map(p => p.style.color = 'green')

//paragraphsSpread.map(p => p.style.color = 'green')

//paragraphsArray.map(p=>p.style.color='blue')