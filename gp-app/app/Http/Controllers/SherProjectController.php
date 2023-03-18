<?php

namespace App\Http\Controllers;

use App\Models\SherProject;
use App\Http\Requests\StoreSherProjectRequest;
use App\Http\Requests\UpdateSherProjectRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SherProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function indexWritinerCommunity()
    {
        $data = $this->getCommuitny();
        $fav = false;
        return view('landpage.Writiner_community', compact('data','fav'));
    }



    //Search Project With fuller

    /* Search Project */
    public static function SearchCommunity(Request $request): \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
    {
        $commuinty = DB::table('projects')
            ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
            ->where('projects.name','LIKE',"{$request->input('serach')}%")->get();
        foreach ($commuinty as $value){

            $type = DB::table('sher_projects')->where('project_id', $value->project_id)->where('owner_id',$value->owner_id)->select('isCopy','id')->get();
            $name_project = DB::table('projects')->where('id',$value->project_id)->get();
            if (array_key_exists(0, json_decode($name_project))) {
                $value->name = $name_project[0]->name;
            }
            if (array_key_exists(0, json_decode($type))) {
                if( $type[0]->isCopy  == 1){
                    $value->isCopy = true;
                }else{
                    $value->isCopy = false;
                }
            }
            $value->isLike = DB::table('likes')->where('project_id_sher_project',$type[0]->id)->where('user_id',Auth::id())->exists();

            //            $value->isLike = DB::table('likes')->where('id',7)->where('user_id',Auth::id())->exists();
            $value->type = $name_project[0]->type;
            $value->created_at = $name_project[0]->created_at;
            $value->dec = $name_project[0]->dec;
            $value->likes = (new static)->getLikes($type[0]->id);
            unset($value->updated_at);
        }
        $data = $commuinty;
        $fav = false;

        return view('landpage.Writiner_community', compact('data','fav'));
    }


    public function Fullter($type,$sort,$fav)
    {
//        if ($type == 'null' && $sort == 'null' && $fav == 'null') {
//            return $this->getCommuitny();
//        } else if ($type && $sort == 'null' && $fav == 'null') {
//            return $this->GetTypeCommunity($type);
//        } else if ($type == 'null' && $sort && $fav == 'null') {
//
//            if ($sort == 'alphabetical') {
//                return DB::table('projects')
//                    ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
//                    ->orderBy('name')->get();
//            } else if ($sort == 'lastView') {
//                return DB::table('projects')
//                    ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
//                    ->orderBy('sher_projects.updated_at','desc')->get();
//
//            } else if ($sort == 'created_at') {
//                return DB::table('projects')
//                    ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
//                    ->orderBy('sher_projects.created_at','lastView')->get();
//            }
//
//        } else if ($type == 'null' && $sort == 'null' && $fav) {
//            return 'not yet';
//
//        } else if ($type  && $sort && $fav== 'null') {
//            return $this->GetTypeCommunityWithSort($type);
//
//        }

    }


    public function FullterPost(Request $request){


        if($request->input('fillter') == 'null'){
            $commuinty = DB::table('projects')
                ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
                ->get();
        }else{
            $commuinty = DB::table('projects')
                ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
                ->orWhere('projects.type',$request->input('fillter'))->get();
        }

        foreach ($commuinty as $value){

            $type = DB::table('sher_projects')->where('project_id', $value->project_id)->where('owner_id',$value->owner_id)->select('isCopy','id')->get();
            $name_project = DB::table('projects')->where('id',$value->project_id)->get();
            if (array_key_exists(0, json_decode($name_project))) {
                $value->name = $name_project[0]->name;
            }
            if (array_key_exists(0, json_decode($type))) {
                if( $type[0]->isCopy  == 1){
                    $value->isCopy = true;
                }else{
                    $value->isCopy = false;
                }
            }
            $value->isLike = DB::table('likes')->where('project_id_sher_project',$type[0]->id)->where('user_id',Auth::id())->exists();

            //            $value->isLike = DB::table('likes')->where('id',7)->where('user_id',Auth::id())->exists();
            $value->type = $name_project[0]->type;
            $value->created_at = $name_project[0]->created_at;
            $value->dec = $name_project[0]->dec;
            $value->likes = (new static)->getLikes($type[0]->id);
            unset($value->updated_at);
        }
        $data=$commuinty;
        $fav = false;

        return view('landpage.Writiner_community', compact('data','fav'));

    }


    public function SortPost(Request $request){

        if($request->input('sort') == 'null'){
            $data= DB::table('projects')
                ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
                ->get();
        }else if($request->input('sort')=='last_view'){
            $data=    DB::table('projects')
                    ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
                    ->orderBy('sher_projects.updated_at','desc')->get();

        }else if($request->input('sort')=='alphabetical'){
            $data= DB::table('projects')
                    ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
                    ->orderBy('name',)->get();

        }else if($request->input('sort')=='created'){
            $data= DB::table('projects')
                    ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
                    ->orderBy('sher_projects.created_at','desc')->get();
        }

        foreach ($data as $value){

            $type = DB::table('sher_projects')->where('project_id', $value->project_id)->where('owner_id',$value->owner_id)->select('isCopy','id')->get();
            $name_project = DB::table('projects')->where('id',$value->project_id)->get();
            if (array_key_exists(0, json_decode($name_project))) {
                $value->name = $name_project[0]->name;
            }
            if (array_key_exists(0, json_decode($type))) {
                if( $type[0]->isCopy  == 1){
                    $value->isCopy = true;
                }else{
                    $value->isCopy = false;
                }
            }
            $value->isLike = DB::table('likes')->where('project_id_sher_project',$type[0]->id)->where('user_id',Auth::id())->exists();

            //            $value->isLike = DB::table('likes')->where('id',7)->where('user_id',Auth::id())->exists();
            $value->type = $name_project[0]->type;
            $value->created_at = $name_project[0]->created_at;
            $value->dec = $name_project[0]->dec;
            $value->likes = (new static)->getLikes($type[0]->id);
            unset($value->updated_at);
        }
        $fav = false;

        return view('landpage.Writiner_community', compact('data','fav'));
    }

    public function FavPost(){

        $data = DB::table('likes')
            ->join('sher_projects', 'likes.project_id_sher_project', '=', 'sher_projects.id')
            ->where('likes.user_id',Auth::id())->get();

        foreach ($data as $value){

            $type = DB::table('sher_projects')->where('project_id', $value->project_id)->where('owner_id',$value->owner_id)->select('isCopy','id')->get();
            $name_project = DB::table('projects')->where('id',$value->project_id)->get();
            if (array_key_exists(0, json_decode($name_project))) {
                $value->name = $name_project[0]->name;
            }
            if (array_key_exists(0, json_decode($type))) {
                if( $type[0]->isCopy  == 1){
                    $value->isCopy = true;
                }else{
                    $value->isCopy = false;
                }
            }
            $value->isLike = DB::table('likes')->where('project_id_sher_project',$type[0]->id)->where('user_id',Auth::id())->exists();

            //            $value->isLike = DB::table('likes')->where('id',7)->where('user_id',Auth::id())->exists();
            $value->type = $name_project[0]->type;
            $value->created_at = $name_project[0]->created_at;
            $value->dec = $name_project[0]->dec;
            $value->likes = (new static)->getLikes($type[0]->id);
            unset($value->updated_at);
        }

        $fav = true;
        return view('landpage.Writiner_community', compact('data','fav'));


    }



    public function GetTypeCommunity($value): \Illuminate\Support\Collection
    {

        $commuinty = DB::table('projects')
            ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
            ->where('projects.type',$value)->get();
        foreach ($commuinty as $value){

            $type = DB::table('sher_projects')->where('project_id', $value->project_id)->where('owner_id',$value->owner_id)->select('isCopy','id')->get();
            $name_project = DB::table('projects')->where('id',$value->project_id)->get();
            if (array_key_exists(0, json_decode($name_project))) {
                $value->name = $name_project[0]->name;
            }
            if (array_key_exists(0, json_decode($type))) {
                if( $type[0]->isCopy  == 1){
                    $value->isCopy = true;
                }else{
                    $value->isCopy = false;
                }
            }
            $value->isLike = DB::table('likes')->where('project_id_sher_project',$type[0]->id)->where('user_id',Auth::id())->exists();

            //            $value->isLike = DB::table('likes')->where('id',7)->where('user_id',Auth::id())->exists();
            $value->type = $name_project[0]->type;
            $value->created_at = $name_project[0]->created_at;
            $value->dec = $name_project[0]->dec;
            $value->likes = (new static)->getLikes($type[0]->id);
            unset($value->updated_at);
        }
        return $commuinty;
    }

















    public function GetTypeCommunityWithSort($value): \Illuminate\Support\Collection
    {

        $commuinty = DB::table('projects')
            ->join('sher_projects', 'projects.id', '=', 'sher_projects.project_id')
            ->where('projects.type',$value)->orderBy('sher_projects.created_at','desc')->get();
        foreach ($commuinty as $value){

            $type = DB::table('sher_projects')->where('project_id', $value->project_id)->where('owner_id',$value->owner_id)->select('isCopy','id')->get();
            $name_project = DB::table('projects')->where('id',$value->project_id)->get();
            if (array_key_exists(0, json_decode($name_project))) {
                $value->name = $name_project[0]->name;
            }
            if (array_key_exists(0, json_decode($type))) {
                if( $type[0]->isCopy  == 1){
                    $value->isCopy = true;
                }else{
                    $value->isCopy = false;
                }
            }
            $value->isLike = DB::table('likes')->where('project_id_sher_project',$type[0]->id)->where('user_id',Auth::id())->exists();

            //            $value->isLike = DB::table('likes')->where('id',7)->where('user_id',Auth::id())->exists();
            $value->type = $name_project[0]->type;
            $value->created_at = $name_project[0]->created_at;
            $value->dec = $name_project[0]->dec;
            $value->likes = (new static)->getLikes($type[0]->id);
            unset($value->updated_at);
        }
        return $commuinty;
    }



    public static function getCommuitny(){
        // we need to know name project and id and type and created_at and dec and likes
        $commuinty = SherProject::all();
        foreach ($commuinty as $value){

            $type = DB::table('sher_projects')->where('project_id', $value->project_id)->where('owner_id',$value->owner_id)->select('isCopy','id')->get();
            $name_project = DB::table('projects')->where('id',$value->project_id)->get();
            if (array_key_exists(0, json_decode($name_project))) {
                $value->name = $name_project[0]->name;
            }
            if (array_key_exists(0, json_decode($type))) {
                if( $type[0]->isCopy  == 1){
                    $value->isCopy = true;
                }else{
                    $value->isCopy = false;
                }
            }
            $value->isLike = DB::table('likes')->where('project_id_sher_project',$type[0]->id)->where('user_id',Auth::id())->exists();

            //            $value->isLike = DB::table('likes')->where('id',7)->where('user_id',Auth::id())->exists();
            $value->type = $name_project[0]->type;
            $value->created_at = $name_project[0]->created_at;
            $value->dec = $name_project[0]->dec;
            $value->likes = (new static)->getLikes($type[0]->id);
            unset($value->updated_at);

        }
        return $commuinty;
    }

    public function getLikes($id_project)
    {
        $following = DB::table('likes')->where('project_id_sher_project', $id_project)->count();
        return $following;

    }

}
