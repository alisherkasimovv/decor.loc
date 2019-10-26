<?php

namespace App\Http\Controllers\Admin;

use App\Banner;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class BannersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return view(
            'admin.banners.index',
            [
                'banners' => Banner::orderBy('id', 'desc')->paginate(10)
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('admin.banners.create', [
            'banner'   => []
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     * @throws ValidationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name'   => 'required',
            'image'  => 'required|mimes:jpeg,png,jpg,gif,svg'
        ]);

        if (!$request->has('image'))
            $request->request->add(['image' => null]);

        Banner::add($request->all());
        return redirect()->route('banners.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Banner $banner
     * @return Response
     */
    public function edit(Banner $banner)
    {
        return view('admin.banners.edit', [
            'banner'   => $banner
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Banner $banner
     * @return Response
     * @throws ValidationException
     */
    public function update(Request $request, Banner $banner)
    {
        $this->validate($request, [
            'name'   => 'required',
            'image'  => 'required|mimes:jpeg,png,jpg,gif,svg'
        ]);

        if (!$request->has('image'))
            $request->request->add(['image' => null]);
        if (!$request->has('old'))
            $request->request->add(['old' => null]);

        $banner->edit($request->all());
        return redirect()->route('banners.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        Banner::find($id)->remove();
        return redirect()->route('banners.index');
    }
}
