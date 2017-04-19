<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C52F24;
      padding: 0.5em 1.5em;
    }

    h1 {
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C52F24;
      line-height: 25px;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #AAA;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FFCCCC;
    }

    .hidden {
      display: none;
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a.trace-frames { color: #666; }
    a:hover { color: #C52F24; }
    a.trace-frames.selected { color: #C52F24 }

      #route_table {
    margin: 0;
    border-collapse: collapse;
  }

  #route_table thead tr {
    border-bottom: 2px solid #ddd;
  }

  #route_table thead tr.bottom {
    border-bottom: none;
  }

  #route_table thead tr.bottom th {
    padding: 10px 0;
    line-height: 15px;
  }

  #route_table tbody tr {
    border-bottom: 1px solid #ddd;
  }

  #route_table tbody tr:nth-child(odd) {
    background: #f2f2f2;
  }

  #route_table tbody.exact_matches,
  #route_table tbody.fuzzy_matches {
    background-color: LightGoldenRodYellow;
    border-bottom: solid 2px SlateGrey;
  }

  #route_table tbody.exact_matches tr,
  #route_table tbody.fuzzy_matches tr {
    background: none;
    border-bottom: none;
  }

  #route_table td {
    padding: 4px 30px;
  }

  #path_search {
    width: 80%;
    font-size: inherit;
  }

  </style>

  <script>
    var toggle = function(id) {
      var s = document.getElementById(id).style;
      s.display = s.display == 'none' ? 'block' : 'none';
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleTrace = function() {
      return toggle('blame_trace');
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

<header>
  <h1>Routing Error</h1>
</header>
<div id="container">
  <h2>No route matches [GET] &quot;/switcher/js/dmss.js&quot;</h2>

  
<p><code>Rails.root: /vagrant/src/grace_final</code></p>

<div id="traces">
    <a href="#" onclick="hide(&#39;Framework-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Application-Trace&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Framework-Trace&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Framework-Trace&#39;);show(&#39;Full-Trace&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace" style="display: block;">
      <pre><code></code></pre>
    </div>
    <div id="Framework-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/debug_exceptions.rb:53:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (3.5.0) lib/web_console/middleware.rb:135:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">web-console (3.5.0) lib/web_console/middleware.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">web-console (3.5.0) lib/web_console/middleware.rb:18:in `catch&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">web-console (3.5.0) lib/web_console/middleware.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/show_exceptions.rb:31:in `call&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">railties (5.0.2) lib/rails/rack/logger.rb:36:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">railties (5.0.2) lib/rails/rack/logger.rb:24:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">activesupport (5.0.2) lib/active_support/tagged_logging.rb:69:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">activesupport (5.0.2) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">activesupport (5.0.2) lib/active_support/tagged_logging.rb:69:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">railties (5.0.2) lib/rails/rack/logger.rb:24:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">sprockets-rails (3.2.0) lib/sprockets/rails/quiet_assets.rb:13:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/request_id.rb:24:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">rack (2.0.1) lib/rack/method_override.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (2.0.1) lib/rack/runtime.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">activesupport (5.0.2) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/executor.rb:12:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/static.rb:136:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">rack (2.0.1) lib/rack/sendfile.rb:111:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">railties (5.0.2) lib/rails/engine.rb:522:in `call&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">puma (3.8.2) lib/puma/configuration.rb:224:in `call&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">puma (3.8.2) lib/puma/server.rb:600:in `handle_request&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">puma (3.8.2) lib/puma/server.rb:435:in `process_client&#39;</a><br><a class="trace-frames" data-frame-id="24" href="#">puma (3.8.2) lib/puma/server.rb:299:in `block in run&#39;</a><br><a class="trace-frames" data-frame-id="25" href="#">puma (3.8.2) lib/puma/thread_pool.rb:120:in `block in spawn_thread&#39;</a><br></code></pre>
    </div>
    <div id="Full-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/debug_exceptions.rb:53:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (3.5.0) lib/web_console/middleware.rb:135:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">web-console (3.5.0) lib/web_console/middleware.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">web-console (3.5.0) lib/web_console/middleware.rb:18:in `catch&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">web-console (3.5.0) lib/web_console/middleware.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/show_exceptions.rb:31:in `call&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">railties (5.0.2) lib/rails/rack/logger.rb:36:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">railties (5.0.2) lib/rails/rack/logger.rb:24:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">activesupport (5.0.2) lib/active_support/tagged_logging.rb:69:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">activesupport (5.0.2) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">activesupport (5.0.2) lib/active_support/tagged_logging.rb:69:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">railties (5.0.2) lib/rails/rack/logger.rb:24:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">sprockets-rails (3.2.0) lib/sprockets/rails/quiet_assets.rb:13:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/request_id.rb:24:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">rack (2.0.1) lib/rack/method_override.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (2.0.1) lib/rack/runtime.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">activesupport (5.0.2) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/executor.rb:12:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">actionpack (5.0.2) lib/action_dispatch/middleware/static.rb:136:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">rack (2.0.1) lib/rack/sendfile.rb:111:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">railties (5.0.2) lib/rails/engine.rb:522:in `call&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">puma (3.8.2) lib/puma/configuration.rb:224:in `call&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">puma (3.8.2) lib/puma/server.rb:600:in `handle_request&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">puma (3.8.2) lib/puma/server.rb:435:in `process_client&#39;</a><br><a class="trace-frames" data-frame-id="24" href="#">puma (3.8.2) lib/puma/server.rb:299:in `block in run&#39;</a><br><a class="trace-frames" data-frame-id="25" href="#">puma (3.8.2) lib/puma/thread_pool.rb:120:in `block in spawn_thread&#39;</a><br></code></pre>
    </div>

  <script type="text/javascript">
    var traceFrames = document.getElementsByClassName('trace-frames');
    var selectedFrame, currentSource = document.getElementById('frame-source-0');

    // Add click listeners for all stack frames
    for (var i = 0; i < traceFrames.length; i++) {
      traceFrames[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target;
        var frame_id = target.dataset.frameId;

        if (selectedFrame) {
          selectedFrame.className = selectedFrame.className.replace("selected", "");
        }

        target.className += " selected";
        selectedFrame = target;

        // Change the extracted source code
        changeSourceExtract(frame_id);
      });

      function changeSourceExtract(frame_id) {
        var el = document.getElementById('frame-source-' + frame_id);
        if (currentSource && el) {
          currentSource.className += " hidden";
          el.className = el.className.replace(" hidden", "");
          currentSource = el;
        }
      }
    }
  </script>
</div>


    <h2>
      Routes
    </h2>

    <p>
      Routes match in priority from top to bottom
    </p>

    
<table id='route_table' class='route_table'>
  <thead>
    <tr>
      <th>Helper</th>
      <th>HTTP Verb</th>
      <th>Path</th>
      <th>Controller#Action</th>
    </tr>
    <tr class='bottom'>
      <th>
        <a data-route-helper="_path" title="Returns a relative path (without the http or domain)" href="#">Path</a> /
        <a data-route-helper="_url" title="Returns an absolute url (with the http and domain)" href="#">Url</a>
      </th>
      <th>
      </th>
      <th>
        <input id="search" placeholder="Path Match" type="search" name="path[]" />
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody class='exact_matches' id='exact_matches'>
  </tbody>
  <tbody class='fuzzy_matches' id='fuzzy_matches'>
  </tbody>
  <tbody>
    <tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_session'>
      new_user_session<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/sign_in(.:format)'>
    /users/sign_in(.:format)
  </td>
  <td>
    <p>devise/sessions#new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_session'>
      user_session<span class='helper'>_path</span>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/users/sign_in(.:format)'>
    /users/sign_in(.:format)
  </td>
  <td>
    <p>devise/sessions#create</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='destroy_user_session'>
      destroy_user_session<span class='helper'>_path</span>
  </td>
  <td>
    DELETE
  </td>
  <td data-route-path='/users/sign_out(.:format)'>
    /users/sign_out(.:format)
  </td>
  <td>
    <p>devise/sessions#destroy</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_password'>
      new_user_password<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/password/new(.:format)'>
    /users/password/new(.:format)
  </td>
  <td>
    <p>devise/passwords#new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_password'>
      edit_user_password<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/password/edit(.:format)'>
    /users/password/edit(.:format)
  </td>
  <td>
    <p>devise/passwords#edit</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_password'>
      user_password<span class='helper'>_path</span>
  </td>
  <td>
    PATCH
  </td>
  <td data-route-path='/users/password(.:format)'>
    /users/password(.:format)
  </td>
  <td>
    <p>devise/passwords#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PUT
  </td>
  <td data-route-path='/users/password(.:format)'>
    /users/password(.:format)
  </td>
  <td>
    <p>devise/passwords#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/users/password(.:format)'>
    /users/password(.:format)
  </td>
  <td>
    <p>devise/passwords#create</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='cancel_user_registration'>
      cancel_user_registration<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/cancel(.:format)'>
    /users/cancel(.:format)
  </td>
  <td>
    <p>devise/registrations#cancel</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user_registration'>
      new_user_registration<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/sign_up(.:format)'>
    /users/sign_up(.:format)
  </td>
  <td>
    <p>devise/registrations#new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user_registration'>
      edit_user_registration<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/edit(.:format)'>
    /users/edit(.:format)
  </td>
  <td>
    <p>devise/registrations#edit</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user_registration'>
      user_registration<span class='helper'>_path</span>
  </td>
  <td>
    PATCH
  </td>
  <td data-route-path='/users(.:format)'>
    /users(.:format)
  </td>
  <td>
    <p>devise/registrations#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PUT
  </td>
  <td data-route-path='/users(.:format)'>
    /users(.:format)
  </td>
  <td>
    <p>devise/registrations#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    DELETE
  </td>
  <td data-route-path='/users(.:format)'>
    /users(.:format)
  </td>
  <td>
    <p>devise/registrations#destroy</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/users(.:format)'>
    /users(.:format)
  </td>
  <td>
    <p>devise/registrations#create</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='root'>
      root<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/'>
    /
  </td>
  <td>
    <p>grace_finals#home</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='im_new'>
      im_new<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/im_new(.:format)'>
    /im_new(.:format)
  </td>
  <td>
    <p>grace_finals#im_new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='know_us'>
      know_us<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/know_us(.:format)'>
    /know_us(.:format)
  </td>
  <td>
    <p>grace_finals#know_us</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='what_we_do'>
      what_we_do<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/what_we_do(.:format)'>
    /what_we_do(.:format)
  </td>
  <td>
    <p>grace_finals#what_we_do</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='resources'>
      resources<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/resources(.:format)'>
    /resources(.:format)
  </td>
  <td>
    <p>grace_finals#resources</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='contribute'>
      contribute<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/contribute(.:format)'>
    /contribute(.:format)
  </td>
  <td>
    <p>grace_finals#contribute</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='contact'>
      contact<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/contact(.:format)'>
    /contact(.:format)
  </td>
  <td>
    <p>grace_finals#contact</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='sermon_series'>
      sermon_series<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/sermon_series(.:format)'>
    /sermon_series(.:format)
  </td>
  <td>
    <p>grace_finals#sermon_series</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='app'>
      app<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/app(.:format)'>
    /app(.:format)
  </td>
  <td>
    <p>grace_finals#app</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='books'>
      books<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/books(.:format)'>
    /books(.:format)
  </td>
  <td>
    <p>grace_finals#books</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='statment_of_faith'>
      statment_of_faith<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/statment_of_faith(.:format)'>
    /statment_of_faith(.:format)
  </td>
  <td>
    <p>grace_finals#statment_of_faith</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='sunday'>
      sunday<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/sunday(.:format)'>
    /sunday(.:format)
  </td>
  <td>
    <p>grace_finals#sunday</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='grace_stories'>
      grace_stories<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/grace_stories(.:format)'>
    /grace_stories(.:format)
  </td>
  <td>
    <p>grace_finals#grace_stories</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user'>
      user<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/:id(.:format)'>
    /users/:id(.:format)
  </td>
  <td>
    <p>users#show</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='events'>
      events<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/events(.:format)'>
    /events(.:format)
  </td>
  <td>
    <p>events#index</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/events(.:format)'>
    /events(.:format)
  </td>
  <td>
    <p>events#create</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_event'>
      new_event<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/events/new(.:format)'>
    /events/new(.:format)
  </td>
  <td>
    <p>events#new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_event'>
      edit_event<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/events/:id/edit(.:format)'>
    /events/:id/edit(.:format)
  </td>
  <td>
    <p>events#edit</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='event'>
      event<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/events/:id(.:format)'>
    /events/:id(.:format)
  </td>
  <td>
    <p>events#show</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PATCH
  </td>
  <td data-route-path='/events/:id(.:format)'>
    /events/:id(.:format)
  </td>
  <td>
    <p>events#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PUT
  </td>
  <td data-route-path='/events/:id(.:format)'>
    /events/:id(.:format)
  </td>
  <td>
    <p>events#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    DELETE
  </td>
  <td data-route-path='/events/:id(.:format)'>
    /events/:id(.:format)
  </td>
  <td>
    <p>events#destroy</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='photos'>
      photos<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/photos(.:format)'>
    /photos(.:format)
  </td>
  <td>
    <p>photos#index</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/photos(.:format)'>
    /photos(.:format)
  </td>
  <td>
    <p>photos#create</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_photo'>
      new_photo<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/photos/new(.:format)'>
    /photos/new(.:format)
  </td>
  <td>
    <p>photos#new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_photo'>
      edit_photo<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/photos/:id/edit(.:format)'>
    /photos/:id/edit(.:format)
  </td>
  <td>
    <p>photos#edit</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='photo'>
      photo<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/photos/:id(.:format)'>
    /photos/:id(.:format)
  </td>
  <td>
    <p>photos#show</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PATCH
  </td>
  <td data-route-path='/photos/:id(.:format)'>
    /photos/:id(.:format)
  </td>
  <td>
    <p>photos#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PUT
  </td>
  <td data-route-path='/photos/:id(.:format)'>
    /photos/:id(.:format)
  </td>
  <td>
    <p>photos#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    DELETE
  </td>
  <td data-route-path='/photos/:id(.:format)'>
    /photos/:id(.:format)
  </td>
  <td>
    <p>photos#destroy</p>
  </td>
</tr>

  </tbody>
</table>

<script type='text/javascript'>
  // support forEarch iterator on NodeList
  NodeList.prototype.forEach = Array.prototype.forEach;

  // Enables path search functionality
  function setupMatchPaths() {
    // Check if there are any matched results in a section
    function checkNoMatch(section, noMatchText) {
      if (section.children.length <= 1) {
        section.innerHTML += noMatchText;
      }
    }

    // get JSON from url and invoke callback with result
    function getJSON(url, success) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (this.status == 200)
          success(JSON.parse(this.response));
      };
      xhr.send();
    }

    function delayedKeyup(input, callback) {
      var timeout;
      input.onkeyup = function(){
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(callback, 300);
      }
    }

    // remove params or fragments
    function sanitizePath(path) {
      return path.replace(/[#?].*/, '');
    }

    var pathElements = document.querySelectorAll('#route_table [data-route-path]'),
        searchElem   = document.querySelector('#search'),
        exactSection = document.querySelector('#exact_matches'),
        fuzzySection = document.querySelector('#fuzzy_matches');

    // Remove matches when no search value is present
    searchElem.onblur = function(e) {
      if (searchElem.value === "") {
        exactSection.innerHTML = "";
        fuzzySection.innerHTML = "";
      }
    }

    // On key press perform a search for matching paths
    delayedKeyup(searchElem, function() {
      var path = sanitizePath(searchElem.value),
          defaultExactMatch = '<tr><th colspan="4">Paths Matching (' + path +'):</th></tr>',
          defaultFuzzyMatch = '<tr><th colspan="4">Paths Containing (' + path +'):</th></tr>',
          noExactMatch      = '<tr><th colspan="4">No Exact Matches Found</th></tr>',
          noFuzzyMatch      = '<tr><th colspan="4">No Fuzzy Matches Found</th></tr>';

      if (!path)
        return searchElem.onblur();

      getJSON('/rails/info/routes?path=' + path, function(matches){
        // Clear out results section
        exactSection.innerHTML = defaultExactMatch;
        fuzzySection.innerHTML = defaultFuzzyMatch;

        // Display exact matches and fuzzy matches
        pathElements.forEach(function(elem) {
          var elemPath = elem.getAttribute('data-route-path');

          if (matches['exact'].indexOf(elemPath) != -1)
            exactSection.appendChild(elem.parentNode.cloneNode(true));

          if (matches['fuzzy'].indexOf(elemPath) != -1)
            fuzzySection.appendChild(elem.parentNode.cloneNode(true));
        })

        // Display 'No Matches' message when no matches are found
        checkNoMatch(exactSection, noExactMatch);
        checkNoMatch(fuzzySection, noFuzzyMatch);
      })
    })
  }

  // Enables functionality to toggle between `_path` and `_url` helper suffixes
  function setupRouteToggleHelperLinks() {

    // Sets content for each element
    function setValOn(elems, val) {
      elems.forEach(function(elem) {
        elem.innerHTML = val;
      });
    }

    // Sets onClick event for each element
    function onClick(elems, func) {
      elems.forEach(function(elem) {
        elem.onclick = func;
      });
    }

    var toggleLinks = document.querySelectorAll('#route_table [data-route-helper]');

    onClick(toggleLinks, function(){
      var helperTxt   = this.getAttribute("data-route-helper"),
          helperElems = document.querySelectorAll('[data-route-name] span.helper');

      setValOn(helperElems, helperTxt);
    });
  }

  setupMatchPaths();
  setupRouteToggleHelperLinks();
</script>


  
<h2 style="margin-top: 30px">Request</h2>
<p><b>Parameters</b>:</p> <pre>None</pre>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleSessionDump()">Toggle session dump</a></div>
  <div id="session_dump" style="display:none"><pre>_csrf_token: &quot;Plp4RZjpEOqsLlt7lZOW1o1gTIhhhpEgtBpd3966R94=&quot;
session_id: &quot;a3995d9b47e4dceea7c82e877a897f88&quot;
warden.user.user.key: [[2], &quot;$2a$11$8UeUSYR9s7gI2ENDtNXyQu&quot;]</pre></div>
</div>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleEnvDump()">Toggle env dump</a></div>
  <div id="env_dump" style="display:none"><pre>GATEWAY_INTERFACE: &quot;CGI/1.2&quot;
HTTP_ACCEPT_ENCODING: &quot;gzip, deflate, sdch, br&quot;
HTTP_ACCEPT_LANGUAGE: &quot;en-US,en;q=0.8,la;q=0.6&quot;
HTTP_VERSION: &quot;HTTP/1.1&quot;
ORIGINAL_SCRIPT_NAME: &quot;&quot;
REMOTE_ADDR: &quot;10.0.2.2&quot;
SERVER_NAME: &quot;localhost&quot;
SERVER_PROTOCOL: &quot;HTTP/1.1&quot;</pre></div>
</div>

<h2 style="margin-top: 30px">Response</h2>
<p><b>Headers</b>:</p> <pre>None</pre>

</div>


</body>
</html>
