@foreach ($project as $projects)
    {{$projects->name}}<br>
    {{$projects->path}}<br>
    {{$projects->type}}<br>
    {{$filename}}
    <p id="borderColor"></p>
    <p id="borderStyle"></p>

@endforeach

<!- #################################################### ->
<script>
    //ajax
    //json path []list

    var path = "{{ $projects->path }}"

    console.log(name);
    console.log('------------------');
    console.log(solve('{{$filename}}'));
    console.log('------------------');
    const v = solve('{{$filename}}');
    const vf = (JSON.parse(v));
    console.log(vf)
    console.log('------------------');
    console.log(vf['borderColor'])
    borderColor = vf['borderColor'];
    borderStyle = vf['borderStyle'];
    console.log('------------------');
    document.getElementById('borderColor').innerHTML= borderColor;
    document.getElementById('borderStyle').innerHTML= borderStyle;


    function solve(input) {
        const replaceWith = '"' // e.g. replace &quot; by "
        const result = input.replace(/&quot;/g, replaceWith)
        return result;
    }

    var name= [
         @foreach ($project as $projects)
        [ "{{ $projects->name }}", "{{ $projects->id }}", "{{ $projects->path }}" ,[v]],
        @endforeach
    ];


    console.log(name)



</script>
