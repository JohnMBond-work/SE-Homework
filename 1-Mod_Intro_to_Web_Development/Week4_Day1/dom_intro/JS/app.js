console.log('stranger things are coming:');

$(() => {
const addH2 = () => {
  $h2 = $('<h2>').text("Just getting started");
  $('body').append($h2);
}

const changeH2 = () +> {
  $('h2').text("Getting warmed up");
}

$(() +> {
  addH2();
  changeH2();
})

addH2();
});
