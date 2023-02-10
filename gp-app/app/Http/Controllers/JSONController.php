<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use App\Models\User;


class JSONController extends Controller
{

    public function ReadJsonFromDatabase(){
       /* $email = User::all('email');
        $json = $email[0]["email"];*/
        return User::all('id');
    }


    public function ReadJsonFromFile(){
        $id = Auth::user()->id;
        $json = json_decode(file_get_contents(storage_path() . "\\app\\users\\" .$id .'\\info.json'), true);
        return $json;
    }
}


