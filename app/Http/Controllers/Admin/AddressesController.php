<?php

namespace App\Http\Controllers\Admin;

use App\Address;
use App\Member;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class AddressesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return view(
            'admin.addresses.index',
            [
                'addresses' => Address::orderBy('id', 'desc')->paginate(10)
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
            'admin.addresses.create',
            [
                'address' => []
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
            'address'   => 'required'
        ]);

        Address::add($request->all());
        return redirect()->route('addresses.index');
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
     * @param Address $address
     * @return void
     */
    public function edit(Address $address)
    {
        return view('admin.addresses.edit', [
            'address'   => $address
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Address $address
     * @return Response
     * @throws ValidationException
     */
    public function update(Request $request, Address $address)
    {
        $this->validate($request, [
            'address' => 'required'
        ]);

        $address->update($request->all());
        return redirect()->route('addresses.index');
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
        return redirect()->route('addresses.index');
    }
}
