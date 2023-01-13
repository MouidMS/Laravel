<?php

namespace App\Http\Controllers;

use App\Models\Receive;
use App\Http\Requests\StoreReceiveRequest;
use App\Http\Requests\UpdateReceiveRequest;

class ReceiveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreReceiveRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReceiveRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Receive  $receive
     * @return \Illuminate\Http\Response
     */
    public function show(Receive $receive)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Receive  $receive
     * @return \Illuminate\Http\Response
     */
    public function edit(Receive $receive)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReceiveRequest  $request
     * @param  \App\Models\Receive  $receive
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReceiveRequest $request, Receive $receive)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Receive  $receive
     * @return \Illuminate\Http\Response
     */
    public function destroy(Receive $receive)
    {
        //
    }
}
