<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <link rel="icon" href="/faithfm-favicon-D.png" type="image/png"/>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{{ config('app.name', 'Laravel') }}</title>

  {{-- Note: To replace any of the default section-definition in a child blade file, simply define a @section/@endsection with the same name.
         To insert code before/after the default section defined in this app blade template, use "@parent" - see: https://laravel.com/docs/7.x/blade#template-inheritance --}}

  <!-- Scripts -->
  @section('scripts')
    <script src="{{ mix('js/app.js') }}" defer></script>
  @show

  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

  <!-- Styles -->
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>

<body>
  @inertia
  <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    @csrf
  </form>
</body>

</html>