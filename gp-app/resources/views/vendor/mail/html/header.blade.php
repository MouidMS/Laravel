@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
        <img src="{{ asset('/storage/Logopage.png')}}" />
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
