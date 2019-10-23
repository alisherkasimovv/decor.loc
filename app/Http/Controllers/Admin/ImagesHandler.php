<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ImagesHandler extends Controller
{
    public function removeImage($cat, $image)
    {
//        dd("Whoa");
        $category = Category::where('id', $cat)->first();
        $category->deleteImage($image);
        return redirect()->route('categories.index');
    }
}
