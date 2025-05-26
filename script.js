function handleReservation(event) {
    event.preventDefault();

    const nameInput = event.target.querySelector('input[type="text"]');
    const customerName = nameInput.value;

    const namePlaceholder = document.getElementById('customer-name');
    namePlaceholder.textContent = customerName;

    const popup = document.getElementById('reservation-popup');
    popup.classList.remove('hidden');


    event.target.reset();
}

function closePopup() {
    document.getElementById('reservation-popup').classList.add('hidden');
}

