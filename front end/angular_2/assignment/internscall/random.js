let spokenStudents = [];
const divEl = document.getElementById('content');
const hEl = document.createElement('h1');
hEl.textContent = 'Please Unmute your mic and turn on vedio';
const NameEl = document.createElement('h2');

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'Start';
const yetToSpeakDiv = document.createElement('div');
const spokenStudentsDiv = document.createElement('div');
const yetToSpeakEl = document.createElement('h3');
const spokenStudentsEl = document.createElement('h3');
divEl.appendChild(buttonEl);

let yetToSpeak = [];

const students = [
    'Santhosh',
    'Nathis',
    'Udhaya Kuamr',
    'Hari Prasath',
    'Divya',
    'Srihari',
    'Hemanath',
    'Grace',
    'Thamilarasan',
    'Sai Varun',
    'Bala Surya',
    'Sudhakar',
    'Sachin'
]

yetToSpeak = students;

function getRandomStudent() {
    const number = Math.floor(Math.random() * students.length);
    NameEl.textContent = yetToSpeak[number];
    spokenStudents.push(students[number]);

    let message = "are waiting to speak with you ";
    yetToSpeak.splice(number, 1);
    if (yetToSpeak.length === 0) {
        message = "Everyone Spoken click restart to start again ";
        buttonEl.className = 'hide';
        hEl.className = 'hide';
    }
    
    yetToSpeakEl.innerHTML = ` ${yetToSpeak} ${message}`;
}

function appendYetToSpeakEl() {
    yetToSpeakDiv.appendChild(yetToSpeakEl);
    divEl.appendChild(yetToSpeakDiv);
}

function appendSpokenStudentsEl() {
    spokenStudentsDiv.appendChild(spokenStudentsEl);
    divEl.appendChild(spokenStudentsDiv);
}

buttonEl.addEventListener('click', () => {
    
    buttonEl.innerHTML = 'Next';
    spokenStudentsEl.innerHTML = `${"Spoken students : "} ${spokenStudents}`;

    getRandomStudent();
    divEl.appendChild(NameEl);
    divEl.appendChild(hEl);
    setTimeout(appendYetToSpeakEl,2000);
    setTimeout(appendSpokenStudentsEl,4000);
})