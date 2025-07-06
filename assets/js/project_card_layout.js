var $grid = $('#projects');

    // $grid.masonry({ percentPosition: true });
    // $grid.masonry('layout');

    // Trigger after images load.
    $grid.imagesLoaded().progress(function() {
      $grid.masonry({ percentPosition: true });
      $grid.masonry('layout');
    });