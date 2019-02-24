<?php if ( get_option( 'other_options_ga' ) ) : ?>
<!-- GAタグ -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', '<?php echo get_option( 'other_options_ga' ); ?>', 'auto');
  ga('send', 'pageview');
</script>

<!-- Adsenseタグ -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-9838334527848712",
    enable_page_level_ads: true
  });
</script>

<?php endif; ?>

<?php echo get_option( 'other_options_headcode' ); ?>