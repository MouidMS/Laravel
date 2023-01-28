<?php

namespace App\Http\Controllers;
use App\Models\Collector;
use App\Models\Favorite;
use App\Models\Like;
use App\Models\Rate;
use App\Models\Receive;
use App\Models\SherProject;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
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
use Illuminate\Support\Facades\App;
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function getProject($id){
        $id_user = Auth::id();
        $project = DB::table('projects')->where('id',$id)->get();
        $filename=   Storage::disk('jsonUser')->get($id_user . '/projects/' .$id.'.json');
       // $filename = json_encode(Storage::disk('jsonUser')->get($id_user . '/projects/' .$id.'.json'), true);

//        return view('landpage.page',compact('project'))->with(['id'=> $id])->with(['filename'=> $filename]);
        return response()->json([
            'id_user'  =>$id_user,
            'projects' => $project,
            'filename' => $filename,
        ]);
    }

    public function getFav($id_project,$state,Request $request){
        $id_user = Auth::id();
        if($state == 'true'){
            if(DB::table('favorites')->where('user_id',$id_user)->where('id_file',$id_project)->exists()){
                return response()->json(true);
            }else{
                $student = new Favorite();
                $student->id_file = $id_project;
                $student->user_id = $id_user;
                $student->save();
                return response()->json( DB::table('favorites')->where('user_id',$id_user)->where('id_file',$id_project)->exists());
            }

        }else if ($state == 'false'){
                DB::table('favorites')->where('id_file',$id_project)->delete();
                return response()->json( DB::table('favorites')->where('user_id',$id_user)->where('id_file',$id_project)->exists());
            }
        }



//
//        if( $project == false){
//            $student = new Favorite();
//            $student->id_file = $id;
//            $student->user_id = Auth::id();
//            $student->save();
//        }
//        return response()->json($project);
//    }

//    public function InsertFav($id){
//        $id_user = Auth::id();
//        $project = DB::table('favorites')->where('user_id',$id_user)->where('id_file',$id)->exists();
//        return response()->json($project);
//    }

    public function AddSherProject(Request $request)
    {
        if(DB::table('projects')->where('user_id', Auth::id())->where('id', $request->input('id_project'))->exists()){
            if (DB::table('sher_projects')->where('owner_id', Auth::id())->where('project_id', $request->input('id_project'))->exists()) {
                return response()->json(true);
            } else{
                $student = new SherProject();
                $student->project_id = $request->input('id_project');
                $student->isCopy = $request->input('isCopy');
                $student->owner_id = Auth::id();
                $student->save();
                return response()->json(DB::table('sher_projects')->where('owner_id', Auth::id())->where('project_id', $request->input('id_project'))->exists());
            }
        }else{
            return response()->json(false);
        }

    }

    public function DeleteSherProject($id){
        $student = SherProject::find($id);
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



    public function AddSherFriend(Request $request){
        $student = new Receive();
        $getIdFromEmailUser = DB::table('users')->where('email',$request->input('email'))->get('id');

        if (array_key_exists(0, json_decode($getIdFromEmailUser))) {
            $getIdFromEmailUser = $getIdFromEmailUser[0]->id;
            if(DB::table('receives')->where('user_id', $getIdFromEmailUser)->where('project_id', $request->input('project_id'))->exists()){
                return response()->json(true);
            }else{
                $student->user_id = $getIdFromEmailUser;
                $student->project_id = $request->input('project_id');
                $student->isCopy = $request->input('isCopy');
                $student->save();
                return response()->json(DB::table('receives')->where('user_id', $getIdFromEmailUser)->where('project_id', $request->input('project_id'))->exists());
            }
            } else {
            return response()->json(null);
        }

//        $student->user_id = $getIdFromEmailUser[0]->id;
//        $student->project_id = $request->input('project_id');
//        $student->save();
//        return response()->json($getIdFromEmailUser[0]->id);


    }
    public function DeleteSherFriend($id){
        $student = Receive::find($id);
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


    ////////////////////////-------------likes---------////////////////////////
    public function addLike($user_id,$project_id)
    {


//        $project = SherProject::find($project_id);

//        if($project){

        if (DB::table('likes')->where('user_id', $user_id)->where('project_id_sher_project', $project_id)->exists()) {
            return response()->json(true);
        } else {
            $student = new Like();
            $student->user_id = $user_id;
            $student->project_id_sher_project = $project_id;
            $student->save();
            return response()->json(DB::table('likes')->where('user_id', $user_id)->where('project_id_sher_project', $project_id)->exists());
        }


//        }else{
//            return response()->json([
//                'status'=>404,
//                'message'=>'Done'
//            ]);

    }


    public function DeleteLike($id){
        $student = DB::table('likes')->where('id', $id)->delete();;
        if($student)
        {
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


    public function index(): Application|Factory|View
    {
//        $id = Auth::id();
//        $project = DB::table('projects')->where('user_id', $id)->paginate(15);
       $lastId = DB::getPdo()->lastInsertId();

        $project = Project::all();
        return view('landpage.writinerNew',compact('project','lastId'));

    }

    public function index1()
    {
        return view('landpage.writiner');
    }


    public function indexDocument()
    {
        return view('landpage.Writiner_Documents');
    }

    public function indexTextEdit()
    {
        return view('landpage.EditText');
    }

    public function indexProfileFrined()
    {
        return view('landpage.ProfileFriend');
    }



    public function getProjectIndex()
    {
        return view('landpage.page');
    }
    public function fetchcurd()
    {
        $id = Auth::id();

        $project = DB::table('projects')->where('user_id', $id)->get();

//        $paginationLinks = (string) $project->links();
        foreach ($project as $value) {
            $object = DB::table('favorites')->where('id_file', $value->id)->where('user_id', $id)->exists();
            unset($value->path);
            $value->Isfavorite = $object;
            $sher_project = DB::table('sher_projects')->where('project_id', $value->id)->where('owner_id', $id)->exists();
            $value->IsSher_project = $sher_project;
            $type = DB::table('sher_projects')->where('project_id', $value->id)->where('owner_id', $id)->get('isCopy');
            if (array_key_exists(0, json_decode($type))) {
                if( $type[0]->isCopy  == 1){
                    $value->isSherCopy = true;
                }else{
                    $value->isSherCopy = false;
                }
            }
            $value->IsSher_project = $sher_project;

            if($value->user_id == $value->right_to){
                $value->isProjectCopy = false;
                $value->icon = null;
            }else{
                $value->isProjectCopy = true;

                $icon = DB::table('users')->where('id', $value->right_to)->get('profile_photo_path')[0]->profile_photo_path;

                if($icon == null){
                    $icon = DB::table('users')->where('id', $value->right_to)->get('name');
                    $name = $icon[0]->name;
                    $value->icon = "https://ui-avatars.com/api/?name=$name&color=7F9CF5&background=EBF4FF";

                }else{
                    $value->icon = "/storage/$icon";

                }

            }





//            $receive = DB::table('receives')->where('project_id', $value->id)->where('user_id', $id)->get('isCopy');
//            if (array_key_exists(0, json_decode($receive))) {
//                $value->IsReceive = $receive[0]->isCopy;
//            } else {
//            }

        }
        $data = $this->ReseveProject();
       return response()->json(['projects'=>$project,'receives'=>$data]);
    }


    public function ReseveProject()
    {
        $id = Auth::id();
        $data = DB::table('projects')
            ->join('receives', 'projects.id', '=', 'receives.project_id')->where('projects.user_id', $id )
            ->select('projects.*', 'receives.id', 'receives.project_id','receives.isCopy')
            ->get();

        foreach ($data as $value) {
            $icon = DB::table('users')->where('id', $value->user_id)->get('name');
            $name = $icon[0]->name;

            $isCopyFlaf = DB::table('receives')->where('id', $value->id)->get('isCopy');
            unset($value->path);
            if (array_key_exists(0, json_decode($isCopyFlaf))) {
                if($isCopyFlaf[0]->isCopy == 1){
                    $value->isCopy = true;

                }else{
                    $value->isCopy = false;

                }
            }




            $value->icon = "https://ui-avatars.com/api/?name=$name&color=7F9CF5&background=EBF4FF";

            $object = DB::table('favorites')->where('id_file', $value->project_id)->where('user_id', $id)->exists();
            $value->Isfavorite = $object;
        }
        return $data;
    }

    public function DeleteProject($id){

        $student = Project::find($id);
        if($student)
        {
            $student->delete();
            return response()->json(true);
        }
        else
        {
            return response()->json(false);
        }

    }

    public function RenameProject($id,$rename){

        $student = Project::find($id);
        if($student)
        {
            $student->name = $rename;
            $student->update();
            return response()->json( $student->name );
        }
        else
        {
            return response()->json( $student->name);
        }

    }

    public function EditDecProject($id,$dec){

        $student = Project::find($id);
        if($student)
        {
            $student->dec = $dec;
            $student->update();
            return response()->json([
                'status'=>200,
                'message'=>'Updated Successfully.'
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



    function getDecProject(Request $request){
        $project = Project::find($request->input('id'));
        if($project) {
            return response()->json($project->dec);
        }
        else
        {
            return response()->json(false);
        }
    }



    function getFriends(Request $request)
    {

        $friends = DB::table('friends')->where('user_id', $request->input('id_user'))->get();
            return response()->json($friends);

    }






    public function store1(Request $request)
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


            $student = new Project();
            $student->name = $request->input('name');
            $student->user_id = Auth::id();

            $student->save();
            return response()->json([
                'status'=>200,
                'message'=>'Added Successfully.'
            ]);
        }

    }

    public function edit1($id)
    {
        $student = Project::find($id);
        if($student)
        {
            return response()->json([
                'status'=>200,
                'student'=> $student,
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

    public function update1(Request $request, $id)
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
            $student = Project::find($id);
            if($student)
            {
                $student->name = $request->input('name');
                $student->update();
                return response()->json([
                    'status'=>200,
                    'message'=>'Updated Successfully.'
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
    }

    public function destroy1($id)
    {
        $student = Project::find($id);
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
     * @return RedirectResponse
     */
    public function store($type): RedirectResponse
    {


        $id = Auth::id();


        if (Auth::user()) {

              $pr =DB::table('projects')->insertGetId([
                    'user_id' => $id,
                    'name' => 'nonTitle',
                    'type' => $type,
                    'right_to' => $id,

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
        }


//        $book = new Project();
//        $book->user_id = $request->user_id;
//        $book->name = $request->name;
//        $book->path = $request->path;
//        $book->save();
//        return response()->json($book);


    }

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


        /*
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
*/

        $userData = Project::find($id);
        $userData->name = request('name');
        $userData->save();

    /*    $book = new Project();
        $book->user_id = $request->user_id;
       $name = $request->name;
        $book->path = $request->path;

        DB::table('projects')->where('id', 87)->update('gggg');
*/

        return response()->json($userData);

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

    public function updateData(UpdateProjectRequest $request, Project $project,$id): \Illuminate\Http\JsonResponse
    {

        $userData = Project::find($id);
        $userData->name = request('name');
        $userData->save();
        return response()->json($userData);

    }


    public function page($id){

    }

}
