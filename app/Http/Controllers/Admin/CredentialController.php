<?php

namespace App\Http\Controllers\Admin;

use App\Credential;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class CredentialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return view(
            'admin.credentials.index',
            [
                'credentials'   => Credential::firstOrFail(1),
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Credential $credential
     * @return Response
     */
    public function edit(Credential $credential)
    {
        return view(
            'admin.credentials.edit',
            [
                'credentials'   => $credential
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Credential $credential
     * @return Response
     * @throws ValidationException
     */
    public function update(Request $request, Credential $credential)
    {
        $this->validate($request, [
            'name'   => 'required',
            'logo'   => 'required|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $credential->edit($request->all());
        return redirect()->route('credentials.index');
    }
}
