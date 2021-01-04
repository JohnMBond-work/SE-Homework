




const promise = $.ajax({
  url: 'http://www.omdbapi.com/?apikey=53aa2cd&&t=Frozen'})

  success: (data)=>{
    console.log(data);
  },
  error: ('bad request')=>{
  }
});
