<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'city',
        'address',
        'phone',
        'email',
        'main_office'
    ];

    public static function add($fields)
    {
        $address = new static();

        $address->city = $fields['city'];
        $address->address = $fields['address'];
        $address->phone = $fields['phone'];
        $address->email = $fields['email'];
//        $address->main_office = $address->setMainOffice($fields['main']);
        $address->save();
    }

    public function edit($fields)
    {
        $this->city = $fields['city'];
        $this->address = $fields['address'];
        $this->phone = $fields['phone'];
        $this->email = $fields['email'];
//        $this->main_office = $this->setMainOffice($fields['main']);
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

    private function setMainOffice($field)
    {
        if ($field == 1)
            return true;
        return false;
    }
}
