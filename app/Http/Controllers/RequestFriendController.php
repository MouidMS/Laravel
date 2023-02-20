<?php

namespace App\Http\Controllers;

use App\Models\Request_friend;
use App\Http\Requests\StoreRequest_friendRequest;
use App\Http\Requests\UpdateRequest_friendRequest;

class RequestFriendController extends Controller
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
     * @param  \App\Http\Requests\StoreRequest_friendRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest_friendRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Request_friend  $request_friend
     * @return \Illuminate\Http\Response
     */
    public function show(Request_friend $request_friend)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Request_friend  $request_friend
     * @return \Illuminate\Http\Response
     */
    public function edit(Request_friend $request_friend)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRequest_friendRequest  $request
     * @param  \App\Models\Request_friend  $request_friend
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest_friendRequest $request, Request_friend $request_friend)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Request_friend  $request_friend
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request_friend $request_friend)
    {
        //
    }
}
