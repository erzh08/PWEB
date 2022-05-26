function something() {
    for (const elem of document.forms.form1.elements) {
        if (elem.id == "mai" && elem.checked) {
            console.log(document.forms.form1.elements['text'])
            document.forms.form1.elements.text.value = document.forms.form1.elements.text.value.toUpperCase();
        } else if (elem.id == "men" && elem.checked) {
            console.log(document.forms.form1.elements['text'])
            document.forms.form1.elements.text.value = document.forms.form1.elements.text.value.toLowerCase();
        }
    }
}

window.onload = () => {
    let text = document.forms.form1.elements.text;
    let men = document.forms.form1.elements['men'];
    let mai = document.forms.form1.elements['mai'];
    console.log(mai);    
};
