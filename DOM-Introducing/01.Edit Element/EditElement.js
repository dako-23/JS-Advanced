function editElement(reference, match, replacer) {

    const regexp = new RegExp(match, 'g')
    reference.textContent = reference.textContent.replace(regexp, replacer)


}