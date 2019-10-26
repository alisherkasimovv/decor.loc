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
        'telegram',
        'finished',
        'happy',
        'hours',
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
        $credential->facebook = $fields['facebook'];
        $credential->instagram = $fields['instagram'];
        $credential->telegram = $fields['telegram'];
        $credential->finished = $fields['finished'];
        $credential->happy = $fields['happy'];
        $credential->hours = $fields['hours'];
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
        $this->facebook = $fields['facebook'];
        $this->instagram = $fields['instagram'];
        $this->telegram = $fields['telegram'];
        $this->finished = $fields['finished'];
        $this->happy = $fields['happy'];
        $this->hours = $fields['hours'];
        $this->save();

        $image = new Image();

        if ($fields['logo'] != null)
        {
            try {
                $image->removeImage($fields['oldLogo']);
                $this->images()->delete();
                
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
