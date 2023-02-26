<?php

namespace App\Http\Controllers;
use Intervention\Image\ImageManager;

use App\Models\Files;
use App\Http\Requests\StoreFilesRequest;
use App\Http\Requests\UpdateFilesRequest;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class FilesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('landpage.upload');
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
     * @param  \App\Http\Requests\StoreFilesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFilesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Files  $files
     * @return \Illuminate\Http\Response
     */
    public function show(Files $files)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Files  $files
     * @return \Illuminate\Http\Response
     */
    public function edit(Files $files)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFilesRequest  $request
     * @param  \App\Models\Files  $files
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFilesRequest $request, Files $files)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Files  $files
     * @return \Illuminate\Http\Response
     */
    public function destroy(Files $files)
    {
        //
    }



    public function upload(Request $request)
    {
        $filename = time() . '.' . $request->image->extension();

        $request->image->move(storage_path('app/users/'.Auth::id().'/images'), $filename);

        // save uploaded image filename here to your database
        $image = new Image();
        $image->path = 'app/users/'.Auth::id().'/images'.$filename;
        $image->user_id= Auth::id();
        $image->save();


        return response()->json([
            'message' => 'Image uploaded successfully.',
            'image' =>    ''
        ], 200);
    }


    public function uploadFileImg(Request $request){

        $data = array();

        $validator = Validator::make($request->all(), [
            'file' => 'required|mimes:png,jpg,jpeg|max:2048'
        ]);

        if ($validator->fails()) {

            $data['success'] = 0;
            $data['error'] = $validator->errors()->first('file');// Error response

        }else{
            if($request->file('file')) {

                $file = $request->file('file');
                $filename = $file->getClientOriginalName();

                // File extension
                $extension = $file->getClientOriginalExtension();

                // File upload location
                $location = 'files';

                // Upload file
                $file->move($location,$filename);

                // File path
                $filepath = url('files/'.$filename);

                // Response
                $imgae = new Image();
                $imgae->path = $filepath;
                $imgae->user_id = Auth::id();
                $imgae->save();

                $data['success'] = 1;
                $data['message'] = 'Uploaded Successfully!';
                $data['filepath'] = $filepath;
                $data['extension'] = $extension;
            }else{
                // Response
                $data['success'] = 2;
                $data['message'] = 'File not uploaded.';
            }
        }

        return response()->json($data);
    }


    public function uploadFilePDF(Request $request){

        $data = array();

        $validator = Validator::make($request->all(), [
            'file' => 'required|mimes:pdf'
        ]);

        if ($validator->fails()) {

            $data['success'] = 0;
            $data['error'] = $validator->errors()->first('file');// Error response

        }else{
            if($request->file('file')) {

                $file = $request->file('file');

                // resize image to fixed size
                $fileNew =Image::make($file)->resize(10, 10);
                $filename = time().'_'.$fileNew->getClientOriginalName();

                // File extension
                $extension = $fileNew->getClientOriginalExtension();
                // File upload location
                $location = 'files';

                // Upload file
                $fileNew->move($location,$filename);


                // File path
                $filepath = url('files/'.$filename);

                $image = $request->file('file');
                $filenames = time().'.'.$image->getClientOriginalExtension();

                $destinationPath =url('files/'.$filename);

                $img = Image::make($image->getRealPath());
                $img->resize(300, 300, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $img->save($destinationPath.'/'.$filenames);

                // Response
                $data['success'] = 1;
                $data['message'] = 'Uploaded Successfully!';
                $data['filepath'] = $filepath;
                $data['extension'] = $extension;
            }else{
                // Response
                $data['success'] = 2;
                $data['message'] = 'File not uploaded.';
            }
        }

        return response()->json($data);
    }




}
