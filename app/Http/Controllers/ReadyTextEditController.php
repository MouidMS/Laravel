<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Ready_text_edit;
use App\Http\Requests\StoreReady_text_editRequest;
use App\Http\Requests\UpdateReady_text_editRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ReadyTextEditController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function index()
    {

    }


    public function delete($id)
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreReady_text_editRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {


    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ready_text_edit  $ready_text_edit
     * @return \Illuminate\Http\Response
     */
    public function show(Ready_text_edit $ready_text_edit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ready_text_edit  $ready_text_edit
     * @return \Illuminate\Http\Response
     */
    public function edit(Ready_text_edit $ready_text_edit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReady_text_editRequest  $request
     * @param  \App\Models\Ready_text_edit  $ready_text_edit
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReady_text_editRequest $request, Ready_text_edit $ready_text_edit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ready_text_edit  $ready_text_edit
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ready_text_edit $ready_text_edit)
    {
        //
    }

    // This function can get all records for one user
    public function getAllReadyText(){
        $userId = Auth::id();
        $texts = Ready_text_edit::where('user_id', $userId)->get();
        return response()->json($texts);
    }

    // This function can get one record for one user
    public function getReadyText($id){
        $userId = Auth::id();
        $texts = Ready_text_edit::where('user_id', $userId)->where('id',$id)->get();
        return response()->json($texts);
    }

    // This function can add new record for one user
    public function addReadyText($json,$type){
        $newRecord = new Ready_text_edit();
        $newRecord->user_id = Auth::id();
        $newRecord->json = $json;
        $newRecord->type = $type;
        $newRecord->save();
        return $newRecord;
    }

    // This function can delete one record for one user
    public function deleteReadyText($id){
        $userId = Auth::id();
        $text = Ready_text_edit::where('user_id', $userId)->where('id', $id)->first();
        if ($text) {
            $text->delete();
            return response()->json('Done');
        } else {
            return response()->json('Not found');
        }
    }

}
