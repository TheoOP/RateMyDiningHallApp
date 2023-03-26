

$( document ).ready(function() {

    function addReview(username, overallStars, tStars, qStars, sStars, reviewText, numUpvotes, numDownvotes, comments, postId){
        var reviewAppend = '<div class="reviewPost"> ' +
        '<h2 class="username">' + username + '</h2> ';
               
        for(i = 1; i <= 5; i++){
            
            if(i <= overallStars){
                 reviewAppend += '<span class="fa fa-star fa-2x highlight"></span>';
            }
            else{
                 reviewAppend += '<span class="fa fa-star fa-2x"></span>';
            }       
        }
        
         reviewAppend += '<h3 class="reviewText">' + reviewText + '</h3>' +
        '<span class="numVotes" id="numUpvotes' + postId +'">' + numUpvotes + '</span>' +
       '<label class="upvote">' +
         '<input type="checkbox" name="upvoteCheck" class="upvoteCheckbox" id="upvote' + postId+ '">' +   
          '<span class="far fa-arrow-alt-circle-up fa-2x unchecked"></span>' +
           '<span class="fas fa-arrow-alt-circle-up fa-2x checked"></span>' +
        '</label>' +
        '<span class="numVotes"id="numDownvotes' + postId +'">' + numDownvotes + '</span>' +
        '<label class="downvote">' +
         '<input type="checkbox" name="downvoteCheck" class="downvoteCheckbox"id="downvote' + postId+ '">' +         
          '<span class="far fa-arrow-alt-circle-down fa-2x unchecked"></span>' +
           '<span class="fas fa-arrow-alt-circle-down fa-2x checked"></span>' +
        '</label>' +

        '<label class="expandDetails">' +
            '<input type="checkbox" name="expandDetailsCheck" class="expandDetailsCheckbox" id="ED' + postId + '">' + 
            'View more details&nbsp;&nbsp;' +       
            '<span class="fas fa-angle-right unchecked"></span>' +
            '<span class="fas fa-angle-down checked"></span>' +
        '</label>' +
        '<div id="EDDiv' + postId + '" hidden>' + 

        //for loops for view more details, content gets placed in a hidden container
        '<hr>Taste:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        for(i = 1; i <= 5; i++){
            
            if(i <= tStars){
                 reviewAppend += '<span class="fa fa-star highlight"></span>';
            }
            else{
                 reviewAppend += '<span class="fa fa-star"></span>';
            }          
        }

        reviewAppend += '<br>Quality:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        for(i = 1; i <= 5; i++){
            
            if(i <= qStars){
                 reviewAppend += '<span class="fa fa-star highlight"></span>';
            }
            else{
                 reviewAppend += '<span class="fa fa-star"></span>';
            }          
        }

        reviewAppend += '<br>Selection:&nbsp;&nbsp;&nbsp;'
        for(i = 1; i <= 5; i++){
            
            if(i <= sStars){
                 reviewAppend += '<span class="fa fa-star highlight"></span>';
            }
            else{
                 reviewAppend += '<span class="fa fa-star"></span>';
            }          
        }
        
         reviewAppend += '<br><hr></div>' +

        '<br>' +

        '<div class="comments">' +
        '<label class="expandComments">' +
            '<input type="checkbox" name="expandDetailsCheck" class="expandDetailsCheckbox">' +  
            '<span class="expandCommentsHeader">Expand comments&nbsp;&nbsp;</span>' +
            '<span class="fas fa-angle-right unchecked"></span>' +
            '<span class="fas fa-angle-down checked"></span>' +
        '</label>' +
    '</div>' +
    '</div>';    

        $('#reviewBody').append(reviewAppend);

        //show if checked hide if not checked 
        $('#ED'+postId).change(           
            function(){
                if ($(this).is(':checked')) {                       
                $('#EDDiv'+postId).show();  
    }
    else{
        $('#EDDiv'+postId).hide();       
    }
});

$('#upvote'+postId).change(           
    function(){
        var temp = numUpvotes;

        if ($(this).is(':checked')) {   
        temp = temp + 1;       
        if($('#downvote'+postId).is(":checked")){
        $('#numDownvotes'+postId).html(numDownvotes);
        $('#downvote'+postId).prop("checked", false); 
        }               
               
             
}
        $('#numUpvotes'+postId).html(temp);
});

$('#downvote'+postId).change(           
    function(){
        var temp = numDownvotes;
        if ($(this).is(':checked')) {    
            temp = temp + 1;  
             if($('#upvote'+postId).is(":checked")){
                $('#numUpvotes'+postId).html(numUpvotes);
                $('#upvote'+postId).prop("checked", false);    
                }                                  
}
        $('#numDownvotes'+postId).html(temp);
});

}

addReview('APPENDED1', 4, 1, 0, 5, 'the burger man was dfelivesa', 7, 3, 'erm', 1);
    addReview('APPENDED2', 4, 1, 0, 5, 'the dog man was dfelivesa', 7, 3, 'erm', 2);
    addReview('APPENDED3', 4, 1, 0, 5, 'the sand man was dfelivesa', 7, 3, 'erm', 3);
    addReview('APPENDED1', 4, 1, 0, 5, 'the burger man was dfelivesa', 7, 3, 'erm', 4);
    addReview('APPENDED2', 4, 1, 0, 5, 'the dog man was dfelivesa', 7, 3, 'erm', 5);
    addReview('APPENDED3', 4, 1, 0, 5, 'the sand man was dfelivesa', 7, 3, 'erm', 6);
});