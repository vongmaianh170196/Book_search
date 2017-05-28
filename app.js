$(document).ready(function(){
  $('form').submit(function(evt){
    evt.preventDefault();
    var $searchbtn = $('.search').click();
    var $keysearch = $('.keysearch');
    var searchresult;
     if($('.opt2').prop("checked")){
         var googleAPI="https://www.googleapis.com/books/v1/volumes?q=+inauthor:" + $keysearch.val();
         var googleData = {
                    format: 'json'
                  }//data to send to
                  /*SEARCH BY AUTHOR */
         function SearchBook(data){
                 searchresult ='<ul>';
                      $.each(data.items, function(i, volumeInfo){
                             searchresult += '<li><div><span>Author: ' + data.items[i].volumeInfo.authors;
                             searchresult += '<li><div><span>Book title: ' + data.items[i].volumeInfo.title;
                             //searchresult += '</span><br> <a href ="' + data.items[i].volumeInfo.infoLink + '"> <img src ="' + data.items[i].volumeInfo.imageLinks.thumbnail + '">';
                             /*Khong hien dc hinh anh */
                             searchresult +='</div></li>';
                        }//end search function
                  )
                  searchresult +='</ul>';
                            $('.result').html(searchresult);
         }    
                
                  $.getJSON(googleAPI, googleData, SearchBook);
                }
                /*SEARCH BY TITLE */
            else if($('.opt1').prop("checked")){
            googleAPI="https://www.googleapis.com/books/v1/volumes?q=+intitle:" + $keysearch.val();
            googleData = {
                        format: 'json'
                      }//data to send to
            function SearchBook(data){
                   searchresult ='<ul>';
                          $.each(data.items, function(i, volumeInfo){
                                searchresult += '<li><div> ' + data.items[i].volumeInfo.title + ' <p> Click here for more info: </p> <a href ="' + data.items[i].volumeInfo.infoLink + '"></div></li>';
                            }//end search function
                      )
                      searchresult +='</ul>';
                                $('.result').html(searchresult);
            }    
                    
                      $.getJSON(googleAPI, googleData, SearchBook);
            }
       else{
                googleAPI="https://www.googleapis.com/books/v1/volumes?q=" + $keysearch.val(); //url to send data to
            googleData = {
              tags: $keysearch.val(),
              format: 'json'
            }//data to send to
            function SearchBook(data){
               searchresult ='<ul>';
              $.each(data.items, function(i, volumeInfo){
                
                  searchresult += '<li><div>' + data.items[i].volumeInfo.title;
                  searchresult += '<br> <a href ="' + data.items[i].volumeInfo.infoLink + '"> <img src ="' + data.items[i].volumeInfo.imageLinks.thumbnail + '">';
                  searchresult +='</div></li>';
              
                
              })//end search function
              
              searchresult +='</ul>';
              $('.result').html(searchresult);
            }
          
            $.getJSON(googleAPI, googleData, SearchBook);
            
       }
       })
  
}); //end ready