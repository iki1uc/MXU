<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>MXU Channel</title>
</head>

<body>

<h1>MXU CHANNEL</h1>
<div id="channel"></div>

<script type="module">
  import * as MXU from "./mxu.js";
  import { AXINXA } from "./AXINXA.js";

  MXU.channel("channel");
  AXINXA.attach(MXU);
</script>

</body>
</html>
