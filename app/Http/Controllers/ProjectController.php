<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

//fev + sherproject

// count page
// count words
// count blocks


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
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function getProject($id){
        $id_user = Auth::id();

        $project = DB::table('projects')->where('id',$id)->get();
        $filename=   Storage::disk('jsonUser')->get($id_user . '/projects/' .$id.'.json');
       // $filename = json_encode(Storage::disk('jsonUser')->get($id_user . '/projects/' .$id.'.json'), true);

        return view('landpage.page',compact('project'))->with(['id'=> $id])->with(['filename'=> $filename]);
    }


    public function index(): Application|Factory|View
    {
        $id = Auth::id();
        $project = DB::table('projects')->where('user_id', $id)->paginate(15);

        $lastId = DB::getPdo()->lastInsertId();

        return view('landpage.writiner',compact('project','lastId'));

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

//        return view('projects.create'); // page html path(.../project/create)
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
            'type' => 'required',
        ]);

        if (Auth::user()) {

              $pr =DB::table('projects')->insertGetId([
                    'user_id' => $id,
                    'name' => 'nonTitle',
                    'type' => $request->type,
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
             ]);

              $lastId = DB::getPdo()->lastInsertId();

            $affected = DB::table('projects')
                ->where('id', $lastId)
                ->update(['path' => $id . '/projects/' .  $lastId . '.json',]);


            $data = [];

                $data = array (
                    'page' =>
                        array (
                        ),
                    'paragraphs' =>
                        array (
                        ),
                    'topics' =>
                        array (
                        ),
                    'images' =>
                        array (
                        ),
                    'icons' =>
                        array (
                        ),
                    'lists' =>
                        array (
                        ),
                    'tables' =>
                        array (
                        ),
                    'imageSliders' =>
                        array (
                        ),
                    'topicLists' =>
                        array (
                        ),
                    'references' =>
                        array (
                        ),
                    'codes' =>
                        array (
                        ),
                    'dataBases' =>
                        array (
                        ),
                    'shapes' =>
                        array (
                        ),
                    'polygons' =>
                        array (
                        ),
                    'pagenContener' =>
                        array (
                        ),
                    'pageNumber' => 'none',
                    'pageNumberColor' => '#000000',
                    'pageDesign' => 'none',
                    'backGrounColor' => '#ffffff',
                    'borderColor' =>
                        array (
                            0 => '#000000',
                            1 => '#000000',
                            2 => '#000000',
                            3 => '#000000',
                            4 => '#000000',
                        ),
                    'borderDesign' => 'none',
                    'borderStyle' =>
                        array (
                            0 => 'solid',
                            1 => 'solid',
                            2 => 'solid',
                            3 => 'solid',
                            4 => 'solid',
                        ),
                    'borderWidth' =>
                        array (
                            0 => 0,
                            1 => 0,
                            2 => 0,
                            3 => 0,
                            4 => 0,
                        ),
                    'borderRadius' =>
                        array (
                            0 => 0,
                            1 => 0,
                            2 => 0,
                            3 => 0,
                            4 => 0,
                        ),
                    'pages' =>
                        array (
                            0 =>
                                array (
                                    'page' =>
                                        array (
                                        ),
                                    'paragraphs' =>
                                        array (
                                        ),
                                    'topics' =>
                                        array (
                                        ),
                                    'images' =>
                                        array (
                                        ),
                                    'icons' =>
                                        array (
                                        ),
                                    'lists' =>
                                        array (
                                        ),
                                    'tables' =>
                                        array (
                                        ),
                                    'imageSliders' =>
                                        array (
                                        ),
                                    'topicLists' =>
                                        array (
                                        ),
                                    'references' =>
                                        array (
                                        ),
                                    'codes' =>
                                        array (
                                        ),
                                    'dataBases' =>
                                        array (
                                        ),
                                    'shapes' =>
                                        array (
                                        ),
                                    'polygons' =>
                                        array (
                                        ),
                                    'pagenContener' =>
                                        array (
                                        ),
                                    'pageNumber' => 'none',
                                    'pageNumberColor' => '#000000',
                                    'pageDesign' => 'none',
                                    'backGrounColor' => '#ffffff',
                                    'borderColor' =>
                                        array (
                                            0 => '#000000',
                                            1 => '#000000',
                                            2 => '#000000',
                                            3 => '#000000',
                                            4 => '#000000',
                                        ),
                                    'borderDesign' => 'none',
                                    'borderStyle' =>
                                        array (
                                            0 => 'solid',
                                            1 => 'solid',
                                            2 => 'solid',
                                            3 => 'solid',
                                            4 => 'solid',
                                        ),
                                    'borderWidth' =>
                                        array (
                                            0 => 0,
                                            1 => 0,
                                            2 => 0,
                                            3 => 0,
                                            4 => 0,
                                        ),
                                    'borderRadius' =>
                                        array (
                                            0 => 0,
                                            1 => 0,
                                            2 => 0,
                                            3 => 0,
                                            4 => 0,
                                        ),
                                ),
                        ),
                );

            Storage::disk('jsonUser')->put($id . '/projects/' .$lastId.'.json', json_encode($data));


            return redirect()->to('page/'.$lastId)
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
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function edit($id): \Illuminate\Http\JsonResponse
    {

        $project = Project::all()->where('id',$id)->first();;

        return response()->json([
            'success'=>true,
            'project'=> $project
        ]);



    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProjectRequest  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateProjectRequest $request, Project $project,$id)
    {

        $validator =  validator::make($request->all(),[
            'name' => 'required',
            ]);

        if ($validator->fails()){
            return $request->name;
          //  return response()->json($validator->errors(),400);
        }

        $project = Project::all()->where('id',$id)->first();
        $name = $request->name;
        $project->update($name);

        return response()->json([
            'success'=>true,
            'msg'=> 'Success Updated post'
        ]);


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
