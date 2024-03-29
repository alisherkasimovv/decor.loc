<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use Sluggable;

    protected $fillable = [
        'name',
        'description',
        'parent_id',
        'slug'
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
                try {
                    $image = new Image();
                    $image->uploadImage($item, 'categories');
                    $category->images()->save($image);
                } catch (\Exception $e) {
                }
            }
        }
    }

    public function edit($fields) {
        $this->name = $fields['name'];
        $this->description = $fields['description'];
        $this->parent_id = $fields['parent_id'];
        $this->save();

        if ($fields['images'] != null) {

            foreach ($fields['images'] as $item) {
                try {
                    $image = new Image();
                    $image->uploadImage($item, 'categories');
                    $this->images()->save($image);
                } catch (\Exception $e) {
                }
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
    
    public function deleteImage($id)
    {
        $image = new Image();
        $item = \DB::table('images')->where('id', $id)->first();
        $image->removeImage($item->url);
        \DB::table('images')->where('id', $id)->delete();
    }

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
