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
        $id = Auth::id();
        $collector = DB::table('collectors')->where('user_id', $id)->get();

       // $a= $collector[1]->collector;
        //$b=json_decode($a, true);

        return view('collector.index',compact('collector'))
            ->with('i', (request()->input('page', 1) - 1) * 5);

/*
        return $b['name'];
*/
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        $id = Auth::id();
        $project = DB::table('projects')->where('user_id', $id)->get();

        return view('collector.create',compact('project'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCollectorRequest  $request
     * @return false|string
     */
    public function store(StoreCollectorRequest $request)
    {
        $input = $request->all();
        $input['collector'] = $request->input('collector');
        $id = Auth::id();


       $a=json_encode($input);
       $b= json_decode($a);

        DB::table('collectors')->insert([
            'user_id' => $id,
            'name' => $request->name,
            'collector' => $a,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        return redirect()->route('collector.index')
            ->with('success', 'created successfully.');
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
