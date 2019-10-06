<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = [
        'name',
        'info',
        'phone',
        'facebook',
        'instagram',
        'telegram'
    ];

    public function images()
    {
        return $this->morphMany(Image::class, 'image');
    }

    public static function add($fields)
    {
        $member = new static();

        $member->name = $fields['name'];
        $member->info = $fields['info'];
        $member->phone = $fields['phone'];
        $member->facebook = $fields['facebook'];
        $member->instagram = $fields['instagram'];
        $member->telegram = $fields['telegram'];
        $member->save();

        if ($fields['image'] != null)
        {
            $image = new Image();
            $image->uploadImage($fields['image'], 'members');
            $member->images()->save($image);
        }
    }

    public function edit($fields)
    {
        $this->name = $fields['name'];
        $this->info = $fields['info'];
        $this->phone = $fields['phone'];
        $this->facebook = $fields['facebook'];
        $this->instagram = $fields['instagram'];
        $this->telegram = $fields['telegram'];
        $this->save();

        $image = new Image();
        if ($fields['oldImage'] != null)
        {
            $image->removeImage($fields['oldImage']);
            $this->images()->delete();
        }

        if ($fields['image'] != null)
        {
            $image->uploadImage($fields['image'], 'members');
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
