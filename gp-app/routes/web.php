<?php

use App\Http\Controllers\CollectorController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\JSONController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ReadyTextEditController;
use App\Http\Controllers\SherProjectController;
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
Route::get('get-file-project/{id}',[ProjectController::class, 'getFileProject']);


//Route::get('/books', function () {
//    $books = Project::all();
//    return view('landpage.books',compact('books'));
//});
//
//Route::put('update/{id}', [ProjectController::class, 'updateData']);
//


//project
Route::get('curd', [ProjectController::class, 'index1']);
Route::post('curd', [ProjectController::class, 'store1']);
Route::get('fetch-curd', [ProjectController::class, 'fetchcurd']);
Route::get('edit-curd/{id}', [ProjectController::class, 'edit1']);
Route::put('update-curd/{id}', [ProjectController::class, 'update1']);
Route::delete('delete-curd/{id}', [ProjectController::class, 'destroy1']);

//update project
Route::get('delete-project/{id}/{value}', [ProjectController::class, 'DeleteProject']);
Route::put('update-project-rename/{id}/{rename}', [ProjectController::class, 'RenameProject']);
Route::put('update-project-dec/{id}/{rename}', [ProjectController::class, 'EditDecProject']);
Route::post('get-dec', [ProjectController::class, 'getDecProject']);


//friends
Route::get('get-friends', [ProjectController::class, 'getFriends']);
Route::post('get-follower', [ProjectController::class, 'getCountFollower']);
Route::get('add-friends/{id}', [ProjectController::class, 'AddFriends']);
Route::get('delete-friends/{id}', [ProjectController::class, 'DeleteFreind']);


//pages
Route::get('page-project/{id}', [ProjectController::class, 'PageProject']);
Route::get('page-project-id/{id}', [ProjectController::class, 'setIdPage']);


Route::get('page-receive/{id}', [ProjectController::class, 'PageReceive']);
Route::get('page-receive-id/{id}', [ProjectController::class, 'setIdReceive']);


Route::get('page-community/{id}', [ProjectController::class, 'PageCommunity']);
Route::get('page-community-id/{id}', [ProjectController::class, 'setIdCommuinty']);


Route::get('page-collector/{id}', [ProjectController::class, 'PageCollector']);
Route::get('page-collector-id/{id}', [ProjectController::class, 'setIdCollector']);


Route::get('info-project/{id}', [ProjectController::class, 'getProjectInfo']);

Route::get('read-project', [ProjectController::class, 'ReadOnlyProject']);


//community
Route::get('get-community', [ProjectController::class, 'getCommuitny']);
Route::get('get-community-like/{id}', [ProjectController::class, 'getCommunityLike']);
Route::get('add-community-like/{id}', [ProjectController::class, 'addCommunityLike']);
Route::get('remove-community-like/{id}', [ProjectController::class, 'removeCommunityLike']);
Route::post('/search-community', [SherProjectController::class, 'SearchCommunity']);
Route::get('fullter-community/{type}/{sort}/{fav}', [SherProjectController::class, 'Fullter']);
Route::post('fullter-post', [SherProjectController::class, 'FullterPost']);
Route::post('sort-post', [SherProjectController::class, 'SortPost']);
Route::get('fav-post', [SherProjectController::class, 'FavPost'])->middleware(['auth','verified']);









//project-recv
Route::get('fetch-rev', [ProjectController::class, 'ReseveProject']);
Route::get('rev', [ProjectController::class, 'getSimpleData']);
/*******************************/
Route::get('rev_get/{id}', [ProjectController::class, 'getReceiveProjectToListProject']);




//collector
//Route::post('collector', [CollectorController::class, 'store']);
/*** old *****/
Route::get('collector', [CollectorController::class, 'index'])->middleware(['auth','verified']);;
Route::get('collector/get', [CollectorController::class, 'fetch']);
Route::get('collector/add', [CollectorController::class, 'addProjectInsideCollector']);
/*** new *****/
Route::get('community', [SherProjectController::class, 'indexWritinerCommunity']);


Route::get('get-collector', [ProjectController::class, 'getCollector']);
Route::get('rename-collector/{id}/{rename}', [ProjectController::class, 'RenameCollector']);
Route::get('delete-collector/{id}', [ProjectController::class, 'DeleteCollector']);
Route::get('update-collector/{id}/{json}', [ProjectController::class, 'UpdateCollector']);
Route::post('add-new-collector', [ProjectController::class, 'CreateNewCollector']);
Route::post('type-project-collector', [ProjectController::class, 'getCollectorProject']);

/*test*/
Route::get('get-type-project-collector/{type}', [ProjectController::class, 'getCollectorProjectUsingGet']);
Route::get('get-type-receive-collector/{type}', [ProjectController::class, 'getCollectorReceivesUsingGet']);


//ready_text_edit

        Route::get('readytext', [ReadyTextEditController::class, 'getAllReadyText'])->middleware(['auth','verified']);
        Route::get('readytext/{id}', [ReadyTextEditController::class, 'getReadyText'])->middleware(['auth','verified']);
        Route::get('add-readytext/{json}/{type}', [ReadyTextEditController::class, 'addReadyText'])->middleware(['auth','verified']);
//        Route::get('update-readytext/{json}', [ReadyTextEditController::class, 'updateReadyText'])->middleware(['auth','verified']);
        Route::get('delete-readytext/{id}', [ReadyTextEditController::class, 'deleteReadyText'])->middleware(['auth','verified']);


//SearchUser
Route::get('search-user/{email}', [ProjectController::class, 'SearchUsers']);
//SearcCommunity

// not testing
//Route::get('search-community/{name_project}', [ProjectController::class, 'SearchCommunity']);
Route::get('receive-community-project/{id_community}', [ProjectController::class, 'AddToReceiveFromCommunity'])->middleware(['auth','verified']);
Route::get('share-community-project/{id_community}', [ProjectController::class, 'AddToShareFromCommunity'])->middleware(['auth','verified']);
Route::get('copylink/{id_community}', [ProjectController::class, 'getCopyLink']);



//favorites
Route::get('favorite/{id_project}/{state}', [ProjectController::class, 'getFav']);


//SherProject
Route::post('sher', [ProjectController::class, 'AddSherProject']);
Route::delete('delete-sher/{id}', [ProjectController::class, 'DeleteSherProject']);


//SherFrinedProject
Route::post('sherfrined', [ProjectController::class, 'AddSherFriend']);
Route::delete('delete-sherfrined/{id}', [ProjectController::class, 'DeleteSherFriend']);

//likes
Route::get('like/{user_id}/{project_id}', [ProjectController::class, 'addLike'])->middleware(['auth','verified']);
Route::get('delete-like/{user_id}/{project_id}', [ProjectController::class, 'DeleteLike'])->middleware(['auth','verified']);

//document
Route::get('document', [ProjectController::class, 'indexDocument'])->middleware(['auth','verified']);

//EditText
Route::get('edit-text', [ProjectController::class, 'indexTextEdit'])->middleware(['auth','verified']);


//ProfileFrined
Route::get('profile-friend/{id}', [ProjectController::class, 'indexProfileFrined'])->middleware(['auth','verified']);;


//Notifications
Route::get('get-notification', [ProjectController::class, 'getNotification']);
Route::get('delete-notification/{id}', [ProjectController::class, 'DeleteNotification']);

//Back
Route::get('back', [ProjectController::class, 'BackPage']);

//Save Project
Route::post('save-project', [ProjectController::class, 'SaveProject']);













Route::get('/doc-to-pdf',[DocumentController::class, 'convertDocToPDF']);
Route::get('/readJson',[JSONController::class, 'ReadJsonFromDatabase']);
//----------------------------
Route::get('/store/{type}',[ProjectController::class, 'store']);
Route::get('/create',[ProjectController::class, 'create']);
Route::get('/index',[ProjectController::class, 'index']);

//File
Route::get('/uploadFile',[FilesController::class, 'index']);
Route::post('ajaxImageUpload', [FilesController::class, 'ajaxImageUploadPost'])->name('ajaxImageUpload');



Route::get('/image-upload',  [FilesController::class, 'index']);
//Route::post('/image-upload', [FilesController::class, 'uploadFile'])->name('uploadFile');
Route::post('/image-upload-img', [FilesController::class, 'uploadFileImg'])->name('uploadFileImg');
Route::post('/image-upload-pdf', [FilesController::class, 'uploadFilePDF'])->name('uploadFilePDF');
Route::post('/resize-file', [FilesController::class, 'resizeImage'])->name('resizeImage');


