function editElement(ref, match,replacer) {
    // TODO
    
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited;
  
}