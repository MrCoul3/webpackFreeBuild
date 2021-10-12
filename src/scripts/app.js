import Program from './components/Program';
let url = 'https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses'
// title
// 2 модуля specializedSubjects

function getApi(url, method) {
    return fetch(url, {method})
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return new Error(response.statusText)
            }
        })
}

const programsNames = [
    'Менеджмент в спортивных учреждениях',
    'Управление современной организацией в здравоохранении',
    'Специалист по кадровому аудиту',
    'Антикризисное управление',
    'Кадровое делопроизводство'
]


document.addEventListener('DOMContentLoaded', ()=> {
    let apiDataObj = {
        titles: programsNames,
        specializedSubjects: {
            module1: [],
            module2: []
        }
    };

    let insertPlace = document.querySelector('.inner-wrap');

    const request = getApi(url)
        .then(response => {
            const data = response.data

            programsNames.forEach(name => {

                insertPlace.insertAdjacentHTML('beforeend',
                    `<section class="program">
                        <h2 className='program-title'>${name}</h2>
                    </section>`);

                data.forEach((x, ind) => {
                    if (x.title === name && x.mbaFormat === 'online') {
                        if (ind % 2) {
                            apiDataObj.specializedSubjects.module1 = x.specializedSubjects;
                        } else {
                            apiDataObj.specializedSubjects.module2 = x.specializedSubjects;
                        }
                        let insertElement = Program(apiDataObj);
                        document.querySelector('.program').insertAdjacentHTML("beforeend", insertElement);
                        // console.log(insertElement)
                    }
                })
            })
            console.log(apiDataObj)

        })
})
