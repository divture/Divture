fetch('data.json')
  .then(response => response.json())
  .then(data => {

    // Home Section
    const homeSection = document.getElementById('home');
    homeSection.textContent = data.home.title;
    const homeDescription = document.querySelector('#service p');
    homeDescription.textContent = data.home.description;

    // Services Section
    const servicesSection = document.getElementById('service');
    servicesSection.querySelector('h2').textContent = data.services.title;
    servicesSection.querySelector('p').textContent = data.services.description;
    const servicesList = servicesSection.querySelector('ul');
    data.services.list.forEach(service => {
      const li = document.createElement('li');
      li.textContent = service;
      servicesList.appendChild(li);
    });

    // Footer
    const footer = document.querySelector('footer');
    footer.querySelector('p').textContent = data.footer.text;

  })
  .catch(error => console.error('Error loading JSON:', error));

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
