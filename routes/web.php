<?php

use App\Http\Controllers\CollectorController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\JSONController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ReadyTextEditController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;
use  \Illuminate\Routing\ResponseFactory;
use Vatttan\Apdf\Apdf;
use Illuminate\Http\Request;


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

//Route::get('/', function () {
//    return view('welcome');
//});


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
//Route::resource('collector', CollectorController::class);


Route::get('/', function () {
    return view('landpage.landpage');
});


Route::resource('writiner', ProjectController::class)->middleware(['auth','verified']);


//page
Route::get('page', [ProjectController::class, 'getProjectIndex']);
Route::get('page/{id}', [ProjectController::class, 'getProject']);



Route::get('/books', function () {
    $books = Project::all();
    return view('landpage.books',compact('books'));
});

Route::put('update/{id}', [ProjectController::class, 'updateData']);




//project
Route::get('curd', [ProjectController::class, 'index1']);
Route::post('curd', [ProjectController::class, 'store1']);
Route::get('fetch-curd', [ProjectController::class, 'fetchcurd']);
Route::get('edit-curd/{id}', [ProjectController::class, 'edit1']);
Route::put('update-curd/{id}', [ProjectController::class, 'update1']);
Route::delete('delete-curd/{id}', [ProjectController::class, 'destroy1']);
//update project
Route::delete('delete-project/{id}', [ProjectController::class, 'DeleteProject']);
Route::put('update-project-rename/{id}/{rename}', [ProjectController::class, 'RenameProject']);
Route::put('update-project-dec/{id}/{rename}', [ProjectController::class, 'EditDecProject']);
Route::post('get-dec', [ProjectController::class, 'getDecProject']);


//friends
Route::post('get-friends', [ProjectController::class, 'getFriends']);







//project-recv
Route::get('fetch-rev', [ProjectController::class, 'ReseveProject']);

//collector
//Route::post('collector', [CollectorController::class, 'store']);
Route::get('collector', [CollectorController::class, 'index']);
Route::get('collector/get', [CollectorController::class, 'fetch']);
Route::get('collector/add', [CollectorController::class, 'addProjectInsideCollector']);



//ready_text_edit
Route::get('readytext', [ReadyTextEditController::class, 'index']);
Route::get('readytext/get', [ReadyTextEditController::class, 'fetch']);
Route::delete('readytext/delete/{id}', [ReadyTextEditController::class, 'delete']);
Route::post('readytext', [ReadyTextEditController::class, 'store']);

//favorites
Route::get('favorite/{id_project}/{state}', [ProjectController::class, 'getFav']);

//SherProject
Route::post('sher', [ProjectController::class, 'AddSherProject']);
Route::delete('delete-sher/{id}', [ProjectController::class, 'DeleteSherProject']);



//SherFrinedProject
Route::post('sherfrined', [ProjectController::class, 'AddSherFriend']);
Route::delete('delete-sherfrined/{id}', [ProjectController::class, 'DeleteSherFriend']);

//likes
Route::get('like/{user_id}/{project_id}', [ProjectController::class, 'addLike']);
Route::delete('delete-like/{id}', [ProjectController::class, 'DeleteLike']);


//document
Route::get('document', [ProjectController::class, 'indexDocument']);

//EditText
Route::get('edit-text', [ProjectController::class, 'indexTextEdit']);



//ProfileFrined
Route::get('profile-friend', [ProjectController::class, 'indexProfileFrined']);













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
Route::get('/store/{type}',[ProjectController::class, 'store']);
Route::get('/create',[ProjectController::class, 'create']);
Route::get('/index',[ProjectController::class, 'index']);

