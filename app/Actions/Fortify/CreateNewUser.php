<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        $path="users/".$user->id;
        $folderExist= Storage::exists($path);
        echo $folderExist;

        if(!$folderExist){
            Storage::makeDirectory($path);
            Storage::makeDirectory($path . "/projects");
          //  Storage::makeDirectory($path . "/images");


            $data = [
                "info"=>[
                    "id" => $user->id,
                    "name" => $user->name,
                    "email" => $user->email
                ],
                "project"=>[
                    "nameProject" => "example",
                    "date" => date("Y/m/d"),
                    "owner" => $user->name
                ],
            ];
            Storage::disk('jsonUser')->put($user->id .'/info.json', json_encode($data));

        }
        echo $user;
        return $user;


    }
}
