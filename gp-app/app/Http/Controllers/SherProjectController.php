<?php

namespace App\Http\Controllers;

use App\Models\SherProject;
use App\Http\Requests\StoreSherProjectRequest;
use App\Http\Requests\UpdateSherProjectRequest;

class SherProjectController extends Controller
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
     * @param  \App\Http\Requests\StoreSherProjectRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSherProjectRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SherProject  $sherProject
     * @return \Illuminate\Http\Response
     */
    public function show(SherProject $sherProject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SherProject  $sherProject
     * @return \Illuminate\Http\Response
     */
    public function edit(SherProject $sherProject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSherProjectRequest  $request
     * @param  \App\Models\SherProject  $sherProject
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSherProjectRequest $request, SherProject $sherProject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SherProject  $sherProject
     * @return \Illuminate\Http\Response
     */
    public function destroy(SherProject $sherProject)
    {
        //
    }
}
