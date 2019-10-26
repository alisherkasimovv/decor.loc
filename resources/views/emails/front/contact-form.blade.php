@component('mail::message')
# New message from {{ $data['name'] }}

<strong>Name</strong> {{ $data['name'] }}
<br>
<strong>Email</strong> {{ $data['email'] }}

<strong>Message</strong>

{{ $data['message'] }}
@endcomponent
