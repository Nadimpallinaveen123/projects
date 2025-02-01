
// JavaScript for toggling dropdown
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        dropdownContent.classList.toggle('show'); // Toggle dropdown visibility
        //dropbtn.classList.toggle('active'); // Toggle arrow rotation
    });

    // Close the dropdown if clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
            //dropbtn.classList.remove('active');
        }
    });
});
