<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Credential extends Model
{
    protected $fillable = [
        'name',
        'brief',
        'info',
        'email',
        'phone',
        'facebook',
        'instagram',
        'telegram'
    ];

    /*
     * Relations
     */
    public function images()
    {
        return $this->morphMany(Image::class, 'image');
    }

    public static function add($fields)
    {
        $credential = new static();

        $credential->name = $fields['name'];
        $credential->brief = $fields['brief'];
        $credential->info = $fields['info'];
        $credential->email = $fields['email'];
        $credential->phone = $fields['phone'];
        $credential->facebook = $fields['facebook'];
        $credential->instagram = $fields['instagram'];
        $credential->telegram = $fields['telegram'];
        $credential->save();

        if ($fields['logo'] != null)
        {
            $image = new Image();
            try {
                $image->uploadImage($fields['logo'], 'products');
            } catch (\Exception $e) {
                echo $e;
            }

            $credential->images()->save($image);
        }
    }

    public function edit($fields)
    {
        $this->name = $fields['name'];
        $this->brief = $fields['brief'];
        $this->info = $fields['info'];
        $this->email = $fields['email'];
        $this->phone = $fields['phone'];
        $this->facebook = $fields['facebook'];
        $this->instagram = $fields['instagram'];
        $this->telegram = $fields['telegram'];
        $this->save();

        $image = new Image();
        if ($fields['oldLogo'] != null)
        {
            $image->removeImage($fields['oldLogo']);
            $this->images()->delete();
        }

        if ($fields['logo'] != null)
        {
            try {
                $image->uploadImage($fields['logo'], 'credentials');
            } catch (\Exception $e) {
                echo $e;
            }

            $this->images()->save($image);
        }
    }

    public function remove()
    {
        try {
            $this->images()->delete();
            $this->delete();
        } catch (\Exception $e) {
            echo $e;
        }
    }
}
