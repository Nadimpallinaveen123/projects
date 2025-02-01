 $(document).ready(function () {

          $("#details").show();

          $("#my-details").click(function(){
          $("#details").show();
          $("#profile").hide();
          $("#password").hide();
          $("#my-details").addClass("tab-active");
          $("#my-profile").removeClass("tab-active");
          $("#my-password").removeClass("tab-active");
        });

        $("#my-profile").click(function(){
          $("#details").hide();
          $("#profile").show();
          $("#password").hide();
          $("#my-details").removeClass("tab-active");
          $("#my-profile").addClass("tab-active");
          $("#my-password").removeClass("tab-active");
        });

        $("#my-password").click(function(){
          $("#details").hide();
          $("#profile").hide();
          $("#password").show();
          $("#my-password").addClass("tab-active");
          $("#my-details").removeClass("tab-active");
          $("#my-profile").removeClass("tab-active");
        });

     //table 
        $('#myTable').DataTable();
      


        
        });

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



        
   