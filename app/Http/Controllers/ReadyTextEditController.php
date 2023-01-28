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
        return view('ajax.readytext');

    }

    public function fetch()
    {
        $id = Auth::id();
        $ready = DB::table('ready_text_edits')->where('user_id',$id)->select('id','user_id')->get();

        foreach ($ready as $value) {
            $json = DB::table('ready_text_edits')->where('id', $value->id)->get();
                $value->json = json_decode($json[0]->json);
        }
        return response()->json($ready);
    }

    public function delete($id)
    {
        $student = Ready_text_edit::find($id);
        if($student)
        {
            $student->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Deleted Successfully.'
            ]);
        }
        else
        {
            return response()->json([
                'status'=>404,
                'message'=>'No Found.'
            ]);
        }
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
        $validator = Validator::make($request->all(), [
            'name'=> 'required|max:191',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages()
            ]);
        }
        else
        {

            $data =array (
                0 =>
                    array (
                        'name' => $request->input('name'),
                        'detils' => 'test',
                    ),
            );

            $student = new Ready_text_edit();
            $student->json = json_encode($data);
            $student->user_id = Auth::id();

            $student->save();
            return response()->json([
                'status'=>200,
                'message'=>'Added Successfully.'
            ]);
        }

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
}
