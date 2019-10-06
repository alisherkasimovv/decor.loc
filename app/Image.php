<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    protected $fillable = [
        'url',
        'image_id',
        'image_type'
    ];

    public function images() {
        return $this->morphTo();
    }

    public function uploadImage($image, $folder) {
        if ($image == null) return NULL;

        $this->removeImage($image);
        $filename = $this->generateRandomStringName() . '.' . $image->extension();
        $this->url = $image->storeAs('uploads/' . $folder, $filename);
    }

    public function removeImage($image) {
        if ($image != null) Storage::delete($image);
    }

    private function generateRandomStringName() {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $str = '';
        for ($i = 0; $i < 15; $i++) {
            $str .= $characters[rand(0, strlen($characters))];
        }
        return $str;
    }
}
