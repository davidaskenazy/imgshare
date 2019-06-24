$(function() {
  // Post Toggle View
  $('#post-comment').hide();
  $('#btn-toggle-comment').click(e => {
    e.preventDefault();
    $('#post-comment').slideToggle();
  });
  
  // Like Button Request
  $('#btn-like').click(function(e) {
    e.preventDefault();
    let imgId = $(this).data('id');
    console.log(imgId)
    $.post('/images/' + imgId + '/like')
      .done(data => {
      console.log('back:', data)
        $('.likes-count').text(data.likes);
      });
  });

  // Delete Button Request
  $('#btn-delete').click(function (e) {
    e.preventDefault();
    let $this = $(this);
    const response = confirm('Are you sure you want to delete this image?');
    if (response) {
      let imgId = $(this).data('id');
      $.ajax({
        url: '/images/' + imgId,
        type: 'DELETE'
      })
        .done(function(result) {
          $this.removeClass('btn-danger').addClass('btn-success');
          $this.find('i').removeClass('fa-times').addClass('fa-check');
          $this.append('');
          var url = "/";
          $(location).attr('href',url);
          
        });
        //
          
    }
  });


  $('#btn-like').click(function(e) {
    e.preventDefault();
    let imgId = $(this).data('id');
    console.log(imgId)
    $.post('/images/' + imgId + '/like')
      .done(data => {
      console.log('back:', data)
        $('.likes-count').text(data.likes);
      });
  });

  $('#btn-delet').click(function(e){
    e.preventDefault();
    let $this = $(this);
    const response = confirm('Are you sure you want to delete this comment?');
    if (response) {
      var imgId = $(this).data('id'); //aca esta el problema
      imgId = "a";//funciona asi, no se como pero funciona (?)
      console.log("aaa" + imgId);
      $.ajax({
        url: '/images/'+imgId+'/comment',
        type : 'DELETE'
      })
        .done(function(result){
          $this.removeClass('btn-danger').addClass('btn-success');
          $this.find('i').removeClass('fa-times').addClass('fa-check');
          var url = "/";
          $(location).attr('href',url);
        });
    }
  });
});
