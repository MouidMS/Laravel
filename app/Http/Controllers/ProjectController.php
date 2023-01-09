<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Carbon\Carbon;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(): Application|Factory|View
    {
        $id = Auth::id();
        $project = DB::table('projects')->where('user_id', $id)->paginate(5);

        return view('projects.index',compact('project'))
            ->with('i', (request()->input('page', 1) - 1) * 5);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {


        /*
        $id = Auth::id();
        $project = DB::table('projects')->where('user_id', $id)->get();
        $urls = array();                          // <-- create empty array for the urls


        foreach ($project as $projects) {
            /*
            $data = [
                "info" => [
                    "id" => $projects->id,
                    "name_project" => $projects->name,
                    "path" => $projects->path,
                ],
                "project" => [
                    "nameProject" => $projects->name,
                    "date" => date("Y/m/d"),
                    "owner" => $projects->name
                ],
            ];
            Storage::disk('jsonUser')->put($id .'/projects/'.$projects->id .'.json', json_encode($data));
        }
*/

/*
            $data = [];
            foreach ($project as $projects)
                $data[] = [
                    "info" => [
                        "id" => $projects->id,
                        "name" => $projects->name,
                    ],
                    "project" => [
                        "nameProject" => "example",
                        "date" => date("Y/m/d"),
                        "owner" => $projects->name
                    ],
                ];
            Storage::disk('jsonUser')->put($id . '/projects/' . $projects->name . '.json', json_encode($data));
            return $data;
*/

        return view('projects.create'); // page html path(.../project/create)
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProjectRequest  $request
     * @return Application|RedirectResponse|Redirector
     */
    public function store(StoreProjectRequest $request)
    {
        $id = Auth::id();

        $request->validate([
            'name' =>  ['required'],
            'type' => 'required',
        ]);

        if (Auth::user()) {

            DB::table('projects')->insert([
                'user_id' => $id,
                'name' => $request->name,
                'type' => $request->type,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);

            $data = [];

                $data[] = [
                    "info" => [
                        "id" => $id,
                        "name" => $request->name,
                    ],
                    "project" => [
                        "nameProject" => "example",
                        "date" => date("Y/m/d"),
                        "owner" => $request->name
                    ],
                ];
            Storage::disk('jsonUser')->put($id . '/projects/' . $request->name . '.json', json_encode($data));


            return redirect()->route('project.index')
                ->with('success', 'User created successfully.');

        } else {
// redirect the user to the login page
            return redirect('/login');
        }    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Support\Collection
     */
    public function show($id)
    {
        $project = Project::find($id);
        return $project;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProjectRequest  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return RedirectResponse
     */
    public function destroy(Project $project)
    {
        $id = Auth::id();
        $path="users/".$id."/projects/".$project->name.".json";
        Storage::delete($path);

        $project->delete();


        return redirect()->route('project.index')
            ->with('success','User deleted successfully');

        // redirect

    }
}
