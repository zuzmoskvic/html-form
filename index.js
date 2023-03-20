const partnerURL = document.querySelector("#partnerURL");
const partnerHash = document.querySelector("#partnerHash");
const tourIDs = document.querySelector("#tourIDs");
const generateButton = document.querySelector("#generate-button");


generateButton.addEventListener('submit', function(event) {
    event.preventDefault();
    const partnerURL = document.querySelector('#partnerURL').value;
    const partnerHash = document.querySelector('#partnerHash').value;
    const tourIDs = document.querySelector('#tourIDs').value;


    const newUrl = `${partnerURL}?partner_id=${partnerHash}&partner_ticketing_activity_ids=${tourIDs}`;

    alert(`New URL: ${newUrl}`);
  });