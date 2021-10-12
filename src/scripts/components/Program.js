export default function Program(obj) {
    let program = document.createElement('section');
    program.className = 'program';
    let a = null;
    obj.specializedSubjects.module1.forEach(x => {
        a = x;
    })

    let html = (
        `
            <div class="flex-wrapper">
                <div class="program-module">
                     <div class="decorative-line"></div>
                     <div class="flex-wrapper">
                          <h3 class="program-module-number">1 модуль</h3> 
                           <div class="program-module-list">
                                <ul>
                                    <li>${a}</li>
                                </ul>
                           </div>
                    </div>
                </div>
                <div class="program-module">
                     <div class="decorative-line"></div>
                     <div class="flex-wrapper">
                          <h3 class="program-module-number">2 модуль</h3> 
                           <div class="program-module-list">
                                <ul>
                                    <li>${obj.specializedSubjects.module2}</li>
                                </ul>
                           </div>
                    </div>
                </div>
             </div>
        `
    )
    // return program;
    return html;
}