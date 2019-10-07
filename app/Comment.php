<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'client',
        'text',
        'published'
    ];

    public static function add($fields)
    {
        $comment = new static();

        $comment->client = $fields['client'];
        $comment->text = $fields['text'];
        $comment->published = $fields['published'];
        $comment->save();
    }

    public function edit($fields)
    {
        $this->client = $fields['client'];
        $this->text = $fields['text'];
        $this->published = $fields['published'];
        $this->save();
    }

    public function remove()
    {
        try {
            $this->delete();
        } catch (\Exception $e) {
            echo $e;
        }
    }
}
