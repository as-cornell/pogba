(function ($) {
  'use strict';
  Drupal.behaviors.simple_instagram_feed = {
    attach: function (context, settings) {
      var data = settings.simple_instagram_feed;
      var block_target;
      $(function () {
        var instagram_username = data.instagram_username;
        var display_profile = data.instagram_display_profile;
        var display_biography = data.instagram_display_biography;
        var items = data.instagram_items;
        var styling = (data.instagram_styling === 'true' ? true : false);
        var items_per_row = data.instagram_items_per_row;
        // Panel pane or block?
        if ($('.pane-simple-instagram-feed-simple-instagram-block')[0]) {
          block_target = '.pane-simple-instagram-feed-simple-instagram-block';
        }
        else {
          block_target = '.block-simple-instagram-feed';
        }
        var settings = {
          username: instagram_username,
          container: block_target + ' .instagram-feed',
          display_profile: display_profile,
          display_biography: display_biography,
          display_gallery: true,
          callback: null,
          styling: styling,
          items: items,
          margin: 0.25
        };

        if (styling) {
          settings.items_per_row = items_per_row;
        }

        $.instagramFeed(settings);
      });
    }
  };
})(jQuery);
