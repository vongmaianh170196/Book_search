$(document).ready(function(){
  $('form').submit(function(evt){
    evt.preventDefault();
    var $searchbtn = $('.search').click();
    var $keysearch = $('.keysearch');
    var searchresult;
    
          var googleAPI="https://www.googleapis.com/books/v1/volumes?q=" + $keysearch.val() +"&maxResults=40" //url to send data to
            var googleData = {
              tags: $keysearch.val(),
              format: 'json'
            }//data to send to
            function SearchBook(data){
               searchresult ='<ul>';
              $.each(data.items, function(i, volumeInfo){
                
                  searchresult += '<li><div>' + data.items[i].volumeInfo.title;
                  searchresult += '<br> <a href ="' + data.items[i].volumeInfo.infoLink + '">'
                  searchresult +=' <img src ="' + data.items[i].volumeInfo.imageLinks.thumbnail + '">';
                  searchresult +='</div></li>';
              
                
              })//end search function
              
              searchresult +='</ul>';
              $('.result').html(searchresult);
            }
          
            $.getJSON(googleAPI, googleData, SearchBook);
       
       })
  
}); //end ready