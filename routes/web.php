<?php

use App\Http\Controllers\CollectorController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\JSONController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Vatttan\Apdf\Apdf;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->middleware(['auth','verified'])->name('dashboard');

    Route::get('/create-project', function () {
        return view('pages.create-project');
    })->middleware(['auth','verified'])->name('create-project');
});

//Route::resource('project', ProjectController::class);
Route::resource('collector', CollectorController::class);


Route::get('landpage', function () {
    return view('landpage.landpage');
});


Route::resource('writiner', ProjectController::class)->middleware(['auth','verified']);

Route::get('page/{id}', [ProjectController::class, 'getProject'])->name('id.detail');
























/*
Route::get('/vatttan', function () {
    $apdf = new Apdf();
    $apdf->print('
<h1>Hi World!</h1>
<p style="text-align: right ; color: red;">السلام عليكم</p>');
});*/

Route::get('/doc-to-pdf',[DocumentController::class, 'convertDocToPDF']);
Route::get('/readJson',[JSONController::class, 'ReadJsonFromDatabase']);
//----------------------------
Route::get('/store',[ProjectController::class, 'store']);
Route::get('/create',[ProjectController::class, 'create']);
Route::get('/index',[ProjectController::class, 'index']);

