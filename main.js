import './style.css';
import smLogo from '/sm.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://forms.gle/ppxEJgGdZW6iskdq7" target="_blank">
      <img src="${smLogo}" class="logo" alt="Star Materia logo" />
    </a>
    <h1>STAR MATERIA</h1>
    <p>Developing the worlds first continuous lactate monitor for athletes. Train better by following your body's internal load and 
    track your progress on our app with AI integrationd. Stay tuned for more updates. </p>
    <p class="read-the-docs">
      Click on the Star Materia logo to learn more
    </p>
  </div>
`;
