<?php

namespace App\Http\Controllers\Admin;

use App\Member;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class MembersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return view(
            'admin.members.index',
            [
                'members' => Member::orderBy('id', 'desc')->paginate(10)
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
        return view(
            'admin.members.create',
            [
                'member' => []
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name'   => 'required'
        ]);

        if (!$request->has('image'))
            $request->request->add(['image' => null]);

        Member::add($request->all());
        return redirect()->route('members.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Member $member
     * @return Response
     */
    public function edit(Member $member)
    {
        return view('admin.members.edit', [
            'member'   => $member
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Member $member
     * @return Response
     * @throws ValidationException
     */
    public function update(Request $request, Member $member)
    {
        $this->validate($request, [
            'name' => 'required'
        ]);

        if (!$request->has('image'))
            $request->request->add(['image' => null]);

        $member->update($request->all());
        return redirect()->route('members.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        Member::find($id)->remove();
        return redirect()->route('members.index');
    }
}
