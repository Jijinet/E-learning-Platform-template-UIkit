$( document ).ready(function() {
  
    const editProfile=$('#edit-profile');
    const saveProfile=$('#save-profile');
    const cancelProfileForm=$('.cancel-profile-form');
    const cancelCourseForm=$('.cancel-course-form');


    const addContent=$('#add-content');
    const addContent2=$('#add-content2');
    const addCourse=$('#add-course');

    const profileDescription=$('#profile-description');
    const profileForm=$('#profile-form');

    const contentForm=$('#content-form');
    const addContentContainer=$('#add-content-container');
    const contentContainer=$('#content-container');

    $(editProfile).on('click',()=>{
      profileDescription.addClass('uk-hidden');
      profileForm.removeClass('uk-hidden');
      UIkit.switcher('.dashboard-tab').show(0);
    });

    $(saveProfile).on('click',()=>{
        profileForm.addClass('uk-hidden');
        profileDescription.removeClass('uk-hidden');
      });

      $(addContent).on('click',()=>{
        addContentContainer.addClass('uk-hidden');
        contentContainer.addClass('uk-hidden');
        contentForm.removeClass('uk-hidden');
        UIkit.switcher('.dashboard-tab').show(1);  
      });

      $(addContent2).on('click',()=>{
        addContentContainer.addClass('uk-hidden');
        contentContainer.addClass('uk-hidden');
        contentForm.removeClass('uk-hidden');
      });

      $(addCourse).on('click',()=>{
        contentForm.addClass('uk-hidden');
        contentContainer.removeClass('uk-hidden');
      });

      
      $(cancelProfileForm).on('click',()=>{
        profileForm.addClass('uk-hidden');
        profileDescription.removeClass('uk-hidden');
      });

      $(cancelCourseForm).on('click',()=>{
        contentForm.addClass('uk-hidden');
        addContentContainer.removeClass('uk-hidden');
      });


      // ! content table

      const addContentTable=$('#add-content-table');
      
      const contentInfoContainer=$('#content-info-container');
      const contentTableContainer=$('#content-table-container');

    

     
      
      $(addContentTable).on('click',()=>{

        let inputTitle=$('#title-content').val();
        let inputDuration=$('#duration-content').val();
        let inputUrl=$('#video').val();

        contentTableContainer.removeClass('uk-hidden');
        
        contentInfoContainer.append(`<tr id="content-element">
        <td>${inputTitle}</td>
        <td>${inputUrl}</td>
        <td>${inputDuration}</td>
        <td><a uk-icon="icon: trash; ratio: 2" id="remove-content"
                class="uk-text-danger uk-align-right"></a></td>
    </tr>`);
// todo
        inputTitle=$('#title-content').val('');
        inputDuration=$('#duration-content').val('');
        inputUrl=$('#video').val('');

      });
   
      $(document).on('click','#remove-content',()=>{
        console.log('btn clicked');
        $('#content-element').remove();
        if(contentInfoContainer.children().length > 0 ){
          contentTableContainer.removeClass('uk-hidden');
        }
   
      });

      $('#category-name').html($('#categorie-list ul li a').first().html());


      $(document).on('click','#categorie-list ul li',function(){
        let categoryName=$('#category-name');
        
        let categoryValue=$(this).children().html();
        $(categoryName).html(categoryValue);
     
        $('#categorie-list ul li').removeClass('active');
        $('#categorie-list ul li a').removeClass('active');
        $('#categorie-list ul li span').removeClass('active');
    
        $(this).addClass('active');
        $(this).children().addClass('active');
    
      });

      $(".search-form").on('submit',function(e) {
        e.preventDefault();
        let searchName=$('#search-name');
        let searchValue=$('.search-value').val();
        $(searchName).html(searchValue);
        
    });

    //! Modal Switch

    const signinBtn=$('.signin-btn');
    const signupBtn=$('.signup-btn');

    const signupContainer=$('.signup-container');
    const signinContainer=$('.signin-container');


    $(signinBtn).on('click',()=>{
        signinContainer.removeClass('uk-hidden');
        signupContainer.addClass('uk-hidden');
        console.log('clicked');
    });

    $(signupBtn).on('click',()=>{
      signupContainer.removeClass('uk-hidden');
      signinContainer.addClass('uk-hidden');
      console.log('clicked');
 
    });

    
    // ! delete instructor element

    const deleteBtn = $('.delete-btn');

    const instructorElement=$('#instructor-element');

   
    $(deleteBtn).on('click',()=>{
      if($('.checkbox-table').is(':checked')){

       $(instructorElement).remove();

      }
    });
    const descriptionContainer=$('.ql-editor');
    const descriptionValue=$('#description-value');

    $("body").on('DOMSubtreeModified', descriptionContainer, function() {
      descriptionValue.val(descriptionContainer.html());
  });

  const reviewContainer=$('#review-container');
  const addReview=$('#add-review');

  $(addReview).on('click',()=>{

    
    let image="images/default-picture.png";
    let inputDate="just now"
    let inputText=$('#title-content').val();

    
    reviewContainer.append(`<article class="uk-comment uk-comment-primary uk-margin-medium-top uk-border-rounded">
    <header class="uk-comment-header">
        <div class="uk-grid-medium uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-comment-avatar uk-border-circle" src="${image}"
                    width="80" height="80" alt="">
            </div>
            <div class="uk-width-expand">
                <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset"
                        href="student-page.html">Author</a></h4>
                <ul
                    class="uk-comment-meta uk-subnav review-time uk-subnav-divider uk-margin-remove-top">
                    <li>
                        <p href="#">${inputDate}</p>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <div class="uk-comment-body">
        <p>${inputText}</p>
    </div>
</article>`);

$('#title-content').val('');
    
 });

})