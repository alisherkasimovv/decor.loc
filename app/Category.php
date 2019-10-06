<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'description',
        'parent_id'
    ];

    /*
     * Relations
     */

    public function children() {
        return $this->hasMany(self::class, 'parent_id');
    }

    public function images() {
        return $this->morphMany(Image::class, 'image');
    }

    /*
     * CRUD
     */
    public static function add($fields) {
        $category = new static();

        $category->name = $fields['name'];
        $category->description = $fields['description'];
        $category->parent_id = $fields['parent_id'];
        $category->save();

        if ($fields['images'] != null) {
            foreach ($fields['images'] as $item) {
                $image = new Image();
                $image->uploadImage($item, 'categories');
                $category->images()->save($image);
            }
        }
    }

    public function edit($fields) {
        $this->name = $fields['name'];
        $this->description = $fields['description'];
        $this->parent_id = $fields['parent_id'];
        $this->save();

        $image = new Image();
        if ($fields['oldImages'] != null) {
            foreach ($fields['oldImages'] as $item) {
                $image->removeImage($item);
                $this->images()->delete();
            }
        }

        if ($fields['images'] != null) {
            foreach ($fields['images'] as $item) {
                $image->uploadImage($item, 'categories');
                $this->images()->save($image);
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
