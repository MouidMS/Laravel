<x-jet-action-section>
    <x-slot name="title">
        {{ __('Followers User') }}
    </x-slot>

    <x-slot name="description">
        {{ __('Through this section, the user can know the number of Following and Followers.') }}
    </x-slot>

    <x-slot name="content">
        <div><label>Following: </label> {{ App\Http\Controllers\ProjectController::getCountFollowerDiract()[0]}}</div>
        <br>
        <div><label>Followers: </label>{{ App\Http\Controllers\ProjectController::getCountFollowerDiract()[1]}}</div>

        <br>
        <a href="{{url('profile-friend/'. \Illuminate\Support\Facades\Auth::id())}}">
            <x-jet-button >
               Display Profile Card
            </x-jet-button>
        </a>
    </x-slot>


</x-jet-action-section>

