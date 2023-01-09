<?php

namespace App\Actions\Jetstream;

use Illuminate\Support\Facades\Storage;
use Laravel\Jetstream\Contracts\DeletesUsers;

class DeleteUser implements DeletesUsers
{
    /**
     * Delete the given user.
     *
     * @param  mixed  $user
     * @return void
     */
    public function delete($user)
    {
        $user->deleteProfilePhoto();
        $user->tokens->each->delete();
        $user->delete();

        $path="users/".$user->id;
        Storage::deleteDirectory($path);

    }
}
