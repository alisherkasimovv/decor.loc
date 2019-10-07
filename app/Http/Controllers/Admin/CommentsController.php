<?php

namespace App\Http\Controllers\Admin;

use App\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return view(
            'admin.comments.index',
            [
                'comments' => Comment::orderBy('id', 'desc')->paginate(10)
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
            'admin.comments.create',
            [
                'comment' => []
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
            'client'   => 'required',
            'text'     => 'required'
        ]);

        Comment::add($request->all());
        return redirect()->route('comments.index');
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
     * @param Comment $comment
     * @return Response
     */
    public function edit(Comment $comment)
    {
        return view('admin.comments.edit', [
            'comment'   => $comment
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Comment $comment
     * @return Response
     * @throws ValidationException
     */
    public function update(Request $request, Comment $comment)
    {
        $this->validate($request, [
            'client' => 'required',
            'text'   => 'required'
        ]);

        $comment->update($request->all());
        return redirect()->route('comments.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        Comment::find($id)->remove();
        return redirect()->route('comments.index');
    }
}
