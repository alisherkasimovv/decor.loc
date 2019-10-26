<?php

namespace App\Http\Controllers;

use App\Address;
use App\Banner;
use App\Category;
use App\Comment;
use App\Credential;
use App\Member;

class HomeController extends Controller
{
    public function index()
    {
        return view(
            'front.index',
            [
                'credential' => Credential::where('id', 1)->firstOrFail(),
                'categories' => Category::where('parent_id', 0)->orderBy('id', 'desc')->paginate(4),
                'comments'   => Comment::orderBy('id', 'desc')->get(),
                'address'    => Address::where('main_office', 1)->firstOrFail(),
                'banners'    => Banner::where('type', 0)->orderBy('id', 'desc')->get()
            ]
        );
    }

    public function aboutUs()
    {
        return view(
            'front.about',
            [
                'credential' => Credential::where('id', 1)->firstOrFail(),
                'members'    => Member::orderBy('id', 'desc')->get(),
                'address'    => Address::where('main_office', 1)->firstOrFail(),
                'banners'    => Banner::where('type', 0)->orderBy('id', 'desc')->get(),
                'mini'       => Banner::where('type', 1)->orderBy('id', 'desc')->paginate(5)
            ]
        );
    }

    public function contacts()
    {
        return view(
            'front.contacts',
            [
                'credential' => Credential::where('id', 1)->firstOrFail(),
                'addresses'  => Address::orderBy('id', 'desc')->get(),
                'address'    => Address::where('main_office', 1)->firstOrFail(),
                'branches'   => Address::where('main_office', 0)->get(),
                'banners'    => Banner::where('type', 0)->orderBy('id', 'desc')->get()
            ]
        );
    }

    public function categories()
    {
        return view(
            'front.categories',
            [
                'credential' => Credential::where('id', 1)->firstOrFail(),
                'categories' => Category::where('parent_id', 0)->orderBy('id', 'desc')->get(),
                'address'    => Address::where('main_office', 1)->firstOrFail(),
                'banners'    => Banner::where('type', 0)->orderBy('id', 'desc')->get()
            ]
        );
    }

    public function category($slug)
    {
        return view(
            'front.category',
            [
                'credential' => Credential::where('id', 1)->firstOrFail(),
                'address'    => Address::where('main_office', 1)->firstOrFail(),
                'category'   => Category::where('slug', $slug)->firstOrFail(),
                'banners'    => Banner::where('type', 0)->orderBy('id', 'desc')->get()
            ]
        );
    }
}
