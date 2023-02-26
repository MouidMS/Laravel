<?php

namespace App\Actions\Fortify;

use App\Http\Controllers\ProjectController;
use App\Models\Ready_text_edit;
use App\Models\User;
use App\Rules\IsValidPassword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
            'password' => ['required',
                'confirmed',
                'string',
                new isValidPassword(),],
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        $data = [];

        $data = array (
            0 =>
                array (
                    'name' => 'Untiteld',
                    'bold' => false,
                    'italic' => false,
                    'underline' => false,
                    'strikethrough' => false,
                    'backColor' => '#ffffff',
                    'fontSize' => 1,
                    'fontName' => 'Sans-serif',
                    'foreColor' => '#000000',
                    'justifyCenter' => false,
                    'justifyLeft' => false,
                    'justifyRight' => false,
                    'justifyFull' => false,
                    'subscript' => false,
                    'superscript' => false,
                    'link' => NULL,
                    'container' =>
                        array (
                        ),
                    'nameVeiw' =>
                        array (
                        ),
                ),
            1 =>
                array (
                    'name' => 'Untiteld',
                    'bold' => false,
                    'italic' => false,
                    'underline' => false,
                    'strikethrough' => false,
                    'backColor' => '#ffffff',
                    'fontSize' => 1,
                    'fontName' => 'Sans-serif',
                    'foreColor' => '#000000',
                    'justifyCenter' => false,
                    'justifyLeft' => false,
                    'justifyRight' => false,
                    'justifyFull' => false,
                    'subscript' => false,
                    'superscript' => false,
                    'link' => NULL,
                    'container' =>
                        array (
                        ),
                    'nameVeiw' =>
                        array (
                        ),
                ),
        );

        $ready = new Ready_text_edit();
        $ready->user_id =$user->id;
        $ready->json = json_encode($data);
        $ready->save();


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
//        echo $user;
        return $user;


    }
}
