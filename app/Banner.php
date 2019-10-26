<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $fillable = [
        'name'
    ];

    /*
     * Relations
     */
    public function images() {
        return $this->morphMany(Image::class, 'image');
    }

    /*
     * CRUD
     */
    public static function add($fields) {
        $banner = new static();

        $banner->name = $fields['name'];
        $banner->save();

        $image = new Image();
        if ($fields['image'] != null) {
            try {
                $image->uploadImage($fields['image'], 'banners');
                $banner->images()->save($image);
            } catch (\Exception $e) {
            }
        }
    }

    public function edit($fields) {
        $this->name = $fields['name'];
        $this->save();

        if ($fields['image'] != null) {
            $image = new Image();
            try {
                $image->removeImage($fields['old']);
                $this->images()->delete();
                $image->uploadImage($fields['image'], 'banners');
                $this->images()->save($image);
            } catch (\Exception $e) {
            }
        }
    }

    public function remove() {
        try {
            $this->images()->delete();
            $this->delete();
        } catch (\Exception $e) {
            echo $e;
        }
    }
}
