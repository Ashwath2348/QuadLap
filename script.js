function toggleLanguage(lang) {
  const languages = ['java', 'python', 'c'];
  languages.forEach(id => {
    document.getElementById(id).style.display = (id === lang) ? 'block' : 'none';
  });
}
