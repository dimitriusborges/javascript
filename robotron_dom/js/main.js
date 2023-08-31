const robotron = document.querySelector('#robotron')

/* [] looks for data attributes, which are defined by "data-<desired_name>". Although the "data"
part is optional (you can define a data attribute just by using a not-reserved name), it is a good
practice, to help readability.
   It can (it is not mandatory) carry a value: "data-<desired_name>=<desired_value>"
and its value can be accessed with "evt.target.dataset.<desired_name>"
 */
const attrsControl = document.querySelectorAll('[data-controle]')
const skillsControl = document.querySelectorAll('[data-skill]')


function changeAttr(attrNode, operation) {
    const attr = attrNode.querySelector('[data-contador]')

    if (operation === '+') {
        attr.value = parseInt(attr.value) + 1;
        changeSkills(attr.dataset.contador, operation)
    }
    if (operation === '-') {
        const curVal = parseInt(attr.value, operation);
        if (curVal > 0) {
            attr.value = curVal - 1;
            changeSkills(attr.dataset.contador, operation)
        }

    }

}

function changeSkills(skillNode, operation) {

    const newValues = pecas[skillNode]

    skillsControl.forEach((elementSkill) => {

        const changeVal = parseInt(newValues[elementSkill.dataset.skill])
        const currVal = parseInt(elementSkill.textContent)

        let newVal = 0

        if(operation === '+') {
            newVal = (currVal + changeVal)
        }
        else{
            newVal = (currVal - changeVal).toString()
        }

        elementSkill.textContent = newVal.toString()
    })


}

function hello(nome){
    console.log(`oi ${nome}`);
}

attrsControl.forEach(attrCtrl => {
    attrCtrl.onclick = (evt) => {
        changeAttr(evt.target.parentNode, evt.target.dataset.controle)
    }

})

robotron.addEventListener("click", () => {
    hello('Robotron');
})

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}