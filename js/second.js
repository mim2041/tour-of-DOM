console.log('second file');
const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato';

// document.querySelectorAll
// document.querySelector

const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'my dynamic item';
secondList.appendChild(li);

const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1> My dynamic Section</h1>
<p>Extra text added inside paragraph</p>
<ul>
    <li>list item-1</li>
    <li>list item-2</li>
    <li>list item-3</li>
    <li>list item-4</li>
</ul>
`;

main.appendChild(section);

console.log('Hello this is from second js');