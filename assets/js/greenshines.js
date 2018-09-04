<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      <script src="jquery.fitvids.js"></script>
      <script>
        // Basic FitVids Test
        $("#content").fitVids();
        // Custom selector and No-Double-Wrapping Prevention Test
        $("#content").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});
      </script>
      

<!-- audio -->
<script src="http://greenshines.com/assets/audiojs/audiojs/audio.min.js"></script>
<script>
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });
</script>