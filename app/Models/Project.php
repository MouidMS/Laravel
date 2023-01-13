<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $dates = ['created_at'];

    protected $fillable = [
        'id_user',
        'name',
        'type',
        'path',
        'created_by',
    ];


}
