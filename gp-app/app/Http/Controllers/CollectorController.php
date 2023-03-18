<?php

namespace App\Http\Controllers;

use App\Models\Collector;
use App\Http\Requests\StoreCollectorRequest;
use App\Http\Requests\UpdateCollectorRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CollectorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {

        return view('ajax.collector');
    }
//        $id = Auth::id();
//        $collector = DB::table('collectors')->where('user_id',$id)->select('id','user_id','name','created_by')->get();
//
//        foreach ($collector as $value) {
//            $json = DB::table('collectors')->where('id', $value->id)->get();
//            $value->collector = json_decode($json[0]->collector);
//        }
//        return response()->json($collector);

//        return response()->json($collector);

//         $a= $collector[1]->collector;
//        $b=json_decode($a, true);

//
//
//
//
//        return response()->json($b);


        /*
                return $b['name'];
        */


    public function fetch()
    {
        $id = Auth::id();
        $ready = DB::table('collectors')->where('user_id',$id)->select('id','user_id','name')->get();

         foreach ($ready as $value) {
            $json = DB::table('collectors')->where('id', $value->id)->get();
            $value->collector = json_decode($json[0]->collector);
        }
        return response()->json($ready);
    }

    public function addProjectInsideCollector()
    {
        $id = Auth::id();
        $ready = DB::table('collectors')->where('user_id',$id)->select('id','user_id','name')->get();

        foreach ($ready as $value) {
            $json = DB::table('collectors')->where('id', $value->id)->get();
            $value->collector = json_decode($json[0]->collector);
        }
        $array =  (json_decode($json[0]->collector));
//        $arrayJson = array (
//            0 =>
//                array (
//                    'project_id' => 5555,
//                ),
//            1 =>
//                array (
//                    'project_id' => 66666,
//                ),
//        );
        //Array ( [0] => Array ( [project_id] => 1 ) [1] => Array ( [project_id] => 5 ) ) 1
//       $new= array_replace($array , $arrayJson[0]);
//        array_push($array,test);

        return print_r($array);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
//        $id = Auth::id();
//        $project = DB::table('projects')->where('user_id', $id)->get();
//
//        return view('collector.create',compact('project'))
//            ->with('i', (request()->input('page', 1) - 1) * 5);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreCollectorRequest $request
     * @return bool|string|null
     */
    public function store(StoreCollectorRequest $request): bool|string|null
    {
        $insertData = array(
            'collector' =>
                array(
                    0 =>
                        array(
                            'id_project' => 1,
                            'name' => 'nonTitle',
                        ),
                ),
        );

        $id = Auth::id();

        $data = DB::table('collectors')->insert([
            'user_id' => $id,
            'name' => Auth::user()->name,
            'collector' => $insertData,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Collector  $collector
     * @return \Illuminate\Http\Response
     */
    public function show(Collector $collector)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Collector  $collector
     * @return \Illuminate\Http\Response
     */
    public function edit(Collector $collector)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCollectorRequest  $request
     * @param  \App\Models\Collector  $collector
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCollectorRequest $request, Collector $collector)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Collector  $collector
     * @return \Illuminate\Http\Response
     */
    public function destroy(Collector $collector)
    {
        $id = Auth::id();
        $collector->delete();


        return redirect()->route('collector.index')
            ->with('success','User deleted successfully');

    }
}
