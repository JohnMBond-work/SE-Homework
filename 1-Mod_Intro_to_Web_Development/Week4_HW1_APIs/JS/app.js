

$(() => {
  $('form').on('click', (e) => {
    e.preventDefault();
    // This will grab the user input
    let userInput = $('input[type="number"]').val();
    const button = $(e.target).val();
    console.log(button.toUpperCase());
    if (userInput < 1) {
      userInput = 10;
    }
    let container = document.getElementById('container');
    container.style.display = 'block';
    $.ajax({
      url:
        'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' +
        button.toUpperCase(),
    }).then(
      (data) => {
        // This will print the number of complaints that are input
        var count = 0;
        for (let index = 0; index < data.length; index++) {
          if (data[index].agency == 'NYPD' && count < Number(userInput)) {
            count++;
            $('ol').append(`
          <li>
          <strong>Borough</strong><span id="borough">${
            data[index].borough
          }</span>
          <br>
          <strong>Descriptor</strong>:<span id="descriptor">${
            data[index].descriptor
          }</span>
          <br>
          <strong>Agency</strong>:<span id="agency">${data[index].agency}</span>
          <br>
          <div ><strong>Resolution description</strong>:<span><br><section>${
            data[index].resolution_description
          }</section></span></div>
          <input type="submit" value="NYPD Response" onclick="response(${count.toString()})" class="btn btn-warning">
          </li>

          <hr>
          `);

            console.log(data[index]);
          }
        }
      },
      () => {
        // Output a bad request
        console.log('Bad Request');
      }
    );
  });
});
// This function will animation the click of the NYPD response
function response(x) {
  var myNodelist = document.querySelectorAll('div');
  console.log(x);
  $(myNodelist[x]).animate(
    {
      height: 'toggle',
    },
    'slow'
  );
}
function myReset() {
  location.reload(true);
}
